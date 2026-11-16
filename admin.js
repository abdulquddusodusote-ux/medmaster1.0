/**
 * admin.js — the two screens only admins see:
 *   • Question Manager: add, paste many, edit, retire, rename, import
 *   • Settings: everything adjustable about the app
 *
 * The database decides who is an admin (see setup.sql). Hiding these screens
 * from other students is only for tidiness; the database refuses their changes.
 */

// ════════════════════════════════════════════════════════════════════════════
// ANSWER EDITORS — one per question "base" (see QTYPE_BASES in script.js).
// A brand-new base needs an entry here too: html(q) draws the answer fields,
// read(form) turns them back into { options, answer }.
// ════════════════════════════════════════════════════════════════════════════
const ANSWER_EDITORS = {
  truefalse: {
    html: (q) => `<div class="field"><span class="field-label">Correct answer</span><div class="btn-row">
      <label class="switch"><input type="radio" name="tf" value="true" ${q.answer === true ? 'checked' : ''}/> True</label>
      <label class="switch"><input type="radio" name="tf" value="false" ${q.answer === false ? 'checked' : ''}/> False</label></div></div>`,
    read: (form) => { const v = form.querySelector('input[name="tf"]:checked'); return { options: null, answer: v ? v.value === 'true' : null }; },
  },
  mcq: {
    html(q) {
      const opts = Array.isArray(q.options) && q.options.length ? q.options : ['', '', '', ''];
      return `<div class="field"><span class="field-label">Options <span class="muted">(select the correct one; do not type A, B, C)</span></span>
        <div id="opt-list">${opts.map((o, i) => this.row(o, i === q.answer)).join('')}</div>
        <div class="btn-row"><button type="button" class="link" data-act="qm.optAdd">+ Add an option</button>
          <label class="switch"><input type="checkbox" name="keepOrder" ${q.extra && q.extra.keepOrder ? 'checked' : ''}/> Always show in this order</label></div></div>`;
    },
    row: (text, correct) => `<div class="opt-edit"><input type="radio" name="correct" ${correct ? 'checked' : ''} aria-label="Correct option"/><input class="input" type="text" name="opt" value="${esc(text)}" placeholder="Option"/><button type="button" class="icon-btn" data-act="qm.optDel" aria-label="Remove option">✕</button></div>`,
    read(form) {
      const rows = $$('.opt-edit', form).map((r) => ({ text: $('input[name="opt"]', r).value.trim(), correct: $('input[name="correct"]', r).checked })).filter((r) => r.text);
      const answer = rows.findIndex((r) => r.correct);
      return { options: rows.map((r) => r.text), answer: answer === -1 ? null : answer, keepOrder: !!form.keepOrder?.checked };
    },
  },
  fillblank: {
    html: (q) => `<div class="field"><label class="field-label" for="qm-accepted">Accepted answers <span class="muted">(one per line; capital letters and punctuation are ignored)</span></label>
      <textarea class="input" id="qm-accepted" name="accepted" rows="3" placeholder="nephron&#10;nephrons">${esc((Array.isArray(q.answer) ? q.answer : []).join('\n'))}</textarea></div>`,
    read: (form) => ({ options: null, answer: form.accepted.value.split(/\n|\|/).map((s) => s.trim()).filter(Boolean) }),
  },
};

