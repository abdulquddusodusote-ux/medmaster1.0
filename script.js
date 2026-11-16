/**
 * MedMaster — main application (v2)
 *
 * How this file is organised:
 *   1. Small helpers            5. Progress store (XP, history, bookmarks…)
 *   2. Settings (admin-editable) 6. App shell, sign-in, navigation
 *   3. Question types           7. Study modes
 *   4. Question bank            8. Start-up
 *
 * Nothing about the questions, marks, limits or wording is fixed in this
 * file: the values in DEFAULT_SETTINGS are only starting points and every one
 * of them can be changed from the Settings screen inside the app.
 */

// ════════════════════════════════════════════════════════════════════════════
// 1. SMALL HELPERS
// ════════════════════════════════════════════════════════════════════════════

/** Make any text safe to place inside the page. Used on EVERYTHING dynamic. */
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clone = (x) => JSON.parse(JSON.stringify(x));
const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);

/** Settings merge: values saved by the admin win; anything missing falls back to defaults. */
function deepMerge(base, over) {
  if (!isObj(base) || !isObj(over)) return over === undefined ? clone(base) : clone(over);
  const out = {};
  for (const k of Object.keys(base)) out[k] = k in over ? deepMerge(base[k], over[k]) : clone(base[k]);
  for (const k of Object.keys(over)) if (!(k in base)) out[k] = clone(over[k]);
  return out;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/** Same seed -> same order (used as the Daily Challenge fallback). */
function seededShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed >>> 0;
  const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function formatTime(seconds) {
  const s = Math.max(0, Math.round(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}
/** Today's date (YYYY-MM-DD) in the app's time zone, so the day changes at local midnight. */
function dayKey(date = new Date()) {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: Settings.get().app.timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  } catch (_) {
    return new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  }
}
function dayBefore(key) {
  const d = new Date(key + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}
/** Compare two pieces of text loosely (ignores case, spacing, punctuation). */
function looseText(s) { return String(s ?? '').toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}⁺⁻]+/gu, ' ').trim(); }

