/**
 * multiplayer.js — Supabase Realtime multiplayer engine for MedMaster.
 *
 * NEW ARCHITECTURE: "Instant Local Evaluation + Ghost Broadcasts"
 * ──────────────────────────────────────────────────────────────────
 * 1. Scoring is flat (1 point per correct answer). Speed bonuses are removed.
 * 2. When a player answers, their own browser instantly evaluates the answer,
 * updates their local score, and shows the explanation (zero lag).
 * 3. The player's device then BROADCASTS this update silently to the room so
 * the leaderboard updates instantly for everyone else.
 * 4. There is no REVEAL phase. The game auto-advances purely on the timer.
 * The Host's local timer hitting zero drives the progression to the next question.
 */

// ─── Constants ─────────────────────────────────────────────────────────────

const MP_PHASES = Object.freeze({
  CONNECTING: 'CONNECTING',
  LOBBY:      'LOBBY',
  QUESTION:   'QUESTION',
  REVIEW:     'REVIEW', // Notice: REVEAL is completely gone.
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
 * Write the current App.mp state to Supabase.
 * Only the host calls this to sync official game state (timer/index).
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
    hostId:           m.myId,
  };

  try {
    await dbUpdateRoomState(m.roomCode, roomState);
  } catch (err) {
    console.error('[MP] pushState failed:', err);
  }
}

/**
 * Apply an incoming room_state (from Supabase Realtime DB changes)
 * This handles the Host officially moving the game to the next question.
 */
function mp_applyState(roomState) {
  const m = App.mp;
  if (!m.inRoom) return;

  const prevPhase = m.state;
  const prevIndex = m.currentIndex;

  m.state           = roomState.phase;
  m.questions       = roomState.questions       ?? [];
  m.currentIndex    = roomState.currentIndex    ?? 0;
  m.questionDuration = roomState.questionDuration ?? 20;
  m.questionStartTime = roomState.questionStartTime ?? 0;

  // We gently merge the official players array to catch anyone who disconnected/reconnected
  // But we trust our instant broadcast data for local UI feeling fast.
  if (roomState.players) {
    roomState.players.forEach(incomingPlayer => {
      let localPlayer = m.players.find(p => p.id === incomingPlayer.id);
      if (!localPlayer) {
        m.players.push(incomingPlayer);
      } else if (!localPlayer.currentAnswer && incomingPlayer.currentAnswer) {
        // Only override local if the DB knows they answered but we missed the broadcast
        Object.assign(localPlayer, incomingPlayer);
      }
    });
  }

  // Phase transition or Next Question pulled by Host
  if ((m.state === MP_PHASES.QUESTION && prevPhase !== MP_PHASES.QUESTION) ||
      (m.state === MP_PHASES.QUESTION && m.currentIndex !== prevIndex)) {
    
    // Clear local answer state for the new question
    m.myLastAnswer = null;
    m.players.forEach(p => p.currentAnswer = null);
    mp_startLocalTimer();
  }

  // If game is over, kill timer
  if (m.state === MP_PHASES.REVIEW) {
    clearInterval(m.timerInterval);
    m.timerInterval = null;
  }

  App.renderMpState();
}

/**
 * Handle incoming silent P2P broadcasts.
 * Instantly updates the leaderboard without waiting for DB writes.
 */
function mp_handleBroadcast(payload) {
  const m = App.mp;
  const { playerId, answer, score, correctCount, wrongCount, accuracy } = payload;
  
  const player = m.players.find(p => p.id === playerId);
  if (player) {
    player.currentAnswer = answer;
    player.score = score;
    player.correctCount = correctCount;
    player.wrongCount = wrongCount;
    player.accuracy = accuracy;
    
    App.renderMpState();

    // The Host will push this officially to the DB to save state for late-joiners
    if (m.isHost) {
      mp_pushState();
    }
  }
}

// ─── Universal Instant Answer Submission ────────────────────────────────────

/**
 * Called when ANY player (Host or Guest) clicks an answer.
 * Evaluates instantly, updates UI, and broadcasts.
 */
async function mp_submitAnswer(answer) {
  const m = App.mp;
  const me = m.players.find(p => p.id === m.myId);
  
  if (!me || me.currentAnswer) return; // Already answered

  const q = m.questions[m.currentIndex];
  const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
  const isCorrect = answer === correctVal;

  // Instant Local Evaluation
  me.currentAnswer = answer;
  m.myLastAnswer = answer;

  if (isCorrect) {
    me.score = (me.score || 0) + 1; // Exactly 1 point. No speed bonus.
    me.correctCount = (me.correctCount || 0) + 1;
  } else {
    me.wrongCount = (me.wrongCount || 0) + 1;
  }

  const seen = (me.correctCount || 0) + (me.wrongCount || 0) + (me.skippedCount || 0);
  me.accuracy = seen > 0 ? Math.round((me.correctCount / seen) * 100) : 0;

  // Log to personal history instantly for the review screen later
  m.answerLog.push({
    question: q.question,
    correctAnswer: correctVal,
    explanation: q.explanation,
    myAnswer: answer,
    correctCount: me.correctCount,
  });

  // Re-render immediately to show the explanation locally!
  App.renderMpState();

  // Broadcast out our new score to the room
  try {
    await dbBroadcastUpdate(m.channel, {
      playerId: m.myId,
      answer: answer,
      score: me.score,
      correctCount: me.correctCount,
      wrongCount: me.wrongCount,
      accuracy: me.accuracy
    });
  } catch (err) {
    console.error('[MP] Broadcast failed:', err);
  }

  // If host answered, make it official in DB
  if (m.isHost) await mp_pushState();
}