const QM = {
  tab: 'add',
  editing: null,                 // the question being edited, or null when adding
  keep: { course: '', topic: '', subTopic: '', type: 'mcq' },
  batch: [],
  browse: { course: '', topic: '', search: '', retired: false, page: 0 },
  reports: null,

  enabledTypes() { return Object.entries(Settings.get().types).filter(([, t]) => t.enabled !== false && QTYPE_BASES[t.base]); },
  baseKey(type) { const t = Settings.get().types[type]; return t && QTYPE_BASES[t.base] ? t.base : 'mcq'; },
  courses() { return [...new Set(Bank.all.map((q) => q.course))].sort(); },
  topics(course) { return [...new Set(Bank.all.filter((q) => !course || q.course === course).map((q) => q.topic))].sort(); },
  subs(course, topic) { return [...new Set(Bank.all.filter((q) => (!course || q.course === course) && (!topic || q.topic === topic)).map((q) => q.subTopic))].sort(); },
  list: (id, values) => `<datalist id="${id}">${values.map((v) => `<option value="${esc(v)}"></option>`).join('')}</datalist>`,

  /** Is there already a question with this wording? Returns its id. */
  duplicateOf(q) { const id = Bank.findByText(q.question); return id && id !== q.id ? id : null; },

  // ─── Add / edit form ─────────────────────────────────────────────────────
  formHtml() {
    const q = this.editing || { ...this.keep, question: '', explanation: '', tags: [], extra: {}, answer: null, options: null };
    const labels = Settings.get().labels || [];
    return `<form id="qm-form" data-submit="qm.save" novalidate>
      ${this.editing ? `<p class="notice notice-info">Editing <strong>${esc(q.id)}</strong>. <button type="button" class="link" data-act="qm.cancelEdit">Cancel</button></p>` : ''}
      <div class="field-row">
        <div class="field"><label class="field-label" for="qm-course">Course</label><input class="input" id="qm-course" name="course" list="dl-course" value="${esc(q.course)}" data-change="qm.lists" autocomplete="off"/>${this.list('dl-course', this.courses())}</div>
        <div class="field"><label class="field-label" for="qm-topic">Topic</label><input class="input" id="qm-topic" name="topic" list="dl-topic" value="${esc(q.topic)}" data-change="qm.lists" autocomplete="off"/><span id="dl-topic-box">${this.list('dl-topic', this.topics(q.course))}</span></div>
        <div class="field"><label class="field-label" for="qm-sub">Sub-topic</label><input class="input" id="qm-sub" name="subTopic" list="dl-sub" value="${esc(q.subTopic)}" autocomplete="off"/><span id="dl-sub-box">${this.list('dl-sub', this.subs(q.course, q.topic))}</span></div>
      </div>
      <p class="muted admin-note">Pick from the list, or type a new name to create a new course, topic or sub-topic.</p>
      <div class="field"><label class="field-label" for="qm-type">Question type</label>
        <select class="input" id="qm-type" name="type" data-change="qm.type">${this.enabledTypes().map(([k, t]) => `<option value="${esc(k)}" ${k === q.type ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}</select></div>
      <div class="field"><label class="field-label" for="qm-question">Question</label><textarea class="input" id="qm-question" name="question" rows="3" data-change="qm.dupe">${esc(q.question)}</textarea><small id="qm-dupe" class="down"></small></div>
      <div id="qm-answer">${ANSWER_EDITORS[this.baseKey(q.type)].html(q)}</div>
      <div class="field"><label class="field-label" for="qm-exp">Explanation</label><textarea class="input" id="qm-exp" name="explanation" rows="3">${esc(q.explanation)}</textarea></div>
      ${labels.length ? `<div class="field"><span class="field-label">Labels</span><div class="btn-row">${labels.map((l) => `<label class="switch"><input type="checkbox" name="tag" value="${esc(l)}" ${(q.tags || []).includes(l) ? 'checked' : ''}/> ${esc(l)}</label>`).join('')}</div></div>` : ''}
      <div class="btn-row"><button class="btn btn-primary" type="submit">${this.editing ? 'Save changes' : 'Add question'}</button><span class="muted" id="qm-saved"></span></div>
    </form>`;
  },
  readForm() {
    const f = $('#qm-form'), type = f.type.value, base = this.baseKey(type);
    const ans = ANSWER_EDITORS[base].read(f);
    const prev = this.editing || {};
    const extra = { ...(prev.extra || {}) };
    if (ans.keepOrder) extra.keepOrder = true; else delete extra.keepOrder;
    return { id: prev.id, course: f.course.value.trim(), topic: f.topic.value.trim(), subTopic: f.subTopic.value.trim() || 'General', type,
             question: f.question.value.trim(), options: ans.options, answer: ans.answer, explanation: f.explanation.value.trim(),
             tags: $$('input[name="tag"]:checked', f).map((c) => c.value), extra, active: prev.active !== false };
  },

  // ─── Paste many ──────────────────────────────────────────────────────────
  /** Match a typed type name ("True/False", "mcq", "Clinical application") to a type key. */
  typeKey(text) {
    const want = looseText(text);
    if (!want) return null;
    for (const [k, t] of Object.entries(Settings.get().types)) if (looseText(k) === want || looseText(t.label) === want) return k;
    if (/^(tf|t f|true false|truefalse)$/.test(want)) return 'truefalse';
    if (/^(multiple ?choice|multiplechoice|sba|single best answer)$/.test(want)) return 'mcq';
    if (/^(fill|fill in|gap|blank|fill in the gap|fill in the blank)s?$/.test(want)) return 'fillblank';
    return null;
  },
  /** Turns loosely formatted pieces into one question in the app's format. */
  finishParsed(p, ctx) {
    const q = { course: (p.course || ctx.course || '').trim(), topic: (p.topic || ctx.topic || '').trim(), subTopic: (p.subTopic || ctx.subTopic || '').trim() || 'General',
                question: String(p.question || '').replace(/\s+/g, ' ').trim(), explanation: String(p.explanation || '').replace(/\s+/g, ' ').trim(),
                tags: ctx.label ? [ctx.label] : [], extra: {}, active: true, options: null, answer: null };
    const opts = (p.options || []).map((o) => String(o).replace(/^\(?[A-Ha-h][.)]\s+/, '').trim()).filter(Boolean);
    const raw = p.answerRaw == null ? '' : String(p.answerRaw).trim();
    let type = this.typeKey(p.type || ctx.type || '');
    if (!type) type = opts.length >= 2 ? 'mcq' : /^(true|false|t|f)$/i.test(raw) || typeof p.answerRaw === 'boolean' ? 'truefalse' : 'fillblank';
    q.type = type;
    const base = this.baseKey(type);
    if (base === 'truefalse') q.answer = typeof p.answerRaw === 'boolean' ? p.answerRaw : /^(true|t)$/i.test(raw) ? true : /^(false|f)$/i.test(raw) ? false : null;
    else if (base === 'mcq') {
      q.options = opts;
      let idx = Number.isInteger(p.starred) ? p.starred : -1;
      if (idx === -1 && typeof p.answerRaw === 'number') idx = p.answerRaw;
      if (idx === -1 && /^\(?[A-Ha-h]\)?[.)]?$/.test(raw)) idx = raw.replace(/[^A-Za-z]/g, '').toUpperCase().charCodeAt(0) - 65;
      if (idx === -1 && raw) { const want = looseText(raw.replace(/^\(?[A-Ha-h][.)]\s+/, '')); idx = opts.findIndex((o) => looseText(o) === want); }
      q.answer = idx >= 0 && idx < opts.length ? idx : null;
    } else q.answer = Array.isArray(p.answerRaw) ? p.answerRaw.map(String) : raw.split(/\s*[|;]\s*/).filter(Boolean);
    return q;
  },
  parseBatch(text, defaults) {
    const t = text.trim();
    if (!t) return [];
    if (t[0] === '[' || t[0] === '{') {                       // a list copied from a file or an AI tool
      let data;
      try { data = JSON.parse(t); } catch (_) { try { data = (new Function(`return (${t.replace(/;\s*$/, '')});`))(); } catch (e) { throw new Error('That looks like a code-style list but it could not be read: ' + e.message); } }
      return (Array.isArray(data) ? data : [data]).map((o) => this.finishParsed({ course: o.course, topic: o.topic, subTopic: o.subTopic || o.subtopic, type: o.type,
        question: o.question, options: o.options, answerRaw: o.correctAnswer !== undefined ? o.correctAnswer : o.answer, explanation: o.explanation }, defaults));
    }
    const ctx = { ...defaults }, out = [];
    let cur = null, mode = null, blankSince = false;
    const push = () => { if (cur && cur.question) out.push(this.finishParsed(cur, cur.ctx)); cur = null; mode = null; };
    const start = (textLine) => { push(); cur = { question: textLine, options: [], ctx: { ...ctx } }; mode = 'q'; };
    for (const rawLine of t.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) { blankSince = true; continue; }
      let m;
      if ((m = line.match(/^(course|topic|sub-?\s?topic|type|label)\s*:\s*(.+)$/i))) {
        push();
        const key = m[1].toLowerCase().replace(/[-\s]/g, '');
        ctx[key === 'subtopic' ? 'subTopic' : key] = m[2].trim();
      } else if ((m = line.match(/^(?:q(?:uestion)?\s*\d*\s*[:.)]|\d{1,4}\s*[.)])\s*(.+)$/i))) start(m[1]);
      else if (cur && (m = line.match(/^(\*)?\s*\(?([A-Ha-h])[.)]\s+(.+?)(\s*\*)?$/)) && mode !== 'exp') {
        if (m[1] || m[4]) cur.starred = cur.options.length;
        cur.options.push(m[3].trim()); mode = 'opt';
      } else if (cur && (m = line.match(/^(?:correct\s+answer|answer|ans)\s*[:\-]\s*(.+)$/i))) { cur.answerRaw = m[1].trim(); mode = 'ans'; }
      else if (cur && (m = line.match(/^(?:explanation|exp|rationale|reason)\s*[:\-]\s*(.*)$/i))) { cur.explanation = m[1]; mode = 'exp'; }
      else if (cur && blankSince && (cur.answerRaw != null || Number.isInteger(cur.starred))) start(line);     // a blank line then plain text = next question
      else if (!cur) start(line);
      else if (mode === 'exp') cur.explanation += ' ' + line;
      else if (mode === 'q') cur.question += ' ' + line;
      else if (mode === 'opt') cur.options[cur.options.length - 1] += ' ' + line;
      else cur.explanation = ((cur.explanation || '') + ' ' + line).trim();
      blankSince = false;
    }
    push();
    return out;
  },
  /** Adds errors and warnings to each parsed question. */
  checkBatch(list) {
    const seen = new Map();
    return list.map((q, i) => {
      const errors = QTypes.validate(q), warns = [];
      const dupe = this.duplicateOf(q);
      if (dupe) warns.push(`Same wording as ${dupe}, which is already in the bank.`);
      const k = looseText(q.question);
      if (k && seen.has(k)) errors.push(`Repeats question ${seen.get(k) + 1} in this batch.`); else seen.set(k, i);
      return { q, errors, warns, skip: !!dupe };
    });
  },
  previewHtml(x, i) {
    const q = x.q, base = this.baseKey(q.type);
    const answer = base === 'mcq' ? `<ol type="A">${(q.options || []).map((o, k) => `<li class="${k === q.answer ? 'is-answer' : ''}">${esc(o)}${k === q.answer ? ' ✓' : ''}</li>`).join('')}</ol>`
      : `<p class="up"><strong>Answer: ${q.answer == null ? '—' : esc(base === 'truefalse' ? (q.answer ? 'True' : 'False') : (q.answer || []).join(' / '))}</strong></p>`;
    return `<div class="preview ${x.errors.length ? 'has-error' : x.warns.length ? 'has-warn' : ''}">
      <div><span class="badge badge-course">${esc(q.course || 'No course')}</span><span class="badge">${esc(q.topic || 'No topic')} › ${esc(q.subTopic)}</span><span class="badge">${esc(QTypes.info(q.type).label)}</span></div>
      <p><strong>${i + 1}.</strong> ${esc(q.question)}</p>${answer}<p class="muted">${esc(q.explanation)}</p>
      ${x.errors.length ? `<ul class="down">${x.errors.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
      ${x.warns.length ? `<ul class="muted">${x.warns.map((e) => `<li>${esc(e)}</li>`).join('')}</ul><label class="switch"><input type="checkbox" data-change="qm.batchSkip" data-i="${i}" ${x.skip ? '' : 'checked'}/> Add it anyway</label>` : ''}
    </div>`;
  },

  // ─── Tabs ────────────────────────────────────────────────────────────────
  tabHtml() {
    if (this.tab === 'add') return this.formHtml();
    if (this.tab === 'paste') {
      return `<p class="muted">Paste any number of questions. Put the course and topic on lines at the top; they apply to every question below until you change them.</p>
        <details><summary class="link">Show the format</summary><div class="code-block">Course: Physiology
Topic: Renal Physiology
Sub-topic: Glomerular Filtration

Q: Which force opposes glomerular filtration?
A) Glomerular hydrostatic pressure
*B) Bowman's capsule hydrostatic pressure
C) Bowman's capsule oncotic pressure
D) Renal blood flow
Explanation: Capsular hydrostatic pressure pushes fluid back.

Q: The macula densa senses sodium chloride.
Answer: True
Explanation: It signals the juxtaglomerular cells.

Type: Fill in the blank
Q: The functional unit of the kidney is the ____.
Answer: nephron | nephrons
Explanation: Each kidney has about a million.</div>
        <p class="muted admin-note">Mark the correct option with a * or add a line "Answer: B". Lists copied in code style (starting with [ ) also work.</p></details>
        <textarea class="input" id="qm-paste" rows="12" placeholder="Paste questions here"></textarea>
        <div class="btn-row"><button class="btn btn-primary" data-act="qm.preview">Check and preview</button></div>
        <div id="qm-batch"></div>`;
    }
    if (this.tab === 'browse') {
      const b = this.browse;
      return `<div class="field-row">
          <div class="field"><label class="field-label" for="qb-course">Course</label><select class="input" id="qb-course" data-change="qm.browse"><option value="">All</option>${this.courses().map((c) => `<option ${c === b.course ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></div>
          <div class="field"><label class="field-label" for="qb-topic">Topic</label><select class="input" id="qb-topic" data-change="qm.browse"><option value="">All</option>${this.topics(b.course).map((c) => `<option ${c === b.topic ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></div>
          <div class="field"><label class="field-label" for="qb-search">Search or ID</label><input class="input" id="qb-search" type="search" value="${esc(b.search)}" data-input="qm.browse"/></div>
        </div>
        <label class="switch"><input type="checkbox" id="qb-retired" data-change="qm.browse" ${b.retired ? 'checked' : ''}/> Show retired questions only</label>
        <div id="qb-list"></div>`;
    }
    if (this.tab === 'organise') {
      return `<p class="muted">Rename a course, topic or sub-topic everywhere at once. Renaming to a name that already exists merges the two.</p>
        <form data-submit="qm.rename"><div class="field-row">
          <div class="field"><label class="field-label" for="or-level">What to rename</label><select class="input" id="or-level" name="level" data-change="qm.orgDraw"><option value="course">A course</option><option value="topic">A topic</option><option value="subTopic">A sub-topic</option></select></div>
          <div class="field"><label class="field-label" for="or-course">Course</label><select class="input" id="or-course" name="course" data-change="qm.orgDraw">${this.courses().map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>
          <div class="field" id="or-topic-box"></div><div class="field" id="or-sub-box"></div></div>
          <div class="field"><label class="field-label" for="or-new">New name</label><input class="input" id="or-new" name="newName"/></div>
          <button class="btn btn-primary" type="submit">Rename</button></form>`;
    }
    if (this.tab === 'reports') return '<div id="qr-list"><div class="spinner"></div></div>';
    return `<div id="qi-box"><div class="spinner"></div></div>`;
  },
  drawBrowse() {
    const box = $('#qb-list'); if (!box) return;
    const b = this.browse, needle = b.search.trim().toLowerCase();
    const rows = Bank.all.filter((q) => (b.retired ? q.active === false : q.active !== false) && (!b.course || q.course === b.course) && (!b.topic || q.topic === b.topic) &&
      (!needle || q.id.toLowerCase() === needle || q.question.toLowerCase().includes(needle) || (q.explanation || '').toLowerCase().includes(needle)));
    const per = 20, pages = Math.max(1, Math.ceil(rows.length / per)); b.page = Math.min(b.page, pages - 1);
    box.innerHTML = `<p class="muted">${rows.length.toLocaleString()} question${rows.length === 1 ? '' : 's'}</p>` + rows.slice(b.page * per, b.page * per + per).map((q) => `<div class="q-row ${q.active === false ? 'is-retired' : ''}">
        <div class="q-row-main"><span class="badge">${esc(q.id)}</span><span class="badge badge-course">${esc(q.course)}</span><span class="badge">${esc(q.topic)} › ${esc(q.subTopic)}</span><span class="badge">${esc(QTypes.info(q.type).label)}</span>
          <p>${esc(q.question)}</p><small class="up">${esc(QTypes.correctText(QTypes.prepare(q)))}</small></div>
        <div class="btn-row"><button class="btn btn-ghost btn-sm" data-act="qm.edit" data-id="${esc(q.id)}">Edit</button>
          <button class="btn btn-ghost btn-sm" data-act="qm.retire" data-id="${esc(q.id)}" data-on="${q.active === false ? 1 : 0}">${q.active === false ? 'Restore' : 'Retire'}</button></div></div>`).join('') +
      (pages > 1 ? `<div class="pager"><button class="btn btn-ghost btn-sm" data-act="qm.page" data-d="-1" ${b.page === 0 ? 'disabled' : ''}>Previous</button><span class="muted">Page ${b.page + 1} of ${pages}</span><button class="btn btn-ghost btn-sm" data-act="qm.page" data-d="1" ${b.page >= pages - 1 ? 'disabled' : ''}>Next</button></div>` : '');
  },
  drawOrganise() {
    const f = $('form[data-submit="qm.rename"]'); if (!f) return;
    const level = f.level.value, course = f.course.value;
    const curTopic = f.topic ? f.topic.value : '';
    const topics = this.topics(course), topic = topics.includes(curTopic) ? curTopic : topics[0] || '';
    $('#or-topic-box').innerHTML = level === 'course' ? '' : `<label class="field-label" for="or-topic">Topic</label><select class="input" id="or-topic" name="topic" data-change="qm.orgDraw">${topics.map((t) => `<option ${t === topic ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select>`;
    $('#or-sub-box').innerHTML = level !== 'subTopic' ? '' : `<label class="field-label" for="or-sub">Sub-topic</label><select class="input" id="or-sub" name="subTopic">${this.subs(course, topic).map((t) => `<option>${esc(t)}</option>`).join('')}</select>`;
  },
  async drawReports() {
    const box = $('#qr-list'); if (!box) return;
    try {
      this.reports = await DB.reports.listOpen();
      if (!$('#qr-list')) return;
      box.innerHTML = this.reports.length ? this.reports.map((r) => { const q = Bank.get(r.question_id);
        return `<div class="q-row"><div class="q-row-main"><span class="badge">${esc(r.question_id)}</span><time class="muted">${new Date(r.created_at).toLocaleDateString()}</time>
          <p><strong>${esc(r.note)}</strong></p><p class="muted">${q ? esc(q.question) : 'This question is no longer in the bank.'}</p></div>
          <div class="btn-row">${q ? `<button class="btn btn-ghost btn-sm" data-act="qm.edit" data-id="${esc(q.id)}">Edit question</button>` : ''}<button class="btn btn-ghost btn-sm" data-act="qm.resolve" data-id="${r.id}">Mark done</button></div></div>`; }).join('')
        : '<p class="muted">No open reports. When a student taps “Report a problem” on a question, it appears here.</p>';
    } catch (e) { box.innerHTML = `<p class="notice notice-error">Could not load reports: ${esc(e.message)}</p>`; }
  },
  async drawImport() {
    const box = $('#qi-box'); if (!box) return;
    let inDb = null, err = '';
    try { inDb = await DB.questions.count(); } catch (e) { err = e.message; }
    if (!$('#qi-box')) return;
    box.innerHTML = `${err ? `<p class="notice notice-error">The question table could not be reached (${esc(err)}). Has setup.sql been run in Supabase?</p>` : `<p>The database currently holds <strong>${inDb.toLocaleString()}</strong> question${inDb === 1 ? '' : 's'}.</p>`}
      <h3>Import the existing bank</h3><p class="muted">Loads the questions from the backup file (questions.js) into the database. Questions already there are left alone, so it is safe to press again if it was interrupted.</p>
      <button class="btn btn-primary" data-act="qm.import" ${err ? 'disabled' : ''}>Import existing bank</button><div id="qi-progress"></div>
      <h3 style="margin-top:1.25rem">Download a backup copy</h3><p class="muted">Saves the whole bank as a new questions.js. Upload it to GitHub now and then so the backup stays current.</p>
      <button class="btn btn-ghost" data-act="qm.export">Download questions.js</button>`;
  },
};

VIEWS.manage = {
  render() {
    if (!App.isAdmin) return '<section class="card"><p class="notice notice-error">This screen is for admins.</p></section>';
    const tabs = [['add', QM.editing ? 'Edit' : 'Add one'], ['paste', 'Paste many'], ['browse', 'Browse & edit'], ['organise', 'Rename'], ['reports', 'Reports'], ['import', 'Import & backup']];
    return `<section class="card"><h2 class="card-title">Question Manager</h2>
      <div class="seg seg-wide">${tabs.map(([k, t]) => `<button class="seg-btn ${QM.tab === k ? 'is-on' : ''}" data-act="qm.tab" data-t="${k}">${t}</button>`).join('')}</div>
      ${Bank.source !== 'db' ? '<p class="notice notice-warn">The app is running on the backup file because the database has no questions yet. Open “Import & backup” and press Import first.</p>' : ''}
      <div id="qm-body">${QM.tabHtml()}</div></section>`;
  },
  mounted() {
    if (QM.tab === 'browse') QM.drawBrowse();
    if (QM.tab === 'organise') QM.drawOrganise();
    if (QM.tab === 'reports') QM.drawReports();
    if (QM.tab === 'import') QM.drawImport();
  },
};
const qmRedraw = (keepScroll = true) => App.go('manage', { force: true, keepScroll });

ACTIONS['qm.tab'] = (el) => { QM.tab = el.dataset.t; if (QM.tab !== 'add') QM.editing = null; qmRedraw(); };
ACTIONS['qm.lists'] = () => {
  const f = $('#qm-form');
  $('#dl-topic-box').innerHTML = QM.list('dl-topic', QM.topics(f.course.value.trim()));
  $('#dl-sub-box').innerHTML = QM.list('dl-sub', QM.subs(f.course.value.trim(), f.topic.value.trim()));
};
ACTIONS['qm.type'] = (el) => {
  const q = QM.editing && QM.baseKey(QM.editing.type) === QM.baseKey(el.value) ? QM.editing : { answer: null, options: null, extra: {} };
  $('#qm-answer').innerHTML = ANSWER_EDITORS[QM.baseKey(el.value)].html(q);
};
ACTIONS['qm.dupe'] = (el) => {
  const id = Bank.findByText(el.value); const mine = QM.editing && QM.editing.id;
  $('#qm-dupe').textContent = id && id !== mine ? `A question with this wording is already in the bank (${id}).` : '';
};
ACTIONS['qm.optAdd'] = () => { const list = $('#opt-list'); if ($$('.opt-edit', list).length >= 8) return App.toast('Eight options is the most a question can have.', 'info'); list.insertAdjacentHTML('beforeend', ANSWER_EDITORS.mcq.row('', false)); };
ACTIONS['qm.optDel'] = (el) => { const list = $('#opt-list'); if ($$('.opt-edit', list).length <= 2) return App.toast('A question needs at least two options.', 'info'); el.closest('.opt-edit').remove(); };
ACTIONS['qm.cancelEdit'] = () => { QM.editing = null; qmRedraw(false); };

ACTIONS['qm.save'] = async (form) => {
  const q = QM.readForm();
  const problems = QTypes.validate(q);
  if (problems.length) return App.toast(problems[0], 'error');
  const dupe = QM.duplicateOf(q);
  if (dupe && !(await App.confirm(`A question with the same wording already exists (${dupe}). Save this one as well?`, 'Save anyway'))) return;
  const btn = $('button[type="submit"]', form); btn.disabled = true;
  try {
    const saved = QM.editing ? [await DB.questions.update(q.id, q)] : await DB.questions.insertMany([q]);
    await Bank.applyLocal(saved);
    QM.keep = { course: q.course, topic: q.topic, subTopic: q.subTopic, type: q.type };
    const wasEdit = !!QM.editing; QM.editing = null;
    App.renderNav();
    if (wasEdit) { QM.tab = 'browse'; qmRedraw(false); App.toast(`Saved changes to ${saved[0].id}.`, 'success'); }
    else { qmRedraw(false); App.toast(`Added as ${saved[0].id}. It is live now.`, 'success'); $('#qm-question')?.focus(); }
  } catch (e) { btn.disabled = false; App.toast('Not saved: ' + e.message, 'error'); }
};

ACTIONS['qm.preview'] = () => {
  const box = $('#qm-batch');
  try {
    QM.batch = QM.checkBatch(QM.parseBatch($('#qm-paste').value, {}));
  } catch (e) { box.innerHTML = `<p class="notice notice-error">${esc(e.message)}</p>`; return; }
  if (!QM.batch.length) { box.innerHTML = '<p class="notice notice-error">No questions were found in that text. Check the format above.</p>'; return; }
  const bad = QM.batch.filter((x) => x.errors.length).length;
  box.innerHTML = `<p class="notice ${bad ? 'notice-warn' : 'notice-success'}">${QM.batch.length} question${QM.batch.length === 1 ? '' : 's'} found. ${bad ? `${bad} need fixing (outlined in red) and will not be added. Correct the text above and check again, or add the rest now.` : 'All of them passed the checks.'}</p>
    ${QM.batch.map((x, i) => QM.previewHtml(x, i)).join('')}
    <div class="sticky-save"><button class="btn btn-primary" data-act="qm.batchSave">Add the valid questions</button><span class="muted" id="qm-batch-count"></span></div>`;
  ACTIONS['qm.batchSkip']();
};
ACTIONS['qm.batchSkip'] = (el) => {
  if (el) QM.batch[Number(el.dataset.i)].skip = !el.checked;
  const n = QM.batch.filter((x) => !x.errors.length && !x.skip).length;
  const c = $('#qm-batch-count'); if (c) c.textContent = `${n} will be added`;
};
ACTIONS['qm.batchSave'] = async (el) => {
  const good = QM.batch.filter((x) => !x.errors.length && !x.skip).map((x) => x.q);
  if (!good.length) return App.toast('There is nothing valid to add.', 'error');
  el.disabled = true; el.textContent = 'Adding…';
  try {
    const saved = await DB.questions.insertMany(good);
    await Bank.applyLocal(saved);
    App.renderNav();
    const left = QM.batch.filter((x) => x.errors.length).length;
    $('#qm-batch').innerHTML = `<p class="notice notice-success">Added ${saved.length} question${saved.length === 1 ? '' : 's'}. They are live now.${left ? ` ${left} still need fixing; they are still in the box above.` : ''}</p>`;
    if (!left) $('#qm-paste').value = '';
    QM.batch = [];
  } catch (e) { el.disabled = false; el.textContent = 'Add the valid questions'; App.toast('Not saved: ' + e.message, 'error'); }
};

ACTIONS['qm.browse'] = (el) => {
  const b = QM.browse, prevCourse = b.course;
  b.course = $('#qb-course').value; b.topic = $('#qb-topic').value; b.search = $('#qb-search').value; b.retired = $('#qb-retired').checked; b.page = 0;
  if (el && el.id === 'qb-course' && b.course !== prevCourse) { b.topic = ''; return qmRedraw(); }
  QM.drawBrowse();
};
ACTIONS['qm.page'] = (el) => { QM.browse.page += Number(el.dataset.d); QM.drawBrowse(); $('#qb-list').scrollIntoView({ block: 'start' }); };
ACTIONS['qm.edit'] = (el) => { const q = Bank.get(el.dataset.id); if (!q) return; QM.editing = clone(q); QM.tab = 'add'; qmRedraw(false); };
ACTIONS['qm.retire'] = async (el) => {
  const restore = el.dataset.on === '1';
  if (!restore && !(await App.confirm('Retire this question? Students will no longer be asked it. You can restore it later.', 'Retire'))) return;
  try { const saved = await DB.questions.setActive(el.dataset.id, restore); await Bank.applyLocal([saved]); App.renderNav(); QM.drawBrowse(); App.toast(restore ? 'Restored.' : 'Retired.', 'success'); }
  catch (e) { App.toast(e.message, 'error'); }
};
ACTIONS['qm.orgDraw'] = () => QM.drawOrganise();
ACTIONS['qm.rename'] = async (form) => {
  const level = form.level.value, newName = form.newName.value.trim();
  const where = { course: form.course.value, topic: form.topic ? form.topic.value : '', subTopic: form.subTopic ? form.subTopic.value : '' };
  const old = level === 'course' ? where.course : level === 'topic' ? where.topic : where.subTopic;
  if (!newName) return App.toast('Type the new name.', 'error');
  if (!old) return App.toast('Choose what to rename.', 'error');
  if (newName === old) return App.toast('That is already its name.', 'info');
  if (!(await App.confirm(`Rename “${old}” to “${newName}” on every question that uses it?`, 'Rename'))) return;
  try {
    const n = await DB.questions.rename(level, where, newName);
    await Bank.sync();
    App.renderNav(); qmRedraw(false);
    App.toast(`Renamed on ${n} question${n === 1 ? '' : 's'}.`, 'success');
  } catch (e) { App.toast('Could not rename: ' + e.message, 'error'); }
};
ACTIONS['qm.resolve'] = async (el) => { try { await DB.reports.resolve(Number(el.dataset.id)); QM.drawReports(); } catch (e) { App.toast(e.message, 'error'); } };

ACTIONS['qm.import'] = async (el) => {
  const prog = $('#qi-progress'); el.disabled = true;
  try {
    prog.innerHTML = '<p class="muted">Reading the backup file…</p>';
    const rows = await Bank.loadBackupFile();
    if (!rows.length) throw new Error('The backup file is empty or missing.');
    const size = 400;
    for (let i = 0; i < rows.length; i += size) {
      await DB.questions.importChunk(rows.slice(i, i + size).map((q) => ({ tags: [], extra: {}, active: true, ...q })));
      prog.innerHTML = `<div class="bar"><div class="bar-fill" style="width:${Math.round((Math.min(rows.length, i + size) / rows.length) * 100)}%"></div></div><p class="muted">${Math.min(rows.length, i + size).toLocaleString()} of ${rows.length.toLocaleString()}…</p>`;
    }
    prog.innerHTML = '<p class="muted">Finishing…</p>';
    Bank.source = 'none'; Bank.syncedAt = null;
    await Bank.sync();
    App.renderNav(); qmRedraw(false);
    App.toast(`Import complete: ${Bank.all.length.toLocaleString()} questions are in the database.`, 'success');
  } catch (e) { el.disabled = false; prog.innerHTML = `<p class="notice notice-error">The import stopped: ${esc(e.message)}. You can press Import again; nothing is duplicated.</p>`; }
};
ACTIONS['qm.export'] = () => {
  const rows = Bank.all.filter((q) => q.active !== false).map(({ updatedAt, active, ...q }) => q);
  const body = `/* MedMaster backup question bank (${rows.length} questions), saved ${new Date().toISOString().slice(0, 10)}.\n   The live bank is in the database. Do not edit by hand. */\nwindow.MM_BACKUP_BANK = [\n${rows.map((q) => JSON.stringify(q)).join(',\n')}\n];\n`;
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([body], { type: 'text/javascript;charset=utf-8' })); a.download = 'questions.js';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};

// ════════════════════════════════════════════════════════════════════════════
// SETTINGS
// Every field carries data-path (where the value lives) and data-kind (how to
// read it). Saving collects them all — so adding a new setting is one line.
// ════════════════════════════════════════════════════════════════════════════
const SET = {
  w: null,                        // working copy while the screen is open
  admins: null,
  getPath(obj, path) { return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj); },
  setPath(obj, path, value) { const keys = path.split('.'); const last = keys.pop(); const tgt = keys.reduce((o, k) => (o[k] = o[k] ?? {}), obj); tgt[last] = value; },
  field(label, path, kind = 'text', hint = '') {
    const v = this.getPath(this.w, path), id = 'set-' + path.replace(/\W/g, '-');
    if (kind === 'bool') return `<div class="field"><label class="switch"><input type="checkbox" data-path="${path}" data-kind="bool" ${v ? 'checked' : ''}/> ${esc(label)}</label>${hint ? `<small class="muted block">${esc(hint)}</small>` : ''}</div>`;
    const value = Array.isArray(v) ? v.join(', ') : v ?? '';
    const input = kind === 'long' ? `<textarea class="input" id="${id}" rows="2" data-path="${path}" data-kind="text">${esc(value)}</textarea>`
      : `<input class="input" id="${id}" data-path="${path}" data-kind="${kind}" value="${esc(value)}" ${kind === 'number' ? 'type="number" step="any" inputmode="decimal"' : 'type="text"'}/>`;
    return `<div class="field"><label class="field-label" for="${id}">${esc(label)}</label>${input}${hint ? `<small class="muted">${esc(hint)}</small>` : ''}</div>`;
  },
  /** Copy what is on the screen into the working copy. */
  collect() {
    $$('#settings-form [data-path]').forEach((el) => {
      const kind = el.dataset.kind; let v;
      if (kind === 'bool') v = el.checked;
      else if (kind === 'number') v = el.value.trim() === '' ? 0 : Number(el.value);
      else if (kind === 'numlist') v = el.value.split(',').map((s) => Number(s.trim())).filter((n) => Number.isFinite(n) && n > 0);
      else if (kind === 'textlist') v = el.value.split(',').map((s) => s.trim()).filter(Boolean);
      else v = el.value.trim();
      this.setPath(this.w, el.dataset.path, v);
    });
    this.w.taxonomy.hiddenCourses = $$('#settings-form input[data-hide-course]:checked').map((c) => c.value);
  },
  problems() {
    const w = this.w, p = [];
    const pos = (v) => Number.isFinite(v) && v >= 1;
    for (const k of ['practice', 'exam', 'slide', 'multiplayer']) {
      const m = w.modes[k];
      if (!pos(m.defaultCount) || !pos(m.maxCount)) p.push(`${k}: question counts must be 1 or more.`);
      else if (m.defaultCount > m.maxCount) p.push(`${k}: the default number of questions is larger than the maximum.`);
    }
    if (!w.modes.exam.durations.length) p.push('Exam: give at least one timer choice.');
    if (!w.modes.slide.speeds.length) p.push('Slide Review: give at least one speed.');
    if (!w.modes.multiplayer.seconds.length) p.push('Multiplayer: give at least one seconds-per-question choice.');
    if (!pos(w.modes.daily.count) || !pos(w.modes.daily.minutes)) p.push('Daily Challenge: the size and the time limit must be 1 or more.');
    for (const [k, t] of Object.entries(w.types)) {
      if (!String(t.label || '').trim()) p.push(`Question type “${k}” needs a name.`);
      if (!QTYPE_BASES[t.base]) p.push(`Question type “${t.label || k}” needs a valid “behaves like”.`);
      if (!(Number(t.xp) >= 0)) p.push(`Question type “${t.label || k}”: XP cannot be negative.`);
    }
    if (!Object.values(w.types).some((t) => t.enabled)) p.push('At least one question type must be switched on.');
    if (!w.ranks.length) p.push('Keep at least one level.');
    if (w.ranks.some((r) => !String(r.title || '').trim() || !(Number(r.minXp) >= 0))) p.push('Every level needs a name and an XP value of 0 or more.');
    if (w.ranks.length && Math.min(...w.ranks.map((r) => Number(r.minXp))) !== 0) p.push('The first level must start at 0 XP.');
    try { new Intl.DateTimeFormat('en-CA', { timeZone: w.app.timezone }); } catch (_) { p.push(`“${w.app.timezone}” is not a valid time zone (example: Africa/Lagos).`); }
    if (!String(w.app.name || '').trim()) p.push('The app needs a name.');
    return p;
  },
  html() {
    const w = this.w, F = (...a) => this.field(...a);
    const typeUse = {}; Bank.all.forEach((q) => { typeUse[q.type] = (typeUse[q.type] || 0) + 1; });
    const modeNames = { practice: 'Practice', exam: 'Exam Simulator', daily: 'Daily Challenge', slide: 'Slide Review', multiplayer: 'Multiplayer' };
    const acc = (title, body, open = false) => `<div class="acc ${open ? 'is-open' : ''}"><button type="button" class="acc-head" data-act="acc.toggle"><span>${title}</span></button><div class="acc-body">${body}</div></div>`;
    return `<form id="settings-form" data-submit="set.save" novalidate><div class="acc-list">
      ${acc('Name and wording', `<div class="set-grid">${F('App name', 'app.name')}${F('Tagline', 'app.tagline')}${F('Footer text', 'app.footer')}${F('Time zone', 'app.timezone', 'text', 'Decides when a new day starts for streaks and the Daily Challenge.')}</div>${F('Text on the sign-in screen', 'app.signInIntro', 'long')}`, true)}
      ${acc('Study modes and limits', `
        <h3>Switch modes on or off</h3><div class="set-grid">${Object.keys(modeNames).map((k) => F(modeNames[k], `modes.${k}.enabled`, 'bool')).join('')}</div>
        <h3>Practice</h3><div class="set-grid">${F('Default number of questions', 'modes.practice.defaultCount', 'number')}${F('Maximum per session', 'modes.practice.maxCount', 'number')}</div>
        <h3>Exam Simulator</h3><div class="set-grid">${F('Default number of questions', 'modes.exam.defaultCount', 'number')}${F('Maximum per exam', 'modes.exam.maxCount', 'number')}${F('Timer choices (minutes)', 'modes.exam.durations', 'numlist', 'Separate with commas.')}${F('Default timer (minutes)', 'modes.exam.defaultDuration', 'number')}</div>
        <h3>Daily Challenge</h3><div class="set-grid">${F('Number of questions', 'modes.daily.count', 'number')}${F('Time limit (minutes)', 'modes.daily.minutes', 'number')}</div>
        <h3>Slide Review</h3><div class="set-grid">${F('Default number of questions', 'modes.slide.defaultCount', 'number')}${F('Maximum per session', 'modes.slide.maxCount', 'number')}${F('Speed choices (seconds)', 'modes.slide.speeds', 'numlist', 'Separate with commas.')}${F('Default speed (seconds)', 'modes.slide.defaultSpeed', 'number')}</div>
        <h3>Multiplayer</h3><div class="set-grid">${F('Default number of questions', 'modes.multiplayer.defaultCount', 'number')}${F('Maximum per game', 'modes.multiplayer.maxCount', 'number')}${F('Seconds-per-question choices', 'modes.multiplayer.seconds', 'numlist', 'Separate with commas.')}${F('Default seconds', 'modes.multiplayer.defaultSeconds', 'number')}</div>`)}
      ${acc('Question types and their marks', `<p class="muted">XP is what one correct answer earns. “Behaves like” decides how the question is answered. To add a type such as “Past exam MCQ” with its own marks, add a row and choose what it behaves like.</p>
        <div class="table-wrap"><table class="table set-table"><thead><tr><th>Name</th><th>Behaves like</th><th>XP</th><th>On</th><th>In use</th><th></th></tr></thead><tbody>
        ${Object.entries(w.types).map(([k, t]) => `<tr><td><input class="input" data-path="types.${k}.label" data-kind="text" value="${esc(t.label)}" aria-label="Type name"/></td>
          <td><select class="input" data-path="types.${k}.base" data-kind="text" aria-label="Behaves like" ${typeUse[k] ? 'disabled' : ''}>${Object.keys(QTYPE_BASES).map((b) => `<option value="${b}" ${b === t.base ? 'selected' : ''}>${{ truefalse: 'True / False', mcq: 'Multiple choice', fillblank: 'Fill in the blank' }[b] || b}</option>`).join('')}</select></td>
          <td><input class="input" type="number" min="0" step="1" data-path="types.${k}.xp" data-kind="number" value="${esc(t.xp)}" aria-label="XP"/></td>
          <td><input type="checkbox" data-path="types.${k}.enabled" data-kind="bool" ${t.enabled !== false ? 'checked' : ''} aria-label="Switched on"/></td>
          <td>${(typeUse[k] || 0).toLocaleString()}</td>
          <td>${typeUse[k] ? '' : `<button type="button" class="link" data-act="set.typeDel" data-k="${esc(k)}">Remove</button>`}</td></tr>`).join('')}
        </tbody></table></div><button type="button" class="link" data-act="set.typeAdd">+ Add a question type</button>`)}
      ${acc('XP rules', `<div class="set-grid">${F('A question earns XP only once a day', 'xp.oncePerDay', 'bool', 'Stops XP being farmed by repeating the same questions.')}
        ${F('Smallest session that earns a completion bonus (questions)', 'xp.minQuestionsForBonus', 'number')}</div>
        <h3>Multiplier by mode</h3><p class="muted">The XP of a question is multiplied by this. 1 = normal, 1.5 = half as much again.</p><div class="set-grid">${F('Practice', 'xp.modeMultiplier.practice', 'number')}${F('Exam', 'xp.modeMultiplier.exam', 'number')}${F('Daily Challenge', 'xp.modeMultiplier.daily', 'number')}${F('Multiplayer', 'xp.modeMultiplier.multiplayer', 'number')}</div>
        <h3>Fixed amounts</h3><div class="set-grid">${F('Slide Review, per question viewed', 'xp.slidePerQuestion', 'number')}${F('Review deck, per card', 'xp.reviewPerCard', 'number')}</div>
        <h3>Completion bonus</h3><div class="set-grid">${F('Practice', 'xp.completionBonus.practice', 'number')}${F('Exam', 'xp.completionBonus.exam', 'number')}${F('Daily Challenge', 'xp.completionBonus.daily', 'number')}${F('Slide Review', 'xp.completionBonus.slide', 'number')}${F('Multiplayer', 'xp.completionBonus.multiplayer', 'number')}</div>`)}
      ${acc('Levels', `<div class="table-wrap"><table class="table set-table"><thead><tr><th>Starts at (XP)</th><th>Name</th><th>Badge</th><th>Description</th><th></th></tr></thead><tbody>
        ${w.ranks.map((r, i) => `<tr><td><input class="input" type="number" min="0" data-path="ranks.${i}.minXp" data-kind="number" value="${esc(r.minXp)}" aria-label="XP"/></td>
          <td><input class="input" data-path="ranks.${i}.title" data-kind="text" value="${esc(r.title)}" aria-label="Level name"/></td>
          <td><input class="input" data-path="ranks.${i}.badge" data-kind="text" value="${esc(r.badge)}" aria-label="Badge" style="max-width:5rem"/></td>
          <td><input class="input" data-path="ranks.${i}.desc" data-kind="text" value="${esc(r.desc)}" aria-label="Description"/></td>
          <td><button type="button" class="link" data-act="set.rankDel" data-i="${i}">Remove</button></td></tr>`).join('')}
        </tbody></table></div><button type="button" class="link" data-act="set.rankAdd">+ Add a level</button>`)}
      ${acc('Courses and labels', `${F('Labels you can attach to questions', 'labels', 'textlist', 'Separate with commas, e.g. Past Question, High Yield. Students can filter by label.')}
        ${F('Order of courses', 'taxonomy.courseOrder', 'textlist', 'Type course names in the order you want, separated by commas. Courses not listed follow in A to Z order.')}
        <span class="field-label">Hide a whole course from students</span><div class="btn-row">${QM.courses().map((c) => `<label class="switch"><input type="checkbox" data-hide-course value="${esc(c)}" ${(w.taxonomy.hiddenCourses || []).includes(c) ? 'checked' : ''}/> ${esc(c)}</label>`).join('') || '<span class="muted">No courses yet.</span>'}</div>
        <p class="muted admin-note">To add a new course or topic, just type its name when adding a question. To rename one, use Question Manager › Rename.</p>`)}
      ${acc('Storage', `<div class="set-grid">${F('Sessions kept in each student\'s history', 'historyLimit', 'number')}</div>`)}
      </div>
      <div class="sticky-save"><button class="btn btn-primary" type="submit">Save settings</button><button type="button" class="btn btn-ghost" data-act="set.reset">Restore original values</button><span class="muted">Changes reach students the next time they open the app.</span></div>
    </form>
    <section class="card" style="margin-top:1rem"><h3 class="card-title">Admins</h3><p class="muted">Admins can add and edit questions and change these settings. The person must already have a MedMaster account.</p>
      <div id="set-admins"><div class="spinner"></div></div>
      <form class="field-row" data-submit="set.adminAdd"><div class="field"><label class="field-label" for="set-admin-email">Add an admin by email</label><input class="input" id="set-admin-email" name="email" type="email" inputmode="email"/></div><div class="field field-end"><button class="btn btn-ghost" type="submit">Add admin</button></div></form></section>`;
  },
  async drawAdmins() {
    const box = $('#set-admins'); if (!box) return;
    try {
      this.admins = await DB.admins.list();
      if (!$('#set-admins')) return;
      box.innerHTML = `<ul class="session-list">${this.admins.map((a) => `<li class="session"><span>${esc(a.email)}${App.user && a.user_id === App.user.id ? ' <span class="muted">(you)</span>' : ''}</span>${App.user && a.user_id === App.user.id ? '' : `<button class="link" data-act="set.adminDel" data-id="${esc(a.user_id)}" data-email="${esc(a.email)}">Remove</button>`}</li>`).join('')}</ul>`;
    } catch (e) { box.innerHTML = `<p class="notice notice-error">${esc(e.message)}</p>`; }
  },
};
VIEWS.settings = {
  render(opts) {
    if (!App.isAdmin) return '<section class="card"><p class="notice notice-error">This screen is for admins.</p></section>';
    if (!opts || !opts.keepWork || !SET.w) SET.w = clone(Settings.get());
    return `<section class="card"><h2 class="card-title">Settings</h2><p class="muted">Change how the app works without touching any code.</p>${SET.html()}</section>`;
  },
  mounted() { SET.drawAdmins(); },
};
const setRedraw = () => { const open = $$('#settings-form .acc').map((a) => a.classList.contains('is-open')); App.go('settings', { force: true, keepScroll: true, keepWork: true }); $$('#settings-form .acc').forEach((a, i) => a.classList.toggle('is-open', !!open[i])); };

ACTIONS['set.typeAdd'] = async () => {
  SET.collect();
  const name = await App.modal('<h3 class="modal-title">New question type</h3><p class="muted">Give it a name. You can set its marks and what it behaves like in the table afterwards.</p><input class="input" maxlength="40" placeholder="e.g. Past exam MCQ"/>',
    [{ label: 'Cancel', value: null, cls: 'btn-ghost' }, { label: 'Add', value: (root) => $('input', root).value.trim(), cls: 'btn-primary' }]);
  if (!name) return;
  let key = name.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 20) || 'type';
  while (SET.w.types[key]) key += '2';
  SET.w.types[key] = { label: name, base: 'mcq', enabled: true, xp: 2 };
  setRedraw();
};
ACTIONS['set.typeDel'] = (el) => { SET.collect(); delete SET.w.types[el.dataset.k]; setRedraw(); };
ACTIONS['set.rankAdd'] = () => { SET.collect(); const top = Math.max(0, ...SET.w.ranks.map((r) => Number(r.minXp) || 0)); SET.w.ranks.push({ minXp: top + 5000, title: 'New level', badge: '🎓', desc: '' }); setRedraw(); };
ACTIONS['set.rankDel'] = (el) => { SET.collect(); SET.w.ranks.splice(Number(el.dataset.i), 1); setRedraw(); };
ACTIONS['set.reset'] = async () => { if (await App.confirm('Put every setting back to its original value? Nothing is saved until you press Save settings.', 'Restore')) { SET.w = clone(DEFAULT_SETTINGS); setRedraw(); } };
ACTIONS['set.save'] = async (form) => {
  SET.collect();
  SET.w.ranks.sort((a, b) => Number(a.minXp) - Number(b.minXp));
  const problems = SET.problems();
  if (problems.length) return App.toast(problems[0], 'error');
  const btn = $('button[type="submit"]', form); btn.disabled = true;
  try {
    await DB.settings.save(SET.w);
    Settings.apply(SET.w);
    App.applyBranding(); App.renderNav(); App.refreshHeader();
    setRedraw();
    App.toast('Settings saved.', 'success');
  } catch (e) { App.toast('Not saved: ' + e.message, 'error'); }
  finally { const b = $('#settings-form button[type="submit"]'); if (b) b.disabled = false; }
};
ACTIONS['set.adminAdd'] = async (form) => {
  const email = form.email.value.trim(); if (!email) return;
  try { const added = await DB.admins.add(email); form.reset(); App.toast(`${added} is now an admin.`, 'success'); SET.drawAdmins(); }
  catch (e) { App.toast(e.message, 'error'); }
};
ACTIONS['set.adminDel'] = async (el) => {
  if (!(await App.confirm(`Remove ${el.dataset.email} as an admin?`, 'Remove'))) return;
  try { await DB.admins.remove(el.dataset.id); SET.drawAdmins(); } catch (e) { App.toast(e.message, 'error'); }
};