const LS = {
  get(key, fallback = null) { try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (_) { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { console.warn('[LS] could not save', key, e); return false; } },
  del(key) { try { localStorage.removeItem(key); } catch (_) {} },
};

/** Tiny key/value store on the device for the (large) question bank. */
const DeviceStore = {
  _db: null,
  open() {
    if (this._db) return Promise.resolve(this._db);
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) return reject(new Error('no indexedDB'));
      const req = indexedDB.open('medmaster', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('kv');
      req.onsuccess = () => { this._db = req.result; resolve(this._db); };
      req.onerror = () => reject(req.error);
    });
  },
  async get(key) {
    try {
      const db = await this.open();
      return await new Promise((res, rej) => { const r = db.transaction('kv').objectStore('kv').get(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    } catch (_) { return undefined; }
  },
  async set(key, value) {
    try {
      const db = await this.open();
      await new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(value, key); tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
    } catch (e) { console.warn('[DeviceStore] could not save', key, e); }
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 2. SETTINGS — starting values; the admin changes them in the app
// ════════════════════════════════════════════════════════════════════════════

const DEFAULT_SETTINGS = {
  app: {
    name: 'MedMaster',
    tagline: 'Preclinical CBT',
    signInIntro: 'Build reliable recall, practise clinical reasoning, and keep your progress in one place.',
    footer: '© 2026 MedMaster',
    timezone: 'Africa/Lagos',
  },
  // Which study modes appear in the menu, and their limits.
  modes: {
    practice:    { enabled: true, defaultCount: 20, maxCount: 200 },
    exam:        { enabled: true, defaultCount: 20, maxCount: 200, durations: [5, 15, 30, 60], defaultDuration: 30 },
    daily:       { enabled: true, count: 20, minutes: 10 },
    slide:       { enabled: true, defaultCount: 20, maxCount: 200, speeds: [5, 8, 12], defaultSpeed: 8 },
    multiplayer: { enabled: true, defaultCount: 20, maxCount: 50, seconds: [10, 15, 20, 25, 30], defaultSeconds: 20 },
  },
  // Question types. "base" is how the type behaves (see QTYPE_BASES below);
  // new types that behave like an existing base can be added from Settings.
  types: {
    truefalse: { label: 'True / False',         base: 'truefalse', enabled: true, xp: 2 },
    mcq:       { label: 'Multiple choice',      base: 'mcq',       enabled: true, xp: 2 },
    clinical:  { label: 'Clinical application', base: 'mcq',       enabled: true, xp: 5 },
    fillblank: { label: 'Fill in the blank',    base: 'fillblank', enabled: true, xp: 3 },
  },
  xp: {
    oncePerDay: true,            // a question earns XP once a day, however often it is repeated
    modeMultiplier: { practice: 1, exam: 1, daily: 1.5, multiplayer: 1 },
    slidePerQuestion: 1,
    reviewPerCard: 1,
    completionBonus: { practice: 10, exam: 20, daily: 15, slide: 5, multiplayer: 10 },
    minQuestionsForBonus: 10,
  },
  ranks: [
    { minXp: 0,     title: 'Anatomy Apprentice',   badge: '🩺', desc: 'Building the clinical foundation' },
    { minXp: 750,   title: 'Ward Observer',        badge: '🧭', desc: 'Learning to notice what matters' },
    { minXp: 2000,  title: 'Pattern Seeker',       badge: '🔬', desc: 'Connecting facts across systems' },
    { minXp: 4000,  title: 'Clinical Reasoner',    badge: '🧠', desc: 'Turning knowledge into decisions' },
    { minXp: 7000,  title: 'Case Analyst',         badge: '📋', desc: 'Handling complex question sets' },
    { minXp: 11000, title: 'Rounds Scholar',       badge: '🏥', desc: 'Consistent, disciplined mastery' },
    { minXp: 17000, title: 'MedMaster Fellow',     badge: '🏅', desc: 'Preclinical distinction track' },
    { minXp: 25000, title: 'Clinical Triage Lead', badge: '⭐', desc: 'High-stakes reasoning specialist' },
  ],
  // Labels an admin can attach to questions (shown as a filter), e.g. "Past Question".
  labels: ['Past Question'],
  // Courses / topics / sub-topics that exist before any question is added to them,
  // plus display order and hidden courses.
  taxonomy: { extra: [], courseOrder: [], hiddenCourses: [] },
  historyLimit: 200,
};

const Settings = {
  _value: null,
  get() {
    if (!this._value) this._value = deepMerge(DEFAULT_SETTINGS, LS.get('mm2:settings', {}) || {});
    return this._value;
  },
  /** What the admin has saved (without defaults) — used by the Settings screen. */
  saved() { return LS.get('mm2:settings', {}) || {}; },
  apply(saved) {
    LS.set('mm2:settings', saved || {});
    this._value = deepMerge(DEFAULT_SETTINGS, saved || {});
  },
  async refresh() {
    if (!DB.ready) return false;
    try {
      const saved = await DB.settings.load();
      const before = JSON.stringify(this.saved());
      if (saved && JSON.stringify(saved) !== before) { this.apply(saved); return true; }
    } catch (e) { console.warn('[Settings] using saved copy:', e.message); }
    return false;
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 3. QUESTION TYPES
//
// A "base" is a way a question behaves. To add a brand-new kind of question
// (matching, ordering…) add one entry here with the same five functions and
// it works in Practice, Exam, Daily, Slide Review, the review deck and the
// Question Manager. Types that only differ in name or marks need no code:
// add them in Settings and point them at an existing base.
//
//   prepare(q)            -> { options } anything fixed for one sitting (e.g. shuffled options)
//   inputHtml(item, st)   -> the answer controls. st = { response, locked, prefix }
//   grade(item, response) -> true / false
//   correctText(item)     -> the right answer as text
//   validate(q)           -> list of problems (empty when the question is fine)
// ════════════════════════════════════════════════════════════════════════════

const LETTERS = 'ABCDEFGH';
/** Options that only make sense in their written order ("Both A and B", "All of the above"). */
const ORDER_BOUND = { test: (o) => /\b(all|none|both|neither|either|any|two|three)\b[^.]{0,25}\b(above|these|those|options?)\b/i.test(o)
  || /\b[A-E]\s*(?:,|&|\s(?:and|or)\s)\s*[A-E]\b|\b(?:[Bb]oth|[Nn]either|[Ee]ither|[Oo]nly)\s+[A-E]\b|\b[A-E]\s+only\b/.test(o) };

function choiceInputHtml(item, st) {
  const correct = QTypes.correctText(item);
  return `<div class="options">${item.options.map((opt, i) => {
    let cls = '', mark = '';
    if (st.locked && st.reveal) {
      if (opt === correct) { cls = 'is-correct'; mark = '<span class="opt-mark">✓</span>'; }
      else if (opt === st.response) { cls = 'is-wrong'; mark = '<span class="opt-mark">✗</span>'; }
    } else if (opt === st.response) cls = 'is-selected';
    return `<button type="button" class="option ${cls}" data-act="${st.prefix}.answer" data-i="${i}" ${st.locked ? 'disabled' : ''}>
      <span class="opt-key">${item.options.length > 2 ? LETTERS[i] : (i + 1)}</span><span class="opt-text">${esc(opt)}</span>${mark}</button>`;
  }).join('')}</div>`;
}

const QTYPE_BASES = {
  truefalse: {
    kind: 'choice',
    prepare: () => ({ options: ['True', 'False'] }),
    inputHtml: choiceInputHtml,
    grade: (item, r) => r === (item.q.answer ? 'True' : 'False'),
    correctText: (item) => (item.q.answer ? 'True' : 'False'),
    validate: (q) => (typeof q.answer === 'boolean' ? [] : ['Choose whether the statement is True or False.']),
  },
  mcq: {
    kind: 'choice',
    prepare(q) {
      const opts = q.options.slice();
      const fixedOrder = opts.some((o) => ORDER_BOUND.test(o)) || (q.extra && q.extra.keepOrder);
      return { options: fixedOrder ? opts : shuffle(opts) };
    },
    inputHtml: choiceInputHtml,
    grade: (item, r) => r === item.q.options[item.q.answer],
    correctText: (item) => item.q.options[item.q.answer],
    validate(q) {
      const p = [];
      const opts = Array.isArray(q.options) ? q.options.map((o) => String(o).trim()) : [];
      if (opts.length < 2) p.push('Give at least two options.');
      if (opts.some((o) => !o)) p.push('An option is empty.');
      if (new Set(opts.map(looseText)).size !== opts.length) p.push('Two options are the same.');
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= opts.length) p.push('Mark exactly one option as correct.');
      return p;
    },
  },
  fillblank: {
    kind: 'text',
    prepare: () => ({}),
    inputHtml(item, st) {
      const ok = st.locked && st.reveal ? (QTypes.grade(item, st.response) ? 'is-correct' : 'is-wrong') : '';
      return `<form class="blank-form" data-submit="${st.prefix}.answerText">
        <input type="text" class="input ${ok}" name="response" autocomplete="off" autocapitalize="off" spellcheck="false"
          placeholder="Type your answer" value="${esc(st.response || '')}" ${st.locked ? 'disabled' : ''} />
        ${st.locked ? '' : `<button class="btn btn-primary" type="submit">${st.prefix === 'practice' ? 'Check' : 'Save answer'}</button>`}
      </form>`;
    },
    grade(item, r) {
      const accepted = (Array.isArray(item.q.answer) ? item.q.answer : [item.q.answer]).map(looseText);
      return !!r && accepted.includes(looseText(r));
    },
    correctText: (item) => (Array.isArray(item.q.answer) ? item.q.answer : [item.q.answer]).join('  /  '),
    validate(q) {
      const a = Array.isArray(q.answer) ? q.answer : [];
      return a.filter((x) => String(x).trim()).length ? [] : ['Give at least one accepted answer.'];
    },
  },
};

const QTypes = {
  info(typeKey) {
    const t = Settings.get().types[typeKey];
    if (t && QTYPE_BASES[t.base]) return t;
    // Unknown type (e.g. removed from Settings): treat by shape so nothing breaks.
    return { label: typeKey || 'Question', base: null, enabled: true, xp: 2 };
  },
  baseOf(q) {
    const t = Settings.get().types[q.type];
    if (t && QTYPE_BASES[t.base]) return QTYPE_BASES[t.base];
    if (typeof q.answer === 'boolean') return QTYPE_BASES.truefalse;
    if (Array.isArray(q.options)) return QTYPE_BASES.mcq;
    return QTYPE_BASES.fillblank;
  },
  label(q) { return this.info(q.type).label; },
  xp(q) { const n = Number(this.info(q.type).xp); return Number.isFinite(n) ? n : 0; },
  isChoice(q) { return this.baseOf(q).kind === 'choice'; },
  /** One question prepared for one sitting. */
  prepare(q) { return { q, ...this.baseOf(q).prepare(q) }; },
  inputHtml(item, st) { return this.baseOf(item.q).inputHtml(item, st); },
  grade(item, response) { return response != null && response !== '' && this.baseOf(item.q).grade(item, response); },
  correctText(item) { return this.baseOf(item.q).correctText(item); },
  /** Problems with a question, in plain words. Used before anything is saved. */
  validate(q) {
    const p = [];
    if (!String(q.course || '').trim()) p.push('Course is missing.');
    if (!String(q.topic || '').trim()) p.push('Topic is missing.');
    if (!String(q.question || '').trim()) p.push('The question text is missing.');
    const t = Settings.get().types[q.type];
    if (!t || !QTYPE_BASES[t.base]) p.push(`Unknown question type "${q.type}".`);
    else p.push(...QTYPE_BASES[t.base].validate(q));
    if (!String(q.explanation || '').trim()) p.push('The explanation is missing.');
    return p;
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 4. QUESTION BANK
//    Lives in the database. A copy is kept on the device and only changes are
//    downloaded on later visits. questions.js is the emergency backup.
// ════════════════════════════════════════════════════════════════════════════

const Bank = {
  all: [],            // every question, including retired ones
  byId: new Map(),
  source: 'none',     // 'db' | 'backup' | 'none'
  syncedAt: null,
  loading: false,
  _textIndex: null,

  _set(rows) {
    this.all = rows;
    this.byId = new Map(rows.map((q) => [q.id, q]));
    this._textIndex = null;
  },
  async loadFromDevice() {
    const saved = await DeviceStore.get('bank');
    if (saved && Array.isArray(saved.rows) && saved.rows.length) {
      this._set(saved.rows); this.source = saved.source || 'db'; this.syncedAt = saved.syncedAt || null;
    }
  },
  async _persist() { await DeviceStore.set('bank', { rows: this.all, source: this.source, syncedAt: this.syncedAt }); },

  /** Bring the device copy up to date. Returns true if anything changed. */
  async sync() {
    if (this.loading) return false;
    this.loading = true;
    let changed = false;
    try {
      if (DB.ready) {
        try {
          let fromDb = this.source === 'db';
          let rows = await DB.questions.fetchSince(fromDb ? this.syncedAt : null);
          if (fromDb) {
            // Safety net: if the device copy and the database disagree on how many
            // questions exist, something was missed or deleted, so fetch everything again.
            const total = await DB.questions.count();
            if (total !== this.all.length + rows.filter((r) => !this.byId.has(r.id)).length) { rows = await DB.questions.fetchSince(null); fromDb = false; }
          }
          if (rows.length) {
            if (fromDb) { rows.forEach((r) => this.byId.set(r.id, r)); this._set(Array.from(this.byId.values())); }
            else this._set(rows);
            this.source = 'db';
            this.syncedAt = rows.reduce((m, r) => (r.updatedAt > m ? r.updatedAt : m), fromDb ? (this.syncedAt || '') : '');
            await this._persist();
            changed = true;
          }
        } catch (e) { console.warn('[Bank] database not reachable, using saved copy:', e.message); }
      }
      if (!this.all.length) { changed = await this.loadBackup(); }
    } finally { this.loading = false; }
    return changed;
  },
  /** Loads questions.js (only when the database has nothing for us). */
  async loadBackupFile() {
    if (window.MM_BACKUP_BANK) return window.MM_BACKUP_BANK;
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'questions.js?v=' + (window.MM_VERSION || '1');
      s.onload = resolve; s.onerror = () => reject(new Error('Could not load the backup question file.'));
      document.head.appendChild(s);
    });
    return window.MM_BACKUP_BANK || [];
  },
  async loadBackup() {
    try {
      const rows = (await this.loadBackupFile()).map((q) => ({ tags: [], extra: {}, active: true, ...q }));
      if (!rows.length) return false;
      this._set(rows); this.source = 'backup'; this.syncedAt = null;
      await this._persist();
      return true;
    } catch (e) { console.warn('[Bank]', e.message); return false; }
  },
  /** Called by the Question Manager after it saves something. */
  async applyLocal(rows) {
    rows.forEach((r) => this.byId.set(r.id, r));
    this._set(Array.from(this.byId.values()));
    if (this.source !== 'db') { this.source = 'db'; }
    const newest = rows.reduce((m, r) => (r.updatedAt && r.updatedAt > m ? r.updatedAt : m), this.syncedAt || '');
    if (newest) this.syncedAt = newest;
    await this._persist();
  },

  get(id) { return this.byId.get(id) || null; },
  /** Questions students can be asked right now. */
  live() {
    const s = Settings.get();
    const hidden = new Set(s.taxonomy.hiddenCourses || []);
    return this.all.filter((q) => q.active !== false && !hidden.has(q.course) && QTypes.info(q.type).enabled !== false);
  },
  courses() {
    const order = Settings.get().taxonomy.courseOrder || [];
    const names = [...new Set(this.live().map((q) => q.course))];
    return names.sort((a, b) => {
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 1e9 : ia) - (ib === -1 ? 1e9 : ib);
      return a.localeCompare(b);
    });
  },
  /** Find a question by its wording (used to carry over old bookmarks saved as text). */
  findByText(text) {
    if (!this._textIndex) {
      this._textIndex = new Map();
      for (const q of this.all) { const k = looseText(q.question); if (!this._textIndex.has(k)) this._textIndex.set(k, q.id); }
    }
    const cleaned = String(text || '').replace(/^[\s﻿]*(?:(?:Question\s*)?\d{1,5}[.)]\s*)+/, '');
    return this._textIndex.get(looseText(cleaned)) || null;
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 5. PROGRESS STORE — XP, streak, history, bookmarks, mistakes, review schedule
//
//    • Saved on the device after every change (instant, works offline).
//    • Signed-in students: also saved to their account a few seconds after the
//      last change, and when the tab is hidden or closed.
//    • Guest progress is kept separately and folded into the account at sign-in.
// ════════════════════════════════════════════════════════════════════════════

const Store = {
  user: null,
  state: null,
  _pushTimer: null,
  _pushing: false,

  blank() {
    return { v: 2, updatedAt: 0, dirty: false, xp: 0, streak: 0, lastStudy: '', xpDay: { date: '', ids: [] },
             history: [], bookmarks: [], mistakes: [], srs: {}, daily: null, legacy: { bookmarks: [], mistakes: [] } };
  },
  key(user) { return user ? `mm2:user:${user.id}` : 'mm2:guest'; },
  fix(s) {
    const b = this.blank();
    const out = { ...b, ...(isObj(s) ? s : {}) };
    for (const k of ['history', 'bookmarks', 'mistakes']) if (!Array.isArray(out[k])) out[k] = [];
    if (!isObj(out.srs)) out.srs = {};
    if (!isObj(out.xpDay) || !Array.isArray(out.xpDay.ids)) out.xpDay = { date: '', ids: [] };
    if (!isObj(out.legacy)) out.legacy = { bookmarks: [], mistakes: [] };
    out.xp = Math.max(0, Math.round(Number(out.xp) || 0));
    out.streak = Math.max(0, Math.round(Number(out.streak) || 0));
    return out;
  },

  /** Load the state for this person from the device. */
  open(user) {
    this.user = user || null;
    this.importVeryOldData();
    this.state = this.fix(LS.get(this.key(user)));
  },

  /** Progress saved by the previous version of the app (different storage keys). */
  importVeryOldData() {
    if (LS.get('mm2:legacyDone')) return;
    const read = (k, fb) => { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch (_) { return fb; } };
    const old = {
      history: read('mm_history', []), bookmarks: read('mm_bookmarks', []), mistakes: read('mm_mistakes', []),
      xp: parseInt(localStorage.getItem('mm_xp')) || 0, streak: parseInt(localStorage.getItem('mm_streak')) || 0,
      last_study_date: localStorage.getItem('mm_last_study_date') || '', srs: read('mm_srs_data', {}),
    };
    const has = old.history.length || old.bookmarks.length || old.mistakes.length || old.xp;
    if (has) {
      const merged = this.merge(this.fix(LS.get('mm2:guest')), this.fromLegacy(old), true);
      merged.fromOld = true;      // may duplicate what the account already holds: never add its XP twice
      LS.set('mm2:guest', merged);
    }
    LS.set('mm2:legacyDone', true);
  },

  /** Convert a record in the old layout (device or old cloud table) to the new one. */
  fromLegacy(old) {
    const s = this.blank();
    s.xp = Number(old.xp) || 0;
    s.streak = Number(old.streak) || 0;
    s.lastStudy = old.last_study_date || '';
    s.history = (old.history || []).filter((h) => h && h.date).map((h) => {
      const perf = {};
      for (const [sub, p] of Object.entries(h.subPerf || {})) perf[`${p.course || ''}|${''}|${sub}`] = { c: p.correct || 0, t: p.total || 0 };
      return { mode: h.mode || 'Session', score: h.score || 0, total: h.total || 0, date: h.date, perf, ungraded: h.mode === 'Slide Review' };
    });
    const isId = (x) => typeof x === 'string' && /^[A-Z]{1,4}-\d+$/.test(x);
    for (const b of old.bookmarks || []) { if (isId(b)) s.bookmarks.push(b); else if (b) s.legacy.bookmarks.push(String(b)); }
    for (const m of old.mistakes || []) {
      if (!m) continue;
      if (isId(m.id)) s.mistakes.push({ id: m.id, date: m.date || new Date().toISOString(), mastered: !!m.mastered });
      else if (m.question) s.legacy.mistakes.push({ text: m.question, date: m.date, mastered: !!m.mastered });
    }
    for (const [k, v] of Object.entries(old.srs || old.srs_data || {})) if (isId(k) && isObj(v)) s.srs[k] = v;
    s.updatedAt = 1; s.dirty = true;
    return s;
  },

  /** Old bookmarks/mistakes were saved as question text. Match them to IDs once the bank is loaded. */
  resolveLegacyText() {
    const L = this.state.legacy;
    if (!Bank.all.length || (!L.bookmarks.length && !L.mistakes.length)) return;
    for (const text of L.bookmarks) { const id = Bank.findByText(text); if (id && !this.state.bookmarks.includes(id)) this.state.bookmarks.push(id); }
    for (const m of L.mistakes) {
      const id = Bank.findByText(m.text);
      if (id && !this.state.mistakes.find((x) => x.id === id)) this.state.mistakes.push({ id, date: m.date || new Date().toISOString(), mastered: !!m.mastered });
    }
    this.state.legacy = { bookmarks: [], mistakes: [] };
    this.changed();
  },

  /**
   * Combine two copies of someone's progress without losing anything.
   * addXp = true when folding guest progress into an account (two separate tallies).
   */
  merge(a, b, addXp = false) {
    a = this.fix(a); b = this.fix(b);
    const out = this.blank();
    out.xp = addXp ? a.xp + b.xp : Math.max(a.xp, b.xp);
    if ((a.lastStudy || '') === (b.lastStudy || '')) { out.lastStudy = a.lastStudy; out.streak = Math.max(a.streak, b.streak); }
    else { const later = (a.lastStudy || '') > (b.lastStudy || '') ? a : b; out.lastStudy = later.lastStudy; out.streak = later.streak; }
    const seen = new Set();
    out.history = [...a.history, ...b.history]
      .filter((h) => { const k = `${h.date}|${h.mode}`; if (seen.has(k)) return false; seen.add(k); return true; })
      .sort((x, y) => (x.date < y.date ? 1 : -1))
      .slice(0, Settings.get().historyLimit || 200);
    out.bookmarks = [...new Set([...a.bookmarks, ...b.bookmarks])];
    const mm = new Map();
    for (const m of [...a.mistakes, ...b.mistakes]) { const cur = mm.get(m.id); if (!cur || (m.date || '') > (cur.date || '')) mm.set(m.id, m); }
    out.mistakes = [...mm.values()];
    out.srs = { ...a.srs };
    for (const [id, v] of Object.entries(b.srs)) if (!out.srs[id] || (v.lastReviewed || 0) > (out.srs[id].lastReviewed || 0)) out.srs[id] = v;
    if (a.xpDay.date === b.xpDay.date) out.xpDay = { date: a.xpDay.date, ids: [...new Set([...a.xpDay.ids, ...b.xpDay.ids])] };
    else out.xpDay = a.xpDay.date > b.xpDay.date ? a.xpDay : b.xpDay;
    const da = a.daily, db = b.daily;
    out.daily = !da ? db : !db ? da : da.date !== db.date ? (da.date > db.date ? da : db) : (da.done ? da : db.done ? db : da);
    out.legacy = { bookmarks: [...new Set([...a.legacy.bookmarks, ...b.legacy.bookmarks])], mistakes: [...a.legacy.mistakes, ...b.legacy.mistakes] };
    out.updatedAt = Date.now(); out.dirty = true;
    return out;
  },

  /** Record that something changed: save on the device now, to the account shortly. */
  changed() {
    this.state.updatedAt = Date.now();
    this.state.dirty = true;
    this.saveLocal();
    this.schedulePush();
    App.refreshHeader();
  },
  saveLocal() {
    const limit = Settings.get().historyLimit || 200;
    if (this.state.history.length > limit) this.state.history.length = limit;
    if (!LS.set(this.key(this.user), this.state)) {
      // Storage is full: drop the oldest half of the history and try once more.
      this.state.history.length = Math.floor(this.state.history.length / 2);
      LS.set(this.key(this.user), this.state);
    }
  },
  schedulePush(delay = 4000) {
    if (!this.user || !DB.ready) return;
    clearTimeout(this._pushTimer);
    this._pushTimer = setTimeout(() => this.push(), delay);
  },
  /** Send progress to the account. Returns true when the account is up to date. */
  async push() {
    clearTimeout(this._pushTimer);
    if (!this.user || !DB.ready) return true;
    if (!this.state.dirty) return true;
    if (this._pushing) return false;
    this._pushing = true;
    const stamp = this.state.updatedAt;
    try {
      const copy = { ...this.state, dirty: false };
      await DB.progress.save(this.user.id, copy);
      if (this.state.updatedAt === stamp) { this.state.dirty = false; this.saveLocal(); }
      else this.schedulePush(1500);
      return !this.state.dirty;
    } catch (e) {
      console.warn('[Store] could not save to account yet:', e.message);
      return false;
    } finally { this._pushing = false; }
  },

  /** At sign-in / app start: combine device, account and any guest progress. */
  async syncWithAccount() {
    if (!this.user || !DB.ready) return;
    const uid = this.user.id;
    let cloud = null, reachable = true;
    try { cloud = await DB.progress.load(uid); } catch (e) { reachable = false; console.warn('[Store] account copy not reachable:', e.message); }
    if (!this.user || this.user.id !== uid) return;           // signed out meanwhile
    if (cloud) {
      cloud = this.fix(cloud);
      if (this.state.dirty) this.state = this.merge(this.state, cloud);
      else if ((cloud.updatedAt || 0) > (this.state.updatedAt || 0)) { this.state = cloud; this.state.dirty = false; }
    } else if (reachable && !this.state.updatedAt) {
      const legacy = await DB.progress.loadLegacy(uid);
      if (legacy && (legacy.history || legacy.xp)) this.state = this.merge(this.state, this.fromLegacy(legacy));
    }
    // Fold in anything done as a guest on this device, once.
    const guest = this.fix(LS.get('mm2:guest'));
    if (guest.updatedAt) {
      this.state = this.merge(this.state, guest, !guest.fromOld);
      LS.del('mm2:guest');
    }
    this.saveLocal();
    this.resolveLegacyText();
    if (this.state.dirty) this.schedulePush(500);
    App.refreshHeader();
  },

  // ─── Streak ──────────────────────────────────────────────────────────────
  /** The streak as it should be shown today (0 once a day has been missed). */
  currentStreak() {
    const s = this.state; if (!s || !s.lastStudy) return 0;
    const today = dayKey();
    return (s.lastStudy === today || s.lastStudy === dayBefore(today)) ? s.streak : 0;
  },
  touchStudy() {
    const s = this.state, today = dayKey();
    if (s.lastStudy === today) return;
    s.streak = s.lastStudy === dayBefore(today) ? s.streak + 1 : 1;
    s.lastStudy = today;
  },

  // ─── XP ──────────────────────────────────────────────────────────────────
  /** XP for one correctly answered question. Returns the amount actually earned. */
  awardQuestion(q, mode) {
    const cfg = Settings.get().xp, s = this.state, today = dayKey();
    this.touchStudy();
    if (s.xpDay.date !== today) s.xpDay = { date: today, ids: [] };
    if (cfg.oncePerDay && s.xpDay.ids.includes(q.id)) return 0;
    let amount;
    if (mode === 'slide') amount = Number(cfg.slidePerQuestion) || 0;
    else if (mode === 'review') amount = Number(cfg.reviewPerCard) || 0;
    else amount = Math.round(QTypes.xp(q) * (Number(cfg.modeMultiplier[mode]) || 1));
    amount = Math.max(0, amount);
    if (amount > 0) { s.xp += amount; s.xpDay.ids.push(q.id); }
    return amount;
  },
  /** Bonus for finishing a session of a reasonable length. */
  awardBonus(mode, answered) {
    const cfg = Settings.get().xp;
    if (answered < (Number(cfg.minQuestionsForBonus) || 0)) return 0;
    const amount = Math.max(0, Number(cfg.completionBonus[mode]) || 0);
    this.state.xp += amount;
    return amount;
  },
  rank(xp = this.state ? this.state.xp : 0) {
    const ranks = (Settings.get().ranks || []).slice().sort((a, b) => a.minXp - b.minXp);
    if (!ranks.length) return { title: 'Student', badge: '🩺', desc: '', level: 1, next: null, progress: 100 };
    let idx = 0;
    ranks.forEach((r, i) => { if (xp >= r.minXp) idx = i; });
    const cur = ranks[idx], next = ranks[idx + 1] || null;
    const progress = next ? Math.min(100, Math.round(((xp - cur.minXp) / Math.max(1, next.minXp - cur.minXp)) * 100)) : 100;
    return { ...cur, level: idx + 1, next, progress };
  },

  // ─── Bookmarks / mistakes ────────────────────────────────────────────────
  isBookmarked(id) { return this.state.bookmarks.includes(id); },
  toggleBookmark(id) {
    const i = this.state.bookmarks.indexOf(id);
    if (i === -1) this.state.bookmarks.push(id); else this.state.bookmarks.splice(i, 1);
    this.changed();
    return i === -1;
  },
  noteAnswer(q, correct) {
    const m = this.state.mistakes.find((x) => x.id === q.id);
    if (correct) { if (m && !m.mastered) m.mastered = true; }       // got it right later -> leaves the notebook
    else if (m) { m.date = new Date().toISOString(); m.mastered = false; }
    else this.state.mistakes.push({ id: q.id, date: new Date().toISOString(), mastered: false });
  },
  activeMistakes() { return this.state.mistakes.filter((m) => !m.mastered && Bank.get(m.id)); },

  addHistory(entry) {
    this.state.history.unshift({ date: new Date().toISOString(), ...entry });
  },

  // ─── Spaced repetition (SM-2) ────────────────────────────────────────────
  /** What the schedule would become for a rating, without saving it. */
  previewSrs(id, quality) {
    const card = this.state.srs[id] || { repetitions: 0, interval: 0, easeFactor: 2.5 };
    let { repetitions, interval, easeFactor } = card;
    if (quality >= 3) {
      if (repetitions === 0) interval = 1;
      else if (repetitions === 1) interval = quality === 3 ? 2 : quality === 4 ? 4 : 6;
      else interval = Math.max(1, Math.round(interval * easeFactor * (quality === 3 ? 0.8 : quality === 5 ? 1.15 : 1)));
      repetitions++;
    } else { repetitions = 0; interval = 1; }
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    return { repetitions, interval, easeFactor, nextReview: Date.now() + interval * 86400000, lastReviewed: Date.now() };
  },
  rateSrs(id, quality) { this.state.srs[id] = this.previewSrs(id, quality); },
  /** Everything in the review deck: saved questions plus current mistakes. */
  deckIds() {
    const ids = new Set(this.state.bookmarks.filter((id) => Bank.get(id)));
    this.activeMistakes().forEach((m) => ids.add(m.id));
    return [...ids];
  },
  dueIds() {
    const now = Date.now();
    return this.deckIds().filter((id) => { const c = this.state.srs[id]; return !c || (c.nextReview || 0) <= now; });
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 6. APP SHELL — start-up, sign-in, navigation, messages
// ════════════════════════════════════════════════════════════════════════════

const ICONS = {
  dashboard: '<path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"/>',
  practice: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  exam: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
  daily: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  slide: '<path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2zM22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"/>',
  multiplayer: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  history: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  saved: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z"/>',
  manage: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
};
const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/** Screens. Study modes and admin screens add themselves to this list. */
const VIEWS = {};
/** What buttons do: every clickable thing has data-act="name" and is handled here. */
const ACTIONS = {};

const App = {
  user: null,
  isAdmin: false,
  guestMode: false,
  view: 'dashboard',
  started: false,
  busy: null,              // name of a session in progress (exam / daily / multiplayer)
  _timers: new Set(),

  // ─── Start-up ────────────────────────────────────────────────────────────
  async init() {
    this.applyTheme(LS.get('mm2:theme', 'light'));
    this.applyBranding();
    this.bindGlobalEvents();

    DB.auth.onChange((event, session) => this.onAuthEvent(event, session));

    // A password-reset link brings the student here with a marker in the address.
    const isRecovery = /type=recovery/.test(location.hash) || /type=recovery/.test(location.search);
    const session = await DB.auth.getSession();

    if (isRecovery) return this.showAuth('newpass');
    if (session && session.user) return this.enter(session.user);
    if (LS.get('mm2:guestMode')) return this.enter(null);
    this.showAuth('login');
  },

  onAuthEvent(event, session) {
    if (event === 'PASSWORD_RECOVERY') return this.showAuth('newpass');
    if (event === 'SIGNED_OUT' && this.user) return this.afterSignOut();
    if (event === 'SIGNED_IN' && session && session.user && !this.started && !this._entering) {
      // e.g. returning from the confirmation link in an email
      return this.enter(session.user);
    }
    if (event === 'USER_UPDATED' && session && session.user && this.user) { this.user = session.user; Store.user = session.user; this.refreshHeader(); }
  },

  /** Show the app. Uses what is saved on the device first, then updates quietly. */
  async enter(user) {
    if (this._entering) return;
    this._entering = true;
    try {
      this.user = user || null;
      this.guestMode = !user;
      if (!user) LS.set('mm2:guestMode', true); else LS.del('mm2:guestMode');
      Store.open(user);
      await Bank.loadFromDevice();
      Store.resolveLegacyText();

      $('#splash').hidden = true; $('#auth').hidden = true; $('#shell').hidden = false;
      this.started = true;
      this.renderNav(); this.refreshHeader();
      this.go('dashboard', { force: true });
    } finally { this._entering = false; }
    this.backgroundRefresh();
  },

  /** Everything that needs the network happens here, after the screen is already up. */
  async backgroundRefresh() {
    const who = this.user ? this.user.id : null;
    const jobs = [
      Settings.refresh().then((changed) => { if (changed) { this.applyBranding(); this.renderNav(); } return changed; }),
      Bank.sync().then((changed) => { if (changed) Store.resolveLegacyText(); return changed; }),
      this.user ? Store.syncWithAccount() : Promise.resolve(),
      this.user ? DB.admins.amI().then((yes) => { if ((this.user ? this.user.id : null) === who) { this.isAdmin = yes; this.renderNav(); } }) : Promise.resolve(),
    ];
    await Promise.allSettled(jobs);
    this.refreshHeader(); this.renderNav();
    // Only redraw quiet screens; never interrupt someone in the middle of a question.
    if (!this.busy && ['dashboard', 'history', 'saved'].includes(this.view)) this.go(this.view, { force: true, keepScroll: true });
    else if (!this.busy && VIEWS[this.view] && VIEWS[this.view].onBankReady) VIEWS[this.view].onBankReady();
  },

  // ─── Sign-in screen ──────────────────────────────────────────────────────
  showAuth(tab = 'login') {
    $('#splash').hidden = true; $('#shell').hidden = true; $('#auth').hidden = false;
    this.started = false;
    this.authTab(tab);
    if (!DB.ready) this.authMessage('The sign-in service could not be reached. You can still continue as a guest.', 'error');
  },
  authTab(tab) {
    $$('#auth [data-pane]').forEach((p) => { p.hidden = p.dataset.pane !== tab; });
    $$('#auth [data-tab]').forEach((b) => b.classList.toggle('is-on', b.dataset.tab === tab));
    $('#auth .auth-tabs').hidden = tab === 'forgot' || tab === 'newpass';
    this.authMessage('');
    const first = $(`#auth [data-pane="${tab}"] input`); if (first) first.focus({ preventScroll: true });
  },
  authMessage(text, kind = 'info', extraHtml = '') {
    const box = $('#auth-message');
    box.hidden = !text;
    box.className = `notice notice-${kind}`;
    box.innerHTML = esc(text) + extraHtml;
  },
  /** Plain-language versions of the server's error messages. */
  authError(error) {
    const m = (error && error.message) || String(error || '');
    if (/invalid login credentials/i.test(m)) return 'That email and password do not match. Check both and try again.';
    if (/email not confirmed/i.test(m)) return 'This email has not been confirmed yet. Open the link we sent you, or send it again below.';
    if (/already registered|already been registered|user already exists/i.test(m)) return 'An account with this email already exists. Sign in instead.';
    if (/rate limit|too many|only request this/i.test(m)) return 'Too many attempts just now. Please wait a minute and try again.';
    if (/not authorized|sending .*email|smtp/i.test(m)) return 'The email could not be sent right now. Please try again later or tell the MedMaster admin.';
    if (/password should be|at least \d+ characters|weak password/i.test(m)) return 'Choose a longer password (at least 6 characters).';
    if (/failed to fetch|network|load failed/i.test(m)) return 'No connection. Check your internet and try again.';
    if (/unable to validate email|invalid.*email/i.test(m)) return 'That does not look like a valid email address.';
    return m || 'Something went wrong. Please try again.';
  },
  /** Runs a form action with the button disabled, and always re-enables it. */
  async withButton(form, label, fn) {
    const btn = $('button[type="submit"]', form);
    const original = btn ? btn.textContent : '';
    if (btn) { if (btn.disabled) return; btn.disabled = true; btn.textContent = label; }
    try { await fn(); }
    catch (e) { console.error(e); this.authMessage(this.authError(e), 'error'); }
    finally { if (btn) { btn.disabled = false; btn.textContent = original; } }
  },

  async signOut() {
    if (this.busy && !(await this.confirm('Leave the session in progress and sign out?', 'Sign out'))) return;
    const saved = await Promise.race([Store.push(), new Promise((r) => setTimeout(() => r(false), 6000))]);
    if (!saved && Store.state.dirty) {
      const go = await this.confirm('Your latest progress has not reached your account yet (weak connection). If you sign out now it stays on this device only until you sign in again here.', 'Sign out anyway', 'Stay signed in');
      if (!go) return;
    } else if (this.user) {
      LS.del(Store.key(this.user));         // account is up to date: leave nothing behind on a shared phone
    }
    const user = this.user;
    this.user = null;                        // so the SIGNED_OUT event does not run this twice
    await DB.auth.signOut();
    this.afterSignOut(user);
  },
  afterSignOut() {
    this.stopTimers();
    if (typeof MP !== 'undefined' && MP.inRoom) MP.leave();
    this.user = null; this.isAdmin = false; this.busy = null; this.guestMode = false;
    LS.del('mm2:guestMode');
    Store.user = null; Store.state = Store.blank();
    this.showAuth('login');
  },

  // ─── Look and wording ────────────────────────────────────────────────────
  applyTheme(theme) {
    this.theme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = this.theme;
    LS.set('mm2:theme', this.theme);
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = this.theme === 'dark' ? '#0b1622' : '#0b2b4a';
  },
  applyBranding() {
    const a = Settings.get().app;
    document.title = `${a.name} – ${a.tagline}`;
    $$('[data-brand="name"]').forEach((el) => { el.textContent = a.name; });
    $$('[data-brand="tagline"]').forEach((el) => { el.textContent = a.tagline; });
    $$('[data-brand="intro"]').forEach((el) => { el.textContent = a.signInIntro; });
    $$('[data-brand="footer"]').forEach((el) => { el.textContent = a.footer; });
  },

  renderNav() {
    const m = Settings.get().modes;
    const study = [['dashboard', 'Dashboard']];
    if (m.practice.enabled) study.push(['practice', 'Practice']);
    if (m.exam.enabled) study.push(['exam', 'Exam Simulator']);
    if (m.daily.enabled) study.push(['daily', 'Daily Challenge']);
    if (m.slide.enabled) study.push(['slide', 'Slide Review']);
    if (m.multiplayer.enabled && VIEWS.multiplayer) study.push(['multiplayer', 'Multiplayer']);
    const review = [['history', 'History & Mistakes'], ['saved', 'Saved & Review Deck']];
    const admin = this.isAdmin && VIEWS.manage ? [['manage', 'Question Manager'], ['settings', 'Settings']] : [];
    const group = (label, items) => (items.length ? `<div class="nav-label">${label}</div>` + items.map(([v, text]) =>
      `<button class="nav-item ${this.view === v ? 'is-active' : ''}" data-act="nav.go" data-view="${v}">${icon(v)}<span>${text}</span></button>`).join('') : '');
    $('#nav-list').innerHTML = group('Study', study) + group('Review', review) + group('Admin', admin);
    const live = Bank.live().length;
    $('#nav-foot').textContent = live ? `${live.toLocaleString()} questions` : '';
  },

  refreshHeader() {
    const box = $('#header-right');
    if (!box || !Store.state) return;
    const rank = Store.rank(), streak = Store.currentStreak();
    const name = this.user ? (this.user.user_metadata?.display_name || this.user.email || 'Student') : 'Guest';
    box.innerHTML = `
      ${streak > 0 ? `<span class="chip chip-streak" title="${streak}-day study streak">🔥 ${streak}</span>` : ''}
      <span class="chip chip-xp" title="${esc(rank.title)}">${esc(rank.badge)} ${Store.state.xp.toLocaleString()} XP</span>
      <span class="chip chip-user">${esc(name)}</span>
      <button class="icon-btn" data-act="theme.toggle" aria-label="Switch between light and dark">${icon(this.theme === 'dark' ? 'sun' : 'moon')}</button>
      ${this.user ? '<button class="btn btn-ghost btn-sm" data-act="auth.signOut">Sign out</button>'
                  : '<button class="btn btn-ghost btn-sm" data-act="auth.fromGuest">Sign in</button>'}`;
  },

  // ─── Navigation ──────────────────────────────────────────────────────────
  async go(view, opts = {}) {
    if (!VIEWS[view]) view = 'dashboard';
    if (!opts.force && this.busy && view !== this.view) {
      const ok = await this.confirm(`Leave this ${this.busy}? Your place in it will be lost.`, 'Leave');
      if (!ok) return;
    }
    const leaving = VIEWS[this.view];
    if (this.started && leaving && leaving.leave && !opts.keepScroll) await leaving.leave();
    this.stopTimers();
    this.busy = null;
    this.view = view;
    this._viewToken = (this._viewToken || 0) + 1;
    document.body.classList.remove('nav-open');
    $$('.nav-item').forEach((b) => b.classList.toggle('is-active', b.dataset.view === view));
    const y = window.scrollY;
    const html = VIEWS[view].render(opts);
    if (typeof html === 'string') $('#view').innerHTML = html;
    if (VIEWS[view].mounted) VIEWS[view].mounted(opts);
    window.scrollTo(0, opts.keepScroll ? y : 0);
  },
  /** For screens that wait on the network: only draw if the student is still on that screen. */
  stillOn(view, token) { return this.view === view && this._viewToken === token; },
  setView(html) { $('#view').innerHTML = html; },

  every(ms, fn) { const id = setInterval(fn, ms); this._timers.add(id); return id; },
  stop(id) { clearInterval(id); this._timers.delete(id); },
  stopTimers() { this._timers.forEach((id) => clearInterval(id)); this._timers.clear(); },

  // ─── Messages ────────────────────────────────────────────────────────────
  toast(text, kind = 'info') {
    const el = document.createElement('div');
    el.className = `toast toast-${kind}`; el.setAttribute('role', 'status'); el.textContent = text;
    $('#toasts').appendChild(el);
    setTimeout(() => { el.classList.add('is-leaving'); setTimeout(() => el.remove(), 300); }, kind === 'error' ? 6000 : 3500);
  },
  /** A yes/no question on the page (no browser pop-ups). Resolves true or false. */
  confirm(text, okLabel = 'OK', cancelLabel = 'Cancel') {
    return this.modal(`<p class="modal-text">${esc(text)}</p>`, [{ label: cancelLabel, value: false, cls: 'btn-ghost' }, { label: okLabel, value: true, cls: 'btn-primary' }]);
  },
  modal(bodyHtml, buttons, onOpen) {
    return new Promise((resolve) => {
      const root = $('#modal-root');
      root.innerHTML = `<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">${bodyHtml}
        <div class="modal-actions">${buttons.map((b, i) => `<button class="btn ${b.cls || ''}" data-modal="${i}">${esc(b.label)}</button>`).join('')}</div></div></div>`;
      const close = (value) => { root.innerHTML = ''; document.removeEventListener('keydown', onKey, true); resolve(value); };
      const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(buttons[0].value); } };
      document.addEventListener('keydown', onKey, true);
      root.firstElementChild.addEventListener('click', (e) => {
        const b = e.target.closest('[data-modal]');
        if (b) { const btn = buttons[Number(b.dataset.modal)]; close(typeof btn.value === 'function' ? btn.value(root) : btn.value); }
        else if (e.target.classList.contains('modal-backdrop')) close(buttons[0].value);
      });
      if (onOpen) onOpen(root);
      const focus = $('textarea, input', root) || $('[data-modal]:last-child', root); if (focus) focus.focus();
    });
  },

  // ─── One listener for the whole page ─────────────────────────────────────
  bindGlobalEvents() {
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-act]');
      if (!el || el.disabled) return;
      const fn = ACTIONS[el.dataset.act];
      if (fn) { if (el.tagName === 'A') e.preventDefault(); fn(el, e); }
    });
    document.addEventListener('submit', (e) => {
      const form = e.target.closest('form[data-submit]');
      if (!form) return;
      e.preventDefault();
      const fn = ACTIONS[form.dataset.submit];
      if (fn) fn(form, e);
    });
    const onField = (attr) => (e) => {
      const el = e.target.closest(`[data-${attr}]`);
      if (el && ACTIONS[el.dataset[attr]]) ACTIONS[el.dataset[attr]](el, e);
    };
    document.addEventListener('change', onField('change'));
    document.addEventListener('input', onField('input'));
    document.addEventListener('keydown', (e) => this.onKey(e));

    // Save to the account when the tab is hidden or closed, and when the connection returns.
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && Store.state) Store.push(); });
    window.addEventListener('pagehide', () => { if (Store.state) Store.push(); });
    window.addEventListener('online', () => { if (Store.state && Store.state.dirty) Store.schedulePush(500); });
  },

  onKey(e) {
    if (e.key === 'Escape') document.body.classList.remove('nav-open');
    if (!this.started || $('#modal-root').firstElementChild) return;
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.ctrlKey || e.metaKey || e.altKey) return;
    const v = VIEWS[this.view];
    if (v && v.onKey) v.onKey(e);
  },
};

