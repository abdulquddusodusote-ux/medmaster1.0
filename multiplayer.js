/**
 * multiplayer.js — Enhanced Realtime Multiplayer Engine for MedMaster.
 *
 * ARCHITECTURE: "Authoritative Central Brain + Live Pacing + Host Migration"
 * ────────────────────────────────────────────────────────────────────────
 * 1. Host is the central authoritative brain for grading and pacing.
 * 2. Guests broadcast whispers & join signals to the Host.
 * 3. State sync is published down to all clients via Supabase Realtime.
 * 4. Pacing: When all players answer, timer snaps to 3s for instant feedback, then auto-advances.
 * 5. Resilient Host Migration: If the host drops, the next active player takes over smoothly.
 */

// ─── Constants ─────────────────────────────────────────────────────────────

const MP_PHASES = Object.freeze({
  CONNECTING: 'CONNECTING',
  LOBBY:      'LOBBY',
  QUESTION:   'QUESTION',
  REVIEW:     'REVIEW',
});

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Generate a random 4-letter uppercase room code. */
function mp_generateCode() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

/** Generate a random opaque client id (used as player.id). */
function mp_generateClientId() {
  return 'p_' + Math.random().toString(36).substring(2, 11);
}

// ─── State Push / Apply ────────────────────────────────────────────────────

/**
 * Write current App.mp state to Supabase.
 * ONLY THE HOST calls this to sync official master state.
 */
async function mp_pushState() {
  const m = App.mp;
  if (!m.isHost || !m.roomCode) return;

  const roomState = {
    phase:                    m.state,
    players:                  m.players,
    questions:                m.questions,
    currentIndex:             m.currentIndex,
    questionDuration:         m.questionDuration,
    originalQuestionDuration: m.originalQuestionDuration,
    questionStartTime:        m.questionStartTime,
    hostId:                   m.myId,
    updatedAt:                Date.now(),
  };

  try {
    await dbUpdateRoomState(m.roomCode, roomState);
  } catch (err) {
    console.error('[MP] pushState failed:', err);
  }
}

/**
 * Apply the official room_state (from Supabase DB) to local UI.
 */
function mp_applyState(roomState) {
  const m = App.mp;
  if (!m.inRoom) return;

  const prevPhase = m.state;
  const prevIndex = m.currentIndex;
  const prevDuration = m.questionDuration;

  // ─── Host Migration Check ───────────────────────────────────────────────
  if (!m.isHost && roomState.hostId === m.myId) {
    console.log('[MP] You have been promoted to Host!');
    m.isHost = true;
  }

  // ─── Guest Logging & Round Transition Check ─────────────────────────────
  if (!m.isHost) {
    if ((roomState.phase === MP_PHASES.QUESTION && roomState.currentIndex !== m.currentIndex) ||
        (roomState.phase === MP_PHASES.REVIEW && m.state !== MP_PHASES.REVIEW)) {
      const prevQ = m.questions[m.currentIndex];
      if (prevQ) {
        const correctVal = prevQ.type === 'truefalse' ? (prevQ.answer ? 'True' : 'False') : prevQ.correctAnswer;
        m.answerLog.push({
          question: prevQ.question,
          correctAnswer: correctVal,
          explanation: prevQ.explanation,
          myAnswer: m.myLastAnswer || null
        });
      }
      m.myLastAnswer = null;
      m.isWaitingForDatabase = false;
    }
  }

  m.state                    = roomState.phase;
  m.questions                = roomState.questions ?? [];
  m.currentIndex             = roomState.currentIndex ?? 0;
  m.questionDuration         = roomState.questionDuration ?? 20;
  m.originalQuestionDuration = roomState.originalQuestionDuration ?? 20;
  m.questionStartTime        = roomState.questionStartTime ?? 0;
  m.players                  = roomState.players ?? [];

  // Unlock UI if DB officially recorded my answer
  const me = m.players.find(p => p.id === m.myId);
  if (me && me.currentAnswer) {
    m.isWaitingForDatabase = false;
    if (!m.myLastAnswer) m.myLastAnswer = me.currentAnswer;
  }

  // ─── Timer Synchronization ──────────────────────────────────────────────
  if (m.state === MP_PHASES.QUESTION &&
     (m.currentIndex !== prevIndex || m.questionDuration !== prevDuration || prevPhase === MP_PHASES.LOBBY)) {
    mp_startLocalTimer();
  }

  if (m.state === MP_PHASES.REVIEW) {
    clearInterval(m.timerInterval);
    m.timerInterval = null;
  }

  App.renderMpState();
}

