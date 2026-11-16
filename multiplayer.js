/**
 * multiplayer.js — live quiz rooms.
 *
 * How it works: one player (the host) keeps the official state of the game
 * and writes it to the "rooms" table; everyone else receives it live.
 * Guests send their answers to the host as short messages.
 *
 * Known limit (unchanged in this version): the game depends on the host's
 * device staying open and connected.
 */

const MP = {
  channel: null, isHost: false, inRoom: false, roomCode: '', name: '', myId: '',
  players: [], questions: [], poolIds: [], index: 0, phase: 'SETUP',
  timer: 0, timerId: null, duration: 20, baseDuration: 20, startedAt: 0,
  log: [], myAnswer: null, waiting: false, sendFailed: false, settled: false, xp: 0,

  reset() {
    clearInterval(this.timerId);
    Object.assign(this, { channel: null, isHost: false, inRoom: false, roomCode: '', name: '', myId: '', players: [], questions: [], poolIds: [],
      index: 0, phase: 'SETUP', timer: 0, timerId: null, duration: 20, baseDuration: 20, startedAt: 0, log: [], myAnswer: null, waiting: false, sendFailed: false, settled: false, xp: 0 , _lastOwn: 0, _confirmed: false });
  },
  newPlayer(id, name) { return { id, name: String(name || 'Student').slice(0, 24), score: 0, currentAnswer: null, correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }; },
  /** A question as it is sent to the room: options already in their final order. */
  pack(q) { const item = QTypes.prepare(q); return { id: q.id, course: q.course, question: q.question, options: item.options, correct: QTypes.correctText(item), explanation: q.explanation }; },
  /** Always exactly four letters, avoiding ones that look alike. */
  makeCode() { const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; let c = ''; for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]; return c; },
  roomState() {
    return { phase: this.phase, players: this.players, questions: this.questions, currentIndex: this.index, questionDuration: this.duration,
             originalQuestionDuration: this.baseDuration, questionStartTime: this.startedAt, hostId: this.myId, updatedAt: Date.now() };
  },
  async push() {
    if (!this.isHost || !this.roomCode) return;
    const state = this.roomState();
    this._lastOwn = state.updatedAt;
    try { await DB.rooms.update(this.roomCode, state); } catch (e) { console.error('[MP] could not update the room:', e); }
  },
  subscribe() {
    this.channel = DB.rooms.subscribe(this.roomCode, {
      onState: (state) => this.apply(state),
      // Every player listens, but only whoever is host at that moment acts.
      onAnswer: (m) => { if (this.isHost && m) this.hostAnswer(m.playerId, m.answer); },
      onJoin: (p) => { if (this.isHost) this.hostAddGuest(p); },
      onHostAction: (a) => this.onHostAction(a),
    });
  },

  // ─── Room lifecycle ──────────────────────────────────────────────────────
  async create(name, questions, poolIds, seconds) {
    let code = '';
    for (let tries = 0; tries < 6; tries++) { code = this.makeCode(); if (!(await DB.rooms.get(code))) break; code = ''; }
    if (!code) throw new Error('Could not find a free room code. Please try again.');
    this.reset();
    Object.assign(this, { isHost: true, inRoom: true, roomCode: code, name, myId: 'p_' + Math.random().toString(36).slice(2, 11), phase: 'LOBBY',
      questions: questions.map((q) => this.pack(q)), poolIds, duration: seconds, baseDuration: seconds, timer: seconds });
    this.players = [this.newPlayer(this.myId, name)];
    await DB.rooms.create(code, this.roomState());
    this.subscribe();
  },
  async join(name, code) {
    const row = await DB.rooms.get(code);
    if (!row) throw new Error('No open room has that code. Check the four letters with your host.');
    const st = row.room_state || {};
    if (st.phase === 'REVIEW') throw new Error('That game has already finished.');
    this.reset();
    const me = this.newPlayer('p_' + Math.random().toString(36).slice(2, 11), name);
    Object.assign(this, { isHost: false, inRoom: true, roomCode: code, name, myId: me.id, phase: st.phase || 'LOBBY', players: [...(st.players || []), me],
      questions: st.questions || [], index: st.currentIndex || 0, duration: st.questionDuration || 20, baseDuration: st.originalQuestionDuration || 20,
      startedAt: st.questionStartTime || 0, timer: st.questionDuration || 20 });
    this.subscribe();
    // Ask the host to add us. Retry a few times in case the first message is missed.
    for (let i = 0; i < 4; i++) {
      setTimeout(() => { if (this.inRoom && this.myId === me.id && !this._confirmed) DB.rooms.send(this.channel, 'guest_join', me).catch(() => {}); }, 400 + i * 1500);
    }
    this._confirmed = false;
    if (this.phase === 'QUESTION') this.startTimer();
  },
  async hostAddGuest(guest) {
    if (!guest || !guest.id || this.players.find((p) => p.id === guest.id)) return;
    this.players.push(this.newPlayer(guest.id, guest.name));
    await this.push(); VIEWS.multiplayer.draw();
  },
  onHostAction(payload) {
    if (!payload) return;
    if (payload.action === 'host_migrated' && payload.data && payload.data.newHostId === this.myId) this.becomeHost();
    if (payload.action === 'rematch') { this.log = []; this.myAnswer = null; this.waiting = false; this.settled = false; this.xp = 0; }
  },
  becomeHost() {
    if (this.isHost) return;
    this.isHost = true;
    if (this.phase === 'QUESTION') this.startTimer();
    App.toast('The host left. You are now hosting this game.', 'info');
    VIEWS.multiplayer.draw();
  },
  async leave() {
    clearInterval(this.timerId);
    if (this.inRoom && this.roomCode) {
      try {
        if (this.isHost) {
          const rest = this.players.filter((p) => p.id !== this.myId);
          if (rest.length) {
            const state = this.roomState(); state.players = rest; state.hostId = rest[0].id;
            await DB.rooms.update(this.roomCode, state);
            await DB.rooms.send(this.channel, 'host_action', { action: 'host_migrated', data: { newHostId: rest[0].id } });
          } else await DB.rooms.close(this.roomCode);
        } else {
          const row = await DB.rooms.get(this.roomCode);
          if (row && row.room_state) { row.room_state.players = (row.room_state.players || []).filter((p) => p.id !== this.myId); await DB.rooms.update(this.roomCode, row.room_state); }
        }
      } catch (_) { /* best effort */ }
    }
    try { await DB.rooms.unsubscribe(this.channel); } catch (_) {}
    this.reset();
  },

  // ─── Receiving the official state ────────────────────────────────────────
  apply(st) {
    if (!this.inRoom || !st) return;
    const prevPhase = this.phase, prevIndex = this.index, prevDuration = this.duration;
    const promoted = !this.isHost && st.hostId === this.myId;               // the host left and chose us
    if (this.isHost && st.updatedAt && this._lastOwn && st.updatedAt < this._lastOwn) return;   // an older copy of our own state

    if (!this.isHost) {
      const movedOn = (st.phase === 'QUESTION' && st.currentIndex !== this.index) || (st.phase === 'REVIEW' && this.phase !== 'REVIEW');
      if (movedOn) { this.logCurrent(); }
      this.phase = st.phase; this.questions = st.questions || []; this.index = st.currentIndex || 0;
      this.duration = st.questionDuration || 20; this.baseDuration = st.originalQuestionDuration || 20; this.startedAt = st.questionStartTime || 0;
      this.players = st.players || [];
    } else {
      // The host is the source of truth; only accept player-list changes made by guests leaving.
      const ids = new Set((st.players || []).map((p) => p.id));
      this.players = this.players.filter((p) => p.id === this.myId || ids.has(p.id));
    }
    if (promoted) { this.isHost = true; this._lastOwn = st.updatedAt || 0; App.toast('The host left. You are now hosting this game.', 'info'); }
    const me = this.players.find((p) => p.id === this.myId);
    if (me) this._confirmed = true;
    if (me && me.currentAnswer) { this.waiting = false; this.sendFailed = false; if (!this.myAnswer) this.myAnswer = me.currentAnswer; }

    if (this.phase === 'QUESTION' && (this.index !== prevIndex || this.duration !== prevDuration || prevPhase !== 'QUESTION')) this.startTimer();
    if (this.phase === 'REVIEW') { clearInterval(this.timerId); this.settle(); }
    VIEWS.multiplayer.draw();
  },
  logCurrent() {
    const q = this.questions[this.index];
    if (q) this.log.push({ id: q.id, question: q.question, correct: q.correct, explanation: q.explanation, mine: this.myAnswer || null });
    this.myAnswer = null; this.waiting = false; this.sendFailed = false;
  },
  /** At the end of a game: XP, history and the mistake notebook, once. */
  settle() {
    if (this.settled) return;
    this.settled = true;
    const results = this.log.map((e) => ({ item: { q: Bank.get(e.id) }, response: e.mine, ok: !!e.mine && e.mine === e.correct })).filter((r) => r.item.q);
    if (!results.length) return;
    this.xp = settleSession({ mode: 'multiplayer', label: 'Multiplayer', results, total: results.length }).xp;
  },

  // ─── Answering ───────────────────────────────────────────────────────────
  async answer(text) {
    const me = this.players.find((p) => p.id === this.myId);
    if (!me || me.currentAnswer || this.waiting || this.phase !== 'QUESTION') return;
    this.waiting = true; this.sendFailed = false; this.myAnswer = text;
    VIEWS.multiplayer.draw();
    if (this.isHost) return this.hostAnswer(this.myId, text);
    const onIndex = this.index;
    try { await DB.rooms.send(this.channel, 'guest_whisper', { playerId: this.myId, answer: text }); }
    catch (e) { console.warn('[MP] answer not sent:', e); }
    // If the host has not confirmed after a few seconds, let the player send it again.
    setTimeout(() => {
      if (this.inRoom && this.waiting && this.index === onIndex && this.myAnswer === text) { this.waiting = false; this.sendFailed = true; VIEWS.multiplayer.draw(); }
    }, 5000);
  },
  startTimer() {
    clearInterval(this.timerId);
    const tick = () => {
      this.timer = Math.max(0, this.duration - Math.floor((Date.now() - this.startedAt) / 1000));
      VIEWS.multiplayer.drawTimer();
      if (this.timer <= 0) { clearInterval(this.timerId); if (this.isHost && this.phase === 'QUESTION') this.hostNext(); }
    };
    tick();
    this.timerId = setInterval(tick, 500);
  },

  // ─── Host only ───────────────────────────────────────────────────────────
  async hostStart() {
    if (!this.isHost) return;
    this.players.forEach((p) => Object.assign(p, { currentAnswer: null, score: 0, correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }));
    Object.assign(this, { phase: 'QUESTION', index: 0, startedAt: Date.now(), duration: this.baseDuration, timer: this.baseDuration, myAnswer: null, log: [], settled: false, xp: 0 });
    this.startTimer(); VIEWS.multiplayer.draw();
    await this.push();
  },
  async hostAnswer(playerId, answer) {
    if (!this.isHost || this.phase !== 'QUESTION') return;
    const p = this.players.find((x) => x.id === playerId), q = this.questions[this.index];
    if (!p || p.currentAnswer || !q || !q.options.includes(answer)) return;
    p.currentAnswer = answer;
    if (answer === q.correct) { p.score++; p.correctCount++; } else p.wrongCount++;
    const seen = p.correctCount + p.wrongCount + p.skippedCount;
    p.accuracy = seen ? Math.round((p.correctCount / seen) * 100) : 0;
    if (playerId === this.myId) { this.waiting = false; }
    if (this.players.every((x) => x.currentAnswer) && this.duration > 3) {       // everyone is in: short pause, then move on
      this.startedAt = Date.now(); this.duration = 3; this.timer = 3; this.startTimer();
    }
    VIEWS.multiplayer.draw();
    await this.push();
  },
  async hostNext() {
    if (!this.isHost) return;
    this.players.forEach((p) => {
      if (!p.currentAnswer) { p.skippedCount++; const seen = p.correctCount + p.wrongCount + p.skippedCount; p.accuracy = seen ? Math.round((p.correctCount / seen) * 100) : 0; }
    });
    this.logCurrent();
    this.index++;
    if (this.index >= this.questions.length) { this.phase = 'REVIEW'; this.settle(); }
    else { this.players.forEach((p) => { p.currentAnswer = null; }); this.startedAt = Date.now(); this.duration = this.baseDuration; this.timer = this.duration; this.startTimer(); }
    VIEWS.multiplayer.draw();
    await this.push();
  },
  async hostRematch() {
    if (!this.isHost) return;
    const pool = shuffle(this.poolIds.map((id) => Bank.get(id)).filter(Boolean));
    const next = (pool.length ? pool : this.questions.map((q) => Bank.get(q.id)).filter(Boolean)).slice(0, this.questions.length);
    this.questions = next.map((q) => this.pack(q));
    Object.assign(this, { index: 0, log: [], myAnswer: null, waiting: false, phase: 'LOBBY', settled: false, xp: 0 });
    this.players.forEach((p) => Object.assign(p, { currentAnswer: null, score: 0, correctCount: 0, wrongCount: 0, skippedCount: 0, accuracy: 0 }));
    await DB.rooms.send(this.channel, 'host_action', { action: 'rematch' });
    await this.push();
    VIEWS.multiplayer.draw();
  },
};