// ─── Actions: sign-in screen ───────────────────────────────────────────────
ACTIONS['auth.tab'] = (el) => App.authTab(el.dataset.tab);
ACTIONS['auth.guest'] = () => App.enter(null);
ACTIONS['auth.signOut'] = () => App.signOut();
ACTIONS['auth.fromGuest'] = async () => {
  if (App.busy && !(await App.confirm('Leave the session in progress to sign in?', 'Leave'))) return;
  App.stopTimers(); App.busy = null; LS.del('mm2:guestMode'); App.showAuth('login');
};

ACTIONS['auth.login'] = (form) => App.withButton(form, 'Signing in…', async () => {
  const email = form.email.value.trim(), password = form.password.value;
  if (!email || !password) return App.authMessage('Enter your email and password.', 'error');
  App.authMessage('');
  const { user, error } = await DB.auth.signIn(email, password);
  if (error) {
    const notConfirmed = /email not confirmed/i.test(error.message || '');
    return App.authMessage(App.authError(error), 'error', notConfirmed ? ` <button type="button" class="link" data-act="auth.resend" data-email="${esc(email)}">Send the email again</button>` : '');
  }
  form.reset();
  await App.enter(user);
});

ACTIONS['auth.register'] = (form) => App.withButton(form, 'Creating account…', async () => {
  const name = form.displayName.value.trim().slice(0, 40), email = form.email.value.trim(), password = form.password.value;
  if (!name || !email || !password) return App.authMessage('Fill in your name, email and a password.', 'error');
  if (password.length < 6) return App.authMessage('Choose a password of at least 6 characters.', 'error');
  App.authMessage('');
  const { user, session, error } = await DB.auth.signUp(email, password, name);
  if (error) return App.authMessage(App.authError(error), 'error');
  if (session && user) {                       // no email step needed: straight in
    form.reset();
    await App.enter(user);
    App.toast(`Welcome, ${name}. Your account is ready.`, 'success');
    return;
  }
  if (user && Array.isArray(user.identities) && user.identities.length === 0) {
    App.authTab('login');
    return App.authMessage('An account with this email already exists. Sign in instead.', 'error');
  }
  // The project requires email confirmation.
  form.reset(); App.authTab('login');
  App.authMessage(`Almost done. We sent a confirmation link to ${email}. Open it, then sign in here. It can take a few minutes; check spam too.`, 'success',
    ` <button type="button" class="link" data-act="auth.resend" data-email="${esc(email)}">Send it again</button>`);
});

