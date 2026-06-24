/**
 * multiplayer.js — Supabase Realtime multiplayer engine for MedMaster.
 *
 * Architecture
 * ────────────
 *   Host browser  ──write──▶  Supabase (rooms table)  ◀──read──  Guest browsers
 *
 * Every game-state mutation flows through one path:
 *   1.  Host modifies App.mp locally.
 *   2.  Host calls mp_pushState() → writes room_state to Supabase.
 *   3.  Supabase broadcasts a Realtime UPDATE event to all subscribers.
 *   4.  Every client (including the host) receives the event and calls
 *       mp_applyState(), which writes the authoritative state back into
 *       App.mp and re-renders.
 *
 * Guests never write to the database directly.  They POST their answer to
 * the host by calling mp_submitAnswer(), which updates room_state via a
 * guest-safe helper that merges only the guest's answer into the existing
 * state (using a Postgres jsonb update instead of a full overwrite).
 *
 * Room state shape (room_state JSON stored in Supabase):
 * {
 *   phase:           'LOBBY' | 'QUESTION' | 'REVEAL' | 'REVIEW',
 *   players:         [ { id, name, score, currentAnswer, answerTimeScore,
 *                        correctCount, wrongCount, skippedCount, accuracy } ],
 *   questions:       [...],     // full question objects (host-set, immutable)
 *   currentIndex:    number,
 *   questionDuration: number,
 *   questionStartTime: number,  // ms epoch
 *   groupAccuracy:   number,
 *   lastCorrectCount: number,
 *   answerLog:       [...],
 *   hostId:          string,    // opaque client id chosen on room creation
 * }
 */

// ─── Constants ─────────────────────────────────────────────────────────────

const MP_PHASES = Object.freeze({
  CONNECTING: 'CONNECTING',
  LOBBY:      'LOBBY',
  QUESTION:   'QUESTION',
  REVEAL:     'REVEAL',
  REVIEW:     'REVIEW',
});

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Generate a random 4-letter uppercase room code. */
function mp_generateCode() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

/**
 * Generate a random opaque client id (used as player.id).
 * Not a UUID — just needs to be locally unique within a session.
 */
function mp_generateClientId() {
  return Math.random().toString(36).substring(2, 12);
}

// ─── State push / apply ────────────────────────────────────────────────────

/**
 * Write the current App.mp state to Supabase as the authoritative room_state.
 * Only the host should call this.  Fire-and-forget; errors are logged.
 */
async function mp_pushState() {
  const m = App.mp;
  if (!m.isHost || !m.roomCode) return;

  const roomState = {
    phase:            m.state,
    players:          m.players,
    questions:        m.questions,
    currentIndex:     m.currentIndex,
    questionDuration: m.questionDuration,
    questionStartTime: m.questionStartTime,
    groupAccuracy:    m.groupAccuracy   ?? 0,
    lastCorrectCount: m.lastCorrectCount ?? 0,
    answerLog:        m.answerLog,
    hostId:           m.myId,
  };

  try {
    await dbUpdateRoomState(m.roomCode, roomState);
  } catch (err) {
    console.error('[MP] pushState failed:', err);
  }
}

/**
 * Apply an incoming room_state (from Supabase Realtime) into App.mp and
 * re-render.  Called by both host and guests on every DB update event.
 */
function mp_applyState(roomState) {
  const m = App.mp;
  if (!m.inRoom) return;   // navigated away — ignore stray events

  const prevPhase = m.state;

  m.state           = roomState.phase;
  m.players         = roomState.players         ?? [];
  m.questions       = roomState.questions       ?? [];
  m.currentIndex    = roomState.currentIndex    ?? 0;
  m.questionDuration = roomState.questionDuration ?? 20;
  m.questionStartTime = roomState.questionStartTime ?? 0;
  m.groupAccuracy   = roomState.groupAccuracy   ?? 0;
  m.lastCorrectCount = roomState.lastCorrectCount ?? 0;

  // Merge answerLog: prefer the locally-built log (more personalised);
  // adopt the host's log only as a fallback (e.g. after reconnect).
  if (m.answerLog.length === 0 && roomState.answerLog?.length > 0) {
    m.answerLog = roomState.answerLog;
  }

  // If the phase just changed to QUESTION, start the local countdown timer.
  if (m.state === MP_PHASES.QUESTION && prevPhase !== MP_PHASES.QUESTION) {
    mp_startLocalTimer();
  }

  // If phase changed to REVEAL, record this question in the personal log
  // (guests build their own log so they can tag their own answer).
  if (m.state === MP_PHASES.REVEAL && prevPhase !== MP_PHASES.REVEAL) {
    mp_recordPersonalLogEntry(roomState);
  }

  // Stop the timer when we leave QUESTION phase.
  if (m.state !== MP_PHASES.QUESTION && prevPhase === MP_PHASES.QUESTION) {
    clearInterval(m.timerInterval);
    m.timerInterval = null;
  }

  App.renderMpState();
}

