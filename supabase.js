/**
 * supabase.js — Supabase client, Auth, and all database helpers.
 * With robust error handling to prevent silent failures.
 */

// ─── ① REPLACE WITH YOUR PROJECT CREDENTIALS ──────────────────────────
const SUPABASE_URL      = 'https://tgrmnotrqyzzwhryzlfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncm1ub3RycXl6endocnl6bGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjY0OTUsImV4cCI6MjA5NzkwMjQ5NX0.FPLZf2mVIjIs6UWlVHViGNa4NcBOdt6fP1xUG6v1poU';
// ──────────────────────────────────────────────────────────────────────

let db;

try {
  const { createClient } = supabase;
  db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('[Supabase] Client initialised successfully.');
} catch (err) {
  console.error('[Supabase] Initialisation failed:', err);
  alert('⚠️ Could not connect to the server. Please check your internet and refresh the page.');
}

// ═══════════════════════════════════════════════════════════════════════════
// AUTH HELPERS
// ═══════════════════════════════════════════════════════════════════════════

async function authSignUp(email, password, displayName) {
  if (!db) throw new Error('Supabase client not initialised.');
  const { data, error } = await db.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } }
  });
  return { user: data?.user, error };
}

async function authSignIn(email, password) {
  if (!db) throw new Error('Supabase client not initialised.');
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  return { user: data?.user, session: data?.session, error };
}

async function authSignOut() {
  if (!db) return;
  await db.auth.signOut();
}

async function authGetCurrentUser() {
  if (!db) return null;
  const { data } = await db.auth.getUser();
  return data?.user || null;
}

function authOnStateChange(callback) {
  if (!db) return () => {};
  return db.auth.onAuthStateChange((_event, session) => {
    callback(session?.user || null);
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// USER PROGRESS HELPERS
// ═══════════════════════════════════════════════════════════════════════════

async function dbLoadUserProgress(userId) {
  if (!db) return null;
  const { data, error } = await db
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) { console.error('[DB] loadUserProgress:', error); return null; }
  if (!data) return { history: [], bookmarks: [], mistakes: [] };
  return {
    history:   data.history   || [],
    bookmarks: data.bookmarks || [],
    mistakes:  data.mistakes  || [],
  };
}

async function dbSaveUserProgress(userId, { history, bookmarks, mistakes }) {
  if (!db) return;
  const { error } = await db
    .from('user_progress')
    .upsert({
      user_id:   userId,
      history,
      bookmarks,
      mistakes,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });
  if (error) console.error('[DB] saveUserProgress:', error);
}

// ═══════════════════════════════════════════════════════════════════════════
// DAILY CHALLENGE HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function getDailyKey() {
  return new Date().toISOString().slice(0, 10);
}

async function dbGetDailyLeaderboard() {
  if (!db) return [];
  const today = getDailyKey();
  const { data, error } = await db
    .from('daily_challenge')
    .select('display_name, score, accuracy, time_taken')
    .eq('challenge_date', today)
    .order('score', { ascending: false })
    .order('time_taken', { ascending: true })
    .limit(20);
  if (error) { console.error('[DB] getDailyLeaderboard:', error); return []; }
  return data || [];
}

async function dbSubmitDailyResult({ userId, displayName, score, accuracy, timeTaken }) {
  if (!db) return false;
  const today = getDailyKey();

  if (userId) {
    const { data: existing } = await db
      .from('daily_challenge')
      .select('id')
      .eq('user_id', userId)
      .eq('challenge_date', today)
      .maybeSingle();
    if (existing) return false;
  }

  const { error } = await db.from('daily_challenge').insert({
    user_id:        userId || null,
    display_name:   displayName,
    score,
    accuracy,
    time_taken:     timeTaken,
    challenge_date: today,
  });
  if (error) { console.error('[DB] submitDailyResult:', error); return false; }
  return true;
}

async function dbCheckDailySubmitted(userId) {
  const today = getDailyKey();
  if (!userId) {
    return localStorage.getItem('mm_daily_submitted') === today;
  }
  if (!db) return false;
  const { data } = await db
    .from('daily_challenge')
    .select('id')
    .eq('user_id', userId)
    .eq('challenge_date', today)
    .maybeSingle();
  return !!data;
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOM HELPERS (for Multiplayer – unchanged from original)
// ═══════════════════════════════════════════════════════════════════════════

async function dbGetRoom(roomCode) {
  if (!db) throw new Error('Supabase client not initialised.');
  const { data, error } = await db
    .from('rooms')
    .select('*')
    .eq('room_code', roomCode)
    .eq('status', 'active')
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function dbCreateRoom(roomCode, initialState) {
  if (!db) throw new Error('Supabase client not initialised.');
  const { error } = await db.from('rooms').insert({
    room_code:  roomCode,
    room_state: initialState,
    status:     'active',
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

async function dbUpdateRoomState(roomCode, newState) {
  if (!db) throw new Error('Supabase client not initialised.');
  const { error } = await db
    .from('rooms')
    .update({ room_state: newState, updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
  if (error) throw error;
}

async function dbCloseRoom(roomCode) {
  if (!db) return;
  await db
    .from('rooms')
    .update({ status: 'closed', updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
}

function dbSubscribeRoom(roomCode, onStateChange, onWhisper) {
  if (!db) throw new Error('Supabase client not initialised.');
  const channel = db.channel(`room:${roomCode}`, {
    config: { broadcast: { ack: false } }
  });
  channel.on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'rooms', filter: `room_code=eq.${roomCode}` },
    (payload) => {
      if (payload.new && payload.new.room_state) onStateChange(payload.new.room_state);
    }
  );
  if (onWhisper) {
    channel.on('broadcast', { event: 'guest_whisper' }, (payload) => {
      onWhisper(payload.payload);
    });
  }
  channel.subscribe();
  return channel;
}

async function dbSendWhisperToHost(channel, playerId, answer) {
  if (!channel) return;
  await channel.send({
    type: 'broadcast',
    event: 'guest_whisper',
    payload: { playerId, answer }
  });
}

async function dbUnsubscribeRoom(channel) {
  if (channel) await db.removeChannel(channel);
}