ACTIONS['auth.resend'] = async (el) => {
  el.disabled = true;
  try {
    const { error } = await DB.auth.resendConfirmation(el.dataset.email);
    if (error) App.authMessage(App.authError(error), 'error');
    else App.authMessage(`Sent again to ${el.dataset.email}. Check your inbox and spam folder.`, 'success');
  } catch (e) { App.authMessage(App.authError(e), 'error'); }
};

ACTIONS['auth.forgot'] = (form) => App.withButton(form, 'Sending…', async () => {
  const email = form.email.value.trim();
  if (!email) return App.authMessage('Enter the email you registered with.', 'error');
  const { error } = await DB.auth.sendPasswordReset(email);
  if (error) return App.authMessage(App.authError(error), 'error');
  App.authMessage(`If ${email} has an account, a reset link is on its way. Open it on this device to choose a new password.`, 'success');
});

ACTIONS['auth.newpass'] = (form) => App.withButton(form, 'Saving…', async () => {
  const password = form.password.value;
  if (password.length < 6) return App.authMessage('Choose a password of at least 6 characters.', 'error');
  const { error } = await DB.auth.updatePassword(password);
  if (error) return App.authMessage(App.authError(error), 'error');
  history.replaceState(null, '', location.pathname);
  const session = await DB.auth.getSession();
  form.reset();
  if (session && session.user) { await App.enter(session.user); App.toast('Password changed.', 'success'); }
  else { App.authTab('login'); App.authMessage('Password changed. Sign in with your new password.', 'success'); }
});

// ─── Actions: shell ────────────────────────────────────────────────────────
ACTIONS['nav.go'] = (el) => { document.body.classList.remove('nav-open'); App.go(el.dataset.view); };
ACTIONS['nav.toggle'] = () => document.body.classList.toggle('nav-open');
ACTIONS['nav.close'] = () => document.body.classList.remove('nav-open');
ACTIONS['theme.toggle'] = () => { App.applyTheme(App.theme === 'dark' ? 'light' : 'dark'); App.refreshHeader(); };
ACTIONS['bookmark.toggle'] = (el) => {
  const on = Store.toggleBookmark(el.dataset.id);
  $$(`[data-act="bookmark.toggle"][data-id="${CSS.escape(el.dataset.id)}"]`).forEach((b) => { b.classList.toggle('is-on', on); b.innerHTML = on ? '★ Saved' : '☆ Save'; });
};
ACTIONS['acc.toggle'] = (el) => el.closest('.acc').classList.toggle('is-open');

ACTIONS['report.open'] = async (el) => {
  const q = Bank.get(el.dataset.id);
  if (!q) return;
  if (!App.user) return App.toast('Sign in to report a problem with a question.', 'info');
  const note = await App.modal(
    `<h3 class="modal-title">Report a problem</h3><p class="muted">${esc(q.question)}</p>
     <textarea class="input" rows="4" maxlength="500" placeholder="What is wrong? e.g. the marked answer is incorrect because…"></textarea>`,
    [{ label: 'Cancel', value: null, cls: 'btn-ghost' }, { label: 'Send report', value: (root) => $('textarea', root).value.trim(), cls: 'btn-primary' }]);
  if (!note) return;
  try { await DB.reports.add(q.id, note.slice(0, 500)); App.toast('Thank you. The admin will review it.', 'success'); }
  catch (e) { App.toast('Could not send the report: ' + e.message, 'error'); }
};

// ════════════════════════════════════════════════════════════════════════════
// 7. STUDY MODES
// ════════════════════════════════════════════════════════════════════════════

// ─── Shared pieces ─────────────────────────────────────────────────────────
const perfKey = (q) => `${q.course}|${q.topic}|${q.subTopic}`;
const pct = (c, t) => (t ? Math.round((c / t) * 100) : 0);
const bankLoadingHtml = () => `<div class="card center"><div class="spinner"></div><p class="muted">${Bank.loading ? 'Loading the question bank…' : 'No questions are available yet.'}</p></div>`;
const saveBtn = (id) => `<button class="btn btn-ghost btn-sm ${Store.isBookmarked(id) ? 'is-on' : ''}" data-act="bookmark.toggle" data-id="${esc(id)}">${Store.isBookmarked(id) ? '★ Saved' : '☆ Save'}</button>`;
const qBadges = (q) => `<span class="badge badge-course">${esc(q.course)}</span><span class="badge">${esc(q.topic)} › ${esc(q.subTopic)}</span>`;
const progressBar = (value) => `<div class="bar"><div class="bar-fill" style="width:${Math.max(0, Math.min(100, value))}%"></div></div>`;