// ─── Guest answer submission ────────────────────────────────────────────────

/**
 * Guests call this when they tap an answer button.
 * We use a targeted Postgres JSONB update so we only touch the single player
 * object that belongs to this guest — we never overwrite the whole state.
 *
 * Strategy: read the current room_state, find our player, mutate the answer
 * fields, write back.  Because Supabase serialises writes and we retry on
 * conflict, this is safe even if two guests answer simultaneously.
 */
async function mp_submitGuestAnswer(answer) {
  const m = App.mp;

  // Optimistic local update so the UI feels instant.
  const me = m.players.find(p => p.id === m.myId);
  if (me) {
    if (me.currentAnswer) return;   // already answered
    me.currentAnswer = answer;
  }
  m.myLastAnswer = answer;
  App.renderMpState();

  try {
    // Fetch the latest state (avoid clobbering concurrent guest answers).
    const row = await dbGetRoom(m.roomCode);
    if (!row) return;

    const state = row.room_state;
    const player = state.players?.find(p => p.id === m.myId);
    if (!player || player.currentAnswer) return;   // host already moved on

    const timeTaken = (Date.now() - state.questionStartTime) / 1000;
    const pct = Math.max(0, 1 - (timeTaken / state.questionDuration));
    player.currentAnswer    = answer;
    player.answerTimeScore  = Math.floor(100 + 900 * pct);

    await dbUpdateRoomState(m.roomCode, state);
  } catch (err) {
    console.error('[MP] guest submitAnswer failed:', err);
  }
}

// ─── Personal answer log (guests) ──────────────────────────────────────────

function mp_recordPersonalLogEntry(roomState) {
  const m = App.mp;
  if (m.isHost) return;   // host builds its own log in hostResolveQuestion()

  const q = roomState.questions?.[roomState.currentIndex];
  if (!q) return;

  const correctVal = q.type === 'truefalse'
    ? (q.answer ? 'True' : 'False')
    : q.correctAnswer;

  // Avoid duplicating entries if applyState fires twice for the same reveal.
  const alreadyLogged = m.answerLog.some(e => e.question === q.question);
  if (alreadyLogged) return;

  m.answerLog.push({
    question:     q.question,
    correctAnswer: correctVal,
    explanation:  q.explanation,
    myAnswer:     m.myLastAnswer ?? null,
    groupAccuracy: roomState.groupAccuracy,
    correctCount: roomState.lastCorrectCount,
    totalPlayers: roomState.players?.length ?? 0,
  });
}

// ─── Local countdown timer ─────────────────────────────────────────────────

/** Start (or restart) the client-side countdown for a question. */
function mp_startLocalTimer() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  // Derive remaining time from the authoritative questionStartTime so late
  // joiners or reconnectors see the correct remaining seconds.
  const elapsed = Math.floor((Date.now() - m.questionStartTime) / 1000);
  m.timer = Math.max(0, m.questionDuration - elapsed);

  m.timerInterval = setInterval(() => {
    m.timer = Math.max(0, m.timer - 1);
    App.updateMpTimerDisplay();
    if (m.timer <= 0) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;
      // Guests just stop; the host drives game flow.
    }
  }, 1000);
}

// ─── Room lifecycle ────────────────────────────────────────────────────────

/**
 * Host: create a new room, subscribe to realtime, and enter LOBBY.
 */