// ─── Answer Submission ────────────────────────────────────────────────────

/**
 * Triggered when ANY player clicks an answer button.
 */
async function mp_submitAnswer(answer) {
  const m = App.mp;
  const me = m.players.find(p => p.id === m.myId);

  if (!me || me.currentAnswer || m.isWaitingForDatabase) return;

  m.isWaitingForDatabase = true;
  m.myLastAnswer = answer;
  App.renderMpState();

  if (m.isHost) {
    await mp_hostProcessAnswer(m.myId, answer);
  } else {
    try {
      await dbSendWhisperToHost(m.channel, m.myId, answer);
    } catch (err) {
      console.error('[MP] Whisper failed:', err);
      m.isWaitingForDatabase = false;
      App.renderMpState();
    }
  }
}

// ─── Local Countdown Timer (Drift-Proof) ───────────────────────────────────

function mp_startLocalTimer() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  m.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - m.questionStartTime) / 1000);
    m.timer = Math.max(0, m.questionDuration - elapsed);

    App.updateMpTimerDisplay();

    if (m.timer <= 0) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;

      if (m.isHost && m.state === MP_PHASES.QUESTION) {
        mp_hostTimerHitZero();
      }
    }
  }, 1000);
}

// ─── Room Lifecycle ────────────────────────────────────────────────────────

/** Host: create room and enter LOBBY. */
async function mp_createRoom(playerName, questions, questionDuration) {
  const roomCode = mp_generateCode();
  const myId     = mp_generateClientId();

  const initialPlayer = {
    id: myId, name: playerName, score: 0, currentAnswer: null,
    correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0
  };

  const initialState = {
    phase:                    MP_PHASES.LOBBY,
    players:                  [initialPlayer],
    questions,
    currentIndex:             0,
    questionDuration,
    originalQuestionDuration: questionDuration,
    questionStartTime:        0,
    hostId:                   myId,
    updatedAt:                Date.now(),
  };

  await dbCreateRoom(roomCode, initialState);

  App.mp = {
    ...App.mp, isHost: true, inRoom: true, roomCode, playerName, myId,
    state: MP_PHASES.LOBBY, players: initialState.players, questions, currentIndex: 0,
    questionDuration, originalQuestionDuration: questionDuration, questionStartTime: 0,
    answerLog: [], timer: questionDuration, timerInterval: null, channel: null,
    myLastAnswer: null, isWaitingForDatabase: false
  };

  App.mp.channel = dbSubscribeRoom(
    roomCode,
    (roomState) => mp_applyState(roomState),
    (whisper)   => { if (App.mp.isHost) mp_hostProcessAnswer(whisper.playerId, whisper.answer); },
    (guest)     => { if (App.mp.isHost) mp_hostAddGuest(guest); },
    (action)    => { mp_handleHostAction(action); }
  );
}