/** Course / topic / sub-topic / type picker used by every mode. */
const Filters = {
  prefix: null, opts: {}, s: null,
  fresh() { return { courses: [], offTopics: new Set(), offSubs: new Set(), search: '', type: 'all', label: 'all' }; },
  html(prefix, opts = {}) {
    this.prefix = prefix; this.opts = opts; this.s = this.fresh();
    const mode = Settings.get().modes[prefix] || {};
    const types = Object.entries(Settings.get().types).filter(([k, t]) => t.enabled !== false && QTYPE_BASES[t.base] && (!opts.choiceOnly || QTYPE_BASES[t.base].kind === 'choice'));
    const labels = Settings.get().labels || [];
    return `<div class="filters">
      <div class="field"><label class="field-label">Courses</label><div class="pills" id="f-courses"></div></div>
      <div class="field"><div class="field-head"><label class="field-label">Topics</label>
        <span class="field-tools"><button type="button" class="link" data-act="filter.all" data-scope="topic" data-on="1">Select all</button><button type="button" class="link" data-act="filter.all" data-scope="topic" data-on="0">Clear</button></span></div>
        <div id="f-topics" class="acc-list"></div></div>
      <div class="field"><div class="field-head"><label class="field-label">Sub-topics</label>
        <span class="field-tools"><button type="button" class="link" data-act="filter.all" data-scope="sub" data-on="1">Select all</button><button type="button" class="link" data-act="filter.all" data-scope="sub" data-on="0">Clear</button></span></div>
        <div id="f-subs" class="acc-list"></div></div>
      <div class="field"><label class="field-label" for="f-search">Search (optional)</label>
        <input id="f-search" class="input" type="search" placeholder="e.g. brachial plexus, Krebs cycle" data-input="filter.search" /></div>
      <div class="field-row">
        <div class="field"><label class="field-label" for="f-type">Question type</label>
          <select id="f-type" class="input" data-change="filter.type"><option value="all">All types</option>${types.map(([k, t]) => `<option value="${esc(k)}">${esc(t.label)}</option>`).join('')}</select></div>
        ${labels.length ? `<div class="field"><label class="field-label" for="f-label">Label</label>
          <select id="f-label" class="input" data-change="filter.label"><option value="all">Any</option>${labels.map((l) => `<option value="${esc(l)}">${esc(l)}</option>`).join('')}</select></div>` : ''}
        <div class="field"><label class="field-label" for="f-count">Number of questions</label>
          <input id="f-count" class="input" type="number" min="1" step="1" inputmode="numeric" value="${mode.defaultCount || 20}" />
          <small id="f-avail" class="muted"></small></div>
      </div>
    </div>`;
  },
  base() { let p = Bank.live(); if (this.opts.choiceOnly) p = p.filter((q) => QTypes.isChoice(q)); return p; },
  inCourses() { const c = this.s.courses; return c.length ? this.base().filter((q) => c.includes(q.course)) : this.base(); },
  pool() {
    const s = this.s, needle = s.search.trim().toLowerCase();
    return this.inCourses().filter((q) =>
      !s.offTopics.has(`${q.course}|${q.topic}`) && !s.offSubs.has(perfKey(q)) &&
      (s.type === 'all' || q.type === s.type) &&
      (s.label === 'all' || (q.tags || []).includes(s.label)) &&
      (!needle || q.question.toLowerCase().includes(needle) || q.topic.toLowerCase().includes(needle) || q.subTopic.toLowerCase().includes(needle) || (q.explanation || '').toLowerCase().includes(needle)));
  },
  mount() { this.drawCourses(); this.drawLists(); },
  drawCourses() {
    const box = $('#f-courses'); if (!box) return;
    const sel = this.s.courses;
    box.innerHTML = `<button type="button" class="pill ${sel.length ? '' : 'is-on'}" data-act="filter.course" data-v="">All courses</button>` +
      Bank.courses().map((c) => `<button type="button" class="pill ${sel.includes(c) ? 'is-on' : ''}" data-act="filter.course" data-v="${esc(c)}">${esc(c)}</button>`).join('');
  },
  drawLists() {
    const tBox = $('#f-topics'), sBox = $('#f-subs'); if (!tBox) return;
    const open = new Set($$('.acc.is-open', tBox.parentElement.parentElement).map((a) => a.dataset.k));
    const tree = new Map();
    for (const q of this.inCourses()) {
      if (!tree.has(q.course)) tree.set(q.course, new Map());
      const t = tree.get(q.course); if (!t.has(q.topic)) t.set(q.topic, new Map());
      const sub = t.get(q.topic); sub.set(q.subTopic, (sub.get(q.subTopic) || 0) + 1);
    }
    const s = this.s;
    const acc = (key, title, meta, body) => `<div class="acc ${open.has(key) ? 'is-open' : ''}" data-k="${esc(key)}"><button type="button" class="acc-head" data-act="acc.toggle"><span>${esc(title)}</span><span class="acc-meta">${meta}</span></button><div class="acc-body"><div class="checks">${body}</div></div></div>`;
    const check = (scope, key, text, on, n) => `<label class="check"><input type="checkbox" data-change="filter.check" data-scope="${scope}" data-key="${esc(key)}" ${on ? 'checked' : ''}/><span>${esc(text)}</span><em>${n}</em></label>`;
    let tHtml = '', sHtml = '';
    for (const course of Bank.courses().filter((c) => tree.has(c))) {
      const topics = [...tree.get(course).keys()].sort();
      const onCount = topics.filter((t) => !s.offTopics.has(`${course}|${t}`)).length;
      tHtml += acc('t:' + course, course, `${onCount}/${topics.length}`, topics.map((t) => {
        const n = [...tree.get(course).get(t).values()].reduce((a, b) => a + b, 0);
        return check('topic', `${course}|${t}`, t, !s.offTopics.has(`${course}|${t}`), n);
      }).join(''));
      for (const t of topics) {
        if (s.offTopics.has(`${course}|${t}`)) continue;
        const subs = [...tree.get(course).get(t).keys()].sort();
        const on = subs.filter((x) => !s.offSubs.has(`${course}|${t}|${x}`)).length;
        sHtml += acc('s:' + course + '|' + t, `${t}`, `${on}/${subs.length}`, subs.map((x) => check('sub', `${course}|${t}|${x}`, x, !s.offSubs.has(`${course}|${t}|${x}`), tree.get(course).get(t).get(x))).join(''));
      }
    }
    tBox.innerHTML = tHtml || '<p class="muted">No topics yet.</p>';
    sBox.innerHTML = sHtml || '<p class="muted">Select a topic to see its sub-topics.</p>';
    this.drawCount();
  },
  drawCount() {
    const el = $('#f-avail'); if (!el) return;
    const n = this.pool().length, max = (Settings.get().modes[this.prefix] || {}).maxCount || n;
    el.textContent = `${n.toLocaleString()} available · up to ${Math.min(n, max)} per session`;
    const input = $('#f-count'); if (input) input.max = String(Math.max(1, Math.min(n, max)));
  },
  /** Returns the chosen questions, or null (after telling the student what to fix). */
  take(min = 1) {
    const pool = this.pool();
    const max = Math.min(pool.length, (Settings.get().modes[this.prefix] || {}).maxCount || pool.length);
    if (pool.length < min) { App.toast(pool.length ? `Only ${pool.length} question${pool.length === 1 ? '' : 's'} match. Widen the filters (at least ${min} needed).` : 'No questions match these filters.', 'error'); return null; }
    const raw = ($('#f-count')?.value || '').trim();
    const n = Number(raw);
    if (!/^\d+$/.test(raw) || n < min) { App.toast(`Enter a whole number of at least ${min}.`, 'error'); $('#f-count')?.focus(); return null; }
    if (n > max) { App.toast(`You can take up to ${max} questions with these filters.`, 'error'); $('#f-count').value = max; return null; }
    return shuffle(pool).slice(0, n);
  },
};
ACTIONS['filter.course'] = (el) => {
  const s = Filters.s, v = el.dataset.v;
  if (!v) s.courses = []; else if (s.courses.includes(v)) s.courses = s.courses.filter((c) => c !== v); else s.courses.push(v);
  Filters.drawCourses(); Filters.drawLists();
};
ACTIONS['filter.check'] = (el) => {
  const set = el.dataset.scope === 'topic' ? Filters.s.offTopics : Filters.s.offSubs;
  if (el.checked) set.delete(el.dataset.key); else set.add(el.dataset.key);
  Filters.drawLists();
};
ACTIONS['filter.all'] = (el) => {
  const on = el.dataset.on === '1', s = Filters.s;
  if (el.dataset.scope === 'topic') { s.offTopics = new Set(on ? [] : Filters.inCourses().map((q) => `${q.course}|${q.topic}`)); }
  else { s.offSubs = new Set(on ? [] : Filters.inCourses().filter((q) => !s.offTopics.has(`${q.course}|${q.topic}`)).map(perfKey)); }
  Filters.drawLists();
};
ACTIONS['filter.search'] = (el) => { Filters.s.search = el.value; Filters.drawCount(); };
ACTIONS['filter.type'] = (el) => { Filters.s.type = el.value; Filters.drawCount(); };
ACTIONS['filter.label'] = (el) => { Filters.s.label = el.value; Filters.drawCount(); };

/** Turn a list of graded answers into history statistics. */
function buildPerf(results) {
  const perf = {};
  for (const r of results) { const k = perfKey(r.item.q); perf[k] = perf[k] || { c: 0, t: 0 }; perf[k].t++; if (r.ok) perf[k].c++; }
  return perf;
}
/** Average for one sub-topic across earlier sessions (called BEFORE the new session is saved). */
function pastAverage(key) {
  let c = 0, t = 0;
  for (const h of Store.state.history) { const p = h.perf && h.perf[key]; if (p && !h.ungraded) { c += p.c; t += p.t; } }
  return t ? pct(c, t) : null;
}

/** The results page shared by Practice, Exam, Daily and re-drills. */
function reviewHtml({ title, results, total, elapsed, xp, againView, past, note = '' }) {
  const score = results.filter((r) => r.ok).length;
  const p = pct(score, total), wrong = results.filter((r) => !r.ok);
  const perf = buildPerf(results);
  const rows = Object.entries(perf).map(([k, v]) => {
    const [, topic, sub] = k.split('|'); const now = pct(v.c, v.t); const before = past ? past[k] : null;
    const delta = before == null ? '<span class="muted">first time</span>' : (now - before >= 0 ? `<span class="up">▲ ${now - before}%</span>` : `<span class="down">▼ ${before - now}%</span>`);
    return `<tr><td>${esc(sub)}<small class="muted block">${esc(topic)}</small></td><td>${v.c}/${v.t}</td><td class="${now >= 50 ? 'up' : 'down'}">${now}%</td><td>${delta}</td></tr>`;
  }).join('');
  const cards = results.map((r, i) => {
    const q = r.item.q;
    return `<article class="review ${r.ok ? 'is-right' : 'is-wrong'}" data-ok="${r.ok ? 1 : 0}">
      <header class="review-head"><div><span class="badge ${r.ok ? 'badge-good' : 'badge-bad'}">${r.ok ? '✓ Correct' : (r.response ? '✗ Incorrect' : '— Not answered')}</span> ${qBadges(q)}</div>${saveBtn(q.id)}</header>
      <p class="q-text"><strong>${i + 1}.</strong> ${esc(q.question)}</p>
      <div class="answer-box">${r.response ? `<p class="${r.ok ? 'up' : 'down'}">Your answer: ${esc(r.response)}</p>` : ''}${r.ok ? '' : `<p class="up"><strong>Correct answer: ${esc(QTypes.correctText(r.item))}</strong></p>`}</div>
      ${!r.ok && r.conf === 'sure' ? '<p class="flag-note">You were very sure of this one. Worth a second look.</p>' : ''}
      <div class="explain"><strong>Explanation</strong><p>${esc(q.explanation)}</p></div>
      <button class="link" data-act="report.open" data-id="${esc(q.id)}">Report a problem with this question</button>
    </article>`;
  }).join('');
  return `<section class="card center result ${p >= 50 ? 'is-pass' : 'is-fail'}">
      <h2>${esc(title)}</h2><div class="result-score">${p}%</div>
      <p class="result-line">${score} / ${total} correct · ${formatTime(elapsed)} · +${xp} XP</p>${note}
      <div class="btn-row center"><button class="btn btn-primary" data-act="nav.go" data-view="${againView}">New session</button>
        ${wrong.length ? `<button class="btn btn-danger" data-act="practice.redrill" data-ids="${esc(wrong.map((r) => r.item.q.id).join(','))}">Re-drill ${wrong.length} missed</button>` : ''}</div>
    </section>
    ${rows ? `<section class="card"><h3 class="card-title">By sub-topic</h3><div class="table-wrap"><table class="table"><thead><tr><th>Sub-topic</th><th>Score</th><th>%</th><th>vs your average</th></tr></thead><tbody>${rows}</tbody></table></div></section>` : ''}
    <section class="card"><div class="card-head"><h3 class="card-title">Question review</h3>
      <div class="seg"><button class="seg-btn is-on" data-act="review.filter" data-f="all">All (${results.length})</button><button class="seg-btn" data-act="review.filter" data-f="0">Missed (${wrong.length})</button><button class="seg-btn" data-act="review.filter" data-f="1">Correct (${score})</button></div></div>
      <div id="review-list">${cards || '<p class="muted">No questions were answered.</p>'}</div></section>`;
}
ACTIONS['review.filter'] = (el) => {
  $$('.seg-btn', el.parentElement).forEach((b) => b.classList.toggle('is-on', b === el));
  $$('#review-list .review').forEach((c) => { c.hidden = el.dataset.f !== 'all' && c.dataset.ok !== el.dataset.f; });
};

