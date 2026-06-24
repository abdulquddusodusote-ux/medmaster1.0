/**
 * multiplayer.js — Supabase Realtime multiplayer engine for MedMaster.
 *
 * Architecture
 * ────────────
 * Host browser  ──write──▶  Supabase (rooms table)  ◀──read──  Guest browsers
 *
 * Every game-state mutation flows through one path:
 * 1.  Host modifies App.mp locally.
 * 2.  Host calls mp_pushState() → writes room_state to Supabase.
 * 3.  Supabase broadcasts a Realtime UPDATE event to all subscribers.
 * 4.  Every client receives the event and calls mp_applyState().
 *
 * Guests never write to the database directly. They BROADCAST their answer
 * to the host via Realtime. The host catches this, updates the master state,
 * and pushes it back to the database.
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

/** Generate a random opaque client id (used as player.id). */
function mp_generateClientId() {
  return Math.random().toString(36).substring(2, 12);
}

// ─── State push / apply ────────────────────────────────────────────────────

/**
 * Write the current App.mp state to Supabase as the authoritative room_state.
 * Only the host should call this.
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
 * re-render. Called by both host and guests on every DB update event.
 */
function mp_applyState(roomState) {
  const m = App.mp;
  if (!m.inRoom) return;

  const prevPhase = m.state;

  m.state           = roomState.phase;
  m.players         = roomState.players         ?? [];
  m.questions       = roomState.questions       ?? [];
  m.currentIndex    = roomState.currentIndex    ?? 0;
  m.questionDuration = roomState.questionDuration ?? 20;
  m.questionStartTime = roomState.questionStartTime ?? 0;
  m.groupAccuracy   = roomState.groupAccuracy   ?? 0;
  m.lastCorrectCount = roomState.lastCorrectCount ?? 0;

  // Don't blindly take the host's log! Pad missing entries if guest reconnected.
  if (m.answerLog.length < (roomState.answerLog?.length || 0)) {
    const newEntries = roomState.answerLog.slice(m.answerLog.length).map(entry => ({
        ...entry, myAnswer: null
    }));
    m.answerLog.push(...newEntries);
  }

  if (m.state === MP_PHASES.QUESTION && prevPhase !== MP_PHASES.QUESTION) {
    m.myLastAnswer = null; // Clean up previous question
    mp_startLocalTimer();
  }

  if (m.state === MP_PHASES.REVEAL && prevPhase !== MP_PHASES.REVEAL) {
    mp_recordPersonalLogEntry(roomState);
  }

  if (m.state !== MP_PHASES.QUESTION && prevPhase === MP_PHASES.QUESTION) {
    clearInterval(m.timerInterval);
    m.timerInterval = null;
  }

  App.renderMpState();
}

// ─── Guest answer submission ────────────────────────────────────────────────

/**
 * Guests call this when they tap an answer button.
 * Instead of writing to the DB, they broadcast their move to the host.
 */
async function mp_submitGuestAnswer(answer) {
  const m = App.mp;

  // Optimistic local update so the UI feels instant.
  const me = m.players.find(p => p.id === m.myId);
  if (me) {
    if (me.currentAnswer) return;
    me.currentAnswer = answer;
  }
  m.myLastAnswer = answer;
  App.renderMpState();

  const pct = Math.max(0, m.timer / m.questionDuration);
  const answerTimeScore = Math.floor(100 + 900 * pct);

  try {
    await dbSendGuestAnswer(m.channel, m.myId, answer, answerTimeScore);
  } catch (err) {
    console.error('[MP] guest broadcast failed:', err);
  }
}

// ─── Personal answer log (guests) ──────────────────────────────────────────

function mp_recordPersonalLogEntry(roomState) {
  const m = App.mp;
  if (m.isHost) return; 

  const q = roomState.questions?.[roomState.currentIndex];
  if (!q) return;

  const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
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

/** Start (or restart) the unified client-side countdown for a question. */
function mp_startLocalTimer() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  const elapsed = Math.floor((Date.now() - m.questionStartTime) / 1000);
  m.timer = Math.max(0, m.questionDuration - elapsed);

  m.timerInterval = setInterval(() => {
    m.timer = Math.max(0, m.timer - 1);
    App.updateMpTimerDisplay();
    
    if (m.timer <= 0) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;
      // Host drives game flow when timer hits 0
      if (m.isHost && m.state === MP_PHASES.QUESTION) {
        mp_hostResolveQuestion();
      }
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
    myLastAnswer:     null,
  };

  // HOST intercepts guest answers here!
  App.mp.channel = dbSubscribeRoom(roomCode, (roomState) => {
    mp_applyState(roomState);
  }, (payload) => {
    if (App.mp.isHost && App.mp.state === MP_PHASES.QUESTION) {
      const { playerId, answer, answerTimeScore } = payload;
      const player = App.mp.players.find(p => p.id === playerId);
      
      if (player && !player.currentAnswer) {
        player.currentAnswer = answer;
        player.answerTimeScore = answerTimeScore;
        App.renderMpState(); // Update 'Answers in: X/Y' locally
        mp_pushState();      // Sync updated players array to all guests

        // Auto-advance if everyone answered!
        if (App.mp.players.every(p => p.currentAnswer)) {
          clearInterval(App.mp.timerInterval);
          App.mp.timerInterval = null;
          mp_hostResolveQuestion();
        }
      }
    }
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
  if (!row) throw new Error('Room not found. Check the code.');

  const state = row.room_state;
  if (state.phase === MP_PHASES.REVIEW) throw new Error('This game has already finished.');

  state.players = state.players ?? [];
  if (!state.players.find(p => p.id === myId)) {
    state.players.push({
      id: myId, name: playerName, score: 0, currentAnswer: null, answerTimeScore: 0,
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

/** Leave the current room cleanly. */
async function mp_leaveRoom() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  if (m.channel) await dbUnsubscribeRoom(m.channel);

  if (m.isHost && m.roomCode) {
    await dbCloseRoom(m.roomCode).catch(() => {});
  } else if (!m.isHost && m.roomCode) {
    try {
      const row = await dbGetRoom(m.roomCode);
      if (row) {
        row.room_state.players = (row.room_state.players ?? []).filter(p => p.id !== m.myId);
        await dbUpdateRoomState(m.roomCode, row.room_state);
      }
    } catch (_) { /* best-effort */ }
  }

  App.mp = {
    isHost: false, inRoom: false, roomCode: '', playerName: '', myId: '',
    players: [], questions: [], currentIndex: 0, state: 'SETUP',
    timer: 0, timerInterval: null, questionDuration: 20, questionStartTime: 0,
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
  m.players.forEach(p => { p.currentAnswer = null; p.answerTimeScore = 0; });
  m.state            = MP_PHASES.QUESTION;
  m.questionStartTime = Date.now();
  m.timer            = m.questionDuration;
  m.myLastAnswer     = null;

  mp_startLocalTimer();
  App.renderMpState();
  await mp_pushState();
}

/** Host: score all answers, compute group accuracy, push REVEAL state. */
async function mp_hostResolveQuestion() {
  const m = App.mp;
  clearInterval(m.timerInterval);
  m.timerInterval = null;

  const q = m.questions[m.currentIndex];
  const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;

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

  m.players.sort((a, b) => b.score - a.score);

  const correctCount = m.players.filter(p => p.currentAnswer === correctVal).length;
  m.groupAccuracy    = m.players.length ? Math.round((correctCount / m.players.length) * 100) : 0;
  m.lastCorrectCount = correctCount;

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
  App.renderMpState();
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