/** Guest: join room and enter LOBBY. */
async function mp_joinRoom(playerName, roomCode) {
  const myId = mp_generateClientId();

  const row = await dbGetRoom(roomCode);
  if (!row) throw new Error('Room not found. Please double-check the 4-letter code.');

  const state = row.room_state;
  if (state.phase === MP_PHASES.REVIEW) throw new Error('This match has already completed.');

  const newPlayer = {
    id: myId, name: playerName, score: 0, currentAnswer: null,
    correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0,
  };

  state.players = state.players ?? [];
  if (!state.players.find(p => p.id === myId)) {
    state.players.push(newPlayer);
  }

  App.mp = {
    ...App.mp, isHost: false, inRoom: true, roomCode, playerName, myId,
    state: state.phase, players: state.players, questions: state.questions ?? [],
    currentIndex: state.currentIndex ?? 0,
    questionDuration: state.questionDuration ?? 20,
    originalQuestionDuration: state.originalQuestionDuration ?? 20,
    questionStartTime: state.questionStartTime ?? 0,
    answerLog: [], myLastAnswer: null,
    timer: state.questionDuration ?? 20, timerInterval: null, channel: null,
    isWaitingForDatabase: false
  };

  // Subscribe to room realtime channel
  App.mp.channel = dbSubscribeRoom(
    roomCode,
    (roomState) => mp_applyState(roomState),
    null, // Guests do not listen to whispers
    null, // Guests do not listen to join events
    (action) => mp_handleHostAction(action)
  );

  // Broadcast join signal to Host and update DB state
  try {
    await dbBroadcastGuestJoin(App.mp.channel, newPlayer);
    await dbUpdateRoomState(roomCode, state);
  } catch (e) {
    console.warn('[MP] Join broadcast fallback:', e);
  }
}

/** Host: Add newly arrived guest to authoritative players list */
async function mp_hostAddGuest(guest) {
  const m = App.mp;
  if (!m.isHost || !guest || !guest.id) return;

  if (!m.players.find(p => p.id === guest.id)) {
    m.players.push({
      id: guest.id,
      name: guest.name || 'Student',
      score: 0,
      currentAnswer: null,
      correctCount: 0,
      wrongCount: 0,
      skippedCount: 0,
      accuracy: 0
    });
    await mp_pushState();
  }
}

/** Handle broadcast actions from Host (e.g. rematch, migration) */
function mp_handleHostAction(payload) {
  if (!payload || !payload.action) return;
  const m = App.mp;

  if (payload.action === 'host_migrated' && payload.data?.newHostId === m.myId) {
    console.log('[MP] Successfully migrated host to me.');
    m.isHost = true;
    App.renderMpState();
  } else if (payload.action === 'rematch') {
    m.answerLog = [];
    m.myLastAnswer = null;
    m.isWaitingForDatabase = false;
  }
}

/** Leave the current room cleanly with host migration */
async function mp_leaveRoom() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  if (m.inRoom && m.roomCode) {
    if (m.isHost) {
      // If host is leaving, promote the next active player before exiting
      const remainingPlayers = (m.players || []).filter(p => p.id !== m.myId);
      if (remainingPlayers.length > 0) {
        const nextHost = remainingPlayers[0];
        const updatedState = {
          phase: m.state,
          players: remainingPlayers,
          questions: m.questions,
          currentIndex: m.currentIndex,
          questionDuration: m.questionDuration,
          originalQuestionDuration: m.originalQuestionDuration,
          questionStartTime: m.questionStartTime,
          hostId: nextHost.id,
          updatedAt: Date.now(),
        };
        await dbUpdateRoomState(m.roomCode, updatedState).catch(() => {});
        await dbBroadcastHostAction(m.channel, 'host_migrated', { newHostId: nextHost.id }).catch(() => {});
      } else {
        await dbCloseRoom(m.roomCode).catch(() => {});
      }
    } else {
      try {
        const row = await dbGetRoom(m.roomCode);
        if (row && row.room_state) {
          row.room_state.players = (row.room_state.players ?? []).filter(p => p.id !== m.myId);
          await dbUpdateRoomState(m.roomCode, row.room_state);
        }
      } catch (_) { /* best-effort */ }
    }
  }

  if (m.channel) await dbUnsubscribeRoom(m.channel);

  App.mp = {
    isHost: false, inRoom: false, roomCode: '', playerName: '', myId: '',
    players: [], questions: [], currentIndex: 0, state: 'SETUP',
    timer: 0, timerInterval: null, questionDuration: 20, questionStartTime: 0,
    originalQuestionDuration: 20, answerLog: [], channel: null, isWaitingForDatabase: false
  };
}

// ─── Host Central Brain Logic (Grading & Pacing) ───────────────────────────