/** Grade a finished sitting: XP, mistakes, history. Returns numbers for the results page. */
function settleSession({ mode, label, results, total }) {
  const past = {};
  for (const r of results) { const k = perfKey(r.item.q); if (!(k in past)) past[k] = pastAverage(k); }
  let xp = 0;
  for (const r of results) {
    if (r.response) Store.noteAnswer(r.item.q, r.ok);
    if (r.ok && !r.paid) xp += Store.awardQuestion(r.item.q, mode);
    if (r.ok && r.paid) xp += r.paid;
  }
  const answered = results.filter((r) => r.response).length;
  if (answered) Store.touchStudy();
  xp += Store.awardBonus(mode, answered);
  const score = results.filter((r) => r.ok).length;
  if (total > 0) Store.addHistory({ mode: label, score, total, xp, perf: buildPerf(results) });
  Store.changed(); Store.schedulePush(800);
  return { xp, past, score };
}

// ─── DASHBOARD ─────────────────────────────────────────────────────────────
VIEWS.dashboard = {
  render() {
    const st = Store.state, rank = Store.rank(), streak = Store.currentStreak();
    const graded = st.history.filter((h) => !h.ungraded && h.total > 0);
    let totalQ = 0, right = 0; const subs = {}, courses = {};
    for (const h of graded) {
      totalQ += h.total; right += h.score;
      for (const [k, v] of Object.entries(h.perf || {})) {
        const course = k.split('|')[0];
        subs[k] = subs[k] || { c: 0, t: 0 }; subs[k].c += v.c; subs[k].t += v.t;
        if (course) { courses[course] = courses[course] || { c: 0, t: 0 }; courses[course].c += v.c; courses[course].t += v.t; }
      }
    }
    const ranked = Object.entries(subs).filter(([, v]) => v.t >= 3).map(([k, v]) => ({ k, p: pct(v.c, v.t) })).sort((a, b) => a.p - b.p);
    const subName = (k) => { const [, topic, sub] = k.split('|'); return `${esc(sub)}${topic ? ` <small class="muted">(${esc(topic)})</small>` : ''}`; };
    const due = Store.dueIds().length;
    const heat = Bank.courses().map((c) => {
      const v = courses[c]; const p = v && v.t >= 3 ? pct(v.c, v.t) : null;
      return `<div class="heat ${p == null ? '' : p >= 75 ? 'is-strong' : p >= 50 ? 'is-mid' : 'is-weak'}"><span>${esc(c)}</span><strong>${p == null ? 'No data' : p + '%'}</strong></div>`;
    }).join('');
    const recent = st.history.slice(0, 5).map((h) => `<li class="recent"><span>${esc(h.mode)}</span><strong class="${h.ungraded ? 'muted' : pct(h.score, h.total) >= 50 ? 'up' : 'down'}">${h.ungraded ? `${h.total} viewed` : pct(h.score, h.total) + '%'}</strong><time class="muted">${new Date(h.date).toLocaleDateString()}</time></li>`).join('');
    return `
      <section class="card hero">
        <div class="hero-top"><div class="hero-rank"><span class="hero-badge">${esc(rank.badge)}</span><div><h2>${esc(rank.title)}</h2><p>${esc(rank.desc || '')}</p></div></div>
          <div class="hero-nums"><div><strong>${streak}</strong><span>day streak</span></div><div><strong>${st.xp.toLocaleString()}</strong><span>total XP</span></div></div></div>
        <div class="hero-bar"><div class="hero-bar-label"><span>Level ${rank.level}</span><span>${rank.next ? `${st.xp.toLocaleString()} / ${rank.next.minXp.toLocaleString()} XP to ${esc(rank.next.title)}` : 'Top level reached'}</span></div>${progressBar(rank.progress)}</div>
        ${due ? `<div class="hero-due"><span><strong>${due}</strong> card${due === 1 ? '' : 's'} due for review today</span><button class="btn btn-accent btn-sm" data-act="nav.go" data-view="saved">Review now</button></div>` : ''}
      </section>
      ${!Bank.live().length ? bankLoadingHtml() : ''}
      <section class="card"><h3 class="card-title">Your performance</h3>
        <div class="stats"><div class="stat"><span>Sessions</span><strong>${graded.length}</strong></div><div class="stat"><span>Accuracy</span><strong>${pct(right, totalQ)}%</strong></div><div class="stat"><span>Questions</span><strong>${totalQ.toLocaleString()}</strong></div><div class="stat"><span>To revisit</span><strong>${Store.activeMistakes().length}</strong></div></div>
        <div class="two"><div class="callout callout-weak"><span>Weakest sub-topic</span><strong>${ranked.length ? subName(ranked[0].k) + ` · ${ranked[0].p}%` : 'Not enough data yet'}</strong></div>
          <div class="callout callout-strong"><span>Strongest sub-topic</span><strong>${ranked.length ? subName(ranked[ranked.length - 1].k) + ` · ${ranked[ranked.length - 1].p}%` : 'Not enough data yet'}</strong></div></div>
      </section>
      <section class="card"><h3 class="card-title">Accuracy by course</h3><div class="heat-grid">${heat || '<p class="muted">Courses appear here once the question bank has loaded.</p>'}</div></section>
      <section class="card"><h3 class="card-title">Recent activity</h3>${recent ? `<ul class="recent-list">${recent}</ul>` : '<p class="muted">No sessions yet. Start with Practice.</p>'}</section>`;
  },
};

// ─── PRACTICE ──────────────────────────────────────────────────────────────
const Practice = {
  s: null,
  setupHtml() {
    if (!Bank.live().length) return bankLoadingHtml();
    return `<section class="card"><h2 class="card-title">Practice</h2><p class="muted">Answer at your own pace and see the explanation after each question.</p>
      ${Filters.html('practice')}<button class="btn btn-primary btn-block" data-act="practice.start">Start practice</button></section>`;
  },
  start(questions, label = 'Practice') {
    this.s = { items: questions.map((q) => QTypes.prepare(q)), i: 0, results: [], label, startedAt: Date.now(), xp: 0, done: false };
    App.view = 'practice';
    $$('.nav-item').forEach((b) => b.classList.toggle('is-active', b.dataset.view === 'practice'));
    this.draw(); window.scrollTo(0, 0);
  },
  draw() {
    const s = this.s, item = s.items[s.i], q = item.q, r = s.results[s.i];
    App.setView(`<section class="card qcard">
      ${progressBar((s.i / s.items.length) * 100)}
      <div class="q-meta"><div>${qBadges(q)}</div><span class="muted">${s.i + 1} / ${s.items.length}</span></div>
      <p class="q-text">${esc(q.question)}</p>
      ${QTypes.inputHtml(item, { response: r ? r.response : null, locked: !!r, reveal: true, prefix: 'practice' })}
      ${r ? `<div class="feedback ${r.ok ? 'is-right' : 'is-wrong'}"><strong>${r.ok ? `✓ Correct${r.paid ? ` · +${r.paid} XP` : ''}` : '✗ Not quite'}</strong>
          ${r.ok || QTypes.isChoice(q) ? '' : `<p>Correct answer: <strong>${esc(QTypes.correctText(item))}</strong></p>`}<p>${esc(q.explanation)}</p></div>
        <div class="conf"><span class="muted">How sure were you?</span><div class="seg">
          ${[['guess', 'Guessed'], ['some', 'Fairly sure'], ['sure', 'Very sure']].map(([v, t]) => `<button class="seg-btn ${r.conf === v ? 'is-on' : ''}" data-act="practice.conf" data-v="${v}">${t}</button>`).join('')}</div></div>` : ''}
      <div class="q-foot"><div class="btn-row">${saveBtn(q.id)}${r ? `<button class="link" data-act="report.open" data-id="${esc(q.id)}">Report a problem</button>` : ''}</div>
        ${r ? `<button class="btn btn-primary" data-act="practice.next">${s.i + 1 >= s.items.length ? 'See results' : 'Next'}</button>` : '<button class="btn btn-ghost" data-act="practice.finish">End session</button>'}</div>
    </section>`);
  },
  answer(response) {
    const s = this.s; if (!s || s.done || s.results[s.i] || !response) return;
    const item = s.items[s.i], ok = QTypes.grade(item, response);
    Store.noteAnswer(item.q, ok);
    const paid = ok ? Store.awardQuestion(item.q, 'practice') : 0;
    if (!ok) Store.touchStudy();
    s.results[s.i] = { item, response, ok, paid, conf: null };
    Store.changed();
    this.draw();
  },
  finish(silent = false) {
    const s = this.s; if (!s || s.done) return;
    s.done = true;
    const results = s.results.filter(Boolean);
    if (!results.length) { if (!silent) App.go('practice', { force: true }); return; }
    const past = {};
    for (const r of results) { const k = perfKey(r.item.q); if (!(k in past)) past[k] = pastAverage(k); }
    const bonus = Store.awardBonus('practice', results.length);
    const xp = results.reduce((a, r) => a + (r.paid || 0), 0) + bonus;
    Store.addHistory({ mode: s.label, score: results.filter((r) => r.ok).length, total: results.length, xp, perf: buildPerf(results) });
    Store.changed(); Store.schedulePush(800);
    if (silent) return;
    App.setView(reviewHtml({ title: `${s.label} complete`, results, total: results.length, elapsed: (Date.now() - s.startedAt) / 1000, xp, againView: 'practice', past }));
    window.scrollTo(0, 0);
  },
};
VIEWS.practice = {
  render() { Practice.s = null; return Practice.setupHtml(); },
  mounted() { Filters.mount(); },
  onBankReady() { if (!Practice.s) App.go('practice', { force: true }); },
  leave() { if (Practice.s && !Practice.s.done) Practice.finish(true); },      // keep what was answered
  onKey(e) {
    const s = Practice.s; if (!s || s.done) return;
    const r = s.results[s.i];
    if (!r && /^[1-8]$/.test(e.key)) { const b = $$('.option')[Number(e.key) - 1]; if (b) b.click(); }
    if (r && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); ACTIONS['practice.next'](); }
  },
};
ACTIONS['practice.start'] = () => { const qs = Filters.take(1); if (qs) Practice.start(qs); };
ACTIONS['practice.answer'] = (el) => Practice.answer(Practice.s.items[Practice.s.i].options[Number(el.dataset.i)]);
ACTIONS['practice.answerText'] = (form) => { const v = form.response.value.trim(); if (!v) return App.toast('Type an answer first.', 'info'); Practice.answer(v); };
ACTIONS['practice.conf'] = (el) => { const s = Practice.s; s.results[s.i].conf = el.dataset.v; $$('.seg-btn', el.parentElement).forEach((b) => b.classList.toggle('is-on', b === el)); };
ACTIONS['practice.next'] = () => { const s = Practice.s; if (!s || !s.results[s.i]) return; if (s.i + 1 >= s.items.length) return Practice.finish(); s.i++; Practice.draw(); window.scrollTo(0, 0); };
ACTIONS['practice.finish'] = async () => {
  const s = Practice.s; const done = s.results.filter(Boolean).length;
  if (done && !(await App.confirm(`End now? Your ${done} answered question${done === 1 ? '' : 's'} will be scored.`, 'End session'))) return;
  Practice.finish();
};
ACTIONS['practice.redrill'] = (el) => {
  const qs = el.dataset.ids.split(',').map((id) => Bank.get(id)).filter(Boolean);
  if (!qs.length) return App.toast('Those questions are no longer in the bank.', 'error');
  App.stopTimers(); App.busy = null;
  Practice.start(shuffle(qs), 'Re-drill');
};