// ─── Screens ───────────────────────────────────────────────────────────────
VIEWS.multiplayer = {
  render() {
    if (!DB.ready) return '<section class="card"><h2 class="card-title">Multiplayer</h2><p class="notice notice-error">Multiplayer needs an internet connection to the server, which is not available right now.</p></section>';
    if (!Bank.live().length) return bankLoadingHtml();
    const m = Settings.get().modes.multiplayer;
    const saved = LS.get('mm2:mpName', '') || (App.user && App.user.user_metadata?.display_name) || '';
    return `<div id="mp-setup">
      <section class="card"><h2 class="card-title">Join a room</h2>
        <form class="field-row" data-submit="mp.join">
          <div class="field"><label class="field-label" for="mp-join-name">Your name</label><input class="input" id="mp-join-name" name="name" maxlength="24" value="${esc(saved)}" /></div>
          <div class="field"><label class="field-label" for="mp-code">Room code</label><input class="input code-input" id="mp-code" name="code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="ABCD" /></div>
          <div class="field field-end"><button class="btn btn-primary" type="submit">Join game</button></div>
        </form></section>
      <section class="card"><h2 class="card-title">Host a room</h2>
        <div class="field"><label class="field-label" for="mp-host-name">Your name</label><input class="input" id="mp-host-name" maxlength="24" value="${esc(saved)}" /></div>
        ${Filters.html('multiplayer', { choiceOnly: true })}
        <div class="field"><label class="field-label" for="mp-secs">Seconds per question</label><select id="mp-secs" class="input">${(m.seconds || [20]).map((s) => `<option value="${s}" ${s === m.defaultSeconds ? 'selected' : ''}>${s} seconds</option>`).join('')}</select></div>
        <p class="muted">Keep this tab open while you host: the game runs from your device.</p>
        <button class="btn btn-primary btn-block" data-act="mp.create">Create room</button></section>
    </div><div id="mp-area"></div>`;
  },
  mounted() { Filters.mount(); },
  onBankReady() { if (!MP.inRoom) App.go('multiplayer', { force: true }); },
  async leave() { if (MP.inRoom) await MP.leave(); },
  onKey(e) { if (MP.phase === 'QUESTION' && /^[1-8]$/.test(e.key)) { const b = $$('.option')[Number(e.key) - 1]; if (b && !b.disabled) b.click(); } },
  message(title, text) {
    const area = $('#mp-area'), setup = $('#mp-setup');
    if (setup) setup.hidden = true;
    if (area) area.innerHTML = `<section class="card center"><h2>${esc(title)}</h2><p class="muted">${esc(text)}</p><button class="btn btn-primary" data-act="nav.go" data-view="multiplayer">Back to lobby</button></section>`;
  },
  drawTimer() {
    const el = $('#mp-timer'); if (!el) return;
    el.textContent = MP.timer; el.classList.toggle('is-urgent', MP.timer <= 5);
    const bar = $('#mp-timer-bar'); if (bar) bar.style.width = `${Math.max(0, Math.min(100, (MP.timer / Math.max(1, MP.duration)) * 100))}%`;
  },
  draw() {
    const area = $('#mp-area'); if (!area || App.view !== 'multiplayer' || !MP.inRoom) return;
    const setup = $('#mp-setup'); if (setup) setup.hidden = true;
    App.busy = 'multiplayer game';
    const you = (p) => (p.id === MP.myId ? ' <span class="muted">(you)</span>' : '');
    const board = `<ol class="board">${[...MP.players].sort((a, b) => (b.score || 0) - (a.score || 0)).map((p) => `<li class="${p.id === MP.myId ? 'is-me' : ''}"><span>${esc(p.name)}${you(p)}</span><strong>${p.score || 0}</strong></li>`).join('')}</ol>`;

    if (MP.phase === 'LOBBY') {
      area.innerHTML = `<section class="card center"><h2>Waiting room</h2>
        <p class="muted">Share this code with your friends</p><div class="room-code">${esc(MP.roomCode)}</div>
        <ul class="players">${MP.players.map((p) => `<li class="pill is-static ${p.id === MP.myId ? 'is-on' : ''}">${esc(p.name)}</li>`).join('')}</ul>
        <p class="muted">${MP.questions.length} questions · ${MP.baseDuration}s each</p>
        <div class="btn-row center">${MP.isHost ? '<button class="btn btn-primary" data-act="mp.start">Start game</button>' : '<span class="muted">Waiting for the host to start…</span>'}
          <button class="btn btn-ghost" data-act="mp.exit">Leave</button></div></section>`;
      return;
    }
    if (MP.phase === 'QUESTION') {
      const q = MP.questions[MP.index]; if (!q) return;
      const me = MP.players.find((p) => p.id === MP.myId), mine = me && me.currentAnswer;
      const opts = q.options.map((o, i) => {
        let cls = '';
        if (mine) cls = o === q.correct ? 'is-correct' : o === mine ? 'is-wrong' : '';
        else if (MP.waiting && o === MP.myAnswer) cls = 'is-selected';
        return `<button class="option ${cls}" data-act="mp.answer" data-i="${i}" ${mine || MP.waiting ? 'disabled' : ''}><span class="opt-key">${q.options.length > 2 ? LETTERS[i] : i + 1}</span><span class="opt-text">${esc(o)}</span></button>`;
      }).join('');
      const everyone = MP.players.every((p) => p.currentAnswer);
      const status = everyone ? 'Everyone has answered. Next question coming…' : MP.sendFailed ? 'Your answer did not get through. Tap it again.' : MP.waiting ? 'Sending your answer…' : `${MP.players.filter((p) => p.currentAnswer).length} of ${MP.players.length} answered`;
      area.innerHTML = `<div class="mp-layout"><section class="card qcard">
          <div class="q-meta"><span class="badge badge-course">${esc(q.course)}</span><span class="timer" id="mp-timer">${MP.timer}</span><span class="muted">${MP.index + 1} / ${MP.questions.length}</span></div>
          <div class="bar bar-thin"><div class="bar-fill" id="mp-timer-bar"></div></div>
          <p class="q-text">${esc(q.question)}</p><div class="options">${opts}</div>
          ${mine ? `<div class="feedback ${mine === q.correct ? 'is-right' : 'is-wrong'}"><strong>${mine === q.correct ? '✓ Correct' : '✗ Not quite'}</strong><p>${esc(q.explanation)}</p></div>` : ''}
          <p class="mp-status ${MP.sendFailed ? 'down' : 'muted'}">${status}</p>
          <div class="q-foot">${Bank.get(q.id) ? saveBtn(q.id) : '<span></span>'}<button class="btn btn-ghost btn-sm" data-act="mp.exit">Leave game</button></div>
        </section><aside class="card"><h3 class="card-title">Standings</h3>${board}</aside></div>`;
      this.drawTimer();
      return;
    }
    if (MP.phase === 'REVIEW') {
      const ranked = [...MP.players].sort((a, b) => (b.score || 0) - (a.score || 0));
      const medals = ['🥇', '🥈', '🥉'];
      area.innerHTML = `<section class="card center"><h2>Game over</h2>
          <div class="podium">${ranked.slice(0, 3).map((p, i) => `<div class="podium-place place-${i + 1}"><span>${medals[i]}</span><strong>${esc(p.name)}${you(p)}</strong><em>${p.score || 0} pts</em></div>`).join('')}</div>
          ${MP.xp ? `<p class="muted">You earned +${MP.xp} XP.</p>` : ''}
          <div class="btn-row center">${MP.isHost ? '<button class="btn btn-primary" data-act="mp.rematch">Play again</button>' : '<span class="muted">The host can start a rematch.</span>'}<button class="btn btn-ghost" data-act="mp.exit">Exit</button></div></section>
        <section class="card"><h3 class="card-title">Players</h3><div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Score</th><th>Accuracy</th><th>Right</th><th>Wrong</th><th>Missed</th></tr></thead><tbody>
          ${ranked.map((p) => `<tr class="${p.id === MP.myId ? 'is-me' : ''}"><td>${esc(p.name)}</td><td><strong>${p.score || 0}</strong></td><td>${p.accuracy || 0}%</td><td>${p.correctCount || 0}</td><td>${p.wrongCount || 0}</td><td>${p.skippedCount || 0}</td></tr>`).join('')}</tbody></table></div></section>
        <section class="card"><h3 class="card-title">Your answers</h3>${MP.log.map((e, i) => {
          const ok = e.mine && e.mine === e.correct;
          return `<article class="review ${ok ? 'is-right' : 'is-wrong'}"><header class="review-head"><span class="badge ${ok ? 'badge-good' : 'badge-bad'}">${ok ? '✓ Correct' : e.mine ? '✗ Incorrect' : '— No answer'}</span>${Bank.get(e.id) ? saveBtn(e.id) : ''}</header>
            <p class="q-text"><strong>${i + 1}.</strong> ${esc(e.question)}</p><div class="answer-box">${e.mine && !ok ? `<p class="down">Your answer: ${esc(e.mine)}</p>` : ''}<p class="up"><strong>Correct answer: ${esc(e.correct)}</strong></p></div>
            <div class="explain"><p>${esc(e.explanation)}</p></div></article>`;
        }).join('') || '<p class="muted">No questions were played.</p>'}</section>`;
    }
  },
};