// ─── Local countdown timer ─────────────────────────────────────────────────

/** Start (or restart) the client-side countdown for a question. */
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
      
      // If time ran out and I didn't answer, log a "skip" locally
      const me = m.players.find(p => p.id === m.myId);
      if (me && !me.currentAnswer) {
        const q = m.questions[m.currentIndex];
        const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
        m.answerLog.push({
          question: q.question, correctAnswer: correctVal, explanation: q.explanation, myAnswer: null
        });
      }

      // The Host strictly drives the transition to the next question
      if (m.isHost && m.state === MP_PHASES.QUESTION) {
        mp_hostTimerHitZero();
      }
    }
  }, 1000);
}

// ─── Room lifecycle ────────────────────────────────────────────────────────

/** Host: create room and enter LOBBY. */
async function mp_createRoom(playerName, questions, questionDuration) {
  const roomCode = mp_generateCode();
  const myId     = mp_generateClientId();

  const initialState = {
    phase:            MP_PHASES.LOBBY,
    players:          [{ id: myId, name: playerName, score: 0, currentAnswer: null, 
                         correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }],
    questions,
    currentIndex:     0,
    questionDuration,
    questionStartTime: 0,
    hostId:           myId,
  };

  await dbCreateRoom(roomCode, initialState);

  App.mp = {
    ...App.mp, isHost: true, inRoom: true, roomCode, playerName, myId,
    state: MP_PHASES.LOBBY, players: initialState.players, questions, currentIndex: 0,
    questionDuration, questionStartTime: 0, answerLog: [], timer: questionDuration, 
    timerInterval: null, channel: null, myLastAnswer: null,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, 
    (roomState) => mp_applyState(roomState), 
    (payload) => mp_handleBroadcast(payload)
  );
}

/** Guest: join room and enter LOBBY. */
async function mp_joinRoom(playerName, roomCode) {
  const myId = mp_generateClientId();

  const row = await dbGetRoom(roomCode);
  if (!row) throw new Error('Room not found. Check the code.');

  const state = row.room_state;
  if (state.phase === MP_PHASES.REVIEW) throw new Error('This game has already finished.');

  state.players = state.players ?? [];
  if (!state.players.find(p => p.id === myId)) {
    state.players.push({
      id: myId, name: playerName, score: 0, currentAnswer: null,
      correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0,
    });
  }
  await dbUpdateRoomState(roomCode, state);

  App.mp = {
    ...App.mp, isHost: false, inRoom: true, roomCode, playerName, myId,
    state: state.phase, players: state.players, questions: state.questions ?? [],
    currentIndex: state.currentIndex ?? 0, questionDuration: state.questionDuration ?? 20,
    questionStartTime: state.questionStartTime ?? 0, answerLog: [], myLastAnswer: null,
    timer: state.questionDuration ?? 20, timerInterval: null, channel: null,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, 
    (roomState) => mp_applyState(roomState),
    (payload) => mp_handleBroadcast(payload)
  );
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

// ─── Host game-flow actions (Strict Automated Advance) ──────────────────────

/** Host: start the game from the lobby. */
async function mp_hostStartGame() {
  const m = App.mp;
  if (!m.isHost) return;
  m.players.forEach(p => p.currentAnswer = null);
  m.state             = MP_PHASES.QUESTION;
  m.currentIndex      = 0;
  m.questionStartTime = Date.now();
  m.timer             = m.questionDuration;
  m.myLastAnswer      = null;

  mp_startLocalTimer();
  App.renderMpState();
  await mp_pushState();
}

/** * Host strictly drives advance when timer hits zero. 
 * Punishes unanswered players, increments index, and pulls next question.
 */
async function mp_hostTimerHitZero() {
  const m = App.mp;

  // Grade anyone who let the timer run out
  m.players.forEach(p => {
    if (!p.currentAnswer) {
      p.skippedCount = (p.skippedCount || 0) + 1;
      const seen = (p.correctCount || 0) + (p.wrongCount || 0) + (p.skippedCount || 0);
      p.accuracy = seen > 0 ? Math.round((p.correctCount / seen) * 100) : 0;
    }
  });

  m.currentIndex++;
  
  if (m.currentIndex >= m.questions.length) {
    m.state = MP_PHASES.REVIEW;
  } else {
    // Next Question prep
    m.players.forEach(p => p.currentAnswer = null);
    m.questionStartTime = Date.now();
    m.timer = m.questionDuration;
    m.myLastAnswer = null;
  }

  App.renderMpState();
  await mp_pushState();
}