// ─── TIMED TEST (Exam Simulator and Daily Challenge share this) ────────────
const Test = {
  s: null,
  start({ mode, label, questions, seconds, responses = null, endsAt = null }) {
    this.s = { mode, label, items: questions.map((q) => QTypes.prepare(q)), i: 0, responses: responses || new Array(questions.length).fill(null),
               flagged: new Set(), startedAt: Date.now(), seconds, endsAt: endsAt || Date.now() + seconds * 1000, done: false };
    App.busy = mode === 'daily' ? 'Daily Challenge' : 'exam';
    this.draw(); window.scrollTo(0, 0);
    App.every(500, () => this.tick());
  },
  left() { return Math.max(0, Math.ceil((this.s.endsAt - Date.now()) / 1000)); },
  tick() {
    const s = this.s; if (!s || s.done) return;
    const left = this.left(), el = $('#test-timer');
    if (el) { el.textContent = formatTime(left); el.classList.toggle('is-urgent', left <= Math.max(30, s.seconds * 0.1)); }
    if (left <= 0) this.finish(true);
  },
  draw() {
    const s = this.s, item = s.items[s.i], q = item.q, n = s.items.length;
    const answered = s.responses.filter((r) => r != null && r !== '').length;
    App.setView(`<section class="card qcard test-card">
      <div class="q-meta"><span class="badge badge-course">${esc(s.label)}</span><span class="timer" id="test-timer">${formatTime(this.left())}</span></div>
      ${progressBar((answered / n) * 100)}
      <div class="q-meta"><div>${qBadges(q)}</div><span class="muted">${s.i + 1} / ${n}</span></div>
      <p class="q-text">${esc(q.question)}</p>
      ${QTypes.inputHtml(item, { response: s.responses[s.i], locked: false, reveal: false, prefix: 'test' })}
      <div class="q-foot"><div class="btn-row"><button class="btn btn-ghost" data-act="test.step" data-d="-1" ${s.i === 0 ? 'disabled' : ''}>Previous</button>
          <button class="btn btn-ghost ${s.flagged.has(s.i) ? 'is-on' : ''}" data-act="test.flag">${icon('flag')} ${s.flagged.has(s.i) ? 'Flagged' : 'Flag'}</button></div>
        ${s.i + 1 < n ? '<button class="btn btn-primary" data-act="test.step" data-d="1">Next</button>' : '<button class="btn btn-danger" data-act="test.submit">Submit</button>'}</div>
      <div class="grid-nav" aria-label="Jump to a question">${s.items.map((_, k) => `<button class="grid-cell ${k === s.i ? 'is-current' : ''} ${s.responses[k] ? 'is-done' : ''} ${s.flagged.has(k) ? 'is-flagged' : ''}" data-act="test.jump" data-k="${k}">${k + 1}</button>`).join('')}</div>
      <div class="q-foot"><span class="muted">${answered} of ${n} answered</span><button class="btn btn-danger btn-sm" data-act="test.submit">Submit ${s.mode === 'daily' ? 'challenge' : 'exam'}</button></div>
    </section>`);
  },
  set(response) {
    const s = this.s; if (!s || s.done) return;
    s.responses[s.i] = response;
    if (s.mode === 'daily') Daily.saveProgress();
    this.draw();
  },
  async finish(timeUp = false) {
    const s = this.s; if (!s || s.done) return;
    s.done = true; App.stopTimers(); App.busy = null;
    const results = s.items.map((item, k) => ({ item, response: s.responses[k], ok: QTypes.grade(item, s.responses[k]) }));
    const elapsed = Math.max(0, Math.min(s.seconds, s.seconds - (s.endsAt - Date.now()) / 1000));
    const { xp, past, score } = settleSession({ mode: s.mode, label: s.label, results, total: s.items.length });
    let note = timeUp ? '<p class="muted">Time ran out, so the test was submitted automatically.</p>' : '';
    if (s.mode === 'daily') note += await Daily.afterFinish(score, s.items.length, Math.round(elapsed));
    if (App.view !== (s.mode === 'daily' ? 'daily' : 'exam')) return;
    App.setView(reviewHtml({ title: `${s.label} results`, results, total: s.items.length, elapsed, xp, againView: s.mode === 'daily' ? 'daily' : 'exam', past, note }));
    window.scrollTo(0, 0);
  },
  onKey(e) {
    const s = this.s; if (!s || s.done) return;
    if (/^[1-8]$/.test(e.key)) { const b = $$('.option')[Number(e.key) - 1]; if (b) b.click(); }
    if (e.key === 'ArrowRight' && s.i + 1 < s.items.length) { s.i++; this.draw(); }
    if (e.key === 'ArrowLeft' && s.i > 0) { s.i--; this.draw(); }
  },
};
ACTIONS['test.answer'] = (el) => { const s = Test.s; Test.set(s.items[s.i].options[Number(el.dataset.i)]); };
ACTIONS['test.answerText'] = (form) => { Test.set(form.response.value.trim() || null); App.toast('Answer saved.', 'success'); };
ACTIONS['test.step'] = (el) => { const s = Test.s; const k = s.i + Number(el.dataset.d); if (k >= 0 && k < s.items.length) { s.i = k; Test.draw(); } };
ACTIONS['test.jump'] = (el) => { Test.s.i = Number(el.dataset.k); Test.draw(); window.scrollTo(0, 0); };
ACTIONS['test.flag'] = () => { const s = Test.s; if (s.flagged.has(s.i)) s.flagged.delete(s.i); else s.flagged.add(s.i); Test.draw(); };
ACTIONS['test.submit'] = async () => {
  const s = Test.s; if (!s || s.done) return;
  const open = s.responses.filter((r) => r == null || r === '').length;
  const ok = await App.confirm(open ? `You have ${open} unanswered question${open === 1 ? '' : 's'}. Submit anyway?` : 'Submit your answers? You cannot change them afterwards.', 'Submit');
  if (ok) Test.finish();
};

VIEWS.exam = {
  render() {
    Test.s = null;
    if (!Bank.live().length) return bankLoadingHtml();
    const m = Settings.get().modes.exam;
    return `<section class="card"><h2 class="card-title">Exam Simulator</h2><p class="muted">Timed. Move freely between questions; nothing is marked until you submit.</p>
      ${Filters.html('exam')}
      <div class="field"><label class="field-label" for="exam-mins">Time allowed</label><select id="exam-mins" class="input">${(m.durations || [30]).map((d) => `<option value="${d}" ${d === m.defaultDuration ? 'selected' : ''}>${d} minutes</option>`).join('')}</select></div>
      <button class="btn btn-primary btn-block" data-act="exam.start">Begin exam</button></section>`;
  },
  mounted() { Filters.mount(); },
  onBankReady() { if (!Test.s) App.go('exam', { force: true }); },
  onKey(e) { Test.onKey(e); },
};
ACTIONS['exam.start'] = () => {
  const mins = Number($('#exam-mins').value) || 30;
  const qs = Filters.take(1); if (!qs) return;
  Test.start({ mode: 'exam', label: 'Exam', questions: qs, seconds: mins * 60 });
};

// ─── DAILY CHALLENGE ───────────────────────────────────────────────────────
const Daily = {
  /** Today's shared set of question ids. */
  async todaysIds(date) {
    const cfg = Settings.get().modes.daily;
    const eligible = Bank.live().map((q) => q.id).sort();
    const seed = Number(date.replace(/-/g, ''));
    const pick = () => seededShuffle(eligible, seed).slice(0, cfg.count);
    if (!DB.ready) return pick();
    try {
      let ids = await DB.daily.getSet(date);
      if (!ids && App.user) { await DB.daily.createSet(date, pick()); ids = await DB.daily.getSet(date); }
      return ids || pick();
    } catch (e) { console.warn('[Daily] using the offline set:', e.message); return pick(); }
  },
  saveProgress() {
    const s = Test.s, d = Store.state.daily;
    if (!d || d.done) return;
    d.responses = s.responses.slice();
    Store.changed();
  },
  async afterFinish(score, total, seconds) {
    const d = Store.state.daily;
    if (d) { d.done = true; d.score = score; d.total = total; d.seconds = seconds; delete d.responses; Store.changed(); }
    if (!App.user) return '<p class="muted">Sign in to appear on the leaderboard.</p>';
    try {
      const name = (App.user.user_metadata?.display_name || App.user.email || 'Student').slice(0, 40);
      await DB.daily.submit({ user_id: App.user.id, challenge_date: d.date, display_name: name, score, total, time_taken: seconds });
      return '<p class="muted">Your score is on today\'s leaderboard.</p>';
    } catch (e) { return `<p class="muted">Your score could not be posted to the leaderboard (${esc(e.message)}).</p>`; }
  },
  boardHtml(rows) {
    if (!rows) return '<p class="muted">The leaderboard could not be loaded right now.</p>';
    if (!rows.length) return '<p class="muted">No scores yet today. Be the first.</p>';
    return `<div class="table-wrap"><table class="table"><thead><tr><th>#</th><th>Name</th><th>Score</th><th>Time</th></tr></thead><tbody>${rows.map((r, i) =>
      `<tr class="${App.user && r.user_id === App.user.id ? 'is-me' : ''}"><td>${i + 1}</td><td>${esc(r.display_name)}</td><td><strong>${r.score}/${r.total}</strong></td><td>${formatTime(r.time_taken)}</td></tr>`).join('')}</tbody></table></div>`;
  },
};
VIEWS.daily = {
  render() {
    Test.s = null;
    const token = App._viewToken, cfg = Settings.get().modes.daily, date = dayKey();
    (async () => {
      let board = null;
      try { if (DB.ready) board = await DB.daily.leaderboard(date); } catch (_) {}
      if (!App.stillOn('daily', token) || Test.s) return;
      const el = $('#daily-board'); if (el) el.innerHTML = Daily.boardHtml(board);
    })();
    const d = Store.state.daily && Store.state.daily.date === date ? Store.state.daily : null;
    let action;
    if (!Bank.live().length) action = bankLoadingHtml();
    else if (d && d.done) action = `<div class="feedback is-right"><strong>Done for today: ${d.score} / ${d.total} in ${formatTime(d.seconds || 0)}</strong><p>A new set arrives at midnight.</p></div>`;
    else if (d && d.endsAt > Date.now()) action = `<button class="btn btn-accent btn-block" data-act="daily.start">Resume today's challenge (${formatTime((d.endsAt - Date.now()) / 1000)} left)</button>`;
    else action = `<button class="btn btn-accent btn-block" data-act="daily.start">${d ? 'Finish today\'s challenge' : 'Start today\'s challenge'}</button>`;
    return `<section class="card"><h2 class="card-title">Daily Challenge</h2>
        <p class="muted">${cfg.count} questions · the same set for everyone today · ${cfg.minutes}-minute timer · one attempt. The clock keeps running if you leave.</p>
        ${App.user ? '' : '<p class="notice notice-info">You are playing as a guest. Sign in to appear on the leaderboard.</p>'}${action}</section>
      <section class="card"><h3 class="card-title">Today's leaderboard</h3><div id="daily-board"><div class="spinner"></div></div></section>`;
  },
  onBankReady() { if (!Test.s) App.go('daily', { force: true }); },
  onKey(e) { Test.onKey(e); },
};
ACTIONS['daily.start'] = async (el) => {
  el.disabled = true;
  const cfg = Settings.get().modes.daily, date = dayKey(), token = App._viewToken;
  let d = Store.state.daily && Store.state.daily.date === date ? Store.state.daily : null;
  if (d && d.done) return App.go('daily', { force: true });
  if (!d) {
    const ids = await Daily.todaysIds(date);
    if (!App.stillOn('daily', token)) return;
    d = Store.state.daily = { date, ids, responses: null, endsAt: Date.now() + cfg.minutes * 60000, done: false };
    Store.changed();
  }
  const qs = d.ids.map((id) => Bank.get(id)).filter(Boolean);
  if (!qs.length) { el.disabled = false; return App.toast('Today\'s questions are still loading. Try again in a moment.', 'error'); }
  const responses = Array.isArray(d.responses) && d.responses.length === qs.length ? d.responses.slice() : null;
  Test.start({ mode: 'daily', label: 'Daily Challenge', questions: qs, seconds: cfg.minutes * 60, responses, endsAt: d.endsAt });
  if (d.endsAt <= Date.now()) Test.finish(true);
};

// ─── SLIDE REVIEW ──────────────────────────────────────────────────────────
const Slide = {
  s: null,
  start(questions, speed) {
    this.s = { items: questions.map((q) => QTypes.prepare(q)), i: 0, phase: 'q', speed, left: 0, paused: false, startedAt: Date.now(), seen: new Set(), xp: 0, done: false };
    this.enter('q');
    App.every(250, () => this.tick());
  },
  phaseLength(phase) { const half = Math.max(1, Math.floor(this.s.speed / 2)); return phase === 'q' ? half : Math.max(1, this.s.speed - half); },
  enter(phase) {
    const s = this.s; s.phase = phase; s.phaseEnds = Date.now() + this.phaseLength(phase) * 1000; s.pausedLeft = null;
    if (phase === 'a' && !s.seen.has(s.i)) { s.seen.add(s.i); s.xp += Store.awardQuestion(s.items[s.i].q, 'slide'); Store.changed(); }
    this.draw();
  },
  tick() {
    const s = this.s; if (!s || s.done || s.paused) return;
    const left = s.phaseEnds - Date.now(), total = this.phaseLength(s.phase) * 1000;
    const bar = $('#slide-bar'); if (bar) bar.style.width = `${Math.max(0, (left / total) * 100)}%`;
    if (left > 0) return;
    if (s.phase === 'q') return this.enter('a');
    if (s.i + 1 >= s.items.length) return this.finish();
    s.i++; this.enter('q');
  },
  draw() {
    const s = this.s, item = s.items[s.i], q = item.q, speeds = Settings.get().modes.slide.speeds || [5, 8, 12];
    App.setView(`<section class="card qcard slide-card">
      <div class="q-meta"><div>${qBadges(q)}</div><span class="muted">${s.i + 1} / ${s.items.length}</span></div>
      ${progressBar((s.i / s.items.length) * 100)}
      <div class="bar bar-thin"><div class="bar-fill ${s.phase === 'a' ? 'is-answer' : ''}" id="slide-bar" style="width:100%"></div></div>
      <p class="q-text">${esc(q.question)}</p>
      ${s.phase === 'a' ? `<div class="feedback is-right"><strong>Answer: ${esc(QTypes.correctText(item))}</strong><p>${esc(q.explanation)}</p></div>` : '<p class="slide-wait muted">Think of the answer…</p>'}
      <div class="q-foot"><button class="btn btn-ghost" data-act="slide.step" data-d="-1" ${s.i === 0 ? 'disabled' : ''}>Previous</button>
        <button class="btn ${s.paused ? 'btn-primary' : 'btn-ghost'}" data-act="slide.pause">${s.paused ? 'Resume' : 'Pause'}</button>
        <button class="btn btn-ghost" data-act="slide.step" data-d="1">${s.i + 1 >= s.items.length ? 'Finish' : 'Next'}</button></div>
      <div class="q-foot"><div class="seg">${speeds.map((v) => `<button class="seg-btn ${v === s.speed ? 'is-on' : ''}" data-act="slide.speed" data-v="${v}">${v}s</button>`).join('')}</div>${saveBtn(q.id)}</div>
    </section>`);
  },
  finish(silent = false) {
    const s = this.s; if (!s || s.done) return;
    s.done = true; App.stopTimers();
    if (!s.seen.size) { if (!silent) App.go('slide', { force: true }); return; }
    const bonus = Store.awardBonus('slide', s.seen.size);
    Store.addHistory({ mode: 'Slide Review', score: 0, total: s.seen.size, xp: s.xp + bonus, ungraded: true, perf: {} });
    Store.changed(); Store.schedulePush(800);
    if (silent) return;
    const subs = [...new Set([...s.seen].map((k) => s.items[k].q.subTopic))];
    App.setView(`<section class="card center result is-pass"><h2>Slide Review complete</h2>
      <p class="result-line">${s.seen.size} question${s.seen.size === 1 ? '' : 's'} reviewed · ${formatTime((Date.now() - s.startedAt) / 1000)} · +${s.xp + bonus} XP</p>
      <div class="pills center">${subs.map((t) => `<span class="pill is-static">${esc(t)}</span>`).join('')}</div>
      <div class="btn-row center"><button class="btn btn-primary" data-act="nav.go" data-view="slide">New session</button></div></section>`);
  },
};
VIEWS.slide = {
  render() {
    Slide.s = null;
    if (!Bank.live().length) return bankLoadingHtml();
    const m = Settings.get().modes.slide;
    return `<section class="card"><h2 class="card-title">Slide Review</h2><p class="muted">Questions and answers play one after another. Nothing is marked; it is for quick exposure.</p>
      ${Filters.html('slide')}
      <div class="field"><label class="field-label">Seconds per question</label><div class="seg" id="slide-speeds">${(m.speeds || [8]).map((v) => `<button type="button" class="seg-btn ${v === m.defaultSpeed ? 'is-on' : ''}" data-act="slide.pick" data-v="${v}">${v}s</button>`).join('')}</div></div>
      <button class="btn btn-primary btn-block" data-act="slide.start">Begin</button></section>`;
  },
  mounted() { Filters.mount(); },
  onBankReady() { if (!Slide.s) App.go('slide', { force: true }); },
  leave() { if (Slide.s && !Slide.s.done) Slide.finish(true); },
  onKey(e) {
    if (!Slide.s || Slide.s.done) return;
    if (e.key === ' ') { e.preventDefault(); ACTIONS['slide.pause'](); }
    if (e.key === 'ArrowRight') ACTIONS['slide.step']({ dataset: { d: '1' } });
    if (e.key === 'ArrowLeft') ACTIONS['slide.step']({ dataset: { d: '-1' } });
  },
};
ACTIONS['slide.pick'] = (el) => $$('.seg-btn', el.parentElement).forEach((b) => b.classList.toggle('is-on', b === el));
ACTIONS['slide.start'] = () => {
  const speed = Number($('#slide-speeds .is-on')?.dataset.v) || Settings.get().modes.slide.defaultSpeed || 8;
  const qs = Filters.take(1); if (qs) Slide.start(qs, speed);
};
ACTIONS['slide.pause'] = () => {
  const s = Slide.s; if (!s || s.done) return;
  if (s.paused) { s.phaseEnds = Date.now() + (s.pausedLeft || 0); s.paused = false; } else { s.pausedLeft = Math.max(0, s.phaseEnds - Date.now()); s.paused = true; }
  Slide.draw();
};
ACTIONS['slide.step'] = (el) => {
  const s = Slide.s; if (!s || s.done) return;
  const k = s.i + Number(el.dataset.d);
  if (k >= s.items.length) return Slide.finish();
  if (k < 0) return;
  s.i = k; s.paused = false; Slide.enter('q');
};
ACTIONS['slide.speed'] = (el) => { const s = Slide.s; s.speed = Number(el.dataset.v); s.paused = false; Slide.enter(s.phase); };

