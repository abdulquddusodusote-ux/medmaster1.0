/**
 * supabase.js — everything that talks to the database lives here.
 * The rest of the app only uses the DB object defined below.
 */

// ─── Project credentials (public key — safe to publish while the database
//     rules from setup.sql are in place) ────────────────────────────────────
const SUPABASE_URL      = 'https://tgrmnotrqyzzwhryzlfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncm1ub3RycXl6endocnl6bGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjY0OTUsImV4cCI6MjA5NzkwMjQ5NX0.FPLZf2mVIjIs6UWlVHViGNa4NcBOdt6fP1xUG6v1poU';

const DB = (() => {
  let client = null;
  try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      });
    }
  } catch (err) {
    console.error('[DB] could not start:', err);
  }

  const need = () => { if (!client) throw new Error('No connection to the server. Check your internet and reload.'); return client; };
  const fail = (error) => { if (error) throw new Error(error.message || String(error)); };

  /** Database row -> the question shape the app uses. */
  const fromRow = (r) => ({
    id: r.id, course: r.course, topic: r.topic, subTopic: r.subtopic || 'General',
    type: r.type, question: r.question, options: r.options || null, answer: r.answer,
    explanation: r.explanation || '', tags: r.tags || [], extra: r.extra || {},
    active: r.active !== false, updatedAt: r.updated_at,
  });
  /** App question -> database row. */
  const toRow = (q) => {
    const row = {
      course: q.course, topic: q.topic, subtopic: q.subTopic || 'General', type: q.type,
      question: q.question, options: q.options || null, answer: q.answer,
      explanation: q.explanation || '', tags: q.tags || [], extra: q.extra || {},
      active: q.active !== false,
    };
    if (q.id) row.id = q.id;
    return row;
  };

  // ═══ AUTH ═══════════════════════════════════════════════════════════════
  const auth = {
    /** Reads the saved session from the device. Fast; no "flash" of the sign-in page. */
    async getSession() {
      if (!client) return null;
      try {
        const { data } = await client.auth.getSession();
        return data?.session || null;
      } catch (err) { console.warn('[DB] getSession', err); return null; }
    },
    async signIn(email, password) {
      const { data, error } = await need().auth.signInWithPassword({ email, password });
      return { user: data?.user || null, session: data?.session || null, error };
    },
    async signUp(email, password, displayName) {
      const { data, error } = await need().auth.signUp({
        email, password,
        options: { data: { display_name: displayName }, emailRedirectTo: location.origin + location.pathname },
      });
      return { user: data?.user || null, session: data?.session || null, error };
    },
    async resendConfirmation(email) {
      const { error } = await need().auth.resend({ type: 'signup', email, options: { emailRedirectTo: location.origin + location.pathname } });
      return { error };
    },
    async sendPasswordReset(email) {
      const { error } = await need().auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      return { error };
    },
    async updatePassword(password) {
      const { error } = await need().auth.updateUser({ password });
      return { error };
    },
    async updateDisplayName(name) {
      const { data, error } = await need().auth.updateUser({ data: { display_name: name } });
      return { user: data?.user || null, error };
    },
    async signOut() { if (client) { try { await client.auth.signOut(); } catch (e) { console.warn(e); } } },
    /**
     * IMPORTANT: the callback must not call the database directly — Supabase
     * can lock up if it does. We hand the event over with setTimeout instead.
     */
    onChange(callback) {
      if (!client) return;
      client.auth.onAuthStateChange((event, session) => {
        setTimeout(() => callback(event, session), 0);
      });
    },
  };

  // ═══ STUDENT PROGRESS ═══════════════════════════════════════════════════
  const progress = {
    async load(userId) {
      const { data, error } = await need().from('mm_progress').select('data, updated_at').eq('user_id', userId).maybeSingle();
      fail(error);
      return data ? data.data : null;
    },
    async save(userId, state) {
      const { error } = await need().from('mm_progress').upsert({ user_id: userId, data: state }, { onConflict: 'user_id' });
      fail(error);
    },
    /** One-time read of the old progress table, so nobody loses earlier work. */
    async loadLegacy(userId) {
      try {
        const { data, error } = await need().from('user_progress').select('*').eq('user_id', userId).maybeSingle();
        if (error) return null;
        return data || null;
      } catch (_) { return null; }
    },
  };

  // ═══ QUESTION BANK ══════════════════════════════════════════════════════
  const questions = {
    /** Everything changed since `sinceIso` (or the whole bank when null). */
    async fetchSince(sinceIso) {
      const c = need();
      const all = [];
      const step = 1000;
      for (let from = 0; ; from += step) {
        let q = c.from('mm_questions').select('*').order('updated_at', { ascending: true }).order('id', { ascending: true }).range(from, from + step - 1);
        if (sinceIso) q = q.gt('updated_at', sinceIso);
        const { data, error } = await q;
        fail(error);
        if (!data || !data.length) break;
        all.push(...data.map(fromRow));
        if (data.length < step) break;
      }
      return all;
    },
    async count() {
      const { count, error } = await need().from('mm_questions').select('id', { count: 'exact', head: true });
      fail(error);
      return count || 0;
    },
    async insertMany(list) {
      const out = [];
      for (let i = 0; i < list.length; i += 200) {
        const { data, error } = await need().from('mm_questions').insert(list.slice(i, i + 200).map(toRow)).select('*');
        fail(error);
        out.push(...(data || []).map(fromRow));
      }
      return out;
    },
    /** Used by the one-time import: adds rows, skips ids already there. */
    async importChunk(list) {
      const { error } = await need().from('mm_questions').upsert(list.map(toRow), { onConflict: 'id', ignoreDuplicates: true });
      fail(error);
    },
    async update(id, q) {
      const row = toRow(q); delete row.id;
      const { data, error } = await need().from('mm_questions').update(row).eq('id', id).select('*').maybeSingle();
      fail(error);
      if (!data) throw new Error('That question could not be updated (not found, or you are not an admin).');
      return fromRow(data);
    },
    async setActive(id, active) {
      const { data, error } = await need().from('mm_questions').update({ active }).eq('id', id).select('*').maybeSingle();
      fail(error);
      if (!data) throw new Error('That question could not be changed (not found, or you are not an admin).');
      return fromRow(data);
    },
    /** Rename (or merge) a course, topic or sub-topic across the bank. */
    async rename(level, where, newName) {
      const col = level === 'course' ? 'course' : level === 'topic' ? 'topic' : 'subtopic';
      let q = need().from('mm_questions').update({ [col]: newName }).eq('course', where.course);
      if (level !== 'course') q = q.eq('topic', where.topic);
      if (level === 'subTopic') q = q.eq('subtopic', where.subTopic);
      const { data, error } = await q.select('id');
      fail(error);
      return (data || []).length;
    },
  };

  // ═══ SETTINGS ═══════════════════════════════════════════════════════════
  const settings = {
    async load() {
      const { data, error } = await need().from('mm_settings').select('value').eq('key', 'app').maybeSingle();
      fail(error);
      return data ? data.value : null;
    },
    async save(value) {
      const { error } = await need().from('mm_settings').upsert({ key: 'app', value }, { onConflict: 'key' });
      fail(error);
    },
  };

  // ═══ ADMINS ═════════════════════════════════════════════════════════════
  const admins = {
    async amI() {
      if (!client) return false;
      try {
        const { data, error } = await client.rpc('mm_is_admin');
        if (error) return false;
        return data === true;
      } catch (_) { return false; }
    },
    async list() {
      const { data, error } = await need().from('mm_admins').select('user_id, email, added_at').order('added_at');
      fail(error);
      return data || [];
    },
    async add(email) {
      const { data, error } = await need().rpc('mm_add_admin', { p_email: email });
      fail(error);
      return data;
    },
    async remove(userId) {
      const { error } = await need().from('mm_admins').delete().eq('user_id', userId);
      fail(error);
    },
  };

  // ═══ DAILY CHALLENGE ════════════════════════════════════════════════════
  const daily = {
    async getSet(date) {
      const { data, error } = await need().from('mm_daily_sets').select('question_ids').eq('challenge_date', date).maybeSingle();
      fail(error);
      return data ? data.question_ids : null;
    },
    async createSet(date, ids) {
      // If another student created today's set a moment ago, this quietly does nothing.
      const { error } = await need().from('mm_daily_sets').upsert({ challenge_date: date, question_ids: ids }, { onConflict: 'challenge_date', ignoreDuplicates: true });
      fail(error);
    },
    async leaderboard(date) {
      const { data, error } = await need().from('mm_daily_scores')
        .select('user_id, display_name, score, total, time_taken')
        .eq('challenge_date', date)
        .order('score', { ascending: false }).order('time_taken', { ascending: true }).limit(25);
      fail(error);
      return data || [];
    },
    async submit(row) {
      const { error } = await need().from('mm_daily_scores').insert(row);
      if (error && !/duplicate|unique/i.test(error.message || '')) fail(error);
      return !error;
    },
  };

  // ═══ QUESTION REPORTS ═══════════════════════════════════════════════════
  const reports = {
    async add(questionId, note) {
      const { error } = await need().from('mm_reports').insert({ question_id: questionId, note });
      fail(error);
    },
    async listOpen() {
      const { data, error } = await need().from('mm_reports').select('*').eq('resolved', false).order('created_at', { ascending: false }).limit(200);
      fail(error);
      return data || [];
    },
    async resolve(id) {
      const { error } = await need().from('mm_reports').update({ resolved: true }).eq('id', id);
      fail(error);
    },
  };

  // ═══ MULTIPLAYER ROOMS (existing "rooms" table) ═════════════════════════
  const rooms = {
    async get(code) {
      const { data, error } = await need().from('rooms').select('*').eq('room_code', code).eq('status', 'active').maybeSingle();
      fail(error);
      return data;
    },
    async create(code, state) {
      const { error } = await need().from('rooms').insert({ room_code: code, room_state: state, status: 'active', updated_at: new Date().toISOString() });
      fail(error);
    },
    async update(code, state) {
      const { error } = await need().from('rooms').update({ room_state: state, updated_at: new Date().toISOString() }).eq('room_code', code);
      fail(error);
    },
    async close(code) {
      if (!client) return;
      await client.from('rooms').update({ status: 'closed', updated_at: new Date().toISOString() }).eq('room_code', code);
    },
    /** Every player listens to every kind of message, so a new host can take over. */
    subscribe(code, handlers) {
      const channel = need().channel(`room:${code}`, { config: { broadcast: { ack: false } } });
      channel.on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'rooms', filter: `room_code=eq.${code}` },
        (payload) => { if (payload.new && payload.new.room_state) handlers.onState(payload.new.room_state); });
      channel.on('broadcast', { event: 'guest_whisper' }, (p) => handlers.onAnswer && handlers.onAnswer(p.payload));
      channel.on('broadcast', { event: 'guest_join' },    (p) => handlers.onJoin && handlers.onJoin(p.payload));
      channel.on('broadcast', { event: 'host_action' },   (p) => handlers.onHostAction && handlers.onHostAction(p.payload));
      channel.subscribe();
      return channel;
    },
    async send(channel, event, payload) {
      if (!channel) return;
      await channel.send({ type: 'broadcast', event, payload });
    },
    async unsubscribe(channel) { if (channel && client) await client.removeChannel(channel); },
  };

  return { get ready() { return !!client; }, auth, progress, questions, settings, admins, daily, reports, rooms };
})();
