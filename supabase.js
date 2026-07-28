/**
 * supabase.js — Supabase client, Auth, and all database helpers.
 *
 * TABLES REQUIRED (run the SQL in SUPABASE_SETUP.md):
 *   public.rooms          — multiplayer room state (existing)
 *   public.user_progress  — per-user history, bookmarks, mistakes (NEW)
 *   public.daily_challenge — daily leaderboard entries (NEW)
 */

// ─── ① Replace with your project credentials ──────────────────────────────
const SUPABASE_URL      = 'https://tgrmnotrqyzzwhryzlfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncm1ub3RycXl6endocnl6bGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjY0OTUsImV4cCI6MjA5NzkwMjQ5NX0.FPLZf2mVIjIs6UWlVHViGNa4NcBOdt6fP1xUG6v1poU';
// ──────────────────────────────────────────────────────────────────────────

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ═══════════════════════════════════════════════════════════════════════════
// AUTH HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/** Sign up with email and password. Returns { user, error }. */
async function authSignUp(email, password, displayName) {
  const { data, error } = await db.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } }
  });
  return { user: data?.user, error };
}

/** Sign in with email and password. Returns { user, error }. */
async function authSignIn(email, password) {
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  return { user: data?.user, session: data?.session, error };
}

/** Sign out the current user. */
async function authSignOut() {
  await db.auth.signOut();
}

/** Send a password reset email to the given address. Returns { data, error }. */
async function authResetPassword(email) {
  const { data, error } = await db.auth.resetPasswordForEmail(email);
  return { data, error };
}

/** Get the currently logged-in user, or null if guest. */
async function authGetCurrentUser() {
  const { data } = await db.auth.getUser();
  return data?.user || null;
}

/** Listen for auth state changes (login / logout). */
function authOnStateChange(callback) {
  return db.auth.onAuthStateChange((_event, session) => {
    callback(session?.user || null);
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// USER PROGRESS HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Load a user's progress from Supabase.
 * Returns { history: [], bookmarks: [], mistakes: [] } or null on error.
 */
async function dbLoadUserProgress(userId) {
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

/**
 * Save a user's full progress to Supabase (upsert).
 * Call this whenever history, bookmarks, or mistakes change.
 */
async function dbSaveUserProgress(userId, { history, bookmarks, mistakes }) {
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

/** Get today's date string in YYYY-MM-DD format (used as the daily key). */
function getDailyKey() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Fetch today's leaderboard entries, ordered by score desc, then time_taken asc.
 * Returns an array of { display_name, score, accuracy, time_taken }.
 */
async function dbGetDailyLeaderboard() {
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

/**
 * Submit a daily challenge result.
 * Guests submit with a provided display_name; logged-in users use their account name.
 * Returns true on success, false if the user already submitted today.
 */
async function dbSubmitDailyResult({ userId, displayName, score, accuracy, timeTaken }) {
  const today = getDailyKey();

  // Check for duplicate submission by this user today
  if (userId) {
    const { data: existing } = await db
      .from('daily_challenge')
      .select('id')
      .eq('user_id', userId)
      .eq('challenge_date', today)
      .maybeSingle();
    if (existing) return false; // Already submitted today
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

/**
 * Check if the current user/guest already submitted today.
 * For guests, we use localStorage. For users, we check Supabase.
 */
async function dbCheckDailySubmitted(userId) {
  const today = getDailyKey();
  if (!userId) {
    // Guest: check localStorage
    return localStorage.getItem('mm_daily_submitted') === today;
  }
  const { data } = await db
    .from('daily_challenge')
    .select('id')
    .eq('user_id', userId)
    .eq('challenge_date', today)
    .maybeSingle();
  return !!data;
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOM HELPERS (unchanged from original)
// ═══════════════════════════════════════════════════════════════════════════

async function dbGetRoom(roomCode) {
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
  const { error } = await db.from('rooms').insert({
    room_code:  roomCode,
    room_state: initialState,
    status:     'active',
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

async function dbUpdateRoomState(roomCode, newState) {
  const { error } = await db
    .from('rooms')
    .update({ room_state: newState, updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
  if (error) throw error;
}

async function dbCloseRoom(roomCode) {
  await db
    .from('rooms')
    .update({ status: 'closed', updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
}

function dbSubscribeRoom(roomCode, onStateChange, onWhisper) {
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