// ─── HISTORY & MISTAKE NOTEBOOK ────────────────────────────────────────────
/** Groups questions as Course > Topic accordions. */
function groupedHtml(list, cardFn, unit) {
  const tree = {};
  for (const x of list) { const q = x.q; (tree[q.course] = tree[q.course] || {}); (tree[q.course][q.topic] = tree[q.course][q.topic] || []).push(x); }
  return Object.keys(tree).sort().map((course) => {
    const topics = tree[course]; const n = Object.values(topics).reduce((a, l) => a + l.length, 0);
    return `<div class="acc"><button class="acc-head" data-act="acc.toggle"><span>${esc(course)}</span><span class="acc-meta">${n} ${unit}</span></button><div class="acc-body">
      ${Object.keys(topics).sort().map((t) => `<div class="acc acc-inner"><button class="acc-head" data-act="acc.toggle"><span>${esc(t)}</span><span class="acc-meta">${topics[t].length}</span></button><div class="acc-body">${topics[t].map(cardFn).join('')}</div></div>`).join('')}</div></div>`;
  }).join('');
}
VIEWS.history = {
  tab: 'sessions',
  render() {
    const st = Store.state, mistakes = Store.activeMistakes().map((m) => ({ m, q: Bank.get(m.id) }));
    const sessions = st.history.map((h) => `<li class="session"><div><strong>${esc(h.mode)}</strong><time class="muted block">${new Date(h.date).toLocaleString()}</time></div>
      <div class="session-score">${h.ungraded ? `${h.total} viewed` : `${h.score} / ${h.total} <span class="${pct(h.score, h.total) >= 50 ? 'up' : 'down'}">${pct(h.score, h.total)}%</span>`}${h.xp ? `<small class="muted block">+${h.xp} XP</small>` : ''}</div></li>`).join('');
    const mHtml = groupedHtml(mistakes, ({ m, q }) => `<article class="review is-wrong"><header class="review-head"><span class="badge badge-bad">${esc(q.subTopic)}</span><time class="muted">${new Date(m.date).toLocaleDateString()}</time></header>
        <p class="q-text">${esc(q.question)}</p><div class="answer-box"><p class="up"><strong>Correct answer: ${esc(QTypes.correctText(QTypes.prepare(q)))}</strong></p></div>
        <div class="explain"><p>${esc(q.explanation)}</p></div>
        <div class="btn-row"><button class="btn btn-ghost btn-sm" data-act="mistake.master" data-id="${esc(q.id)}">✓ I know this now</button>${saveBtn(q.id)}</div></article>`, 'to revisit');
    return `<section class="card"><div class="card-head"><h2 class="card-title">Study records</h2>
        <div class="btn-row">${this.tab === 'sessions' && st.history.length ? '<button class="btn btn-ghost btn-sm" data-act="history.clear">Clear history</button>' : ''}
          ${this.tab === 'mistakes' && mistakes.length ? `<button class="btn btn-primary btn-sm" data-act="mistake.drill">Drill these</button><button class="btn btn-ghost btn-sm" data-act="mistake.clear">Clear all</button>` : ''}</div></div>
      <div class="seg seg-wide"><button class="seg-btn ${this.tab === 'sessions' ? 'is-on' : ''}" data-act="history.tab" data-t="sessions">Sessions (${st.history.length})</button><button class="seg-btn ${this.tab === 'mistakes' ? 'is-on' : ''}" data-act="history.tab" data-t="mistakes">Mistake notebook (${mistakes.length})</button></div>
      ${this.tab === 'sessions' ? (sessions ? `<ul class="session-list">${sessions}</ul>` : '<p class="muted">No sessions recorded yet.</p>')
        : (mHtml ? `<div class="acc-list">${mHtml}</div>` : '<p class="muted">Nothing to revisit. Questions you miss appear here and leave when you get them right.</p>')}</section>`;
  },
};
ACTIONS['history.tab'] = (el) => { VIEWS.history.tab = el.dataset.t; App.go('history', { force: true }); };
ACTIONS['history.clear'] = async () => { if (await App.confirm('Delete all session history? Your XP and streak stay.', 'Delete')) { Store.state.history = []; Store.changed(); App.go('history', { force: true }); } };
ACTIONS['mistake.clear'] = async () => { if (await App.confirm('Empty the mistake notebook?', 'Empty')) { Store.state.mistakes = []; Store.changed(); App.go('history', { force: true }); } };
ACTIONS['mistake.master'] = (el) => { const m = Store.state.mistakes.find((x) => x.id === el.dataset.id); if (m) { m.mastered = true; Store.changed(); } App.go('history', { force: true, keepScroll: true }); };
ACTIONS['mistake.drill'] = () => { const qs = Store.activeMistakes().map((m) => Bank.get(m.id)).filter(Boolean); if (qs.length) Practice.start(shuffle(qs).slice(0, Settings.get().modes.practice.maxCount), 'Mistake drill'); };

// ─── SAVED QUESTIONS & REVIEW DECK (spaced repetition) ─────────────────────
const Deck = {
  s: null,
  start(ids) { this.s = { ids: shuffle(ids), i: 0, shown: false, xp: 0 }; this.draw(); },
  draw() {
    const s = this.s, box = $('#deck-area'); if (!box) return;
    if (s.i >= s.ids.length) {
      Store.schedulePush(800); this.s = null;
      box.innerHTML = `<div class="feedback is-right center"><strong>Review complete · +${s.xp} XP</strong><p>Each card has been scheduled for its next review.</p><button class="btn btn-primary" data-act="nav.go" data-view="saved">Back to saved questions</button></div>`;
      return;
    }
    const q = Bank.get(s.ids[s.i]), item = QTypes.prepare(q);
    const days = (quality) => { const d = Store.previewSrs(q.id, quality).interval; return d === 1 ? '1 day' : `${d} days`; };
    box.innerHTML = `<div class="card qcard deck-card"><div class="q-meta"><div>${qBadges(q)}</div><span class="muted">Card ${s.i + 1} / ${s.ids.length}</span></div>
      <p class="q-text">${esc(q.question)}</p>
      ${s.shown ? `<div class="feedback is-right"><strong>Answer: ${esc(QTypes.correctText(item))}</strong><p>${esc(q.explanation)}</p></div>
        <p class="muted center">How well did you recall it?</p>
        <div class="rate">${[[1, 'Again'], [3, 'Hard'], [4, 'Good'], [5, 'Easy']].map(([v, t]) => `<button class="btn rate-${v}" data-act="deck.rate" data-v="${v}"><strong>${t}</strong><small>${days(v)}</small></button>`).join('')}</div>`
        : '<button class="btn btn-primary btn-block" data-act="deck.show">Show answer</button>'}</div>`;
  },
};
VIEWS.saved = {
  render() {
    Deck.s = null;
    const saved = Store.state.bookmarks.map((id) => Bank.get(id)).filter(Boolean).map((q) => ({ q }));
    const deck = Store.deckIds().length, due = Store.dueIds().length;
    const list = groupedHtml(saved, ({ q }) => {
      const c = Store.state.srs[q.id];
      const when = !c ? 'New' : c.nextReview <= Date.now() ? 'Due now' : `In ${Math.ceil((c.nextReview - Date.now()) / 86400000)} d`;
      return `<article class="review"><header class="review-head"><span class="badge">${esc(q.subTopic)}</span><span class="badge badge-course">${when}</span></header>
        <p class="q-text">${esc(q.question)}</p><div class="answer-box"><p class="up"><strong>${esc(QTypes.correctText(QTypes.prepare(q)))}</strong></p></div>
        <div class="explain"><p>${esc(q.explanation)}</p></div><button class="btn btn-ghost btn-sm" data-act="saved.remove" data-id="${esc(q.id)}">Remove</button></article>`;
    }, 'saved');
    return `<section class="card"><div class="card-head"><h2 class="card-title">Review deck</h2>${saved.length ? '<button class="btn btn-ghost btn-sm" data-act="saved.export">Export to Anki (CSV)</button>' : ''}</div>
        <p class="muted">Your deck holds the questions you saved and the ones you recently missed (${deck} card${deck === 1 ? '' : 's'}). Cards come back at growing intervals as you learn them.</p>
        <div class="btn-row"><button class="btn btn-primary" data-act="deck.start" data-which="due" ${due ? '' : 'disabled'}>Review due cards (${due})</button>
          <button class="btn btn-ghost" data-act="deck.start" data-which="all" ${deck ? '' : 'disabled'}>Review all (${deck})</button></div>
        <div id="deck-area"></div></section>
      <section class="card"><h3 class="card-title">Saved questions (${saved.length})</h3>${list ? `<div class="acc-list">${list}</div>` : '<p class="muted">Nothing saved yet. Tap “☆ Save” on any question.</p>'}</section>`;
  },
  onKey(e) {
    if (!Deck.s) return;
    if (!Deck.s.shown && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ACTIONS['deck.show'](); }
    else if (Deck.s.shown && /^[1-4]$/.test(e.key)) { const b = $$('.rate .btn')[Number(e.key) - 1]; if (b) b.click(); }
  },
};
ACTIONS['deck.start'] = (el) => { const ids = el.dataset.which === 'due' ? Store.dueIds() : Store.deckIds(); if (ids.length) { Deck.start(ids); $('#deck-area').scrollIntoView({ behavior: 'smooth', block: 'start' }); } };
ACTIONS['deck.show'] = () => { if (Deck.s) { Deck.s.shown = true; Deck.draw(); } };
ACTIONS['deck.rate'] = (el) => {
  const s = Deck.s; if (!s) return;
  const id = s.ids[s.i], quality = Number(el.dataset.v);
  Store.rateSrs(id, quality);
  s.xp += Store.awardQuestion(Bank.get(id), 'review');
  if (quality >= 4) { const m = Store.state.mistakes.find((x) => x.id === id); if (m && Store.state.srs[id].repetitions >= 2) m.mastered = true; }
  Store.changed();
  s.i++; s.shown = false; Deck.draw();
};
ACTIONS['saved.remove'] = (el) => { Store.toggleBookmark(el.dataset.id); App.go('saved', { force: true, keepScroll: true }); };
ACTIONS['saved.export'] = () => {
  const qs = Store.state.bookmarks.map((id) => Bank.get(id)).filter(Boolean);
  if (!qs.length) return;
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = qs.map((q) => [q.question, QTypes.correctText(QTypes.prepare(q)), q.explanation, q.course, q.topic, q.subTopic].map(cell).join(','));
  const blob = new Blob(['﻿' + ['Question,Answer,Explanation,Course,Topic,SubTopic', ...rows].join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'MedMaster_saved_questions.csv';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  App.toast(`Exported ${qs.length} question${qs.length === 1 ? '' : 's'}.`, 'success');
};

// ════════════════════════════════════════════════════════════════════════════
// 8. START
// ════════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => App.init());