async function mp_createRoom(playerName, questions, questionDuration) {
  const roomCode = mp_generateCode();
  const myId     = mp_generateClientId();

  const initialState = {
    phase:            MP_PHASES.LOBBY,
    players:          [{ id: myId, name: playerName, score: 0,
                         currentAnswer: null, answerTimeScore: 0,
                         correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }],
    questions,
    currentIndex:     0,
    questionDuration,
    questionStartTime: 0,
    groupAccuracy:    0,
    lastCorrectCount: 0,
    answerLog:        [],
    hostId:           myId,
  };

  try {
    await dbCreateRoom(roomCode, initialState);
  } catch (err) {
    throw new Error('Could not create room: ' + (err.message ?? err));
  }

  // Initialise App.mp before subscribing so applyState has a valid target.
  App.mp = {
    ...App.mp,
    isHost:           true,
    inRoom:           true,
    roomCode,
    playerName,
    myId,
    state:            MP_PHASES.LOBBY,
    players:          initialState.players,
    questions,
    currentIndex:     0,
    questionDuration,
    questionStartTime: 0,
    groupAccuracy:    0,
    lastCorrectCount: 0,
    answerLog:        [],
    timer:            questionDuration,
    timerInterval:    null,
    channel:          null,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, (roomState) => {
    mp_applyState(roomState);
  });
}

/**
 * Guest: validate the room code, add this player, subscribe, and enter LOBBY.
 */
async function mp_joinRoom(playerName, roomCode) {
  const myId = mp_generateClientId();

  let row;
  try {
    row = await dbGetRoom(roomCode);
  } catch (err) {
    throw new Error('Could not reach the server. Check your internet connection.');
  }
  if (!row) {
    throw new Error('Room not found. Check the code and make sure the host has created the room.');
  }

  const state = row.room_state;
  if (state.phase === MP_PHASES.REVIEW) {
    throw new Error('This game has already finished.');
  }

  // Add ourselves to the player list.
  state.players = state.players ?? [];
  if (!state.players.find(p => p.id === myId)) {
    state.players.push({
      id: myId, name: playerName, score: 0,
      currentAnswer: null, answerTimeScore: 0,
      correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0,
    });
  }

  try {
    await dbUpdateRoomState(roomCode, state);
  } catch (err) {
    throw new Error('Could not join the room. Please try again.');
  }

  App.mp = {
    ...App.mp,
    isHost:           false,
    inRoom:           true,
    roomCode,
    playerName,
    myId,
    state:            state.phase,
    players:          state.players,
    questions:        state.questions ?? [],
    currentIndex:     state.currentIndex ?? 0,
    questionDuration: state.questionDuration ?? 20,
    questionStartTime: state.questionStartTime ?? 0,
    groupAccuracy:    state.groupAccuracy ?? 0,
    lastCorrectCount: state.lastCorrectCount ?? 0,
    answerLog:        [],
    myLastAnswer:     null,
    timer:            state.questionDuration ?? 20,
    timerInterval:    null,
    channel:          null,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, (roomState) => {
    mp_applyState(roomState);
  });
}

/**
 * Leave the current room cleanly (unsubscribe, close room if host).
 */
async function mp_leaveRoom() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  if (m.channel) {
    await dbUnsubscribeRoom(m.channel);
  }

  if (m.isHost && m.roomCode) {
    // Remove our player and close the room.
    await dbCloseRoom(m.roomCode).catch(() => {});
  } else if (!m.isHost && m.roomCode) {
    // Remove guest from player list.
    try {
      const row = await dbGetRoom(m.roomCode);
      if (row) {
        row.room_state.players = (row.room_state.players ?? [])
          .filter(p => p.id !== m.myId);
        await dbUpdateRoomState(m.roomCode, row.room_state);
      }
    } catch (_) { /* best-effort */ }
  }

  // Reset App.mp to a safe blank state.
  App.mp = {
    peer: null, conn: null, connections: {}, isHost: false, inRoom: false,
    roomCode: '', playerName: '', myId: '',
    players: [], questions: [], currentIndex: 0,
    timer: 0, timerInterval: null, state: 'SETUP',
    questionDuration: 20, questionStartTime: 0,
    answerLog: [], channel: null,
  };
}

// ─── Host game-flow actions ─────────────────────────────────────────────────