/** Host: Start game from lobby */
async function mp_hostStartGame() {
  const m = App.mp;
  if (!m.isHost) return;
  m.players.forEach(p => {
    p.currentAnswer = null;
    p.score = 0;
    p.correctCount = 0;
    p.wrongCount = 0;
    p.skippedCount = 0;
    p.accuracy = 0;
  });
  m.state             = MP_PHASES.QUESTION;
  m.currentIndex      = 0;
  m.questionStartTime = Date.now();
  m.questionDuration  = m.originalQuestionDuration;
  m.timer             = m.questionDuration;
  m.myLastAnswer      = null;
  m.answerLog         = [];

  mp_startLocalTimer();
  await mp_pushState();
}

/** Host: Process an incoming answer from ANY player */
async function mp_hostProcessAnswer(playerId, answer) {
  const m = App.mp;
  if (m.state !== MP_PHASES.QUESTION) return;

  const player = m.players.find(p => p.id === playerId);
  if (!player || player.currentAnswer) return;

  const q = m.questions[m.currentIndex];
  if (!q) return;
  const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;

  player.currentAnswer = answer;

  if (answer === correctVal) {
    player.score = (player.score || 0) + 1;
    player.correctCount = (player.correctCount || 0) + 1;
  } else {
    player.wrongCount = (player.wrongCount || 0) + 1;
  }

  const seen = (player.correctCount || 0) + (player.wrongCount || 0) + (player.skippedCount || 0);
  player.accuracy = seen > 0 ? Math.round((player.correctCount / seen) * 100) : 0;

  // Auto-Pacing: If all players have answered, snap timer down to 3s review
  const allAnswered = m.players.every(p => p.currentAnswer);
  if (allAnswered && m.questionDuration > 3) {
    m.questionStartTime = Date.now();
    m.questionDuration = 3;
    m.timer = 3;
    mp_startLocalTimer();
  }

  await mp_pushState();
}

/** Host: Automatically advance when timer hits 0 */
async function mp_hostTimerHitZero() {
  const m = App.mp;
  if (!m.isHost) return;

  // Grade anyone who timed out
  m.players.forEach(p => {
    if (!p.currentAnswer) {
      p.skippedCount = (p.skippedCount || 0) + 1;
      const seen = (p.correctCount || 0) + (p.wrongCount || 0) + (p.skippedCount || 0);
      p.accuracy = seen > 0 ? Math.round((p.correctCount / seen) * 100) : 0;
    }
  });

  // Host records personal answer log
  const prevQ = m.questions[m.currentIndex];
  if (prevQ) {
    const correctVal = prevQ.type === 'truefalse' ? (prevQ.answer ? 'True' : 'False') : prevQ.correctAnswer;
    m.answerLog.push({
      question: prevQ.question,
      correctAnswer: correctVal,
      explanation: prevQ.explanation,
      myAnswer: m.myLastAnswer || null
    });
  }
  m.myLastAnswer = null;
  m.isWaitingForDatabase = false;

  m.currentIndex++;

  if (m.currentIndex >= m.questions.length) {
    m.state = MP_PHASES.REVIEW;
  } else {
    m.players.forEach(p => p.currentAnswer = null);
    m.questionStartTime = Date.now();
    m.questionDuration = m.originalQuestionDuration;
    m.timer = m.questionDuration;
  }

  await mp_pushState();

  if (m.state === MP_PHASES.QUESTION) {
    mp_startLocalTimer();
  }
}

/** Host: Instant Rematch with newly shuffled questions */
async function mp_hostRematch() {
  const m = App.mp;
  if (!m.isHost) return;

  const pool = App.shuffleArray(App.getFullyFilteredPool('mp'));
  const final = pool.slice(0, Math.min(m.questions.length, pool.length));

  m.questions = final;
  m.currentIndex = 0;
  m.answerLog = [];
  m.myLastAnswer = null;
  m.isWaitingForDatabase = false;
  m.state = MP_PHASES.LOBBY;
  m.players.forEach(p => {
    p.currentAnswer = null;
    p.score = 0;
    p.correctCount = 0;
    p.wrongCount = 0;
    p.skippedCount = 0;
    p.accuracy = 0;
  });

  await dbBroadcastHostAction(m.channel, 'rematch');
  await mp_pushState();
  App.renderMpState();
}