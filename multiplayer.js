/**
 * multiplayer.js — Supabase Realtime multiplayer engine for MedMaster.
 *
 * NEW ARCHITECTURE: "Authoritative Central Brain + Ready-Up Auto-Advance"
 * ──────────────────────────────────────────────────────────────────
 * 1. Guests are "dumb". They cannot evaluate scores or write to the database.
 * 2. When a Guest answers, they send a tiny, raw whisper to the Host.
 * 3. The Host is the "Smart Server". It receives whispers, calculates scores, 
 * updates the master game state, and pushes it to Supabase.
 * 4. Supabase syncs that master state down to everyone simultaneously. 
 * This makes "Split-Brain" desyncs mathematically impossible.
 * 5. Pacing: When all players answer, the Host snaps the global timer to 
 * 3 seconds (Review Phase). When the timer hits 0, the Host automatically
 * pulls the next question.
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
  return Math.random().toString(36).substring(2, 12);
}

// ─── State push / apply ────────────────────────────────────────────────────

/**
 * Write the current App.mp state to Supabase.
 * ONLY THE HOST calls this function to sync the official master state.
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
    lastHeartbeat:            m.lastHeartbeat || Date.now(),
  };

  try {
    await dbUpdateRoomState(m.roomCode, roomState);
  } catch (err) {
    console.error('[MP] pushState failed:', err);
  }
}

/**
 * Apply the official room_state (from Supabase DB) to the local UI.
 * This is the ONLY place where buttons turn green/red and scores update.
 */
