/**
 * supabase.js — Supabase client initialization and database helpers.
 *
 * SETUP INSTRUCTIONS:
 * ─────────────────────────────────────────────────────────────
 * 1. Go to https://app.supabase.com → your project → SQL Editor
 * 2. Run the schema below (also in schema.sql) to create the rooms table.
 * 3. Replace SUPABASE_URL and SUPABASE_ANON_KEY below with your project values.
 *
 * SQL SCHEMA:
 * ──────────────────────
 * create table public.rooms (
 * room_code   text primary key,
 * room_state  jsonb not null default '{}'::jsonb,
 * status      text not null default 'active',
 * updated_at  timestamptz not null default now()
 * );
 *
 * alter table public.rooms enable row level security;
 * create policy "Public room access" on public.rooms for all using (true) with check (true);
 * alter publication supabase_realtime add table public.rooms;
 */

// ─── ① Replace these two values with your project credentials ─────────────
const SUPABASE_URL      = 'https://tgrmnotrqyzzwhryzlfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncm1ub3RycXl6endocnl6bGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjY0OTUsImV4cCI6MjA5NzkwMjQ5NX0.FPLZf2mVIjIs6UWlVHViGNa4NcBOdt6fP1xUG6v1poU'; 
// ──────────────────────────────────────────────────────────────────────────

const { createClient } = supabase;   
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
 * In the Central Brain architecture, ONLY THE HOST calls this function.
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
 * Subscribe to realtime changes AND incoming peer-to-peer whispers.
 */
function dbSubscribeRoom(roomCode, onStateChange, onWhisper) {
  const channel = db.channel(`room:${roomCode}`, {
    config: { broadcast: { ack: false } }
  });
  
  // Listen for the official database state updates pushed by the Host
  channel.on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'rooms', filter: `room_code=eq.${roomCode}` },
    (payload) => {
      if (payload.new && payload.new.room_state) {
        onStateChange(payload.new.room_state);
      }
    }
  );

  // Listen for instant P2P whispers (Guest answers being sent to the Host)
  if (onWhisper) {
    channel.on('broadcast', { event: 'guest_whisper' }, (payload) => {
      onWhisper(payload.payload);
    });
  }

  channel.subscribe();
  return channel;
}

/** * Guests use this to instantly shoot their raw answer to the Host.
 * No math is done locally. It just transmits the click.
 */
async function dbSendWhisperToHost(channel, playerId, answer) {
  if (!channel) return;
  await channel.send({
    type: 'broadcast',
    event: 'guest_whisper',
    payload: { playerId, answer }
  });
}

/** Unsubscribe and clean up a realtime channel. */
async function dbUnsubscribeRoom(channel) {
  if (channel) await db.removeChannel(channel);
}
