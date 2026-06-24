/**
 * supabase.js — Supabase client initialization and database helpers.
 *
 * SETUP INSTRUCTIONS (do this once in your Supabase project):
 * ─────────────────────────────────────────────────────────────
 * 1. Go to https://app.supabase.com → your project → SQL Editor
 * 2. Run the schema below (also in schema.sql) to create the rooms table.
 * 3. Replace SUPABASE_URL and SUPABASE_ANON_KEY below with your project values.
 *    (Dashboard → Settings → API)
 *
 * SQL SCHEMA (run once):
 * ──────────────────────
 *   create table public.rooms (
 *     room_code   text primary key,
 *     room_state  jsonb not null default '{}'::jsonb,
 *     status      text not null default 'active',
 *     updated_at  timestamptz not null default now()
 *   );
 *
 *   -- Allow anyone to read / write rooms (use RLS policies for production).
 *   alter table public.rooms enable row level security;
 *   create policy "Public room access" on public.rooms
 *     for all using (true) with check (true);
 *
 *   -- Realtime: enable for this table
 *   alter publication supabase_realtime add table public.rooms;
 */

// ─── ① Replace these two values with your project credentials ─────────────
const SUPABASE_URL      = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
// ──────────────────────────────────────────────────────────────────────────

const { createClient } = supabase;   // loaded from the CDN <script> in index.html
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── Room helpers ──────────────────────────────────────────────────────────

/** Fetch a single room record by code. Returns the row or null. */
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

/** Insert a new room. Throws if the code already exists. */
async function dbCreateRoom(roomCode, initialState) {
  const { error } = await db.from('rooms').insert({
    room_code:  roomCode,
    room_state: initialState,
    status:     'active',
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

/**
 * Overwrite room_state for an existing room.
 * Only the host should call this; guests are read-only consumers.
 */
async function dbUpdateRoomState(roomCode, newState) {
  const { error } = await db
    .from('rooms')
    .update({ room_state: newState, updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
  if (error) throw error;
}

/** Mark a room as closed so stale codes are not joinable. */
async function dbCloseRoom(roomCode) {
  await db
    .from('rooms')
    .update({ status: 'closed', updated_at: new Date().toISOString() })
    .eq('room_code', roomCode);
}

/**
 * Subscribe to realtime changes on a single room.
 * The callback receives the full, up-to-date room_state object.
 * Returns the Supabase RealtimeChannel so the caller can unsubscribe.
 */
function dbSubscribeRoom(roomCode, onStateChange) {
  const channel = db
    .channel(`room:${roomCode}`)
    .on(
      'postgres_changes',
      {
        event:  'UPDATE',
        schema: 'public',
        table:  'rooms',
        filter: `room_code=eq.${roomCode}`,
      },
      (payload) => {
        if (payload.new && payload.new.room_state) {
          onStateChange(payload.new.room_state);
        }
      }
    )
    .subscribe();
  return channel;
}

/** Unsubscribe and clean up a realtime channel. */
async function dbUnsubscribeRoom(channel) {
  if (channel) await db.removeChannel(channel);
}