function mp_applyState(roomState) {
  const m = App.mp;
  if (!m.inRoom) return;

  const prevPhase = m.state;
  const prevIndex = m.currentIndex;
  const prevDuration = m.questionDuration;

  // ─── GUEST LOGGING FIX ─────────────────────────────────────────────────
  // Guests detect Phase/Index changes from the INCOMING database state.
  // The Host handles its own logging inside mp_hostTimerHitZero.
  const isRematchRestart = prevPhase === MP_PHASES.REVIEW && roomState.phase === MP_PHASES.QUESTION;
  if (!m.isHost && isRematchRestart) {
    // Host started a fresh "Play Again" round — clear the previous game's log
    // instead of logging a stale question from the game that just ended.
    m.answerLog = [];
    m.myLastAnswer = null;
    m.isWaitingForDatabase = false;
  } else if (!m.isHost) {
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
  // ───────────────────────────────────────────────────────────────────────

  m.state                    = roomState.phase;
  m.questions                = roomState.questions ?? [];
  m.currentIndex             = roomState.currentIndex ?? 0;
  m.questionDuration         = roomState.questionDuration ?? 20;
  m.originalQuestionDuration = roomState.originalQuestionDuration ?? 20;
  m.questionStartTime        = roomState.questionStartTime ?? 0;
  m.players                  = roomState.players ?? [];
  m.lastHeartbeat            = roomState.lastHeartbeat ?? m.lastHeartbeat ?? Date.now();
  m.hostId                   = roomState.hostId ?? m.hostId;

  // Unlock the UI if the database officially recorded my answer
  const me = m.players.find(p => p.id === m.myId);
  if (me && me.currentAnswer) {
    m.isWaitingForDatabase = false;
    if (!m.myLastAnswer) m.myLastAnswer = me.currentAnswer; 
  }

  // ─── GUEST TIMER FIX ───────────────────────────────────────────────────
  // Restart the local UI timer safely if a new question starts, 
  // OR if the Host just snapped the timer to 3 seconds for Review,
  // OR if the phase just officially switched from LOBBY to QUESTION.
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

// ─── Universal Action Submission ───────────────────────────────────────────

/**
 * Triggered when ANY player clicks an answer button.
 * UI enters a "waiting" state while the Host/Database processes it.
 */
async function mp_submitAnswer(answer) {
  const m = App.mp;
  const me = m.players.find(p => p.id === m.myId);
  
  if (!me || me.currentAnswer || m.isWaitingForDatabase || me.role === 'spectator') return;

  m.isWaitingForDatabase = true; // Lock the button immediately
  m.myLastAnswer = answer; 
  App.renderMpState(); // Show loading state on button

  if (m.isHost) {
    // Host grades themselves instantly
    await mp_hostProcessAnswer(m.myId, answer);
  } else {
    // Guest shoots a raw electrical whisper to the Host
    const trySendWhisper = async (isRetry) => {
      try {
        await dbSendWhisperToHost(m.channel, m.myId, answer);
      } catch (err) {
        console.error('[MP] Whisper failed:', err);
        if (!isRetry) {
          // Will be retried by the timeout below
        } else {
          m.isWaitingForDatabase = false; // Unlock if the retry also fails
          App.renderMpState();
        }
      }
    };

    await trySendWhisper(false);

    // If the host hasn't acknowledged (via a state push unlocking us) within
    // 4 seconds, retry the whisper once. If it fails again, unlock the UI
    // and let the user manually retry.
    setTimeout(async () => {
      if (!m.isWaitingForDatabase) return; // Already unlocked by a real state update
      await trySendWhisper(true);

      // Give the retry a moment to land; if still stuck, unlock with a message.
      setTimeout(() => {
        if (m.isWaitingForDatabase) {
          m.isWaitingForDatabase = false;
          m.myLastAnswer = null;
          alert('Network error. Tap to retry.');
          App.renderMpState();
        }
      }, 4000);
    }, 4000);
  }
}

// ─── Local Countdown Timer (Drift-Proof) ───────────────────────────────────

/**
 * Everyone runs this locally so they can watch the clock tick down.
 * However, ONLY the Host actually triggers the "Next Question" logic.
 */
function mp_startLocalTimer() {
  const m = App.mp;
  clearInterval(m.timerInterval);

  m.timerInterval = setInterval(() => {
    // Using absolute Date.now() prevents timers from drifting out of sync
    const elapsed = Math.floor((Date.now() - m.questionStartTime) / 1000);
    m.timer = Math.max(0, m.questionDuration - elapsed);

    App.updateMpTimerDisplay();
    
    if (m.timer <= 0) {
      clearInterval(m.timerInterval);
      m.timerInterval = null;
      
      // Guests do nothing. The Host strictly controls the game flow.
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

  const initialState = {
    phase:                    MP_PHASES.LOBBY,
    players:                  [{ id: myId, name: playerName, score: 0, currentAnswer: null,
                                 correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0, role: 'player' }],
    questions,
    currentIndex:             0,
    questionDuration,
    originalQuestionDuration: questionDuration,
    questionStartTime:        0,
    hostId:                   myId,
    lastHeartbeat:            Date.now(),
  };

  await dbCreateRoom(roomCode, initialState);

  App.mp = {
    ...App.mp, isHost: true, inRoom: true, roomCode, playerName, myId,
    state: MP_PHASES.LOBBY, players: initialState.players, questions, currentIndex: 0,
    questionDuration, originalQuestionDuration: questionDuration, questionStartTime: 0, 
    answerLog: [], timer: questionDuration, timerInterval: null, channel: null, 
    myLastAnswer: null, isWaitingForDatabase: false, lastHeartbeat: initialState.lastHeartbeat,
    hostId: myId,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, 
    (roomState) => mp_applyState(roomState), 
    (payload) => {
      // The Central Brain listens for incoming guest answers!
      if (App.mp.isHost) {
        mp_hostProcessAnswer(payload.playerId, payload.answer);
      }
    }
  );

  mp_saveIdentity(roomCode, myId, playerName);
  mp_startHeartbeat();
}

/** Guest: join room and enter LOBBY. Joins as a spectator if the game is already underway. */
async function mp_joinRoom(playerName, roomCode) {
  const myId = mp_generateClientId();

  const row = await dbGetRoom(roomCode);
  if (!row) throw new Error('Room not found. Check the code.');

  const state = row.room_state;
  if (state.phase === MP_PHASES.REVIEW) throw new Error('This game has already finished.');

  const isSpectator = state.phase === MP_PHASES.QUESTION;

  state.players = state.players ?? [];
  if (!state.players.find(p => p.id === myId)) {
    state.players.push({
      id: myId, name: playerName, score: 0, currentAnswer: null,
      correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0,
      role: isSpectator ? 'spectator' : 'player',
    });
  }
  await dbUpdateRoomState(roomCode, state);

  App.mp = {
    ...App.mp, isHost: false, inRoom: true, roomCode, playerName, myId,
    state: state.phase, players: state.players, questions: state.questions ?? [],
    currentIndex: state.currentIndex ?? 0, 
    questionDuration: state.questionDuration ?? 20,
    originalQuestionDuration: state.originalQuestionDuration ?? 20,
    questionStartTime: state.questionStartTime ?? 0, 
    answerLog: [], myLastAnswer: null,
    timer: state.questionDuration ?? 20, timerInterval: null, channel: null,
    isWaitingForDatabase: false, lastHeartbeat: state.lastHeartbeat ?? Date.now(),
    hostId: state.hostId,
  };

  App.mp.channel = dbSubscribeRoom(roomCode, 
    (roomState) => mp_applyState(roomState),
    null // Guests do not listen to whispers, only the Host does
  );

  mp_saveIdentity(roomCode, myId, playerName);
  mp_startHostMonitor();

  if (App.mp.state === MP_PHASES.QUESTION) {
    mp_startLocalTimer();
  }
}

/** Guest/Host: silently rejoin a room retaining a previously-assigned myId. */
async function mp_rejoinRoom(playerName, roomCode, myId) {
  const row = await dbGetRoom(roomCode);
  if (!row) throw new Error('Room not found or no longer active.');

  const state = row.room_state;
  state.players = state.players ?? [];

  const existing = state.players.find(p => p.id === myId);
  if (!existing) {
    // We're not in the player list anymore (e.g. host closed/reset it) — can't silently rejoin.
    throw new Error('Player no longer in room.');
  }

  const isHost = state.hostId === myId;

  App.mp = {
    ...App.mp, isHost, inRoom: true, roomCode, playerName, myId,
    state: state.phase, players: state.players, questions: state.questions ?? [],
    currentIndex: state.currentIndex ?? 0,
    questionDuration: state.questionDuration ?? 20,
    originalQuestionDuration: state.originalQuestionDuration ?? 20,
    questionStartTime: state.questionStartTime ?? 0,
    answerLog: [], myLastAnswer: existing.currentAnswer || null,
    timer: state.questionDuration ?? 20, timerInterval: null, channel: null,
    isWaitingForDatabase: false, lastHeartbeat: state.lastHeartbeat ?? Date.now(),
    hostId: state.hostId,
  };

  App.mp.channel = dbSubscribeRoom(roomCode,
    (roomState) => mp_applyState(roomState),
    isHost ? (payload) => { if (App.mp.isHost) mp_hostProcessAnswer(payload.playerId, payload.answer); } : null
  );

  if (isHost) {
    mp_startHeartbeat();
  } else {
    mp_startHostMonitor();
  }

  if (App.mp.state === MP_PHASES.QUESTION) {
    mp_startLocalTimer();
  }
}


// ─── Persistent Player Identity ────────────────────────────────────────────

const MP_IDENTITY_KEY = 'mm_mp_identity';

function mp_saveIdentity(roomCode, myId, playerName) {
  try {
    localStorage.setItem(MP_IDENTITY_KEY, JSON.stringify({ roomCode, myId, playerName }));
  } catch (_) { /* best-effort */ }
}

function mp_clearIdentity() {
  try { localStorage.removeItem(MP_IDENTITY_KEY); } catch (_) { /* best-effort */ }
}

function mp_loadIdentity() {
  try {
    const raw = localStorage.getItem(MP_IDENTITY_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_) { return null; }
}

async function mp_leaveRoom() {
  const m = App.mp;
  clearInterval(m.timerInterval);
  clearInterval(m.heartbeatInterval);
  clearInterval(m.hostMonitorInterval);

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

  mp_clearIdentity();

  App.mp = {
    isHost: false, inRoom: false, roomCode: '', playerName: '', myId: '',
    players: [], questions: [], currentIndex: 0, state: 'SETUP',
    timer: 0, timerInterval: null, questionDuration: 20, questionStartTime: 0,
    originalQuestionDuration: 20, answerLog: [], channel: null, isWaitingForDatabase: false,
    heartbeatInterval: null, hostMonitorInterval: null, lastHeartbeat: 0, hostId: '',
  };
}

// ─── Host Central Brain Logic (Grading & Pacing) ───────────────────────────

/** Host: start the game from the lobby. */
async function mp_hostStartGame() {
  const m = App.mp;
  if (!m.isHost) return;
  m.players.forEach(p => p.currentAnswer = null);
  m.state             = MP_PHASES.QUESTION;
  m.currentIndex      = 0;
  m.questionStartTime = Date.now();
  m.questionDuration  = m.originalQuestionDuration;
  m.timer             = m.questionDuration;
  m.myLastAnswer      = null;

  mp_startLocalTimer();
  await mp_pushState();
}

/**
 * HOST ONLY: Processes whispers, evaluates answers against the master DB,
 * and handles the Ready-Up Auto Advance pacing logic.
 */
async function mp_hostProcessAnswer(playerId, answer) {
  const m = App.mp;
  if (m.state !== MP_PHASES.QUESTION) return;

  const player = m.players.find(p => p.id === playerId);
  if (!player || player.currentAnswer) return; // Ignore duplicates/spam

  const q = m.questions[m.currentIndex];
  const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;

  // Assign the answer
  player.currentAnswer = answer;

  // Grade the answer
  if (answer === correctVal) {
    player.score = (player.score || 0) + 1; // 1 flat point. No speed bonuses.
    player.correctCount = (player.correctCount || 0) + 1;
  } else {
    player.wrongCount = (player.wrongCount || 0) + 1;
  }

  const seen = (player.correctCount || 0) + (player.wrongCount || 0) + (player.skippedCount || 0);
  player.accuracy = seen > 0 ? Math.round((player.correctCount / seen) * 100) : 0;

  // Pacing Check: Did everyone (excluding spectators) just finish answering?
  const activePlayers = m.players.filter(p => p.role !== 'spectator');
  const allAnswered = activePlayers.length > 0 && activePlayers.every(p => p.currentAnswer);
  if (allAnswered && m.questionDuration > 3) {
    // Snap the timer down to a 3-second Review Phase
    m.questionStartTime = Date.now();
    m.questionDuration = 3;
    m.timer = 3;
    mp_startLocalTimer(); // Restart Host UI safely
  }

  // Push official state to Database. 
  // (This is the moment the UI will unlock and turn green/red for the Guest!)
  await mp_pushState();
}

/** * HOST ONLY: Automatically triggered when the Host's timer strictly hits 0. 
 * Punishes unanswered players, logs the host's review, and pulls the next question.
 */
async function mp_hostTimerHitZero() {
  const m = App.mp;

  // Grade anyone who let the timer run out (spectators don't participate)
  m.players.forEach(p => {
    if (p.role === 'spectator') return;
    if (!p.currentAnswer) {
      p.skippedCount = (p.skippedCount || 0) + 1;
      const seen = (p.correctCount || 0) + (p.wrongCount || 0) + (p.skippedCount || 0);
      p.accuracy = seen > 0 ? Math.round((p.correctCount / seen) * 100) : 0;
    }
  });

  // ─── HOST LOGGING FIX ──────────────────────────────────────────────────
  // The Host must securely record its personal log BEFORE changing the phase
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
  // ───────────────────────────────────────────────────────────────────────

  m.currentIndex++;
  
  if (m.currentIndex >= m.questions.length) {
    m.state = MP_PHASES.REVIEW;
  } else {
    // Set up the Next Question
    m.players.forEach(p => p.currentAnswer = null);
    m.questionStartTime = Date.now();
    m.questionDuration = m.originalQuestionDuration; // Reset from 3s review back to normal time
    m.timer = m.questionDuration;
  }

  await mp_pushState();
  
  if (m.state === MP_PHASES.QUESTION) {
    mp_startLocalTimer();
  }
}

// ─── Host Migration (Heartbeat) ─────────────────────────────────────────────

/** HOST ONLY: writes a heartbeat to the room state every 10 seconds so guests
 *  can detect if the host has disconnected. */
function mp_startHeartbeat() {
  const m = App.mp;
  clearInterval(m.heartbeatInterval);
  m.heartbeatInterval = setInterval(async () => {
    const m2 = App.mp;
    if (!m2.isHost || !m2.inRoom) { clearInterval(m2.heartbeatInterval); return; }
    m2.lastHeartbeat = Date.now();
    await mp_pushState();
  }, 10000);
}

/** GUEST ONLY: monitors the host's heartbeat. If it goes stale (>15s), the
 *  guest with the alphabetically-first playerId promotes itself to host. */
function mp_startHostMonitor() {
  const m = App.mp;
  clearInterval(m.hostMonitorInterval);
  m.hostMonitorInterval = setInterval(async () => {
    const m2 = App.mp;
    if (m2.isHost || !m2.inRoom) { clearInterval(m2.hostMonitorInterval); return; }
    if (m2.lastHeartbeat && (Date.now() - m2.lastHeartbeat > 15000)) {
      const sortedIds = m2.players.map(p => p.id).sort();
      if (sortedIds[0] === m2.myId) {
        await mp_promoteSelfToHost();
      }
    }
  }, 5000);
}

/** Promote the current guest to host after detecting the previous host is dead. */
async function mp_promoteSelfToHost() {
  const m = App.mp;
  clearInterval(m.hostMonitorInterval);

  m.isHost = true;
  m.hostId = m.myId;
  m.lastHeartbeat = Date.now();

  // Re-subscribe so we now also receive guest whispers as the new "Central Brain".
  if (m.channel) await dbUnsubscribeRoom(m.channel);
  m.channel = dbSubscribeRoom(m.roomCode,
    (roomState) => mp_applyState(roomState),
    (payload) => { if (App.mp.isHost) mp_hostProcessAnswer(payload.playerId, payload.answer); }
  );

  mp_startHeartbeat();

  if (m.state === MP_PHASES.QUESTION) {
    // Give the current question a fresh time window so players aren't
    // instantly punished by a clock that was ticking on the dead host.
    m.questionStartTime = Date.now();
    mp_startLocalTimer();
  }

  await mp_pushState();
}

// ─── Post-Game Rematch ──────────────────────────────────────────────────────

/** HOST ONLY: reshuffles a fresh set of questions from the same pool, resets
 *  scores, and restarts the game instantly with the same players. */
async function mp_hostRematch() {
  const m = App.mp;
  if (!m.isHost) return;

  const sourcePool = (m.questionPool && m.questionPool.length) ? m.questionPool : m.questions;
  const qCount     = m.questions.length;
  const shuffled   = App.shuffleArray(sourcePool);
  m.questions      = shuffled.slice(0, Math.min(qCount, shuffled.length));

  m.players.forEach(p => {
    p.score = 0; p.currentAnswer = null;
    p.correctCount = 0; p.wrongCount = 0; p.skippedCount = 0; p.accuracy = 0;
  });
  m.answerLog          = [];
  m.currentIndex       = 0;
  m.state              = MP_PHASES.QUESTION;
  m.questionDuration    = m.originalQuestionDuration;
  m.questionStartTime  = Date.now();
  m.timer              = m.questionDuration;
  m.myLastAnswer       = null;

  mp_startLocalTimer();
  await mp_pushState();
}