ACTIONS['mp.create'] = async (el) => {
  const name = ($('#mp-host-name').value || '').trim();
  if (!name) return App.toast('Enter your name first.', 'error');
  const secs = Number($('#mp-secs').value) || 20;
  const poolIds = Filters.pool().map((q) => q.id);
  const qs = Filters.take(5); if (!qs) return;
  LS.set('mm2:mpName', name); el.disabled = true;
  VIEWS.multiplayer.message('Creating your room…', 'One moment.');
  try { await MP.create(name, qs, poolIds.slice(0, 2000), secs); VIEWS.multiplayer.draw(); }
  catch (e) { MP.reset(); App.busy = null; VIEWS.multiplayer.message('Could not create the room', e.message); }
};
ACTIONS['mp.join'] = async (form) => {
  const name = form.name.value.trim(), code = form.code.value.trim().toUpperCase();
  if (!name) return App.toast('Enter your name first.', 'error');
  if (!/^[A-Z0-9]{4}$/.test(code)) return App.toast('The room code is four characters.', 'error');
  LS.set('mm2:mpName', name);
  VIEWS.multiplayer.message('Joining…', 'Connecting to the room.');
  try { await MP.join(name, code); VIEWS.multiplayer.draw(); }
  catch (e) { MP.reset(); App.busy = null; VIEWS.multiplayer.message('Could not join', e.message); }
};
ACTIONS['mp.start'] = () => MP.hostStart();
ACTIONS['mp.answer'] = (el) => { const q = MP.questions[MP.index]; if (q) MP.answer(q.options[Number(el.dataset.i)]); };
ACTIONS['mp.rematch'] = () => MP.hostRematch();
ACTIONS['mp.exit'] = async () => {
  if (MP.phase === 'QUESTION' && !(await App.confirm('Leave the game in progress?', 'Leave'))) return;
  await MP.leave(); App.busy = null; App.go('multiplayer', { force: true });
};
window.addEventListener('pagehide', () => { if (MP.inRoom) MP.leave(); });
