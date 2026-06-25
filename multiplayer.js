/**
 * multiplayer.js — Supabase Realtime multiplayer engine for MedMaster.
 *  * NEW ARCHITECTURE: "Authoritative Central Brain + Ready-Up Auto-Advance"
 * ──────────────────────────────────────────────────────────────────
 *    1. Guests are "dumb". They cannot evaluate scores or write to the database.
 *    2. When a Guest answers, they send a tiny, raw whisper to the Host.
 *    3. The Host is the "Smart Server". It receives whispers, calculates scores,
 * updates the master game state, and pushes it to Supabase.
 *    4. Supabase syncs that master state down to everyone simultaneously.
 * This makes "Split-Brain" desyncs mathematically impossible.
 *    5. Pacing: When all players answer, the Host snaps the global timer to
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
m.state                    = roomState.phase;
m.questions                = roomState.questions ?? [];
m.currentIndex             = roomState.currentIndex ?? 0;
m.questionDuration         = roomState.questionDuration ?? 20;
m.originalQuestionDuration = roomState.originalQuestionDuration ?? 20;
m.questionStartTime        = roomState.questionStartTime ?? 0;
m.players                  = roomState.players ?? [];
// Unlock the UI if the database officially recorded my answer
const me = m.players.find(p => p.id === m.myId);
if (me && me.currentAnswer) {
m.isWaitingForDatabase = false;
m.myLastAnswer = me.currentAnswer; // Keep local track for history log
}
// Detect Phase or Question Change: Record personal history log
if ((m.state === MP_PHASES.QUESTION && m.currentIndex !== prevIndex) ||
(m.state === MP_PHASES.REVIEW && prevPhase !== MP_PHASES.REVIEW)) {
const prevQ = m.questions[prevIndex];
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
// Restart the local UI timer safely if a new question starts,
// OR if the Host just snapped the timer to 3 seconds for Review.
if (m.state === MP_PHASES.QUESTION && (m.currentIndex !== prevIndex || m.questionDuration !== prevDuration)) {
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
if (!me || me.currentAnswer || m.isWaitingForDatabase) return;
m.isWaitingForDatabase = true; // Lock the button immediately
m.myLastAnswer = answer;
App.renderMpState(); // Show loading state on button
if (m.isHost) {
// Host grades themselves instantly
await mp_hostProcessAnswer(m.myId, answer);
} else {
// Guest shoots a raw electrical whisper to the Host
try {
await dbSendWhisperToHost(m.channel, m.myId, answer);
} catch (err) {
console.error('[MP] Whisper failed:', err);
m.isWaitingForDatabase = false; // Unlock if network fails
App.renderMpState();
}
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
correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }],
questions,
currentIndex:             0,
questionDuration,
originalQuestionDuration: questionDuration,
questionStartTime:        0,
hostId:                   myId,
};
await dbCreateRoom(roomCode, initialState);
App.mp = {
...App.mp, isHost: true, inRoom: true, roomCode, playerName, myId,
state: MP_PHASES.LOBBY, players: initialState.players, questions, currentIndex: 0,
questionDuration, originalQuestionDuration: questionDuration, questionStartTime: 0,
answerLog: [], timer: questionDuration, timerInterval: null, channel: null,
myLastAnswer: null, isWaitingForDatabase: false
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
currentIndex: state.currentIndex ?? 0,
questionDuration: state.questionDuration ?? 20,
originalQuestionDuration: state.originalQuestionDuration ?? 20,
questionStartTime: state.questionStartTime ?? 0,
answerLog: [], myLastAnswer: null,
timer: state.questionDuration ?? 20, timerInterval: null, channel: null,
isWaitingForDatabase: false
};
App.mp.channel = dbSubscribeRoom(roomCode,
(roomState) => mp_applyState(roomState),
null // Guests do not listen to whispers, only the Host does
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
originalQuestionDuration: 20, answerLog: [], channel: null, isWaitingForDatabase: false
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
// Pacing Check: Did everyone just finish answering?
const allAnswered = m.players.every(p => p.currentAnswer);
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
// Set up the Next Question
m.players.forEach(p => p.currentAnswer = null);
m.questionStartTime = Date.now();
m.questionDuration = m.originalQuestionDuration; // Reset from 3s review back to normal time
m.timer = m.questionDuration;
m.myLastAnswer = null;
}
await mp_pushState();
if (m.state === MP_PHASES.QUESTION) {
mp_startLocalTimer();
}
}