/** Host: start the game from the lobby. */
async function mp_hostStartGame() {
  const m = App.mp;
  if (!m.isHost) return;
  m.state        = MP_PHASES.QUESTION;
  m.currentIndex = 0;
  await mp_hostIssueQuestion();
}

/** Host: push the current question to all clients and start the timer. */
async function mp_hostIssueQuestion() {
  const m = App.mp;
  // Reset per-question answer state for every player.
  m.players.forEach(p => { p.currentAnswer = null; p.answerTimeScore = 0; });
  m.state            = MP_PHASES.QUESTION;
  m.questionStartTime = Date.now();
  m.timer            = m.questionDuration;

  await mp_pushState();
  mp_startLocalTimer();

  // Host-side auto-resolve when the timer runs out.
  clearInterval(m._hostTimerInterval);
  m._hostTimerInterval = setInterval(async () => {
    m.timer--;
    App.updateMpTimerDisplay();
    if (m.timer <= 0) {
      clearInterval(m._hostTimerInterval);
      m._hostTimerInterval = null;
      await mp_hostResolveQuestion();
    }
  }, 1000);
}

/** Host: score all answers, compute group accuracy, push REVEAL state. */
async function mp_hostResolveQuestion() {
  const m = App.mp;
  clearInterval(m._hostTimerInterval);
  m._hostTimerInterval = null;

  const q = m.questions[m.currentIndex];
  const correctVal = q.type === 'truefalse'
    ? (q.answer ? 'True' : 'False')
    : q.correctAnswer;

  // Re-read the latest player list from Supabase to capture all guest answers.
  try {
    const row = await dbGetRoom(m.roomCode);
    if (row) m.players = row.room_state.players ?? m.players;
  } catch (_) { /* use local copy on failure */ }

  // Score each player.
  m.players.forEach(p => {
    if (p.correctCount   === undefined) p.correctCount   = 0;
    if (p.wrongCount     === undefined) p.wrongCount     = 0;
    if (p.skippedCount   === undefined) p.skippedCount   = 0;

    if (!p.currentAnswer) {
      p.skippedCount++;
    } else if (p.currentAnswer === correctVal) {
      p.score += (p.answerTimeScore || 0);
      p.correctCount++;
    } else {
      p.wrongCount++;
    }
    const seen = p.correctCount + p.wrongCount + p.skippedCount;
    p.accuracy = seen > 0 ? Math.round((p.correctCount / seen) * 100) : 0;
  });

  // Sort leaderboard.
  m.players.sort((a, b) => b.score - a.score);

  const correctCount = m.players.filter(p => p.currentAnswer === correctVal).length;
  m.groupAccuracy    = m.players.length
    ? Math.round((correctCount / m.players.length) * 100)
    : 0;
  m.lastCorrectCount = correctCount;

  // Build host's own log entry.
  const hostPlayer = m.players.find(p => p.id === m.myId);
  m.answerLog.push({
    question:     q.question,
    correctAnswer: correctVal,
    explanation:  q.explanation,
    myAnswer:     hostPlayer?.currentAnswer ?? null,
    groupAccuracy: m.groupAccuracy,
    correctCount,
    totalPlayers: m.players.length,
  });

  m.state = MP_PHASES.REVEAL;
  await mp_pushState();
}

/** Host: advance to the next question (or end the game). */
async function mp_hostNextQuestion() {
  const m = App.mp;
  m.currentIndex++;
  if (m.currentIndex >= m.questions.length) {
    m.state = MP_PHASES.REVIEW;
    await mp_pushState();
  } else {
    await mp_hostIssueQuestion();
  }
}

/**
 * Check whether all players have answered; if so, auto-resolve early.
 * The host's subscription calls this after receiving a guest-answer write.
 */
async function mp_hostCheckAllAnswered(roomState) {
  if (!App.mp.isHost) return;
  const allIn = (roomState.players ?? []).every(p => p.currentAnswer);
  if (allIn && App.mp.state === MP_PHASES.QUESTION) {
    // Sync player list with the latest from DB, then resolve.
    App.mp.players = roomState.players;
    clearInterval(App.mp._hostTimerInterval);
    App.mp._hostTimerInterval = null;
    await mp_hostResolveQuestion();
  }
}
