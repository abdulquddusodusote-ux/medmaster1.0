/**
 * MedMaster — Main Application Engine (v2)
 * WITH LIGHT/DARK MODE TOGGLE + DAILY FIX
 */

const App = {
  currentView: 'dashboard',
  viewContainer: null,

  // ── Auth state ────────────────────────────────────────────────────────
  currentUser: null,

  // ── Practice ──────────────────────────────────────────────────────────
  practice: {
    questions: [], currentIndex: 0, score: 0, answered: false,
    total: 0, results: [], started: false, startTime: 0,
    confidences: [],
  },

  // ── Exam ──────────────────────────────────────────────────────────────
  exam: {
    questions: [], currentIndex: 0, answers: [], total: 0,
    score: 0, started: false, finished: false, timer: 0,
    timerInterval: null, results: [], startTime: 0, duration: 0,
  },

  // ── Daily Challenge ───────────────────────────────────────────────────
  daily: {
    questions: [], currentIndex: 0, answers: [], total: 20,
    score: 0, started: false, finished: false,
    timer: 0, timerInterval: null, results: [], startTime: 0,
    submitted: false,
  },

  // ── Slide-Through ─────────────────────────────────────────────────────
  slide: {
    questions: [], currentIndex: 0, total: 0,
    speed: 8, phase: 'question',
    intervalId: null, phaseTimer: 0, phaseIntervalId: null,
    started: false, startTime: 0, topicsCovered: new Set(), paused: false,
  },

  // ── Multiplayer ───────────────────────────────────────────────────────
  mp: {
    channel: null, isHost: false, inRoom: false,
    roomCode: '', playerName: '', myId: '',
    players: [], questions: [], currentIndex: 0,
    state: 'SETUP', timer: 0, timerInterval: null,
    questionDuration: 20, originalQuestionDuration: 20,
    questionStartTime: 0, answerLog: [], myLastAnswer: null,
    isWaitingForDatabase: false,
  },

  // ── Data ──────────────────────────────────────────────────────────────
  bookmarks: new Set(),
  mistakes: [],
  history: [],
  flashcard: { questions: [], currentIndex: 0, revealed: false, total: 0 },

  // ── Theme ─────────────────────────────────────────────────────────────
  darkMode: false,

  // ══════════════════════════════════════════════════════════════════════
  // INIT
  // ══════════════════════════════════════════════════════════════════════

  async init() {
    console.log('[App] Initialising…');
    this.viewContainer = document.getElementById('view-container');
    this.setupKeyboardShortcuts();

    // Load theme preference
    this.loadTheme();

    // Listen for Supabase auth changes
    authOnStateChange(async (user) => {
      console.log('[Auth] State change:', user ? 'User logged in' : 'User logged out');
      this.currentUser = user;
      this.updateAuthBadge();
      if (user) await this.syncFromCloud();
    });

    const user = await authGetCurrentUser();
    if (user) {
      console.log('[App] Found existing session for user:', user.email);
      this.currentUser = user;
      this.updateAuthBadge();
      await this.syncFromCloud();
      this.showAppShell();
    } else {
      console.log('[App] No session, showing auth overlay');
      document.getElementById('auth-overlay').style.display = 'flex';
    }
  },

  showAppShell() {
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('app-shell').style.display   = 'block';
    this.loadLocalData();
    this.setupNavigation();
    this.showView('dashboard');
  },

  // ── Theme Helpers ──────────────────────────────────────────────────────

  loadTheme() {
    const saved = localStorage.getItem('mm_dark_mode');
    this.darkMode = saved === 'true';
    this.applyTheme();
  },

  applyTheme() {
    document.body.classList.toggle('dark-mode', this.darkMode);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.textContent = this.darkMode ? '☀️ Light' : '🌙 Dark';
  },

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('mm_dark_mode', String(this.darkMode));
    this.applyTheme();
  },

  // ══════════════════════════════════════════════════════════════════════
  // AUTH
  // ══════════════════════════════════════════════════════════════════════

  auth: {
    switchTab(tab) {
      console.log('[Auth] switchTab:', tab);
      document.getElementById('auth-login-form').style.display    = tab === 'login'    ? 'block' : 'none';
      document.getElementById('auth-register-form').style.display = tab === 'register' ? 'block' : 'none';
      document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
      document.getElementById('tab-register').classList.toggle('active', tab === 'register');
      App.auth.clearMessage();
    },

    showMessage(msg, isError = false) {
      console.log('[Auth] showMessage:', msg, isError);
      const el = document.getElementById('auth-message');
      el.style.display      = 'block';
      el.textContent        = msg;
      el.className          = `auth-message ${isError ? 'auth-message--error' : 'auth-message--success'}`;
    },

    clearMessage() {
      const el = document.getElementById('auth-message');
      el.style.display = 'none';
    },

    async handleLogin() {
      console.log('[Auth] handleLogin triggered');
      const email    = document.getElementById('auth-email').value.trim();
      const password = document.getElementById('auth-password').value;
      if (!email || !password) {
        App.auth.showMessage('Please enter your email and password.', true);
        return;
      }
      App.auth.showMessage('Signing in…');
      try {
        if (typeof authSignIn !== 'function') {
          throw new Error('authSignIn is not defined – check Supabase initialisation.');
        }
        const { user, error } = await authSignIn(email, password);
        if (error) return App.auth.showMessage(error.message, true);
        App.currentUser = user;
        App.updateAuthBadge();
        await App.syncFromCloud();
        App.showAppShell();
      } catch (err) {
        console.error('[Auth] Login error:', err);
        App.auth.showMessage('Login failed: ' + err.message, true);
      }
    },

    async handleRegister() {
      console.log('[Auth] handleRegister triggered');
      const name     = document.getElementById('auth-display-name').value.trim();
      const email    = document.getElementById('auth-reg-email').value.trim();
      const password = document.getElementById('auth-reg-password').value;
      if (!name || !email || !password) {
        App.auth.showMessage('Please fill in all fields.', true);
        return;
      }
      if (password.length < 6) {
        App.auth.showMessage('Password must be at least 6 characters.', true);
        return;
      }
      App.auth.showMessage('Creating account…');
      try {
        if (typeof authSignUp !== 'function') {
          throw new Error('authSignUp is not defined – check Supabase initialisation.');
        }
        const { user, error } = await authSignUp(email, password, name);
        if (error) return App.auth.showMessage(error.message, true);
        App.auth.showMessage('Account created! Check your email to confirm, then sign in.');
      } catch (err) {
        console.error('[Auth] Registration error:', err);
        App.auth.showMessage('Registration failed: ' + err.message, true);
      }
    },

    continueAsGuest() {
      console.log('[Auth] continueAsGuest triggered');
      App.currentUser = null;
      App.loadLocalData();
      App.showAppShell();
    },
  },

  updateAuthBadge() {
    const badge = document.getElementById('auth-user-badge');
    if (!badge) return;
    // Add theme toggle button
    if (this.currentUser) {
      const name = this.currentUser.user_metadata?.display_name || this.currentUser.email;
      badge.innerHTML = `
        <span class="user-name-badge">👤 ${name}</span>
        <button class="btn-signout" onclick="App.handleSignOut()">Sign Out</button>
        <button id="theme-toggle" class="btn-signout" onclick="App.toggleTheme()">${this.darkMode ? '☀️ Light' : '🌙 Dark'}</button>
      `;
    } else {
      badge.innerHTML = `
        <span style="color:#94a3b8; font-size:0.85rem;">Guest Mode</span>
        <button id="theme-toggle" class="btn-signout" onclick="App.toggleTheme()">${this.darkMode ? '☀️ Light' : '🌙 Dark'}</button>
      `;
    }
  },

  async handleSignOut() {
    await authSignOut();
    this.currentUser = null;
    this.history = [];
    this.bookmarks = new Set();
    this.mistakes = [];
    document.getElementById('app-shell').style.display   = 'none';
    document.getElementById('auth-overlay').style.display = 'flex';
  },

  // ══════════════════════════════════════════════════════════════════════
  // DATA SYNC
  // ══════════════════════════════════════════════════════════════════════

  loadLocalData() {
    try { this.history   = JSON.parse(localStorage.getItem('mm_history'))   || []; } catch(e) { this.history = []; }
    try { this.bookmarks = new Set(JSON.parse(localStorage.getItem('mm_bookmarks')) || []); } catch(e) { this.bookmarks = new Set(); }
    try { this.mistakes  = JSON.parse(localStorage.getItem('mm_mistakes'))  || []; } catch(e) { this.mistakes = []; }
  },

  saveLocalData() {
    localStorage.setItem('mm_history',   JSON.stringify(this.history));
    localStorage.setItem('mm_bookmarks', JSON.stringify([...this.bookmarks]));
    localStorage.setItem('mm_mistakes',  JSON.stringify(this.mistakes));
  },

  async syncFromCloud() {
    if (!this.currentUser) return;
    const progress = await dbLoadUserProgress(this.currentUser.id);
    if (!progress) return;
    this.history   = progress.history   || [];
    this.bookmarks = new Set(progress.bookmarks || []);
    this.mistakes  = progress.mistakes  || [];
    this.saveLocalData();
  },

  async saveData() {
    this.saveLocalData();
    if (this.currentUser) {
      await dbSaveUserProgress(this.currentUser.id, {
        history:   this.history,
        bookmarks: [...this.bookmarks],
        mistakes:  this.mistakes,
      });
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ══════════════════════════════════════════════════════════════════════

  setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        if (this.mp.inRoom) {
          if (!confirm('Leave active multiplayer room?')) return;
          await mp_leaveRoom();
        }
        this.showView(btn.dataset.view);
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  },

  // ─── FIXED: async showView with await for daily ──────────────────────
  async showView(viewName) {
    this.currentView = viewName;
    if (this.exam.timerInterval) clearInterval(this.exam.timerInterval);
    if (this.slide.intervalId)    clearInterval(this.slide.intervalId);
    if (this.slide.phaseIntervalId) clearInterval(this.slide.phaseIntervalId);
    if (this.daily.timerInterval) clearInterval(this.daily.timerInterval);

    let html = '';
    switch (viewName) {
      case 'dashboard':   html = this.renderDashboard();        break;
      case 'practice':    html = this.renderPractice();         break;
      case 'exam':        html = this.renderExamSetup();        break;
      case 'daily':       html = await this.renderDailySetup(); break; // ✅ AWAIT
      case 'slide':       html = this.renderSlideSetup();       break;
      case 'multiplayer': html = this.renderMultiplayerSetup(); break;
      case 'history':     html = this.renderHistory();          break;
      case 'bookmarks':   html = this.renderBookmarks();        break;
    }
    this.viewContainer.innerHTML = html;
    this.bindViewEvents(viewName);
  },

  // ══════════════════════════════════════════════════════════════════════
  // KEYBOARD SHORTCUTS (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
      const key = e.key.toLowerCase();

      if (this.currentView === 'bookmarks' && document.getElementById('flashcard-area')?.innerHTML.trim()) {
        if (key === ' ' || key === 'spacebar') { e.preventDefault(); this.flashcard.revealed = !this.flashcard.revealed; this.renderFlashcard(); }
        if (key === 'arrowright' && this.flashcard.currentIndex < this.flashcard.total - 1) { this.flashcard.currentIndex++; this.flashcard.revealed = false; this.renderFlashcard(); }
        if (key === 'arrowleft'  && this.flashcard.currentIndex > 0)                        { this.flashcard.currentIndex--; this.flashcard.revealed = false; this.renderFlashcard(); }
      }

      const numberMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4 };
      if (numberMap[key] !== undefined) {
        const index = numberMap[key];
        let buttons = [];
        if (this.currentView === 'practice')    buttons = document.querySelectorAll('.btn-answer');
        if (this.currentView === 'exam')        buttons = document.querySelectorAll('.btn-exam-answer');
        if (this.currentView === 'multiplayer') buttons = document.querySelectorAll('.btn-mp-answer');
        if (this.currentView === 'daily')       buttons = document.querySelectorAll('.btn-daily-answer');
        if (buttons.length > index && !buttons[index].disabled) buttons[index].click();
      }

      if ((key === ' ' || key === 'enter') && this.currentView === 'practice' && this.practice.answered) {
        e.preventDefault();
        document.querySelector('.btn-next')?.click();
      }

      if (key === ' ' && this.currentView === 'slide' && this.slide.started) {
        e.preventDefault();
        this.toggleSlidePause();
      }
    });
  },

  // ══════════════════════════════════════════════════════════════════════
  // FILTER ENGINE (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  getUniqueCourses() { return [...new Set(questions.map(q => q.course))].sort(); },

  getSelectedPills(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return ['all'];
    const actives = container.querySelectorAll('.filter-pill.active');
    const values  = Array.from(actives).map(p => p.dataset.value);
    return values.includes('all') ? ['all'] : values;
  },

  getUncheckedValues(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return new Set();
    return new Set(Array.from(container.querySelectorAll('input[type="checkbox"]:not(:checked)')).map(cb => cb.value));
  },

  getCheckedValues(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return ['all'];
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    if (checkboxes.length === 0) return ['all'];
    return Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
  },

  getFullyFilteredPool(prefix) {
    const courses       = this.getSelectedPills(`${prefix}-courses`);
    const activeTopics  = this.getCheckedValues(`${prefix}-topic-container`);
    const activeSubs    = this.getCheckedValues(`${prefix}-subtopic-container`);
    const qType         = document.getElementById(`${prefix}-type`)?.value || 'all';
    let pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));
    if (!activeTopics.includes('all')) pool = pool.filter(q => activeTopics.includes(q.topic));
    if (!activeSubs.includes('all'))   pool = pool.filter(q => activeSubs.includes(q.subTopic));
    if (qType !== 'all')               pool = pool.filter(q => q.type === qType);
    return pool;
  },

  renderTopicSelection(prefix) {
    const courses = this.getSelectedPills(`${prefix}-courses`);
    let pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));
    const topicsByCourse = {};
    pool.forEach(q => {
      if (!topicsByCourse[q.course]) topicsByCourse[q.course] = new Set();
      topicsByCourse[q.course].add(q.topic);
    });
    const uncheckedTopics = this.getUncheckedValues(`${prefix}-topic-container`);
    const container = document.getElementById(`${prefix}-topic-container`);
    if (!container) return;
    if (Object.keys(topicsByCourse).length === 0) { container.innerHTML = '<p class="text-muted mt-1">No topics available.</p>'; this.renderSubTopicSelection(prefix); return; }
    let html = '';
    for (const course of Object.keys(topicsByCourse).sort()) {
      const topics = Array.from(topicsByCourse[course]).sort();
      html += `<div class="accordion-item"><div class="accordion-header"><span>${course}</span><span class="accordion-arrow">▼</span></div><div class="accordion-content"><div class="accordion-scroll-area"><div class="checkbox-grid">${topics.map(t => `<label class="custom-checkbox"><input type="checkbox" class="topic-checkbox" value="${t.replace(/"/g,'&quot;')}" ${!uncheckedTopics.has(t) ? 'checked' : ''}><span>${t}</span></label>`).join('')}</div></div></div></div>`;
    }
    container.innerHTML = html;
    this.renderSubTopicSelection(prefix);
  },

  renderSubTopicSelection(prefix) {
    const courses      = this.getSelectedPills(`${prefix}-courses`);
    const activeTopics = this.getCheckedValues(`${prefix}-topic-container`);
    let pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));
    if (!activeTopics.includes('all')) pool = pool.filter(q => activeTopics.includes(q.topic));
    const subTopicsByTopic = {};
    pool.forEach(q => {
      if (!subTopicsByTopic[q.topic]) subTopicsByTopic[q.topic] = new Set();
      subTopicsByTopic[q.topic].add(q.subTopic);
    });
    const uncheckedSubs = this.getUncheckedValues(`${prefix}-subtopic-container`);
    const container = document.getElementById(`${prefix}-subtopic-container`);
    if (!container) return;
    if (Object.keys(subTopicsByTopic).length === 0) { container.innerHTML = '<p class="text-muted mt-1">No sub-topics available.</p>'; this.updateQuestionCountDropdown(prefix); return; }
    let html = '';
    for (const topic of Object.keys(subTopicsByTopic).sort()) {
      const subs = Array.from(subTopicsByTopic[topic]).sort();
      html += `<div class="accordion-item"><div class="accordion-header"><span>${topic}</span><span class="accordion-arrow">▼</span></div><div class="accordion-content"><div class="accordion-scroll-area"><div class="checkbox-grid">${subs.map(st => `<label class="custom-checkbox"><input type="checkbox" class="subtopic-checkbox" value="${st.replace(/"/g,'&quot;')}" ${!uncheckedSubs.has(st) ? 'checked' : ''}><span>${st}</span></label>`).join('')}</div></div></div></div>`;
    }
    container.innerHTML = html;
    this.updateQuestionCountDropdown(prefix);
  },

  updateQuestionCountDropdown(prefix) {
    const pool   = this.getFullyFilteredPool(prefix);
    const max    = pool.length;
    const select = document.getElementById(`${prefix}-question-count`);
    if (!select) return;
    const cur = select.value;
    let options = `<option value="all" ${cur==='all'?'selected':''}>All Available (${max})</option>`;
    for (let i = 5; i <= Math.min(max, 100); i += 5) options += `<option value="${i}" ${cur==String(i)?'selected':''}>${i}</option>`;
    if (max < 5 && max > 0) options += `<option value="${max}">${max}</option>`;
    select.innerHTML = options;
  },

  renderFilterUI(prefix) {
    const coursePills = this.getUniqueCourses().map(c => `<button class="filter-pill" data-value="${c}">${c}</button>`).join('');
    return `
      <div class="filter-section">
        <label><strong>1. Select Courses:</strong></label>
        <div id="${prefix}-courses" class="pill-group mt-1"><button class="filter-pill active" data-value="all">All Courses</button>${coursePills}</div>
      </div>
      <div class="filter-section mt-1">
        <label><strong>2. Topics:</strong> <span class="text-muted" style="font-size:0.85rem; font-weight:normal;">(Uncheck to exclude)</span></label>
        <div id="${prefix}-topic-container" class="accordion-wrapper"></div>
      </div>
      <div class="filter-section mt-1">
        <label><strong>3. Sub-Topics:</strong> <span class="text-muted" style="font-size:0.85rem; font-weight:normal;">(Uncheck to exclude)</span></label>
        <div id="${prefix}-subtopic-container" class="accordion-wrapper"></div>
      </div>
      <div class="filter-section mt-1">
        <label><strong>4. Question Type:</strong></label>
        <select id="${prefix}-type" class="input-select mt-1">
          <option value="all">All Types</option>
          <option value="multiplechoice">Standard MCQs</option>
          <option value="truefalse">True / False</option>
          <option value="clinical_scenario">Clinical Scenarios</option>
        </select>
      </div>
    `;
  },

  bindFilterEvents(prefix) {
    const setupArea = document.getElementById(`${prefix}-setup`) || document.getElementById(`${prefix}-lobby-ui`);
    if (!setupArea) return;
    setupArea.addEventListener('click', (e) => {
      if (e.target.matches('.filter-pill')) {
        const cc = document.getElementById(`${prefix}-courses`);
        if (e.target.dataset.value === 'all') { cc.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active')); e.target.classList.add('active'); }
        else { cc.querySelector('[data-value="all"]').classList.remove('active'); e.target.classList.toggle('active'); if (cc.querySelectorAll('.filter-pill.active').length === 0) cc.querySelector('[data-value="all"]').classList.add('active'); }
        this.renderTopicSelection(prefix);
      }
      const header = e.target.closest('.accordion-header');
      if (header) header.parentElement.classList.toggle('open');
    });
    setupArea.addEventListener('change', (e) => {
      if (e.target.matches('.topic-checkbox'))    this.renderSubTopicSelection(prefix);
      if (e.target.matches('.subtopic-checkbox')) this.updateQuestionCountDropdown(prefix);
    });
    document.getElementById(`${prefix}-type`)?.addEventListener('change', () => this.updateQuestionCountDropdown(prefix));
    this.renderTopicSelection(prefix);
  },

  // ══════════════════════════════════════════════════════════════════════
  // BIND VIEW EVENTS (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  bindViewEvents(viewName) {
    if (viewName === 'practice') {
      this.bindFilterEvents('practice');
      document.getElementById('start-practice')?.addEventListener('click', () => this.startPractice());
      document.getElementById('practice-area')?.addEventListener('click', (e) => {
        if (e.target.closest('.btn-answer'))   this.handlePracticeAnswer(e.target.closest('.btn-answer').dataset.value);
        if (e.target.matches('.btn-next'))     { this.practice.currentIndex++; this.practice.answered = false; this.renderPracticeQuestion(); }
        if (e.target.matches('.btn-finish'))   { this.practice.currentIndex = this.practice.total; this.showPracticeReview(); }
        if (e.target.matches('.btn-bookmark')) this.toggleBookmark(e.target.dataset.question);
        if (e.target.matches('.concept-tag'))  this.openConceptDrill(e.target.dataset.concept);
        if (e.target.matches('.btn-redrill'))  this.startReDrill(JSON.parse(decodeURIComponent(e.target.dataset.questions)));
      });

    } else if (viewName === 'exam') {
      this.bindFilterEvents('exam');
      document.getElementById('start-exam')?.addEventListener('click', () => this.startExam());
      document.getElementById('exam-area')?.addEventListener('click', (e) => {
        if (e.target.closest('.btn-exam-answer')) this.handleExamAnswer(e.target.closest('.btn-exam-answer').dataset.value);
        if (e.target.matches('.btn-exam-finish')) this.finishExam(false);
        if (e.target.matches('.btn-redrill'))     this.startReDrill(JSON.parse(decodeURIComponent(e.target.dataset.questions)));
      });

    } else if (viewName === 'daily') {
      document.getElementById('start-daily')?.addEventListener('click', () => this.startDailyChallenge());
      document.getElementById('daily-area')?.addEventListener('click', (e) => {
        if (e.target.closest('.btn-daily-answer')) this.handleDailyAnswer(e.target.closest('.btn-daily-answer').dataset.value);
        if (e.target.matches('.btn-redrill'))      this.startReDrill(JSON.parse(decodeURIComponent(e.target.dataset.questions)));
      });

    } else if (viewName === 'slide') {
      this.bindFilterEvents('slide');
      document.getElementById('start-slide')?.addEventListener('click', () => this.startSlide());
      document.getElementById('slide-area')?.addEventListener('click', (e) => {
        if (e.target.matches('.btn-slide-pause'))  this.toggleSlidePause();
        if (e.target.matches('.btn-slide-prev'))   this.slideManualStep(-1);
        if (e.target.matches('.btn-slide-next'))   this.slideManualStep(1);
        if (e.target.matches('.btn-slide-speed'))  this.changeSlideSpeed(parseInt(e.target.dataset.speed));
      });

    } else if (viewName === 'multiplayer') {
      this.bindFilterEvents('mp');
      document.getElementById('mp-create-btn')?.addEventListener('click', () => this.handleCreateRoom());
      document.getElementById('mp-join-btn')?.addEventListener('click',   () => this.handleJoinRoom());
      document.getElementById('mp-area')?.addEventListener('click', (e) => {
        if (e.target.matches('.btn-mp-start-game'))   this.handleHostStartGame();
        if (e.target.closest('.btn-mp-answer'))       this.handleMpAnswer(e.target.closest('.btn-mp-answer').dataset.value);
        if (e.target.closest('.btn-mp-bookmark'))     this.toggleBookmark(e.target.closest('.btn-mp-bookmark').dataset.question, true);
      });

    } else if (viewName === 'history') {
      document.getElementById('clear-history-btn')?.addEventListener('click', () => {
        if (confirm('Clear all history?')) { this.history = []; this.saveData(); this.showView('history'); }
      });
      document.getElementById('clear-mistakes-btn')?.addEventListener('click', () => {
        if (confirm('Clear mistake notebook?')) { this.mistakes = []; this.saveData(); this.showView('history'); }
      });
      document.getElementById('history-area')?.addEventListener('click', (e) => {
        if (e.target.matches('.btn-master-mistake')) {
          const idx = parseInt(e.target.dataset.idx);
          if (this.mistakes[idx]) { this.mistakes[idx].mastered = true; this.saveData(); this.showView('history'); }
        }
      });

    } else if (viewName === 'bookmarks') {
      document.getElementById('start-flashcards')?.addEventListener('click', () => this.startFlashcards());
      document.getElementById('export-anki')?.addEventListener('click',      () => this.exportAnkiCSV());
      document.getElementById('bookmark-list')?.addEventListener('click', (e) => {
        if (e.target.matches('.btn-remove-bookmark')) { this.bookmarks.delete(e.target.dataset.question); this.saveData(); this.showView('bookmarks'); }
        const header = e.target.closest('.bookmark-course-header');
        if (header) header.parentElement.classList.toggle('open');
      });
      document.getElementById('flashcard-area')?.addEventListener('click', (e) => {
        if (e.target.matches('.btn-flip'))       { this.flashcard.revealed = !this.flashcard.revealed; this.renderFlashcard(); }
        if (e.target.matches('.btn-flash-next')) { this.flashcard.currentIndex++; this.flashcard.revealed = false; this.renderFlashcard(); }
        if (e.target.matches('.btn-flash-prev')) { this.flashcard.currentIndex--; this.flashcard.revealed = false; this.renderFlashcard(); }
      });
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // HELPERS (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  },

  formatTime(s) {
    const m = Math.floor(Math.abs(s) / 60);
    const sec = Math.abs(s) % 60;
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  },

  getCorrectVal(q) {
    return q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
  },

  toggleBookmark(questionText) {
    if (this.bookmarks.has(questionText)) this.bookmarks.delete(questionText);
    else this.bookmarks.add(questionText);
    this.saveData();
  },

  addMistake(q, selected) {
    const existing = this.mistakes.find(m => m.question === q.question);
    if (existing) { existing.date = new Date().toISOString(); existing.mastered = false; return; }
    this.mistakes.push({
      question:    q.question,
      correct:     this.getCorrectVal(q),
      explanation: q.explanation,
      course:      q.course,
      topic:       q.topic,
      subTopic:    q.subTopic,
      date:        new Date().toISOString(),
      mastered:    false,
    });
  },

  // ══════════════════════════════════════════════════════════════════════
  // SEEDED DAILY (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  getDailySeed() {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return parseInt(today);
  },

  seededShuffle(arr, seed) {
    const a = [...arr];
    let s = seed;
    for (let i = a.length - 1; i > 0; i--) {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      const j = Math.abs(s) % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  getDailyQuestions() {
    const seed = this.getDailySeed();
    return this.seededShuffle(questions, seed).slice(0, 20);
  },

  // ══════════════════════════════════════════════════════════════════════
  // DASHBOARD (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderDashboard() {
    const completed = this.history.filter(h => h.total > 0 && typeof h.score === 'number');
    let totalQ = 0, correctQ = 0;
    const subStats = {}, courseStats = {};

    completed.forEach(h => {
      totalQ   += h.total;
      correctQ += h.score;
      if (h.subPerf) {
        for (const [sub, p] of Object.entries(h.subPerf)) {
          if (!subStats[sub]) subStats[sub] = { correct: 0, total: 0, course: p.course || '' };
          subStats[sub].correct += p.correct;
          subStats[sub].total   += p.total;
        }
      }
      if (h.coursePerf) {
        for (const [course, p] of Object.entries(h.coursePerf)) {
          if (!courseStats[course]) courseStats[course] = { correct: 0, total: 0 };
          courseStats[course].correct += p.correct;
          courseStats[course].total   += p.total;
        }
      }
    });

    let weakest = 'Needs Data', strongest = 'Needs Data', weakPct = 101, strongPct = -1;
    for (const [sub, stats] of Object.entries(subStats)) {
      if (stats.total >= 3) {
        const pct = (stats.correct / stats.total) * 100;
        if (pct < weakPct)   { weakPct = pct;   weakest = sub; }
        if (pct > strongPct) { strongPct = pct; strongest = sub; }
      }
    }

    const heatMapHtml = this.getUniqueCourses().map(course => {
      const cs = courseStats[course];
      const pct = cs && cs.total >= 3 ? Math.round((cs.correct / cs.total) * 100) : null;
      let color = '#e2e8f0', label = 'No data', textColor = '#94a3b8';
      if (pct !== null) {
        if (pct >= 75)      { color = '#dcfce7'; label = `${pct}%`; textColor = '#15803d'; }
        else if (pct >= 50) { color = '#fef9c3'; label = `${pct}%`; textColor = '#a16207'; }
        else                { color = '#fee2e2'; label = `${pct}%`; textColor = '#b91c1c'; }
      }
      return `<div class="heat-cell" style="background:${color};"><span class="heat-label" style="color:${textColor};">${course}</span><span class="heat-pct" style="color:${textColor};">${label}</span></div>`;
    }).join('');

    const recentHtml = completed.slice(0, 5).map(h => `
      <div class="recent-item">
        <span class="recent-mode">${h.mode}</span>
        <span class="recent-score" style="color:${h.percentage >= 50 ? '#16a34a' : '#dc2626'};">${h.percentage}%</span>
        <span class="recent-date text-muted">${new Date(h.date).toLocaleDateString()}</span>
      </div>
    `).join('') || '<p class="text-muted">No sessions yet. Start practicing!</p>';

    const welcomeCard = completed.length === 0 ? `
      <div class="card" style="background:linear-gradient(135deg,#0b1c2c,#173653); color:#fff; text-align:center;">
        <h2 style="color:#fff; border-color:#ffffff22;">Welcome to MedMaster 👋</h2>
        <p style="opacity:0.85; margin-bottom:1.5rem;">Your intelligent preclinical study platform. Start with Practice or jump into the Daily Challenge.</p>
        <div class="flex" style="justify-content:center;">
          <button class="btn" style="background:#fff; color:#0b2b4a;" onclick="App.showView('practice'); document.querySelectorAll('.nav-btn').forEach(b=>{b.classList.toggle('active',b.dataset.view==='practice')});">Start Practicing</button>
          <button class="btn" style="background:#fbbf24; color:#0b2b4a;" onclick="App.showView('daily'); document.querySelectorAll('.nav-btn').forEach(b=>{b.classList.toggle('active',b.dataset.view==='daily')});">⚡ Daily Challenge</button>
        </div>
      </div>
    ` : '';

    return `
      <div class="container">
        ${welcomeCard}
        <div class="card">
          <h2 class="card-title">Performance Overview</h2>
          <div class="stats-grid">
            <div class="stat-card"><strong>Sessions</strong><span>${completed.length}</span></div>
            <div class="stat-card"><strong>Accuracy</strong><span>${totalQ ? Math.round((correctQ / totalQ) * 100) : 0}%</span></div>
            <div class="stat-card"><strong>Questions</strong><span>${totalQ}</span></div>
            <div class="stat-card"><strong>Mistakes</strong><span>${this.mistakes.filter(m => !m.mastered).length}</span></div>
          </div>
          <div class="flex">
            <div class="card" style="flex:1; background:#fff1f2; border:1px solid #ffe4e6; padding:1rem;">
              <strong style="color:#be123c; font-size:0.8rem; text-transform:uppercase;">Weakest Sub-Topic</strong><br>
              <span style="font-size:1.1rem; font-weight:700;">${weakest}</span> ${weakPct <= 100 ? `(${Math.round(weakPct)}%)` : ''}
            </div>
            <div class="card" style="flex:1; background:#f0fdf4; border:1px solid #dcfce7; padding:1rem;">
              <strong style="color:#15803d; font-size:0.8rem; text-transform:uppercase;">Strongest Sub-Topic</strong><br>
              <span style="font-size:1.1rem; font-weight:700;">${strongest}</span> ${strongPct >= 0 ? `(${Math.round(strongPct)}%)` : ''}
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="card-title">Knowledge Heat Map</h2>
          <div class="heat-legend">
            <span style="background:#dcfce7; color:#15803d;">≥75% Strong</span>
            <span style="background:#fef9c3; color:#a16207;">50–74% Average</span>
            <span style="background:#fee2e2; color:#b91c1c;">&lt;50% Weak</span>
          </div>
          <div class="heat-map mt-1">${heatMapHtml}</div>
        </div>

        <div class="card">
          <h2 class="card-title">Recent Activity</h2>
          ${recentHtml}
        </div>
      </div>
    `;
  },

  // ══════════════════════════════════════════════════════════════════════
  // PRACTICE MODE (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderPractice() {
    return `
      <div class="container">
        <div class="card" id="practice-setup">
          <h2 class="card-title">Practice Mode</h2>
          ${this.renderFilterUI('practice')}
          <div class="filter-section mt-1">
            <label><strong>5. Question Count:</strong></label>
            <select id="practice-question-count" class="input-select mt-1"><option value="all">All Available</option></select>
          </div>
          <button class="btn btn-primary mt-1" id="start-practice" style="width:100%;">Start Practice</button>
        </div>
        <div id="practice-area"></div>
      </div>
    `;
  },

  startPractice() {
    const pool      = this.shuffleArray(this.getFullyFilteredPool('practice'));
    if (!pool.length) return alert('No questions match these filters.');
    const val       = document.getElementById('practice-question-count').value;
    const finalPool = val === 'all' ? pool : pool.slice(0, parseInt(val));
    this.practice   = { questions: finalPool, currentIndex: 0, score: 0, answered: false, total: finalPool.length, results: [], started: true, startTime: Date.now(), confidences: [] };
    document.getElementById('practice-setup').style.display = 'none';
    this.renderPracticeQuestion();
  },

  renderPracticeQuestion() {
    const p    = this.practice;
    const area = document.getElementById('practice-area');
    if (p.currentIndex >= p.total) return this.showPracticeReview();
    const q       = p.questions[p.currentIndex];
    const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
    const pct     = Math.round((p.currentIndex / p.total) * 100);

    let buttonsHtml = '';
    options.forEach((opt, index) => {
      let stateClass = '', icon = '';
      if (p.answered) {
        const res = p.results[p.currentIndex];
        if (opt === res.correct)                            { stateClass = 'correct';   icon = ' ✓'; }
        else if (opt === res.selected && opt !== res.correct) { stateClass = 'incorrect'; icon = ' ✗'; }
      }
      buttonsHtml += `<button class="btn-option btn-answer ${stateClass}" data-value="${opt}" ${p.answered ? 'disabled' : ''}>${opt}${icon} <span class="hotkey-hint">[${index + 1}]</span></button>`;
    });

    let confidenceHtml = '';
    if (p.answered) {
      const conf = p.confidences[p.currentIndex] || '';
      confidenceHtml = `
        <div class="confidence-row">
          <span class="confidence-label">How confident were you?</span>
          <div class="confidence-btns">
            <button class="conf-btn ${conf==='guess'?'active':''}"    data-conf="guess"    onclick="App.setConfidence(${p.currentIndex},'guess')">🎲 Guess</button>
            <button class="conf-btn ${conf==='somewhat'?'active':''}" data-conf="somewhat" onclick="App.setConfidence(${p.currentIndex},'somewhat')">🤔 Somewhat Sure</button>
            <button class="conf-btn ${conf==='sure'?'active':''}"     data-conf="sure"     onclick="App.setConfidence(${p.currentIndex},'sure')">✅ Very Sure</button>
          </div>
        </div>
      `;
    }

    let conceptHtml = '';
    if (p.answered && q.relatedConcepts && q.relatedConcepts.length) {
      conceptHtml = `
        <div class="concept-tags-row">
          <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Related Concepts:</span>
          ${q.relatedConcepts.map(c => `<button class="concept-tag" data-concept="${c}">${c}</button>`).join('')}
        </div>
      `;
    }

    const res = p.answered ? p.results[p.currentIndex] : null;
    area.innerHTML = `
      <div class="card">
        <div class="progress-bar-track mb-1"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <div><span class="badge topic-badge">${q.course}</span> <span class="badge" style="background:#f1f5f9;">${q.topic} › ${q.subTopic}</span></div>
          <span class="progress-text">Q ${p.currentIndex + 1} / ${p.total}</span>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="mt-1">${buttonsHtml}</div>
        ${p.answered ? `
          <div class="feedback ${res.selected === res.correct ? 'feedback-correct' : 'feedback-incorrect'} mt-1">
            <strong>${res.selected === res.correct ? '✓ Correct!' : '✗ Incorrect'}</strong>
            <p class="mt-1">${q.explanation}</p>
          </div>
          ${conceptHtml}
          ${confidenceHtml}
        ` : ''}
        <div class="mt-1 flex" style="justify-content:space-between; border-top:1px solid #e2e8f0; padding-top:1rem;">
          <button class="btn btn-outline btn-bookmark" data-question="${q.question}">${this.bookmarks.has(q.question) ? '★ Bookmarked' : '☆ Bookmark'}</button>
          ${p.answered ? `<button class="btn btn-primary btn-next">Next [Space]</button>` : `<button class="btn btn-danger btn-finish">End Early</button>`}
        </div>
      </div>
    `;
  },

  setConfidence(index, value) {
    this.practice.confidences[index] = value;
    document.querySelectorAll('.conf-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.conf === value);
    });
  },

  handlePracticeAnswer(selected) {
    if (this.practice.answered) return;
    const q        = this.practice.questions[this.practice.currentIndex];
    const correct  = this.getCorrectVal(q);
    const isRight  = selected === correct;
    if (isRight) this.practice.score++;
    else         this.addMistake(q, selected);
    this.practice.results[this.practice.currentIndex] = {
      question: q.question, selected, correct,
      explanation: q.explanation, subTopic: q.subTopic,
      course: q.course, topic: q.topic, isCorrect: isRight,
    };
    this.practice.answered = true;
    this.renderPracticeQuestion();
  },

  showPracticeReview() {
    const p       = this.practice;
    const elapsed = Math.round((Date.now() - p.startTime) / 1000);
    const subPerf = {}, coursePerf = {};

    p.results.forEach(r => {
      if (!subPerf[r.subTopic]) subPerf[r.subTopic] = { correct: 0, total: 0, course: r.course };
      subPerf[r.subTopic].total++;
      if (r.isCorrect) subPerf[r.subTopic].correct++;

      if (!coursePerf[r.course]) coursePerf[r.course] = { correct: 0, total: 0 };
      coursePerf[r.course].total++;
      if (r.isCorrect) coursePerf[r.course].correct++;
    });

    this.history.unshift({
      mode: 'Practice', score: p.score, total: p.total,
      percentage: p.total ? Math.round((p.score / p.total) * 100) : 0,
      date: new Date().toISOString(), subPerf, coursePerf,
    });
    this.saveData();

    document.getElementById('practice-area').innerHTML =
      this.renderSessionReview({
        title:      'Practice Complete',
        score:      p.score,
        total:      p.total,
        elapsed,
        results:    p.results,
        subPerf,
        confidences: p.confidences,
        restartFn:  `App.showView('practice')`,
        mode:       'practice',
      });
  },

  // ══════════════════════════════════════════════════════════════════════
  // SHARED SESSION REVIEW (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderSessionReview({ title, score, total, elapsed, results, subPerf, confidences, restartFn, mode }) {
    const pct = total ? Math.round((score / total) * 100) : 0;

    const subRows = Object.entries(subPerf || {}).map(([sub, s]) => {
      const sp = Math.round((s.correct / s.total) * 100);
      const hist = this.history.filter(h => h.subPerf && h.subPerf[sub] && h.mode !== 'current');
      let delta = '';
      if (hist.length > 0) {
        const avgHist = hist.reduce((acc, h) => acc + (h.subPerf[sub].correct / h.subPerf[sub].total) * 100, 0) / hist.length;
        const diff = Math.round(sp - avgHist);
        delta = diff >= 0
          ? `<span style="color:#16a34a; font-size:0.8rem;">▲ +${diff}% vs avg</span>`
          : `<span style="color:#dc2626; font-size:0.8rem;">▼ ${diff}% vs avg</span>`;
      }
      return `<tr><td>${sub}</td><td>${s.correct}/${s.total}</td><td style="font-weight:700; color:${sp>=50?'#16a34a':'#dc2626'};">${sp}%</td><td>${delta}</td></tr>`;
    }).join('');

    const wrong = (results || []).filter(r => r.selected !== r.correct);
    const wrongHtml = wrong.map((r, i) => {
      const conf = confidences && confidences[results.indexOf(r)];
      const dangerTag = (conf === 'sure' && r.selected !== r.correct)
        ? `<span class="danger-tag">⚠️ Wrong + Very Confident — Priority Review</span>` : '';
      return `
        <div class="review-item">
          <p class="question-text" style="font-size:1.05rem; margin-top:0;"><strong>${i+1}.</strong> ${r.question}</p>
          <p style="color:#b91c1c; font-weight:500;">Your answer: ${r.selected || 'Omitted'}</p>
          <p style="color:#16a34a; font-weight:600;">Correct: ${r.correct}</p>
          ${dangerTag}
          <p class="mt-1" style="font-size:0.9rem;">${r.explanation}</p>
        </div>
      `;
    }).join('') || '<p style="color:#16a34a; font-weight:600;">🎉 No incorrect answers!</p>';

    const wrongQs = encodeURIComponent(JSON.stringify(wrong.map(r => r.question)));

    return `
      <div class="card text-center" style="border-top:4px solid ${pct>=50?'#16a34a':'#dc2626'};">
        <h2>${title}</h2>
        <div style="font-size:3.5rem; font-weight:800; color:${pct>=50?'#16a34a':'#dc2626'}; margin:1rem 0;">${pct}%</div>
        <p style="font-size:1.1rem;">${score} / ${total} correct &nbsp;·&nbsp; ⏱ ${this.formatTime(elapsed)}</p>
        <div class="flex" style="justify-content:center; margin-top:1rem;">
          <button class="btn btn-primary" onclick="${restartFn}">Try Again</button>
          ${wrong.length ? `<button class="btn btn-danger btn-redrill" data-questions="${wrongQs}">Re-drill ${wrong.length} Wrong</button>` : ''}
        </div>
      </div>

      ${Object.keys(subPerf || {}).length ? `
      <div class="card">
        <h3 class="card-title">Sub-Topic Breakdown</h3>
        <div class="stats-table-wrapper">
          <table class="stats-table">
            <thead><tr><th>Sub-Topic</th><th>Score</th><th>%</th><th>vs History</th></tr></thead>
            <tbody>${subRows}</tbody>
          </table>
        </div>
      </div>` : ''}

      <div class="card">
        <h3 class="card-title">Incorrect Answers (${wrong.length})</h3>
        ${wrongHtml}
      </div>
    `;
  },

  // ══════════════════════════════════════════════════════════════════════
  // RE-DRILL (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  startReDrill(questionTexts) {
    const pool = questions.filter(q => questionTexts.includes(q.question));
    if (!pool.length) return alert('Could not find questions.');
    this.practice = {
      questions: this.shuffleArray(pool), currentIndex: 0, score: 0,
      answered: false, total: pool.length, results: [], started: true,
      startTime: Date.now(), confidences: [],
    };
    this.currentView = 'practice';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === 'practice'));
    document.getElementById('view-container').innerHTML = `<div class="container"><div id="practice-area"></div></div>`;
    this.renderPracticeQuestion();
    document.getElementById('practice-area').addEventListener('click', (e) => {
      if (e.target.closest('.btn-answer'))  this.handlePracticeAnswer(e.target.closest('.btn-answer').dataset.value);
      if (e.target.matches('.btn-next'))    { this.practice.currentIndex++; this.practice.answered = false; this.renderPracticeQuestion(); }
      if (e.target.matches('.btn-finish'))  { this.practice.currentIndex = this.practice.total; this.showPracticeReview(); }
      if (e.target.matches('.btn-bookmark')) this.toggleBookmark(e.target.dataset.question);
    });
  },

  // ══════════════════════════════════════════════════════════════════════
  // CONCEPT DRILL (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  openConceptDrill(concept) {
    const pool = questions.filter(q => q.relatedConcepts && q.relatedConcepts.includes(concept));
    if (!pool.length) return alert(`No questions tagged with "${concept}" yet.`);
    const sample = this.shuffleArray(pool).slice(0, 5);

    const overlay = document.createElement('div');
    overlay.className = 'concept-modal-overlay';
    overlay.id        = 'concept-modal';
    overlay.innerHTML = `
      <div class="concept-modal-box">
        <div class="flex" style="justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h3 style="margin:0;">Concept Drill: <em>${concept}</em></h3>
          <button class="btn btn-secondary" onclick="document.getElementById('concept-modal').remove()">✕ Close</button>
        </div>
        <p class="text-muted" style="font-size:0.85rem; margin-bottom:1rem;">${sample.length} questions about this concept</p>
        <div id="concept-drill-area"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    let idx = 0, answered = false;
    const render = () => {
      if (idx >= sample.length) {
        document.getElementById('concept-drill-area').innerHTML = `
          <div class="text-center" style="padding:2rem;">
            <p style="font-size:1.2rem; font-weight:700; color:#16a34a;">Drill Complete!</p>
            <button class="btn btn-primary mt-1" onclick="document.getElementById('concept-modal').remove()">Close</button>
          </div>
        `;
        return;
      }
      const q       = sample[idx];
      const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
      document.getElementById('concept-drill-area').innerHTML = `
        <p style="font-weight:600; font-size:1rem; margin-bottom:1rem;">${idx+1}/${sample.length}: ${q.question}</p>
        ${options.map(o => `<button class="btn-option cd-ans" data-value="${o}">${o}</button>`).join('')}
        <div id="cd-feedback" style="display:none;"></div>
        <div class="flex mt-1" style="justify-content:flex-end; display:none;" id="cd-next-row">
          <button class="btn btn-primary" id="cd-next">Next</button>
        </div>
      `;
      answered = false;
      document.getElementById('concept-drill-area').querySelectorAll('.cd-ans').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          const correct = App.getCorrectVal(q);
          document.getElementById('concept-drill-area').querySelectorAll('.cd-ans').forEach(b => {
            b.disabled = true;
            if (b.dataset.value === correct) b.classList.add('correct');
            else if (b.dataset.value === btn.dataset.value) b.classList.add('incorrect');
          });
          document.getElementById('cd-feedback').style.display = 'block';
          document.getElementById('cd-feedback').innerHTML = `<div class="feedback ${btn.dataset.value===correct?'feedback-correct':'feedback-incorrect'} mt-1"><strong>${btn.dataset.value===correct?'✓ Correct!':'✗ Incorrect'}</strong><p class="mt-1">${q.explanation}</p></div>`;
          document.getElementById('cd-next-row').style.display = 'flex';
          document.getElementById('cd-next').onclick = () => { idx++; render(); };
        });
      });
    };
    render();
  },

  // ══════════════════════════════════════════════════════════════════════
  // EXAM MODE (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderExamSetup() {
    let qOptions = '';
    for (let i = 5; i <= 100; i += 5) qOptions += `<option value="${i}">${i}</option>`;
    return `
      <div class="container">
        <div class="card" id="exam-setup">
          <h2 class="card-title">Exam Simulator</h2>
          <p class="mb-1 text-muted">Timed test. No feedback until submission.</p>
          ${this.renderFilterUI('exam')}
          <div class="filter-section mt-1 flex">
            <div style="flex:1;"><label><strong>5. Questions:</strong></label><select id="exam-question-count" class="input-select mt-1">${qOptions}</select></div>
            <div style="flex:1;"><label><strong>6. Timer:</strong></label>
              <select id="exam-duration" class="input-select mt-1">
                <option value="5">5 min</option><option value="15">15 min</option>
                <option value="30" selected>30 min</option><option value="60">60 min</option>
              </select>
            </div>
          </div>
          <button class="btn btn-danger mt-1" id="start-exam" style="width:100%; font-size:1.1rem;">Begin Exam</button>
        </div>
        <div id="exam-area"></div>
      </div>
    `;
  },

  startExam() {
    const pool     = this.shuffleArray(this.getFullyFilteredPool('exam'));
    if (!pool.length) return alert('No questions available.');
    const count    = Math.min(parseInt(document.getElementById('exam-question-count').value), pool.length);
    const duration = parseInt(document.getElementById('exam-duration').value) * 60;
    this.exam = {
      questions: pool.slice(0, count), currentIndex: 0,
      answers: new Array(count).fill(null), total: count, score: 0,
      started: true, finished: false, timer: duration, results: [],
      startTime: Date.now(), duration, timerInterval: null,
    };
    document.getElementById('exam-setup').style.display = 'none';
    this.renderExamQuestion();
    this.exam.timerInterval = setInterval(() => {
      this.exam.timer--;
      const tDisp = document.getElementById('exam-timer-display');
      if (tDisp) {
        tDisp.textContent = this.formatTime(this.exam.timer);
        const pctLeft = this.exam.timer / this.exam.duration;
        tDisp.style.color = pctLeft < 0.2 ? '#b91c1c' : '#b91c1c';
        const timerEl = document.getElementById('exam-timer-wrapper');
        if (timerEl) timerEl.classList.toggle('timer-urgent-box', pctLeft < 0.2);
      }
      if (this.exam.timer <= 0) this.finishExam(true);
    }, 1000);
  },

  renderExamQuestion() {
    const e = this.exam;
    if (e.finished || e.currentIndex >= e.total) return this.showExamReview();
    const q        = e.questions[e.currentIndex];
    const selected = e.answers[e.currentIndex];
    const options  = q.type === 'truefalse' ? ['True', 'False'] : q.options;
    const progress = (e.answers.filter(a => a !== null).length / e.total) * 100;

    const buttonsHtml = options.map((opt, i) =>
      `<button class="btn-option btn-exam-answer ${selected === opt ? 'selected' : ''}" data-value="${opt}">${opt} <span class="hotkey-hint">[${i+1}]</span></button>`
    ).join('');

    document.getElementById('exam-area').innerHTML = `
      <div class="card" style="border-top:5px solid #b91c1c;">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge topic-badge">${q.course}</span>
          <div id="exam-timer-wrapper" style="font-size:1.4rem; font-weight:700; color:#b91c1c;">
            ⏱ <span id="exam-timer-display">${this.formatTime(e.timer)}</span>
          </div>
        </div>
        <div class="progress-bar-track mt-1">
          <div class="progress-bar-fill" style="width:${progress}%; background:#0b2b4a;"></div>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="flex flex-col" style="margin-top:1.5rem; gap:0.5rem;">${buttonsHtml}</div>
        <div class="mt-1 flex" style="justify-content:space-between; border-top:1px solid #e2e8f0; padding-top:1rem;">
          <span style="font-weight:600; color:#475569;">Q ${e.currentIndex + 1} / ${e.total}</span>
          <button class="btn btn-danger btn-exam-finish">Submit Exam</button>
        </div>
      </div>
    `;
  },

  handleExamAnswer(val) {
    if (this.exam.finished) return;
    this.exam.answers[this.exam.currentIndex] = val;
    this.renderExamQuestion();
    setTimeout(() => {
      if (!this.exam.finished && this.exam.currentIndex < this.exam.total - 1) {
        this.exam.currentIndex++;
        this.renderExamQuestion();
      } else if (this.exam.currentIndex === this.exam.total - 1) {
        this.finishExam();
      }
    }, 400);
  },

  finishExam(timeout = false) {
    if (this.exam.finished) return;
    clearInterval(this.exam.timerInterval);
    this.exam.finished = true;
    const elapsed  = Math.round((Date.now() - this.exam.startTime) / 1000);
    const subPerf  = {}, coursePerf = {};
    const results  = [];

    for (let i = 0; i < this.exam.total; i++) {
      const q   = this.exam.questions[i];
      const sel = this.exam.answers[i];
      const cor = this.getCorrectVal(q);
      const ok  = sel === cor;
      if (ok) this.exam.score++;
      else    this.addMistake(q, sel);

      if (!subPerf[q.subTopic]) subPerf[q.subTopic] = { correct: 0, total: 0, course: q.course };
      subPerf[q.subTopic].total++;
      if (ok) subPerf[q.subTopic].correct++;

      if (!coursePerf[q.course]) coursePerf[q.course] = { correct: 0, total: 0 };
      coursePerf[q.course].total++;
      if (ok) coursePerf[q.course].correct++;

      results.push({ question: q.question, selected: sel, correct: cor, explanation: q.explanation, subTopic: q.subTopic, course: q.course, topic: q.topic, isCorrect: ok });
    }
    this.exam.results = results;

    this.history.unshift({
      mode: 'Exam', score: this.exam.score, total: this.exam.total,
      percentage: Math.round((this.exam.score / this.exam.total) * 100),
      date: new Date().toISOString(), subPerf, coursePerf,
    });
    this.saveData();
    this.showExamReview();
  },

  showExamReview() {
    const e = this.exam;
    const elapsed = Math.round((Date.now() - e.startTime) / 1000);
    document.getElementById('exam-area').innerHTML = this.renderSessionReview({
      title:     'Exam Results',
      score:     e.score,
      total:     e.total,
      elapsed,
      results:   e.results,
      subPerf:   this.buildSubPerf(e.results),
      restartFn: `App.showView('exam')`,
      mode:      'exam',
    });
  },

  buildSubPerf(results) {
    const sp = {};
    (results || []).forEach(r => {
      if (!sp[r.subTopic]) sp[r.subTopic] = { correct: 0, total: 0, course: r.course };
      sp[r.subTopic].total++;
      if (r.isCorrect) sp[r.subTopic].correct++;
    });
    return sp;
  },

  // ══════════════════════════════════════════════════════════════════════
  // DAILY CHALLENGE (unchanged logic, only render async)
  // ══════════════════════════════════════════════════════════════════════

  async renderDailySetup() {
    const already = await dbCheckDailySubmitted(this.currentUser?.id || null);
    const leaderboard = await dbGetDailyLeaderboard();
    const lbHtml = leaderboard.length
      ? leaderboard.map((e, i) => `
          <tr>
            <td>${i+1}</td>
            <td>${e.display_name}</td>
            <td style="font-weight:700;">${e.score}/20</td>
            <td>${e.accuracy}%</td>
            <td>${this.formatTime(e.time_taken)}</td>
          </tr>`).join('')
      : `<tr><td colspan="5" style="text-align:center; color:#94a3b8;">No submissions yet today. Be the first!</td></tr>`;

    return `
      <div class="container">
        <div class="card" style="border-top:4px solid #fbbf24;">
          <h2 class="card-title">⚡ Daily Challenge</h2>
          <p class="text-muted mb-1">20 questions · Same for everyone today · 10-minute timer · One attempt per day</p>
          ${already
            ? `<div class="feedback feedback-correct"><strong>✓ You've already completed today's challenge!</strong><p class="mt-1">Come back tomorrow for a new set.</p></div>`
            : `<button class="btn btn-primary mt-1" id="start-daily" style="width:100%; font-size:1.1rem; background:#d97706;">Start Today's Challenge</button>`
          }
        </div>
        <div id="daily-area"></div>
        <div class="card">
          <h3 class="card-title">🏆 Today's Leaderboard</h3>
          <div class="stats-table-wrapper">
            <table class="stats-table">
              <thead><tr><th>#</th><th>Name</th><th>Score</th><th>Accuracy</th><th>Time</th></tr></thead>
              <tbody>${lbHtml}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  startDailyChallenge() {
    const pool = this.getDailyQuestions();
    this.daily = {
      questions: pool, currentIndex: 0,
      answers: new Array(pool.length).fill(null),
      total: pool.length, score: 0, started: true, finished: false,
      timer: 600, timerInterval: null, results: [], startTime: Date.now(), submitted: false,
    };
    document.getElementById('daily-area').innerHTML = '';
    const startBtn = document.getElementById('start-daily');
    if (startBtn) startBtn.style.display = 'none';
    this.renderDailyQuestion();
    this.daily.timerInterval = setInterval(() => {
      this.daily.timer--;
      const el = document.getElementById('daily-timer-display');
      if (el) {
        el.textContent = this.formatTime(this.daily.timer);
        el.style.color = this.daily.timer < 60 ? '#b91c1c' : '';
      }
      if (this.daily.timer <= 0) this.finishDailyChallenge();
    }, 1000);
  },

  renderDailyQuestion() {
    const d   = this.daily;
    if (d.currentIndex >= d.total) return this.finishDailyChallenge();
    const q       = d.questions[d.currentIndex];
    const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
    const pct     = (d.answers.filter(a => a !== null).length / d.total) * 100;

    document.getElementById('daily-area').innerHTML = `
      <div class="card" style="border-top:5px solid #d97706;">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge" style="background:#fef3c7; color:#92400e;">⚡ Daily Challenge</span>
          <div style="font-size:1.4rem; font-weight:700; color:#d97706;">⏱ <span id="daily-timer-display">${this.formatTime(d.timer)}</span></div>
        </div>
        <div class="progress-bar-track mt-1"><div class="progress-bar-fill" style="width:${pct}%; background:#d97706;"></div></div>
        <p class="question-text">${q.question}</p>
        <div class="flex flex-col" style="gap:0.5rem;">
          ${options.map((o,i) => `<button class="btn-option btn-daily-answer" data-value="${o}">${o} <span class="hotkey-hint">[${i+1}]</span></button>`).join('')}
        </div>
        <p style="text-align:center; margin-top:1rem; font-size:0.85rem; color:#94a3b8;">Q ${d.currentIndex+1} / ${d.total}</p>
      </div>
    `;
  },

  handleDailyAnswer(val) {
    if (this.daily.finished) return;
    this.daily.answers[this.daily.currentIndex] = val;
    if (this.daily.currentIndex < this.daily.total - 1) {
      this.daily.currentIndex++;
      this.renderDailyQuestion();
    } else {
      this.finishDailyChallenge();
    }
  },

  async finishDailyChallenge() {
    if (this.daily.finished) return;
    clearInterval(this.daily.timerInterval);
    this.daily.finished = true;
    const elapsed   = Math.round((Date.now() - this.daily.startTime) / 1000);
    const results   = [];
    const subPerf   = {};

    for (let i = 0; i < this.daily.total; i++) {
      const q   = this.daily.questions[i];
      const sel = this.daily.answers[i];
      const cor = this.getCorrectVal(q);
      const ok  = sel === cor;
      if (ok) this.daily.score++;
      else    this.addMistake(q, sel);
      if (!subPerf[q.subTopic]) subPerf[q.subTopic] = { correct: 0, total: 0 };
      subPerf[q.subTopic].total++;
      if (ok) subPerf[q.subTopic].correct++;
      results.push({ question: q.question, selected: sel, correct: cor, explanation: q.explanation, subTopic: q.subTopic, course: q.course, isCorrect: ok });
    }
    this.daily.results = results;

    const accuracy = Math.round((this.daily.score / this.daily.total) * 100);
    const displayName = this.currentUser?.user_metadata?.display_name || this.currentUser?.email || 'Guest';

    const submitted = await dbSubmitDailyResult({
      userId:      this.currentUser?.id || null,
      displayName,
      score:       this.daily.score,
      accuracy,
      timeTaken:   elapsed,
    });

    if (!this.currentUser) localStorage.setItem('mm_daily_submitted', new Date().toISOString().slice(0,10));

    this.history.unshift({
      mode: 'Daily Challenge', score: this.daily.score, total: this.daily.total,
      percentage: accuracy, date: new Date().toISOString(), subPerf,
    });
    this.saveData();

    document.getElementById('daily-area').innerHTML = this.renderSessionReview({
      title:     '⚡ Daily Challenge Complete',
      score:     this.daily.score,
      total:     this.daily.total,
      elapsed,
      results,
      subPerf,
      restartFn: `App.showView('daily')`,
      mode:      'daily',
    });
  },

  // ══════════════════════════════════════════════════════════════════════
  // SLIDE REVIEW (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderSlideSetup() {
    return `
      <div class="container">
        <div class="card" id="slide-setup">
          <h2 class="card-title">📖 Slide-Through Review</h2>
          <p class="text-muted mb-1">Questions and answers auto-advance. Purely passive — no grading, just exposure.</p>
          ${this.renderFilterUI('slide')}
          <div class="filter-section mt-1">
            <label><strong>5. Speed (seconds per question):</strong></label>
            <div class="pill-group mt-1">
              <button class="filter-pill" data-speed="5"  onclick="App.slide.speed=5;  document.querySelectorAll('[data-speed]').forEach(b=>b.classList.toggle('active',b.dataset.speed=='5'))">Fast (5s)</button>
              <button class="filter-pill active" data-speed="8" onclick="App.slide.speed=8;  document.querySelectorAll('[data-speed]').forEach(b=>b.classList.toggle('active',b.dataset.speed=='8'))">Normal (8s)</button>
              <button class="filter-pill" data-speed="12" onclick="App.slide.speed=12; document.querySelectorAll('[data-speed]').forEach(b=>b.classList.toggle('active',b.dataset.speed=='12'))">Slow (12s)</button>
            </div>
          </div>
          <button class="btn btn-primary mt-1" id="start-slide" style="width:100%;">Begin Slide Review</button>
        </div>
        <div id="slide-area"></div>
      </div>
    `;
  },

  startSlide() {
    const pool = this.shuffleArray(this.getFullyFilteredPool('slide'));
    if (!pool.length) return alert('No questions match these filters.');
    this.slide = {
      questions: pool, currentIndex: 0, total: pool.length,
      speed: this.slide.speed || 8, phase: 'question',
      intervalId: null, phaseTimer: 0, phaseIntervalId: null,
      started: true, startTime: Date.now(), topicsCovered: new Set(), paused: false,
    };
    document.getElementById('slide-setup').style.display = 'none';
    this.renderSlideQuestion();
    this.startSlideTimer();
  },

  startSlideTimer() {
    clearInterval(this.slide.phaseIntervalId);
    const halfTime = Math.floor(this.slide.speed / 2);
    this.slide.phaseTimer = this.slide.phase === 'question' ? halfTime : halfTime;

    this.slide.phaseIntervalId = setInterval(() => {
      if (this.slide.paused) return;
      this.slide.phaseTimer--;
      this.updateSlideTimerBar();

      if (this.slide.phaseTimer <= 0) {
        if (this.slide.phase === 'question') {
          this.slide.phase = 'answer';
          this.slide.phaseTimer = this.slide.speed - Math.floor(this.slide.speed / 2);
          this.renderSlideQuestion();
        } else {
          this.slide.currentIndex++;
          if (this.slide.currentIndex >= this.slide.total) {
            clearInterval(this.slide.phaseIntervalId);
            this.showSlideReview();
          } else {
            this.slide.phase = 'question';
            this.slide.phaseTimer = Math.floor(this.slide.speed / 2);
            this.renderSlideQuestion();
          }
        }
      }
    }, 1000);
  },

  updateSlideTimerBar() {
    const bar = document.getElementById('slide-phase-bar');
    if (!bar) return;
    const half = Math.floor(this.slide.speed / 2);
    const total = this.slide.phase === 'question' ? half : (this.slide.speed - half);
    const pct   = (this.slide.phaseTimer / total) * 100;
    bar.style.width = `${pct}%`;
    bar.style.background = this.slide.phase === 'question' ? '#0b2b4a' : '#16a34a';
  },

  renderSlideQuestion() {
    const s   = this.slide;
    const q   = s.questions[s.currentIndex];
    const ans = this.getCorrectVal(q);
    s.topicsCovered.add(q.subTopic);
    const pct = Math.round((s.currentIndex / s.total) * 100);

    document.getElementById('slide-area').innerHTML = `
      <div class="card" style="border-top:4px solid #0b2b4a; min-height:320px;">
        <div class="flex" style="justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span class="badge topic-badge">${q.course}</span>
          <span class="progress-text">${s.currentIndex+1} / ${s.total}</span>
        </div>
        <div class="progress-bar-track mb-1"><div class="progress-bar-fill" style="width:${pct}%;"></div></div>

        <div style="height:4px; background:#e2e8f0; border-radius:4px; overflow:hidden; margin-bottom:1rem;">
          <div id="slide-phase-bar" style="height:100%; border-radius:4px; transition:width 0.9s linear;"></div>
        </div>

        <p class="question-text">${q.question}</p>

        ${s.phase === 'answer' ? `
          <div class="feedback feedback-correct mt-1">
            <strong>Answer: ${ans}</strong>
            <p class="mt-1" style="font-size:0.95rem;">${q.explanation}</p>
          </div>
        ` : `
          <div style="text-align:center; padding:1.5rem; color:#94a3b8; font-style:italic;">
            Answer revealing soon…
          </div>
        `}

        <div class="flex mt-1" style="justify-content:space-between; border-top:1px solid #e2e8f0; padding-top:1rem;">
          <button class="btn btn-secondary btn-slide-prev" ${s.currentIndex===0?'disabled':''}>← Prev</button>
          <button class="btn ${s.paused?'btn-success':'btn-outline'} btn-slide-pause">${s.paused?'▶ Resume':'⏸ Pause [Space]'}</button>
          <button class="btn btn-secondary btn-slide-next" ${s.currentIndex>=s.total-1?'disabled':''}>Next →</button>
        </div>
        <span class="badge" style="background:#f1f5f9; margin-top:0.75rem; display:inline-block;">${q.topic} › ${q.subTopic}</span>
      </div>
    `;
    this.updateSlideTimerBar();
  },

  toggleSlidePause() {
    this.slide.paused = !this.slide.paused;
    const btn = document.querySelector('.btn-slide-pause');
    if (btn) { btn.textContent = this.slide.paused ? '▶ Resume' : '⏸ Pause [Space]'; btn.className = `btn ${this.slide.paused?'btn-success':'btn-outline'} btn-slide-pause`; }
  },

  slideManualStep(dir) {
    clearInterval(this.slide.phaseIntervalId);
    this.slide.currentIndex += dir;
    this.slide.currentIndex  = Math.max(0, Math.min(this.slide.total - 1, this.slide.currentIndex));
    this.slide.phase         = 'question';
    this.slide.phaseTimer    = Math.floor(this.slide.speed / 2);
    this.renderSlideQuestion();
    if (!this.slide.paused) this.startSlideTimer();
  },

  changeSlideSpeed(s) {
    this.slide.speed = s;
    if (!this.slide.paused) this.startSlideTimer();
  },

  showSlideReview() {
    const elapsed = Math.round((Date.now() - this.slide.startTime) / 1000);
    const covered = [...this.slide.topicsCovered];
    this.history.unshift({
      mode: 'Slide Review', score: 0, total: this.slide.total,
      percentage: 0, date: new Date().toISOString(),
    });
    this.saveData();
    document.getElementById('slide-area').innerHTML = `
      <div class="card text-center" style="border-top:4px solid #0b2b4a;">
        <h2>📖 Slide Review Complete</h2>
        <p style="font-size:1.2rem; margin:1rem 0;">${this.slide.total} questions reviewed &nbsp;·&nbsp; ⏱ ${this.formatTime(elapsed)}</p>
        <div class="card" style="text-align:left; margin-top:1rem;">
          <strong>Sub-topics covered (${covered.length}):</strong>
          <div class="pill-group mt-1">${covered.map(t=>`<span class="filter-pill active" style="cursor:default;">${t}</span>`).join('')}</div>
        </div>
        <button class="btn btn-primary mt-1" onclick="App.showView('slide')">Start Another Session</button>
      </div>
    `;
  },

  // ══════════════════════════════════════════════════════════════════════
  // HISTORY & MISTAKE NOTEBOOK (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderHistory() {
    const activeTab = this._historyTab || 'sessions';
    const sessionHtml = this.history.length
      ? this.history.map(h => `
          <div class="card history-item" style="background:#f8fafc; margin-bottom:0.75rem; padding:1rem; box-shadow:none; border:1px solid #e2e8f0;">
            <div class="flex" style="justify-content:space-between;">
              <strong>${h.mode}</strong>
              <span class="text-muted" style="font-size:0.85rem;">${new Date(h.date).toLocaleString()}</span>
            </div>
            <div style="font-size:1.2rem; font-weight:700; color:#0b2b4a; margin:0.5rem 0;">${h.score} / ${h.total} (${h.percentage}%)</div>
          </div>`).join('')
      : '<p class="text-muted">No sessions recorded yet.</p>';

    const unmastered = this.mistakes.filter(m => !m.mastered);
    const mistakeHtml = unmastered.length
      ? unmastered.map((m, i) => `
          <div class="review-item">
            <div class="flex" style="justify-content:space-between; align-items:flex-start;">
              <div>
                <span class="badge topic-badge">${m.course}</span>
                <span class="badge" style="background:#f1f5f9; margin-left:0.3rem;">${m.subTopic}</span>
              </div>
              <span class="text-muted" style="font-size:0.8rem;">${new Date(m.date).toLocaleDateString()}</span>
            </div>
            <p class="question-text" style="font-size:1rem; margin:0.75rem 0;">${m.question}</p>
            <p style="color:#16a34a; font-weight:600; font-size:0.9rem;">✓ Correct: ${m.correct}</p>
            <p style="font-size:0.88rem; color:#475569; margin-top:0.5rem;">${m.explanation}</p>
            <button class="btn btn-success btn-master-mistake mt-1" data-idx="${i}" style="font-size:0.85rem; padding:0.4rem 0.9rem;">✓ Mark as Mastered</button>
          </div>`).join('')
      : '<p class="text-muted">No active mistakes. Keep it up!</p>';

    return `
      <div class="container" id="history-area">
        <div class="card">
          <div class="flex" style="justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h2 class="card-title" style="border:none; margin:0;">My Progress</h2>
            <div class="flex">
              ${this.history.length  ? `<button class="btn btn-danger" id="clear-history-btn"   style="padding:0.4rem 0.8rem; font-size:0.85rem;">Clear History</button>` : ''}
              ${unmastered.length    ? `<button class="btn btn-outline" id="clear-mistakes-btn" style="padding:0.4rem 0.8rem; font-size:0.85rem;">Clear Mistakes</button>` : ''}
            </div>
          </div>
          <div class="auth-tabs" style="margin-bottom:1.5rem;">
            <button class="auth-tab ${activeTab==='sessions'?'active':''}" onclick="App._historyTab='sessions'; App.showView('history')">Session History</button>
            <button class="auth-tab ${activeTab==='mistakes'?'active':''}" onclick="App._historyTab='mistakes'; App.showView('history')">📕 Mistake Notebook (${unmastered.length})</button>
          </div>
          <div>${activeTab === 'sessions' ? sessionHtml : mistakeHtml}</div>
        </div>
      </div>
    `;
  },

  // ══════════════════════════════════════════════════════════════════════
  // BOOKMARKS (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderBookmarks() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));

    const byCourse = {};
    bQs.forEach(q => {
      if (!byCourse[q.course]) byCourse[q.course] = [];
      byCourse[q.course].push(q);
    });

    const courseGroupsHtml = Object.keys(byCourse).sort().map(course => {
      const qs = byCourse[course];
      const questionsHtml = qs.map(q => `
        <div style="background:#fff; padding:1rem; border-radius:8px; border-left:4px solid #fbbf24; margin-bottom:0.75rem; border:1px solid #e2e8f0; border-left-width:4px;">
          <span class="badge" style="background:#f1f5f9; font-size:0.75rem; margin-bottom:0.5rem; display:inline-block;">${q.topic} › ${q.subTopic}</span>
          <p style="font-weight:600; margin-bottom:0.5rem;">${q.question}</p>
          <div class="flex" style="justify-content:space-between;">
            <span style="color:#16a34a; font-size:0.9rem; font-weight:700;">${q.type==='truefalse'?(q.answer?'True':'False'):q.correctAnswer}</span>
            <button class="btn btn-danger btn-remove-bookmark" data-question="${q.question}" style="padding:0.2rem 0.6rem; font-size:0.8rem;">Remove</button>
          </div>
        </div>
      `).join('');

      return `
        <div class="bookmark-course-group">
          <div class="bookmark-course-header accordion-header">
            <span>📚 ${course} <span class="group-accuracy-badge">${qs.length} saved</span></span>
            <span class="accordion-arrow">▼</span>
          </div>
          <div class="bookmark-course-content accordion-content">
            ${questionsHtml}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title flex" style="justify-content:space-between;">
            Saved Questions (${bQs.length})
            <button class="btn btn-success" id="export-anki" style="font-size:0.85rem; padding:0.4rem 0.8rem;" ${!bQs.length?'disabled':''}>Export to Anki CSV</button>
          </h2>
          <button class="btn btn-primary mb-1" id="start-flashcards" ${!bQs.length?'disabled':''}>Study as Flashcards</button>
          <div id="flashcard-area" class="mt-1"></div>
          <div id="bookmark-list" class="mt-1" style="border-top:1px solid #e2e8f0; padding-top:1rem;">
            ${bQs.length
              ? `<div class="accordion-wrapper">${courseGroupsHtml}</div>`
              : '<p class="text-muted">No bookmarks yet. Star questions during Practice or Multiplayer.</p>'
            }
          </div>
        </div>
      </div>
    `;
  },

  startFlashcards() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));
    if (!bQs.length) return;
    this.flashcard = { questions: this.shuffleArray([...bQs]), currentIndex: 0, revealed: false, total: bQs.length };
    this.renderFlashcard();
  },

  renderFlashcard() {
    const f    = this.flashcard;
    const area = document.getElementById('flashcard-area');
    if (!area) return;
    if (!f.questions.length) { area.innerHTML = ''; return; }
    const q   = f.questions[f.currentIndex];
    const ans = this.getCorrectVal(q);
    area.innerHTML = `
      <div class="card" style="text-align:center; min-height:220px; display:flex; flex-direction:column; justify-content:center;">
        <span class="progress-text" style="align-self:center; margin-bottom:1rem;">Card ${f.currentIndex+1} / ${f.total}</span>
        <span class="badge topic-badge" style="align-self:center; margin-bottom:0.75rem;">${q.course} › ${q.subTopic}</span>
        <p class="question-text">${q.question}</p>
        ${f.revealed
          ? `<div class="feedback feedback-correct mt-1" style="text-align:left;"><strong>Answer: ${ans}</strong><p class="mt-1">${q.explanation}</p></div>`
          : `<button class="btn btn-outline btn-flip" style="align-self:center;">Tap or [Space] to Reveal</button>`
        }
      </div>
      <div class="flex mt-1" style="justify-content:space-between;">
        <button class="btn btn-secondary btn-flash-prev" ${f.currentIndex===0?'disabled':''}>← Prev</button>
        <button class="btn btn-secondary btn-flash-next" ${f.currentIndex>=f.total-1?'disabled':''}>Next →</button>
      </div>
    `;
  },

  exportAnkiCSV() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));
    if (!bQs.length) return;
    let csv = 'Question,Answer,Explanation,Course,Topic,SubTopic\n';
    bQs.forEach(q => {
      const ans = this.getCorrectVal(q);
      csv += `"${q.question.replace(/"/g,'""')}","${String(ans).replace(/"/g,'""')}","${q.explanation.replace(/"/g,'""')}","${q.course}","${q.topic}","${q.subTopic}"\r\n`;
    });
    const link = document.createElement('a');
    link.href     = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
    link.download = 'MedMaster_Anki_Deck.csv';
    link.click();
  },

  // ══════════════════════════════════════════════════════════════════════
  // MULTIPLAYER UI (unchanged)
  // ══════════════════════════════════════════════════════════════════════

  renderMultiplayerSetup() {
    let qCountOptions = '';
    for (let i = 5; i <= 100; i += 5) qCountOptions += `<option value="${i}">${i}</option>`;
    const savedName = localStorage.getItem('mm_player_name') || '';
    return `
      <div class="container">
        <div class="card" id="mp-lobby-ui">
          <h2 class="card-title">Online Multiplayer</h2>
          <div class="flex" style="gap:2rem;">
            <div style="flex:1; background:#f8fafc; padding:1.5rem; border-radius:12px; border:1px solid #e2e8f0; min-width:260px;">
              <h3>Join a Room</h3>
              <input type="text" id="mp-join-name" class="input-text mt-1" placeholder="Your Display Name" value="${savedName}">
              <input type="text" id="mp-join-code" class="input-text mt-1" placeholder="4-Letter Code" style="text-transform:uppercase;">
              <button class="btn btn-success mt-1" id="mp-join-btn" style="width:100%;">Join Game</button>
            </div>
            <div style="flex:1; background:#f8fafc; padding:1.5rem; border-radius:12px; border:1px solid #e2e8f0; min-width:260px;">
              <h3>Host a Room</h3>
              <input type="text" id="mp-host-name" class="input-text mt-1" placeholder="Your Display Name" value="${savedName}">
              ${this.renderFilterUI('mp')}
              <div class="flex mt-1">
                <div style="flex:1;"><label><strong>5. Questions:</strong></label><select id="mp-q-count" class="input-select mt-1">${qCountOptions}</select></div>
                <div style="flex:1;"><label><strong>6. Secs/Q:</strong></label>
                  <select id="mp-q-time" class="input-select mt-1">
                    <option value="10">10s</option><option value="15">15s</option>
                    <option value="20" selected>20s</option><option value="25">25s</option><option value="30">30s</option>
                  </select>
                </div>
              </div>
              <button class="btn btn-primary mt-1" id="mp-create-btn" style="width:100%;">Create Room</button>
            </div>
          </div>
        </div>
        <div id="mp-area"></div>
      </div>
    `;
  },

  async handleCreateRoom() {
    const name = document.getElementById('mp-host-name').value.trim();
    if (!name) return alert('Please enter a display name.');
    localStorage.setItem('mm_player_name', name);
    const pool = this.shuffleArray(this.getFullyFilteredPool('mp'));
    if (pool.length < 5) return alert('Not enough questions match the filters!');
    const qCount  = parseInt(document.getElementById('mp-q-count').value);
    const qTime   = parseInt(document.getElementById('mp-q-time').value);
    const final   = pool.slice(0, Math.min(qCount, pool.length));
    document.getElementById('mp-lobby-ui').style.display = 'none';
    document.getElementById('mp-area').innerHTML = this._mpConnectingHtml();
    try { await mp_createRoom(name, final, qTime); this.renderMpState(); }
    catch (err) { this.showMpFatalError('Could not create room', err.message); }
  },

  async handleJoinRoom() {
    const name = document.getElementById('mp-join-name').value.trim();
    const code = document.getElementById('mp-join-code').value.trim().toUpperCase();
    if (!name || !code) return alert('Please enter your name and a room code.');
    localStorage.setItem('mm_player_name', name);
    document.getElementById('mp-lobby-ui').style.display = 'none';
    document.getElementById('mp-area').innerHTML = this._mpConnectingHtml();
    try { await mp_joinRoom(name, code); this.renderMpState(); }
    catch (err) { this.showMpFatalError('Could not join room', err.message); }
  },

  async handleHostStartGame() { if (this.mp.isHost) await mp_hostStartGame(); },
  async handleMpAnswer(answer) { await mp_submitAnswer(answer); },

  _mpConnectingHtml() {
    return `<div class="card text-center" style="padding:4rem 1rem;"><h2 style="color:#0b2b4a;">Connecting…</h2><p class="text-muted mt-1">Reaching the server.</p></div>`;
  },

  showMpFatalError(title, message) {
    clearInterval(this.mp.timerInterval);
    const area = document.getElementById('mp-area');
    if (document.getElementById('mp-lobby-ui')) document.getElementById('mp-lobby-ui').style.display = 'none';
    if (area) area.innerHTML = `<div class="card text-center" style="border-top:4px solid #dc2626;"><h2 style="color:#dc2626;">${title}</h2><p class="text-muted mt-1">${message}</p><button class="btn btn-primary mt-1" onclick="App.showView('multiplayer')">Back to Lobby</button></div>`;
  },

  renderMpState() {
    const area = document.getElementById('mp-area');
    if (!area) return;
    const m = this.mp;

    const leaderboardHtml = `<ul class="mp-leaderboard">${m.players.map((p,i) => `<li class="${p.id===m.myId?'is-me':''} rank-${i+1}"><span>${i+1}. ${p.name}${p.id===m.myId?' (You)':''}</span><span class="score-badge">${p.score||0}</span></li>`).join('')}</ul>`;

    switch (m.state) {
      case 'CONNECTING': area.innerHTML = this._mpConnectingHtml(); break;

      case 'LOBBY':
        area.innerHTML = `
          <div class="card text-center">
            <h2>Waiting in Lobby</h2>
            ${m.isHost ? `<div class="room-code-display">${m.roomCode}</div><p>Tell friends to join with this code!</p>` : `<p>Connected! Waiting for host to start…</p>`}
            <ul class="player-list">${m.players.map(p => `<li class="player-tag ${p.id===m.myId?'is-me':''}">${p.name}</li>`).join('')}</ul>
            ${m.isHost ? `<button class="btn btn-success mt-1 btn-mp-start-game" ${m.players.length<1?'disabled':''}>Start Game</button>` : ''}
          </div>`;
        break;

      case 'QUESTION': {
        const q = m.questions[m.currentIndex];
        const me = m.players.find(p => p.id === m.myId);
        if (!q) break;
        const correctVal = this.getCorrectVal(q);
        const options    = q.type === 'truefalse' ? ['True','False'] : q.options;

        let buttonsHtml = '';
        options.forEach((opt, idx) => {
          let sc = '', icon = '';
          if (me?.currentAnswer) {
            if (opt === correctVal)                             { sc = 'correct';   icon = ' ✓'; }
            else if (opt === me.currentAnswer)                 { sc = 'incorrect'; icon = ' ✗'; }
          } else if (m.isWaitingForDatabase && opt === m.myLastAnswer) { sc = 'selected waiting'; }
          buttonsHtml += `<button class="btn-option btn-mp-answer ${sc}" data-value="${opt}" ${(me?.currentAnswer||m.isWaitingForDatabase)?'disabled':''}>${opt}${icon} <span class="hotkey-hint">[${idx+1}]</span></button>`;
        });

        let explHtml = '';
        if (me?.currentAnswer) {
          const ok = me.currentAnswer === correctVal;
          explHtml = `
            <div class="feedback ${ok?'feedback-correct':'feedback-incorrect'} mt-1 text-center"><h3 style="margin:0;">${ok?'✓ Correct! (+1)':'✗ Incorrect'}</h3></div>
            <div style="background:#f1f5f9; padding:1.5rem; border-radius:12px; margin-top:1rem; border-left:4px solid #0b2b4a;"><strong>Explanation:</strong><p>${q.explanation}</p></div>`;
        }

        let statusText = `Answered: ${m.players.filter(p=>p.currentAnswer).length}/${m.players.length}`;
        if (m.questionDuration <= 3) statusText = `<span style="color:#16a34a; font-weight:700;">Everyone answered! Next in ${m.timer}…</span>`;
        else if (m.isWaitingForDatabase) statusText = `<span style="color:#fbbf24; font-weight:700;">Processing…</span>`;

        area.innerHTML = `
          <div class="mp-layout">
            <div class="card mp-main">
              ${this.renderCircularTimer()}
              <div class="flex" style="justify-content:space-between;"><span class="badge topic-badge">${q.course}</span><span class="progress-text">Q ${m.currentIndex+1} / ${m.questions.length}</span></div>
              <p class="question-text">${q.question}</p>
              <div class="mt-1">${buttonsHtml}</div>
              ${explHtml}
              <p class="answer-progress-text mt-1" id="mp-answer-count">${statusText}</p>
            </div>
            <div class="card mp-sidebar"><h3 class="card-title text-center">Live Standings</h3>${leaderboardHtml}</div>
          </div>`;
        this.updateMpTimerDisplay();
        break;
      }

      case 'REVIEW':
        area.innerHTML = this.renderTournamentSummary();
        break;
    }
  },

  updateMpTimerDisplay() {
    const wrapper = document.getElementById('mp-timer-wrapper');
    const path    = document.getElementById('mp-timer-path');
    const text    = document.getElementById('mp-timer-text');
    if (!wrapper || !path || !text) return;
    const circumference = 2 * Math.PI * 38;
    const remaining     = Math.max(0, this.mp.timer);
    const pct           = remaining / this.mp.questionDuration;
    path.style.strokeDashoffset = `${circumference * (1 - pct)}`;
    text.textContent = remaining;
    wrapper.classList.toggle('timer-urgent', remaining <= 5);
  },

  renderCircularTimer() {
    const c = 2 * Math.PI * 38;
    return `<div class="circular-timer-wrapper" id="mp-timer-wrapper"><svg class="timer-svg" viewBox="0 0 88 88"><circle class="timer-bg" cx="44" cy="44" r="38"></circle><circle class="timer-path" id="mp-timer-path" cx="44" cy="44" r="38" stroke-dasharray="${c}" stroke-dashoffset="0"></circle></svg><span class="timer-text" id="mp-timer-text">${this.mp.timer}</span></div>`;
  },

  renderTournamentSummary() {
    const m       = this.mp;
    const ranked  = [...m.players].sort((a,b) => b.score - a.score);
    const podium  = ranked.slice(0,3);
    const rest    = ranked.slice(3);

    const podiumHtml = podium.map((p,i) => {
      const cls   = i===0?'gold':i===1?'silver':'bronze';
      const medal = i===0?'🥇':i===1?'🥈':'🥉';
      return `<div class="podium-place ${cls}"><div class="podium-rank">${medal}</div><div class="podium-name">${p.name}${p.id===m.myId?' (You)':''}</div><div class="podium-score">${p.score} pts</div></div>`;
    }).join('');

    const restHtml  = rest.length ? `<ul class="mp-leaderboard" style="max-width:500px; margin:1rem auto 0;">${rest.map((p,i) => `<li class="${p.id===m.myId?'is-me':''}"><span>${i+4}. ${p.name}${p.id===m.myId?' (You)':''}</span><span class="score-badge">${p.score}</span></li>`).join('')}</ul>` : '';
    const statsRows = ranked.map(p => `<tr class="${p.id===m.myId?'is-me':''}"><td>${p.name}${p.id===m.myId?' (You)':''}</td><td class="score-cell">${p.score}</td><td>${p.accuracy??0}%</td><td>${p.correctCount??0}</td><td>${p.wrongCount??0}</td><td>${p.skippedCount??0}</td></tr>`).join('');

    const reviewHtml = m.answerLog.map((entry, i) => {
      const passed = entry.myAnswer === entry.correctAnswer;
      const tag    = entry.myAnswer
        ? (passed ? `<span class="personal-feedback-tag passed">✓ Correct</span>` : `<span class="personal-feedback-tag failed">✗ Your Answer: ${entry.myAnswer}</span>`)
        : `<span class="personal-feedback-tag failed">No Answer</span>`;
      return `
        <div class="review-item">
          <p class="question-text" style="margin:0; font-size:1.05rem;"><strong>${i+1}.</strong> ${entry.question}</p>
          <p class="review-correct-answer">Correct: ${entry.correctAnswer}</p>
          ${tag}
          <p class="mt-1" style="font-size:0.9rem;">${entry.explanation}</p>
          <button class="btn btn-outline btn-mp-bookmark mt-1" data-question="${entry.question}" style="padding:0.4rem 0.9rem; font-size:0.85rem;">${this.bookmarks.has(entry.question)?'★ Bookmarked':'☆ Bookmark'}</button>
        </div>`;
    }).join('');

    const myResults = m.answerLog.map(e => ({
      question: e.question, selected: e.myAnswer, correct: e.correctAnswer,
      explanation: e.explanation, subTopic: '', course: '', isCorrect: e.myAnswer === e.correctAnswer,
    }));
    const personalReview = this.renderSessionReview({
      title:     'Your Personal Session Review',
      score:     myResults.filter(r=>r.isCorrect).length,
      total:     myResults.length,
      elapsed:   0,
      results:   myResults,
      subPerf:   {},
      restartFn: `App.showView('multiplayer')`,
      mode:      'multiplayer',
    });

    return `
      <div class="card text-center" style="border-top:4px solid #fbbf24;">
        <h2 style="font-size:2.2rem; color:#0b2b4a;">🏆 Tournament Over!</h2>
        <div class="podium-wrapper">${podiumHtml}</div>
        ${restHtml}
      </div>
      <div class="card">
        <h3 class="card-title">Player Statistics</h3>
        <div class="stats-table-wrapper"><table class="stats-table"><thead><tr><th>Name</th><th>Score</th><th>Accuracy</th><th>Correct</th><th>Wrong</th><th>Skipped</th></tr></thead><tbody>${statsRows}</tbody></table></div>
      </div>
      <div class="card"><h3 class="card-title">Personal Question Review</h3>${reviewHtml}</div>
      ${personalReview}
      <div class="card text-center"><button class="btn btn-primary" onclick="App.showView('multiplayer')">Exit Lobby</button></div>
    `;
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());