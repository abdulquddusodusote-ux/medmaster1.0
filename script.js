/**
 * MedMaster - Main Application Engine
 * Features: Cascading Filters, Keyboard Shortcuts, Anki CSV Export,
 * Exam & History Engines, and Professional Online Room-Code Multiplayer via PeerJS.
 */

// Explicit STUN servers to bypass strict WiFi/Mobile network firewalls
const peerConfig = {
  config: {
    'iceServers': [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  }
};

const App = {
  currentView: 'dashboard',
  viewContainer: null,

  practice: { questions: [], currentIndex: 0, score: 0, answered: false, total: 0, results: [], started: false },
  exam: { questions: [], currentIndex: 0, answers: [], total: 0, score: 0, started: false, finished: false, timer: 0, timerInterval: null, results: [] },

  // PeerJS Multiplayer State
  mp: {
    peer: null, conn: null, connections: {}, isHost: false, inRoom: false, roomCode: '', playerName: '', myId: '',
    players: [], // {id, name, score, currentAnswer, answerTimeScore}
    questions: [], currentIndex: 0, timer: 0, timerInterval: null, state: 'SETUP',
    questionDuration: 20, questionStartTime: 0,
    // Per-player log of every question + the answer they personally gave, kept across the whole match
    answerLog: [] // {question, options, type, answer, correctAnswer, explanation, myAnswer, groupAccuracy}
  },

  bookmarks: new Set(),
  flashcard: { questions: [], currentIndex: 0, revealed: false, total: 0 },
  history: [],

  init() {
    this.viewContainer = document.getElementById('view-container');
    this.loadData();
    this.setupNavigation();
    this.setupKeyboardShortcuts();
    this.showView('dashboard');
  },

  // ---- Global Keyboard Shortcuts ----
  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      const key = e.key.toLowerCase();

      if (this.currentView === 'bookmarks' && document.getElementById('flashcard-area').innerHTML.trim() !== '') {
        if (key === ' ' || key === 'spacebar') { e.preventDefault(); this.flashcard.revealed = !this.flashcard.revealed; this.renderFlashcard(); }
        if (key === 'arrowright' && this.flashcard.currentIndex < this.flashcard.total - 1) { this.flashcard.currentIndex++; this.flashcard.revealed = false; this.renderFlashcard(); }
        if (key === 'arrowleft' && this.flashcard.currentIndex > 0) { this.flashcard.currentIndex--; this.flashcard.revealed = false; this.renderFlashcard(); }
      }

      const numberMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4 };
      if (numberMap[key] !== undefined) {
        const index = numberMap[key];
        let buttons = [];
        if (this.currentView === 'practice') buttons = document.querySelectorAll('.btn-answer');
        if (this.currentView === 'exam') buttons = document.querySelectorAll('.btn-exam-answer');
        if (this.currentView === 'multiplayer') buttons = document.querySelectorAll('.btn-mp-answer');

        if (buttons.length > index && !buttons[index].disabled) buttons[index].click();
      }

      if (key === ' ' || key === 'enter') {
        if (this.currentView === 'practice' && this.practice.answered) { e.preventDefault(); document.querySelector('.btn-next')?.click(); }
      }
    });
  },

  loadData() {
    try { this.history = JSON.parse(localStorage.getItem('mm_history')) || []; } catch(e) { this.history = []; }
    try { this.bookmarks = new Set(JSON.parse(localStorage.getItem('mm_bookmarks')) || []); } catch(e) { this.bookmarks = new Set(); }
  },
  saveData() {
    localStorage.setItem('mm_history', JSON.stringify(this.history));
    localStorage.setItem('mm_bookmarks', JSON.stringify([...this.bookmarks]));
  },

  setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.mp.inRoom && !confirm("Leave active multiplayer room?")) return;
        if (this.mp.peer) { this.mp.peer.destroy(); this.mp.peer = null; this.mp.inRoom = false; }

        this.showView(btn.dataset.view);
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  },

  showView(viewName) {
    this.currentView = viewName;
    if(this.exam.timerInterval) clearInterval(this.exam.timerInterval);
    if(this.mp.timerInterval) clearInterval(this.mp.timerInterval);

    let html = '';
    switch (viewName) {
      case 'dashboard': html = this.renderDashboard(); break;
      case 'practice': html = this.renderPractice(); break;
      case 'exam': html = this.renderExamSetup(); break;
      case 'multiplayer': html = this.renderMultiplayerSetup(); break;
      case 'history': html = this.renderHistory(); break;
      case 'bookmarks': html = this.renderBookmarks(); break;
    }
    this.viewContainer.innerHTML = html;
    this.bindViewEvents(viewName);
  },

  // ---- Cascading Filters & Question Type ----
  getUniqueCourses() { return [...new Set(questions.map(q => q.course))].sort(); },
  getSelectedPills(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return ['all'];
    const actives = container.querySelectorAll('.filter-pill.active');
    const values = Array.from(actives).map(p => p.dataset.value);
    return values.includes('all') ? ['all'] : values;
  },

  getFullyFilteredPool(prefix) {
    const courses = this.getSelectedPills(`${prefix}-courses`);
    let pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));

    const topic = document.getElementById(`${prefix}-topic`)?.value || 'all';
    const subTopic = document.getElementById(`${prefix}-subtopic`)?.value || 'all';
    const qType = document.getElementById(`${prefix}-type`)?.value || 'all';

    if (topic !== 'all') pool = pool.filter(q => q.topic === topic);
    if (subTopic !== 'all') pool = pool.filter(q => q.subTopic === subTopic);
    if (qType !== 'all') pool = pool.filter(q => q.type === qType);

    return pool;
  },

  updateTopicDropdown(prefix) {
    const courses = this.getSelectedPills(`${prefix}-courses`);
    const pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));
    const topics = [...new Set(pool.map(q => q.topic))].sort();
    const select = document.getElementById(`${prefix}-topic`);
    if(!select) return;
    const current = select.value;
    select.innerHTML = `<option value="all">All Topics</option>` + topics.map(t => `<option value="${t}" ${current===t?'selected':''}>${t}</option>`).join('');
    this.updateSubTopicDropdown(prefix);
  },

  updateSubTopicDropdown(prefix) {
    const courses = this.getSelectedPills(`${prefix}-courses`);
    let pool = courses.includes('all') ? questions : questions.filter(q => courses.includes(q.course));
    const topic = document.getElementById(`${prefix}-topic`).value;
    if (topic !== 'all') pool = pool.filter(q => q.topic === topic);
    const subTopics = [...new Set(pool.map(q => q.subTopic))].sort();
    const select = document.getElementById(`${prefix}-subtopic`);
    if(!select) return;
    const current = select.value;
    select.innerHTML = `<option value="all">All Sub-Topics</option>` + subTopics.map(st => `<option value="${st}" ${current===st?'selected':''}>${st}</option>`).join('');
    this.updateQuestionCountDropdown(prefix);
  },

  updateQuestionCountDropdown(prefix) {
    const pool = this.getFullyFilteredPool(prefix);
    const max = pool.length;
    const select = document.getElementById(`${prefix}-question-count`);
    if (!select) return;
    const currentVal = select.value;
    let options = `<option value="all" ${currentVal==='all'?'selected':''}>All Available (${max})</option>`;
    for (let i = 5; i <= Math.min(max, 100); i += 5) options += `<option value="${i}" ${currentVal==String(i)?'selected':''}>${i}</option>`;
    if(max < 5 && max > 0) options += `<option value="${max}">${max}</option>`;
    select.innerHTML = options;
  },

  renderFilterUI(prefix) {
    const coursePills = this.getUniqueCourses().map(c => `<button class="filter-pill" data-value="${c}">${c}</button>`).join('');
    return `
      <div class="filter-section">
        <label><strong>1. Select Courses:</strong></label>
        <div id="${prefix}-courses" class="pill-group mt-1"><button class="filter-pill active" data-value="all">All Courses</button>${coursePills}</div>
      </div>
      <div class="filter-section mt-1 flex">
        <div style="flex:1;"><label><strong>2. Topic:</strong></label><select id="${prefix}-topic" class="input-select mt-1"><option value="all">All Topics</option></select></div>
        <div style="flex:1;"><label><strong>3. Sub-Topic:</strong></label><select id="${prefix}-subtopic" class="input-select mt-1"><option value="all">All Sub-Topics</option></select></div>
      </div>
      <div class="filter-section mt-1">
        <label><strong>4. Question Type:</strong></label>
        <select id="${prefix}-type" class="input-select mt-1">
          <option value="all">All Types</option>
          <option value="multiplechoice">Standard MCQs</option>
          <option value="truefalse">True / False</option>
          <option value="clinical_scenario">Clinical Scenarios (Triage)</option>
        </select>
      </div>
    `;
  },

  bindFilterEvents(prefix) {
    const courseContainer = document.getElementById(`${prefix}-courses`);
    if (courseContainer) {
      courseContainer.addEventListener('click', (e) => {
        if (e.target.matches('.filter-pill')) {
          if (e.target.dataset.value === 'all') {
            courseContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
          } else {
            courseContainer.querySelector('[data-value="all"]').classList.remove('active');
            e.target.classList.toggle('active');
            if (courseContainer.querySelectorAll('.filter-pill.active').length === 0) courseContainer.querySelector('[data-value="all"]').classList.add('active');
          }
          this.updateTopicDropdown(prefix);
        }
      });
    }
    document.getElementById(`${prefix}-topic`)?.addEventListener('change', () => this.updateSubTopicDropdown(prefix));
    document.getElementById(`${prefix}-subtopic`)?.addEventListener('change', () => this.updateQuestionCountDropdown(prefix));
    document.getElementById(`${prefix}-type`)?.addEventListener('change', () => this.updateQuestionCountDropdown(prefix));
    this.updateTopicDropdown(prefix);
  },

  bindViewEvents(viewName) {
    if (viewName === 'practice') {
      this.bindFilterEvents('practice');
      document.getElementById('start-practice')?.addEventListener('click', () => this.startPractice());
      document.getElementById('practice-area')?.addEventListener('click', (e) => {
        if(e.target.closest('.btn-answer')) this.handlePracticeAnswer(e.target.closest('.btn-answer').dataset.value);
        if(e.target.matches('.btn-next')) { this.practice.currentIndex++; this.practice.answered = false; this.renderPracticeQuestion(); }
        if(e.target.matches('.btn-finish')) { this.practice.currentIndex = this.practice.total; this.showPracticeReview(); }
        if(e.target.matches('.btn-bookmark')) { this.toggleBookmark(e.target.dataset.question); this.renderPracticeQuestion(); }
      });
    } else if (viewName === 'exam') {
      this.bindFilterEvents('exam');
      document.getElementById('start-exam')?.addEventListener('click', () => this.startExam());
      document.getElementById('exam-area')?.addEventListener('click', (e) => {
        if(e.target.closest('.btn-exam-answer')) this.handleExamAnswer(e.target.closest('.btn-exam-answer').dataset.value);
        if(e.target.matches('.btn-exam-finish')) this.finishExam(false);
      });
    } else if (viewName === 'multiplayer') {
      this.bindFilterEvents('mp');
      document.getElementById('mp-create-btn')?.addEventListener('click', () => this.createMultiplayerRoom());
      document.getElementById('mp-join-btn')?.addEventListener('click', () => this.joinMultiplayerRoom());
      document.getElementById('mp-area')?.addEventListener('click', (e) => {
        if(e.target.matches('.btn-mp-start-game')) this.hostStartGame();
        if(e.target.closest('.btn-mp-answer')) this.guestSubmitAnswer(e.target.closest('.btn-mp-answer').dataset.value);
        if(e.target.matches('.btn-mp-host-next')) this.hostNextQuestion();
        if(e.target.closest('.btn-mp-bookmark')) this.toggleBookmark(e.target.closest('.btn-mp-bookmark').dataset.question, true);
      });
    } else if (viewName === 'history') {
      document.getElementById('clear-history-btn')?.addEventListener('click', () => { if(confirm('Clear all data?')) { this.history = []; this.saveData(); this.showView('history'); }});
    } else if (viewName === 'bookmarks') {
      document.getElementById('start-flashcards')?.addEventListener('click', () => this.startFlashcards());
      document.getElementById('export-anki')?.addEventListener('click', () => this.exportAnkiCSV());
      document.getElementById('bookmark-list')?.addEventListener('click', (e) => {
        if(e.target.matches('.btn-remove-bookmark')) { this.bookmarks.delete(e.target.dataset.question); this.saveData(); this.showView('bookmarks'); }
      });
      document.getElementById('flashcard-area')?.addEventListener('click', (e) => {
        if(e.target.matches('.btn-flip')) { this.flashcard.revealed = !this.flashcard.revealed; this.renderFlashcard(); }
        if(e.target.matches('.btn-flash-next')) { this.flashcard.currentIndex++; this.flashcard.revealed=false; this.renderFlashcard(); }
        if(e.target.matches('.btn-flash-prev')) { this.flashcard.currentIndex--; this.flashcard.revealed=false; this.renderFlashcard(); }
      });
    }
  },

  toggleBookmark(questionText) {
    if (this.bookmarks.has(questionText)) this.bookmarks.delete(questionText);
    else this.bookmarks.add(questionText);
    this.saveData();
  },

  shuffleArray(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; },
  formatTime(s) { return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; },

  // ---- Precision Dashboard ----
  renderDashboard() {
    const completed = this.history.filter(h => h.total > 0 && typeof h.score === 'number');
    let totalQ = 0, correctQ = 0, subStats = {};
    completed.forEach(h => {
      totalQ += h.total; correctQ += h.score;
      if (h.subPerf) {
        for (const [sub, p] of Object.entries(h.subPerf)) {
          if (!subStats[sub]) subStats[sub] = { correct: 0, total: 0 };
          subStats[sub].correct += p.correct; subStats[sub].total += p.total;
        }
      }
    });

    let weakest = 'Needs Data', strongest = 'Needs Data', weakPct = 101, strongPct = -1;
    for (const [sub, stats] of Object.entries(subStats)) {
      if (stats.total >= 3) {
        const pct = (stats.correct / stats.total) * 100;
        if (pct < weakPct) { weakPct = pct; weakest = sub; }
        if (pct > strongPct) { strongPct = pct; strongest = sub; }
      }
    }

    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title">Performance Analytics</h2>
          <div class="stats-grid">
            <div class="stat-card"><strong>Attempts</strong><span>${completed.length}</span></div>
            <div class="stat-card"><strong>Accuracy</strong><span>${totalQ ? Math.round((correctQ/totalQ)*100) : 0}%</span></div>
            <div class="stat-card"><strong>Answered</strong><span>${totalQ}</span></div>
          </div>
          <div class="flex">
            <div class="card" style="flex:1; background:#fff1f2; border:1px solid #ffe4e6; padding:1rem;">
              <strong style="color:#be123c; font-size:0.8rem; text-transform:uppercase;">Weakest Sub-Topic</strong><br>
              <span style="font-size:1.1rem; font-weight:700;">${weakest}</span> ${weakPct<=100 ? `(${Math.round(weakPct)}%)` : ''}
            </div>
            <div class="card" style="flex:1; background:#f0fdf4; border:1px solid #dcfce7; padding:1rem;">
              <strong style="color:#15803d; font-size:0.8rem; text-transform:uppercase;">Strongest Sub-Topic</strong><br>
              <span style="font-size:1.1rem; font-weight:700;">${strongest}</span> ${strongPct>=0 ? `(${Math.round(strongPct)}%)` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ---- Practice Mode ----
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
    const pool = this.shuffleArray(this.getFullyFilteredPool('practice'));
    if (!pool.length) return alert('No questions match these filters.');
    const qCountVal = document.getElementById('practice-question-count').value;
    const finalPool = qCountVal === 'all' ? pool : pool.slice(0, parseInt(qCountVal));
    this.practice = { questions: finalPool, currentIndex: 0, score: 0, answered: false, total: finalPool.length, results: [], started: true };
    document.getElementById('practice-setup').style.display = 'none';
    this.renderPracticeQuestion();
  },
  renderPracticeQuestion() {
    const p = this.practice;
    const area = document.getElementById('practice-area');
    if (p.currentIndex >= p.total) return this.showPracticeReview();
    const q = p.questions[p.currentIndex];

    let buttonsHtml = '';
    const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
    options.forEach((opt, index) => {
        let stateClass = '';
        if (p.answered) {
            const res = p.results[p.currentIndex];
            if (opt === res.correct) stateClass = 'correct';
            else if (opt === res.selected && opt !== res.correct) stateClass = 'incorrect';
        }
        buttonsHtml += `<button class="btn-option btn-answer ${stateClass}" data-value="${opt}" ${p.answered?'disabled':''}>${opt} <span class="hotkey-hint">[${index+1}]</span></button>`;
    });

    area.innerHTML = `
      <div class="card">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <div><span class="badge topic-badge">${q.course}</span> <span class="badge" style="background:#f1f5f9;">${q.topic} › ${q.subTopic}</span></div>
          <span class="progress-text">Q ${p.currentIndex + 1} / ${p.total}</span>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="mt-1">${buttonsHtml}</div>
        <div class="mt-1" style="display:${p.answered ? 'block' : 'none'};">
          ${p.answered ? `<div class="feedback ${p.results[p.currentIndex].selected === p.results[p.currentIndex].correct ? 'feedback-correct' : 'feedback-incorrect'}"><p>${q.explanation}</p></div>` : ''}
        </div>
        <div class="mt-1 flex" style="justify-content:space-between; border-top: 1px solid #e2e8f0; padding-top: 1rem;">
          <button class="btn btn-outline btn-bookmark" data-question="${q.question}">${this.bookmarks.has(q.question) ? '★ Bookmarked' : '☆ Bookmark'}</button>
          ${p.answered ? `<button class="btn btn-primary btn-next">Next [Space]</button>` : `<button class="btn btn-danger btn-finish">End Early</button>`}
        </div>
      </div>
    `;
  },
  handlePracticeAnswer(selected) {
    if (this.practice.answered) return;
    const q = this.practice.questions[this.practice.currentIndex];
    const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
    if (selected === correctVal) this.practice.score++;
    this.practice.results[this.practice.currentIndex] = { question: q.question, selected, correct: correctVal, explanation: q.explanation, subTopic: q.subTopic };
    this.practice.answered = true;
    this.renderPracticeQuestion();
  },
  showPracticeReview() {
    const p = this.practice;
    const subPerf = {};
    p.results.forEach(r => {
      if(!subPerf[r.subTopic]) subPerf[r.subTopic] = { correct: 0, total: 0 };
      subPerf[r.subTopic].total++;
      if(r.selected === r.correct) subPerf[r.subTopic].correct++;
    });
    this.history.unshift({ mode:'Practice', score: p.score, total: p.total, percentage: p.total ? Math.round((p.score/p.total)*100) : 0, date: new Date().toISOString(), subPerf });
    this.saveData();
    document.getElementById('practice-area').innerHTML = `
      <div class="card text-center">
        <h2>Practice Complete</h2>
        <div style="font-size:3rem; font-weight:800; color:#0b2b4a; margin:1rem 0;">${p.total ? Math.round((p.score/p.total)*100) : 0}%</div>
        <p>${p.score} out of ${p.total}</p>
        <button class="btn btn-primary mt-1" onclick="App.showView('practice')">Practice Again</button>
      </div>
    `;
  },

  // ---- EXAM MODE ----
  renderExamSetup() {
    let qOptions = `<option value="10">10</option>`;
    for (let i = 5; i <= 100; i += 5) qOptions += `<option value="${i}">${i}</option>`;

    return `
      <div class="container">
        <div class="card" id="exam-setup">
          <h2 class="card-title">Exam Simulator</h2>
          <p class="mb-1 text-muted">Timed test environment. No feedback until submission.</p>
          ${this.renderFilterUI('exam')}
          <div class="filter-section mt-1 flex">
            <div style="flex:1;">
              <label><strong>5. Questions:</strong></label>
              <select id="exam-question-count" class="input-select mt-1">${qOptions}</select>
            </div>
            <div style="flex:1;">
              <label><strong>6. Timer:</strong></label>
              <select id="exam-duration" class="input-select mt-1">
                <option value="5">5 minutes</option><option value="15">15 minutes</option>
                <option value="30" selected>30 minutes</option><option value="60">60 minutes</option>
              </select>
            </div>
          </div>
          <div class="mt-1"><button class="btn btn-danger" id="start-exam" style="width:100%; font-size:1.1rem;">Begin Exam</button></div>
        </div>
        <div id="exam-area"></div>
      </div>
    `;
  },
  startExam() {
    const pool = this.shuffleArray(this.getFullyFilteredPool('exam'));
    if (!pool.length) return alert('No questions available.');

    const count = Math.min(parseInt(document.getElementById('exam-question-count').value), pool.length);
    const duration = parseInt(document.getElementById('exam-duration').value) * 60;

    this.exam = { questions: pool.slice(0, count), currentIndex: 0, answers: new Array(count).fill(null), total: count, score: 0, started: true, finished: false, timer: duration, results: [] };
    document.getElementById('exam-setup').style.display = 'none';

    this.renderExamQuestion();
    this.exam.timerInterval = setInterval(() => {
      this.exam.timer--;
      const tDisp = document.getElementById('exam-timer-display');
      if(tDisp) tDisp.textContent = this.formatTime(this.exam.timer);
      if(this.exam.timer <= 0) this.finishExam(true);
    }, 1000);
  },
  renderExamQuestion() {
    const e = this.exam;
    if (e.finished || e.currentIndex >= e.total) return this.showExamReview();
    const q = e.questions[e.currentIndex];
    const selected = e.answers[e.currentIndex];

    let buttonsHtml = '';
    const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
    options.forEach((opt, index) => {
      buttonsHtml += `<button class="btn-option btn-exam-answer ${selected===opt?'selected':''}" data-value="${opt}">${opt} <span class="hotkey-hint">[${index+1}]</span></button>`;
    });

    document.getElementById('exam-area').innerHTML = `
      <div class="card" style="border-top: 5px solid #b91c1c;">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge topic-badge">${q.course}</span>
          <div style="font-size:1.4rem; font-weight:700; color:#b91c1c;">⏱ <span id="exam-timer-display">${this.formatTime(e.timer)}</span></div>
        </div>
        <div class="timer-bar mt-1" style="height:6px;">
           <div class="timer-fill" style="width:${(e.answers.filter(a=>a!==null).length/e.total)*100}%; background:#0b2b4a;"></div>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="flex flex-col" style="margin-top:1.5rem; gap:0.5rem;">${buttonsHtml}</div>
        <div class="mt-1 flex" style="justify-content:space-between; border-top:1px solid #e2e8f0; padding-top:1rem;">
          <span style="font-weight:600; color:#475569;">Question ${e.currentIndex + 1} of ${e.total}</span>
          <button class="btn btn-danger btn-exam-finish">Submit Exam Early</button>
        </div>
      </div>
    `;
  },
  handleExamAnswer(val) {
    if(this.exam.finished) return;
    this.exam.answers[this.exam.currentIndex] = val;
    this.renderExamQuestion();
    setTimeout(() => { if(!this.exam.finished && this.exam.currentIndex < this.exam.total - 1) { this.exam.currentIndex++; this.renderExamQuestion(); } else if (this.exam.currentIndex === this.exam.total - 1) { this.finishExam(); } }, 400);
  },
  finishExam(timeout=false) {
    if(this.exam.finished) return;
    clearInterval(this.exam.timerInterval);
    this.exam.finished = true;

    const subPerf = {};
    for(let i=0; i<this.exam.total; i++) {
       const q = this.exam.questions[i];
       const sel = this.exam.answers[i];
       const cor = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
       if(sel === cor) this.exam.score++;

       if(!subPerf[q.subTopic]) subPerf[q.subTopic] = {correct:0, total:0};
       subPerf[q.subTopic].total++;
       if(sel === cor) subPerf[q.subTopic].correct++;

       this.exam.results.push({ question: q.question, selected: sel, correct: cor, explanation: q.explanation });
    }
    this.history.unshift({ mode:'Exam', score: this.exam.score, total: this.exam.total, percentage: Math.round((this.exam.score/this.exam.total)*100), date: new Date().toISOString(), subPerf });
    this.saveData();
    this.showExamReview();
  },
  showExamReview() {
    const e = this.exam;
    const pct = Math.round((e.score/e.total)*100);
    const incorrectHtml = e.results.filter(r => r.selected !== r.correct).map((r,i) => `
      <div class="card" style="background:#f8fafc; border:1px solid #e2e8f0;">
        <p class="question-text" style="font-size:1.1rem; margin-top:0;"><strong>${i+1}.</strong> ${r.question}</p>
        <p style="color:#b91c1c; font-weight:500;">Your answer: ${r.selected || 'Omitted'} <br> <span style="color:#16a34a;">Correct: ${r.correct}</span></p>
        <p class="mt-1" style="font-size:0.9rem;">${r.explanation}</p>
      </div>
    `).join('') || '<p>Perfect score!</p>';

    document.getElementById('exam-area').innerHTML = `
      <div class="card text-center">
        <h2>Exam Results</h2>
        <div style="font-size:3rem; font-weight:700; color:${pct>=50?'#16a34a':'#b91c1c'}; margin:1rem 0;">${pct}%</div>
        <p>Final Score: ${e.score} / ${e.total}</p>
        <button class="btn btn-primary mt-1" onclick="App.showView('exam')">Take Another Exam</button>
      </div>
      <h3 style="margin:2rem 0 1rem; color:#0b2b4a;">Incorrect Answers</h3>
      ${incorrectHtml}
    `;
  },

  // ---- HISTORY ----
  renderHistory() {
    return `
      <div class="container">
        <div class="card">
          <div class="flex" style="justify-content:space-between; align-items:center;">
            <h2 class="card-title" style="border:none; margin:0;">Activity History</h2>
            ${this.history.length ? `<button class="btn btn-danger" id="clear-history-btn" style="padding:0.4rem 0.8rem;">Clear All</button>` : ''}
          </div>
          <div class="mt-1">
            ${this.history.length ? this.history.map(h => `
              <div class="card history-item" style="background:#f8fafc; margin-bottom:0.75rem; padding:1rem; box-shadow:none; border:1px solid #e2e8f0;">
                <div class="flex" style="justify-content:space-between;">
                  <strong>${h.mode}</strong>
                  <span class="text-muted" style="font-size:0.85rem;">${new Date(h.date).toLocaleString()}</span>
                </div>
                <div style="font-size:1.2rem; font-weight:700; color:#0b2b4a; margin:0.5rem 0;">${h.score} / ${h.total} (${h.percentage}%)</div>
              </div>
            `).join('') : '<p class="text-muted">No history recorded yet.</p>'}
          </div>
        </div>
      </div>
    `;
  },

  // ---- FLASHCARDS ----
  startFlashcards() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));
    if (!bQs.length) return;
    this.flashcard = { questions: this.shuffleArray([...bQs]), currentIndex: 0, revealed: false, total: bQs.length };
    this.renderFlashcard();
  },
  renderFlashcard() {
    const f = this.flashcard;
    const area = document.getElementById('flashcard-area');
    if (!area) return;
    if (!f.questions.length) { area.innerHTML = ''; return; }
    const q = f.questions[f.currentIndex];
    const answerText = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;

    area.innerHTML = `
      <div class="card" style="text-align:center; min-height:220px; display:flex; flex-direction:column; justify-content:center;">
        <span class="progress-text" style="align-self:center; margin-bottom:1rem;">Card ${f.currentIndex + 1} / ${f.total}</span>
        <p class="question-text">${q.question}</p>
        ${f.revealed ? `
          <div class="feedback feedback-correct mt-1" style="text-align:left;">
            <strong>Answer: ${answerText}</strong>
            <p class="mt-1">${q.explanation}</p>
          </div>
        ` : `<button class="btn btn-outline btn-flip" style="align-self:center;">Tap or [Space] to Reveal</button>`}
      </div>
      <div class="flex mt-1" style="justify-content:space-between;">
        <button class="btn btn-secondary btn-flash-prev" ${f.currentIndex===0?'disabled':''}>← Prev</button>
        <button class="btn btn-secondary btn-flash-next" ${f.currentIndex>=f.total-1?'disabled':''}>Next →</button>
      </div>
    `;
  },

  // ---- Anki & Bookmarks ----
  renderBookmarks() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));
    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title flex" style="justify-content:space-between;">Saved Questions
            <button class="btn btn-success" id="export-anki" style="font-size:0.85rem; padding:0.4rem 0.8rem;" ${!bQs.length?'disabled':''}>Export to Anki (CSV)</button>
          </h2>
          <button class="btn btn-primary mb-1" id="start-flashcards" ${!bQs.length?'disabled':''}>Study Flashcards</button>
          <div id="flashcard-area" class="mt-1"></div>
          <div id="bookmark-list" class="mt-1" style="border-top:1px solid #e2e8f0; padding-top:1rem;">
            ${bQs.map(q => `
              <div style="background:#f8fafc; padding:1rem; border-radius:8px; border-left:4px solid #fbbf24; margin-bottom:0.75rem;">
                <p style="font-weight:600;">${q.question}</p>
                <div class="flex" style="justify-content:space-between; margin-top:0.5rem;">
                  <span style="color:#16a34a; font-size:0.9rem; font-weight:700;">${q.type==='truefalse'?(q.answer?'True':'False'):q.correctAnswer}</span>
                  <button class="btn btn-danger btn-remove-bookmark" data-question="${q.question}" style="padding:0.2rem 0.6rem; font-size:0.8rem;">Remove</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },
  exportAnkiCSV() {
    const bQs = questions.filter(q => this.bookmarks.has(q.question));
    if(!bQs.length) return;
    let csv = "Question,Answer,Explanation,Course,Topic,SubTopic\n";
    bQs.forEach(q => {
        let ans = q.type === 'truefalse' ? (q.answer?'True':'False') : q.correctAnswer;
        let row = `"${q.question.replace(/"/g, '""')}","${String(ans).replace(/"/g, '""')}","${q.explanation.replace(/"/g, '""')}","${q.course}","${q.topic}","${q.subTopic}"`;
        csv += row + "\r\n";
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "MedMaster_Anki_Deck.csv";
    link.click();
  },

  // ---- PEERJS MULTIPLAYER ENGINE ----
  renderMultiplayerSetup() {
    let qCountOptions = '';
    for(let i=5; i<=100; i+=5) qCountOptions += `<option value="${i}">${i}</option>`;

    return `
      <div class="container">
        <div class="card" id="mp-lobby-ui">
          <h2 class="card-title">Online Multiplayer Rooms</h2>
          <p class="text-muted mb-1">Host a live session or join a friend via Room Code.</p>
          <div class="flex" style="gap:2rem;">
            <div style="flex:1; background:#f8fafc; padding:1.5rem; border-radius:12px; border:1px solid #e2e8f0; min-width:260px;">
              <h3>Join a Room</h3>
              <input type="text" id="mp-join-name" class="input-text mt-1" placeholder="Your Display Name">
              <input type="text" id="mp-join-code" class="input-text mt-1" placeholder="4-Letter Code" style="text-transform:uppercase;">
              <button class="btn btn-success mt-1" id="mp-join-btn" style="width:100%;">Join Game</button>
            </div>
            <div style="flex:1; background:#f8fafc; padding:1.5rem; border-radius:12px; border:1px solid #e2e8f0; min-width:260px;">
              <h3>Host a Room</h3>
              <input type="text" id="mp-host-name" class="input-text mt-1" placeholder="Your Display Name">
              ${this.renderFilterUI('mp')}
              <div class="flex mt-1">
                <div style="flex:1;"><label><strong>5. Questions:</strong></label><select id="mp-q-count" class="input-select mt-1">${qCountOptions}</select></div>
                <div style="flex:1;">
                  <label><strong>6. Seconds/Q:</strong></label>
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

  generateRoomCode() { return Math.random().toString(36).substring(2, 6).toUpperCase(); },

  createMultiplayerRoom() {
    const name = document.getElementById('mp-host-name').value.trim();
    if(!name) return alert("Please enter a display name to host.");

    const code = this.generateRoomCode();
    const pool = this.shuffleArray(this.getFullyFilteredPool('mp'));
    const qCount = parseInt(document.getElementById('mp-q-count').value);

    if(pool.length < 5) return alert("Not enough questions match the selected filters!");

    // Immediate UI Feedback
    document.getElementById('mp-lobby-ui').style.display = 'none';
    this.mp = { peer: null, conn: null, connections: {}, isHost: true, inRoom: true, roomCode: code, playerName: name, myId: 'host',
                players: [{id: 'host', name: name, score: 0, currentAnswer: null, answerTimeScore: 0}],
                questions: pool.slice(0, Math.min(qCount, pool.length)), currentIndex: 0, timer: 0, state: 'CONNECTING',
                questionDuration: parseInt(document.getElementById('mp-q-time').value),
                answerLog: [] };
    this.renderMpState();

    // Same guard as the guest path: if the library itself never loaded, fail visibly
    // instead of letting `new Peer(...)` throw and leave the screen stuck on "Connecting...".
    if (typeof Peer === 'undefined') {
      this.showMpFatalError(
        "Connection engine failed to load",
        "The multiplayer library didn't load — this usually means your network is blocking it, you're offline, or an ad-blocker/extension stepped in. Try a different network (e.g. mobile data) or reload the page."
      );
      return;
    }

    // NOTE: do NOT pass { reliable: true } anywhere in this engine. That flag forces
    // the heavier SCTP-based reliable channel, which is what was silently breaking the
    // join handshake on mobile/restrictive networks. Plain unreliable (UDP-style) data
    // channels connect far more reliably for this use case.
    try {
      this.mp.peer = new Peer('medmaster-' + code, peerConfig);
    } catch (err) {
      console.error('Host peer construction failed:', err);
      this.showMpFatalError("Couldn't create the room", "Something went wrong starting the network engine. Reloading the page usually fixes this.");
      return;
    }

    this.mp.peer.on('open', () => {
      this.mp.state = 'LOBBY';
      this.renderMpState();
    });

    this.mp.peer.on('error', (err) => {
      console.error('Host peer error:', err);
      this.showMpFatalError("Couldn't create the room", "Please check your internet connection and try again. If this keeps happening, your network may be blocking the connection.");
    });

    this.mp.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        if(data.type === 'JOIN') {
          this.mp.connections[conn.peer] = conn;
          if(!this.mp.players.find(p => p.id === conn.peer)) {
             this.mp.players.push({id: conn.peer, name: data.name, score: 0, currentAnswer: null, answerTimeScore: 0});
          }
          this.broadcastMpState();
        } else if (data.type === 'ANSWER' && this.mp.state === 'QUESTION') {
          const player = this.mp.players.find(p => p.id === conn.peer);
          if(player && !player.currentAnswer) {
             player.currentAnswer = data.answer;
             const timeTaken = (Date.now() - this.mp.questionStartTime) / 1000;
             const pct = Math.max(0, 1 - (timeTaken / this.mp.questionDuration));
             player.answerTimeScore = Math.floor(100 + (900 * pct));
             if(this.mp.players.every(p => p.currentAnswer)) { clearInterval(this.mp.timerInterval); this.hostResolveQuestion(); }
             else { this.renderMpState(); this.broadcastAnswerCount(); }
          }
        }
      });
      conn.on('close', () => {
        this.mp.players = this.mp.players.filter(p => p.id !== conn.peer);
        delete this.mp.connections[conn.peer];
        this.broadcastMpState();
      });
    });
  },

  // Lets guests see the live "answers in: X / Y" counter without waiting for a full state sync
  broadcastAnswerCount() {
    if(!this.mp.isHost) return;
    const payload = { type: 'ANSWER_COUNT', count: this.mp.players.filter(p=>p.currentAnswer).length, total: this.mp.players.length };
    Object.values(this.mp.connections).forEach(conn => { if(conn.open) conn.send(payload); });
  },

  joinMultiplayerRoom() {
    const name = document.getElementById('mp-join-name').value.trim();
    const code = document.getElementById('mp-join-code').value.trim().toUpperCase();
    if(!name || !code) return alert("Please enter your name and a room code.");

    // Immediate UI Feedback — render BEFORE touching PeerJS in any way. Anything that can
    // throw (including just constructing `new Peer(...)`) must happen AFTER this, or a
    // synchronous error here leaves the screen blank with nothing rendered to replace the
    // lobby UI we just hid.
    document.getElementById('mp-lobby-ui').style.display = 'none';
    this.mp = { peer: null, conn: null, connections: {}, isHost: false, inRoom: true, playerName: name, myId: '',
                players: [], questions: [], currentIndex: 0, timer: 0, timerInterval: null, state: 'CONNECTING',
                questionDuration: 20, questionStartTime: 0, answerLog: [] };
    this.renderMpState();

    // Guard 1: the PeerJS library itself failed to load (blocked CDN, offline, ad-blocker,
    // restrictive school/work network). This is the most common real-world cause of a dead
    // join screen, so detect it explicitly rather than letting `new Peer(...)` throw blind.
    if (typeof Peer === 'undefined') {
      this.showMpFatalError(
        "Connection engine failed to load",
        "The multiplayer library didn't load — this usually means your network is blocking it, you're offline, or an ad-blocker/extension stepped in. Try a different network (e.g. mobile data) or reload the page."
      );
      return;
    }

    // Guard 2: catch any other synchronous construction error instead of letting it crash silently.
    let peer;
    try {
      peer = new Peer(peerConfig);
    } catch (err) {
      console.error('Peer construction failed:', err);
      this.showMpFatalError("Couldn't start the connection", "Something went wrong starting the network engine. Reloading the page usually fixes this.");
      return;
    }
    this.mp.peer = peer;

    // Fallback if connection hangs entirely (covers cases where 'open'/'connect' never fires)
    let settled = false;
    let timeoutFallback = setTimeout(() => {
        if (settled) return;
        this.showMpFatalError("Connection timed out", "Check the room code and that the host's room is still open, then try again.");
        this.mp.peer.destroy();
    }, 12000);

    this.mp.peer.on('open', (id) => {
      this.mp.myId = id;
      // IMPORTANT: no { reliable: true } here — see note in createMultiplayerRoom().
      this.mp.conn = this.mp.peer.connect('medmaster-' + code);

      this.mp.conn.on('open', () => {
        settled = true;
        clearTimeout(timeoutFallback);
        this.mp.conn.send({type: 'JOIN', name: name});
      });

      this.mp.conn.on('data', (data) => {
        if(data.type === 'SYNC') {
           this.mp.state = data.state;
           this.mp.players = data.players;
           if(data.state === 'QUESTION') {
              this.mp.currentQuestion = data.question;
              this.mp.currentIndex = data.questionIndex;
              this.mp.totalQuestions = data.totalQuestions;
              this.mp.questionDuration = data.duration;
              this.mp.myLastAnswer = null;
              this.startGuestTimer(data.duration);
           }
           if(data.state === 'REVEAL') {
              this.mp.currentQuestion = data.question;
              this.mp.groupAccuracy = data.groupAccuracy;
              // Build my own personalized log entry locally — the host only knows ITS answer,
              // not mine, so personalization for the review page must happen on each client.
              const q = data.question;
              const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
              this.mp.answerLog.push({
                question: q.question, correctAnswer: correctVal, explanation: q.explanation,
                myAnswer: this.mp.myLastAnswer || null,
                groupAccuracy: data.groupAccuracy, correctCount: data.correctCount, totalPlayers: data.totalPlayers
              });
           }
           if(data.state === 'REVIEW') {
              // Keep my locally-built personalized log; only adopt the host's log as a fallback
              // (e.g. if I reconnected mid-game and missed some REVEAL broadcasts).
              if (!this.mp.answerLog.length && data.answerLog) this.mp.answerLog = data.answerLog;
           }
           this.renderMpState();
        } else if (data.type === 'ANSWER_COUNT') {
           const el = document.getElementById('mp-answer-count');
           if (el) el.textContent = `Answers in: ${data.count} / ${data.total}`;
        }
      });

      this.mp.conn.on('close', () => {
          this.showMpFatalError("Host disconnected", "The host's room has closed or the connection dropped.");
      });

      this.mp.conn.on('error', (err) => {
          console.error('Connection error:', err);
      });
    });

    this.mp.peer.on('error', (err) => {
      settled = true;
      clearTimeout(timeoutFallback);
      console.error('Guest peer error:', err);
      this.showMpFatalError("Couldn't connect", "The room code might be incorrect, or the host's room has closed.");
    });
  },

  broadcastMpState() {
    if(!this.mp.isHost) return;
    const payload = { type: 'SYNC', state: this.mp.state, players: this.mp.players };
    if(this.mp.state === 'QUESTION') {
      payload.question = this.mp.questions[this.mp.currentIndex];
      payload.questionIndex = this.mp.currentIndex;
      payload.totalQuestions = this.mp.questions.length;
      payload.duration = this.mp.questionDuration;
    }
    if(this.mp.state === 'REVEAL') {
      payload.question = this.mp.questions[this.mp.currentIndex];
      payload.groupAccuracy = this.mp.groupAccuracy;
      payload.correctCount = this.mp.lastCorrectCount;
      payload.totalPlayers = this.mp.players.length;
    }
    if(this.mp.state === 'REVIEW') {
      payload.answerLog = this.mp.answerLog; // fallback only, see guest-side handling
    }

    Object.values(this.mp.connections).forEach(conn => { if(conn.open) conn.send(payload); });
    this.renderMpState();
  },

  hostStartGame() {
    this.mp.state = 'QUESTION';
    this.mp.currentIndex = 0;
    this.hostIssueQuestion();
  },

  hostIssueQuestion() {
    this.mp.players.forEach(p => { p.currentAnswer = null; p.answerTimeScore = 0; });
    this.mp.state = 'QUESTION';
    this.mp.questionStartTime = Date.now();
    this.broadcastMpState();

    this.mp.timer = this.mp.questionDuration;
    clearInterval(this.mp.timerInterval);
    this.mp.timerInterval = setInterval(() => {
        this.mp.timer--;
        this.updateMpTimerDisplay();
        if(this.mp.timer <= 0) { clearInterval(this.mp.timerInterval); this.hostResolveQuestion(); }
    }, 1000);
  },

  hostResolveQuestion() {
    const q = this.mp.questions[this.mp.currentIndex];
    const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;

    this.mp.players.forEach(p => {
      // Initialize per-player tracking counters on first use
      if (p.correctCount === undefined) { p.correctCount = 0; p.wrongCount = 0; p.skippedCount = 0; }
      if (!p.currentAnswer) {
        p.skippedCount++;
      } else if (p.currentAnswer === correctVal) {
        p.score += p.answerTimeScore;
        p.correctCount++;
      } else {
        p.wrongCount++;
      }
      const totalSeen = p.correctCount + p.wrongCount + p.skippedCount;
      p.accuracy = totalSeen > 0 ? Math.round((p.correctCount / totalSeen) * 100) : 0;
    });
    this.mp.players.sort((a,b) => b.score - a.score);

    const correctCount = this.mp.players.filter(p => p.currentAnswer === correctVal).length;
    this.mp.groupAccuracy = this.mp.players.length ? Math.round((correctCount / this.mp.players.length) * 100) : 0;
    this.mp.lastCorrectCount = correctCount;

    // Log this question + the host's own answer for the personalized review later
    const hostPlayer = this.mp.players.find(p => p.id === 'host');
    this.mp.answerLog.push({
      question: q.question, correctAnswer: correctVal, explanation: q.explanation,
      myAnswer: hostPlayer ? hostPlayer.currentAnswer : null,
      groupAccuracy: this.mp.groupAccuracy, correctCount, totalPlayers: this.mp.players.length
    });

    this.mp.state = 'REVEAL';
    this.broadcastMpState();
  },

  hostNextQuestion() {
    this.mp.currentIndex++;
    if(this.mp.currentIndex >= this.mp.questions.length) { this.mp.state = 'REVIEW'; this.broadcastMpState(); }
    else { this.hostIssueQuestion(); }
  },

  guestSubmitAnswer(ans) {
    const myPlayer = this.mp.players.find(p => p.id === this.mp.myId);
    if(myPlayer && myPlayer.currentAnswer) return;

    if(this.mp.isHost) {
       const p = this.mp.players.find(p => p.id === 'host');
       p.currentAnswer = ans;
       const timeTaken = (Date.now() - this.mp.questionStartTime) / 1000;
       const pct = Math.max(0, 1 - (timeTaken / this.mp.questionDuration));
       p.answerTimeScore = Math.floor(100 + (900 * pct));
       if(this.mp.players.every(p => p.currentAnswer)) { clearInterval(this.mp.timerInterval); this.hostResolveQuestion(); }
       else { this.renderMpState(); this.broadcastAnswerCount(); }
    } else {
       if(myPlayer) myPlayer.currentAnswer = ans;
       // Track my own answer locally too, in case the host's REVEAL payload doesn't include it
       this.mp.myLastAnswer = ans;
       this.mp.conn.send({type: 'ANSWER', answer: ans});
       this.renderMpState();
    }
  },

  startGuestTimer(duration) {
    this.mp.timer = duration;
    clearInterval(this.mp.timerInterval);
    this.mp.timerInterval = setInterval(() => {
        this.mp.timer--;
        this.updateMpTimerDisplay();
        if(this.mp.timer <= 0) clearInterval(this.mp.timerInterval);
    }, 1000);
  },

  // Renders/updates the circular pulsing timer ring (id="mp-timer-ring") in place, without a full re-render
  updateMpTimerDisplay() {
    const wrapper = document.getElementById('mp-timer-wrapper');
    const path = document.getElementById('mp-timer-path');
    const text = document.getElementById('mp-timer-text');
    if (!wrapper || !path || !text) return;
    const duration = this.mp.questionDuration;
    const remaining = Math.max(0, this.mp.timer);
    const circumference = 2 * Math.PI * 38; // r=38
    const pct = remaining / duration;
    path.style.strokeDashoffset = `${circumference * (1 - pct)}`;
    text.textContent = remaining;
    wrapper.classList.toggle('timer-urgent', remaining <= 5);
  },

  renderCircularTimer() {
    const circumference = 2 * Math.PI * 38;
    return `
      <div class="circular-timer-wrapper" id="mp-timer-wrapper">
        <svg class="timer-svg" viewBox="0 0 88 88">
          <circle class="timer-bg" cx="44" cy="44" r="38"></circle>
          <circle class="timer-path" id="mp-timer-path" cx="44" cy="44" r="38"
            stroke-dasharray="${circumference}" stroke-dashoffset="0"></circle>
        </svg>
        <span class="timer-text" id="mp-timer-text">${this.mp.timer}</span>
      </div>
    `;
  },

  showMpFatalError(title, message) {
    clearInterval(this.mp.timerInterval);
    const area = document.getElementById('mp-area');
    const lobbyUi = document.getElementById('mp-lobby-ui');
    if (lobbyUi) lobbyUi.style.display = 'none';
    if (area) {
      area.innerHTML = `
        <div class="card text-center" style="border-top:4px solid #dc2626;">
          <h2 style="color:#dc2626;">${title}</h2>
          <p class="text-muted mt-1">${message}</p>
          <button class="btn btn-primary mt-1" onclick="App.showView('multiplayer')">Back to Lobby</button>
        </div>`;
    } else {
      // Fallback for the rare case mp-area itself isn't in the DOM (e.g. user navigated away)
      alert(`${title}: ${message}`);
    }
  },

  renderMpState() {
    const area = document.getElementById('mp-area');
    if (!area) return;
    const m = this.mp;

    const leaderboardHtml = `
      <ul class="mp-leaderboard">
        ${m.players.map((p,i) => `<li class="${p.id===m.myId?'is-me':''} rank-${i+1}"><span>${i+1}. ${p.name} ${p.id===m.myId?'(You)':''}</span> <span class="score-badge">${p.score}</span></li>`).join('')}
      </ul>
    `;

    if(m.state === 'CONNECTING') {
       area.innerHTML = `
         <div class="card text-center" style="padding:4rem 1rem;">
           <h2 style="color:#0b2b4a;">Connecting to Server...</h2>
           <p class="text-muted mt-1">Establishing secure connection. This should only take a few seconds.</p>
         </div>`;
    }
    else if(m.state === 'LOBBY') {
       area.innerHTML = `
         <div class="card text-center">
           <h2>Waiting in Lobby</h2>
           ${m.isHost ? `<div class="room-code-display">${m.roomCode}</div><p>Tell friends to join using this code!</p>` : `<p>Connected! Waiting for host to start...</p>`}
           <ul class="player-list">${m.players.map(p => `<li class="player-tag ${p.id===m.myId?'is-me':''}">${p.name}</li>`).join('')}</ul>
           ${m.isHost ? `<button class="btn btn-success mt-1 btn-mp-start-game" ${m.players.length<1?'disabled':''}>Start Game</button>` : ''}
         </div>
       `;
    }
    else if(m.state === 'QUESTION') {
       const q = m.isHost ? m.questions[m.currentIndex] : m.currentQuestion;
       const totalQuestions = m.isHost ? m.questions.length : (m.totalQuestions || '?');
       const me = m.players.find(p => p.id === m.myId);

       let buttonsHtml = '';
       const options = q.type === 'truefalse' ? ['True', 'False'] : q.options;
       options.forEach((opt, index) => {
          buttonsHtml += `<button class="btn-option btn-mp-answer ${me?.currentAnswer===opt?'selected':''}" data-value="${opt}" ${me?.currentAnswer?'disabled':''}>${opt} <span class="hotkey-hint">[${index+1}]</span></button>`;
       });

       area.innerHTML = `
         <div class="mp-layout">
           <div class="card mp-main">
             ${this.renderCircularTimer()}
             <div class="flex" style="justify-content:space-between;">
               <span class="badge topic-badge">${q.course}</span>
               <span class="progress-text">Q ${m.currentIndex + 1} / ${totalQuestions}</span>
             </div>
             <p class="question-text">${q.question}</p>
             <div class="mt-1">${buttonsHtml}</div>
             <p class="answer-progress-text" id="mp-answer-count">Answers in: ${m.players.filter(p=>p.currentAnswer).length} / ${m.players.length}</p>
           </div>
           <div class="card mp-sidebar">
             <h3 class="card-title text-center">Live Standings</h3>
             ${leaderboardHtml}
           </div>
         </div>
       `;
       this.updateMpTimerDisplay();
    }
    else if(m.state === 'REVEAL') {
       const q = m.isHost ? m.questions[m.currentIndex] : m.currentQuestion;
       const correctVal = q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer;
       const me = m.players.find(p => p.id === m.myId);
       const myAnswer = me?.currentAnswer || m.myLastAnswer;
       const isCorrect = myAnswer === correctVal;

       area.innerHTML = `
         <div class="mp-layout">
           <div class="card mp-main">
             <div class="feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'} text-center" style="margin-top:0;">
                <h2 style="margin:0;">${isCorrect ? `+${me?.answerTimeScore || 0} Points!` : (myAnswer ? 'Incorrect' : 'Time\'s Up — No Answer')}</h2>
                <p><strong>Correct Answer:</strong> ${correctVal}</p>
                <p class="group-accuracy-badge mt-1">Group Accuracy: ${m.groupAccuracy}%</p>
             </div>
             <p class="question-text">${q.question}</p>
             <div style="background:#f1f5f9; padding:1.5rem; border-radius:12px; margin-top:1rem; border-left:4px solid #0b2b4a;">
                <strong style="color:#0b2b4a; display:block; margin-bottom:0.5rem; font-size:1.1rem;">Explanation:</strong>
                <p>${q.explanation}</p>
             </div>
             ${m.isHost ? `<button class="btn btn-primary mt-1 btn-mp-host-next" style="width:100%;">Next Question</button>` : `<p class="text-center text-muted mt-1">Waiting for host...</p>`}
           </div>
           <div class="card mp-sidebar">
             <h3 class="card-title text-center">Live Standings</h3>
             ${leaderboardHtml}
           </div>
         </div>
       `;
    }
    else if(m.state === 'REVIEW') {
       area.innerHTML = this.renderTournamentSummary();
    }
  },

  renderTournamentSummary() {
    const m = this.mp;
    const ranked = [...m.players].sort((a,b) => b.score - a.score);
    const podiumOrder = ranked.slice(0, 3);
    const rest = ranked.slice(3);

    const podiumHtml = podiumOrder.map((p, i) => {
      const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze';
      const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
      return `
        <div class="podium-place ${cls}">
          <div class="podium-rank">${medal}</div>
          <div class="podium-name">${p.name}${p.id===m.myId?' (You)':''}</div>
          <div class="podium-score">${p.score} pts</div>
        </div>
      `;
    }).join('');

    const restHtml = rest.length ? `
      <ul class="mp-leaderboard" style="max-width:500px; margin:1rem auto 0;">
        ${rest.map((p,i) => `<li class="${p.id===m.myId?'is-me':''}"><span>${i+4}. ${p.name}${p.id===m.myId?' (You)':''}</span><span class="score-badge">${p.score}</span></li>`).join('')}
      </ul>` : '';

    const statsRows = ranked.map(p => `
        <tr class="${p.id===m.myId?'is-me':''}">
          <td>${p.name}${p.id===m.myId?' (You)':''}</td>
          <td class="score-cell">${p.score}</td>
          <td>${p.accuracy ?? 0}%</td>
          <td>${p.correctCount ?? 0}</td>
          <td>${p.wrongCount ?? 0}</td>
          <td>${p.skippedCount ?? 0}</td>
        </tr>
      `).join('');

    const reviewHtml = m.answerLog.map((entry, i) => {
      const passed = entry.myAnswer === entry.correctAnswer;
      const tag = entry.myAnswer
        ? (passed ? `<span class="personal-feedback-tag passed">You got this correct! ✅</span>` : `<span class="personal-feedback-tag failed">Your Answer: ${entry.myAnswer} ❌</span>`)
        : `<span class="personal-feedback-tag failed">No Answer Submitted ❌</span>`;
      return `
        <div class="review-item">
          <div class="review-question-header">
            <p class="question-text" style="margin:0; font-size:1.1rem;"><strong>${i+1}.</strong> ${entry.question}</p>
            <span class="group-accuracy-badge">${entry.correctCount}/${entry.totalPlayers} got this right (${entry.groupAccuracy}%)</span>
          </div>
          <p class="review-correct-answer">Correct Answer: ${entry.correctAnswer}</p>
          ${tag}
          <p class="mt-1" style="font-size:0.95rem;">${entry.explanation}</p>
          <button class="btn btn-outline btn-mp-bookmark mt-1" data-question="${entry.question}" style="padding:0.4rem 0.9rem; font-size:0.85rem;">
            ${this.bookmarks.has(entry.question) ? '★ Bookmarked' : '☆ Bookmark this question'}
          </button>
        </div>
      `;
    }).join('');

    return `
      <div class="card text-center" style="border-top:4px solid #fbbf24;">
        <h2 style="font-size:2.2rem; color:#0b2b4a;">🏆 Tournament Over!</h2>
        <div class="podium-wrapper">${podiumHtml}</div>
        ${restHtml}
      </div>

      <div class="card">
        <h3 class="card-title">Player Statistics</h3>
        <div class="stats-table-wrapper">
          <table class="stats-table">
            <thead><tr><th>Name</th><th>Score</th><th>Accuracy</th><th>Correct</th><th>Wrong</th><th>Skipped</th></tr></thead>
            <tbody>${statsRows}</tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3 class="card-title">Question Review</h3>
        ${reviewHtml}
      </div>

      <div class="card text-center">
        <button class="btn btn-primary" onclick="App.showView('multiplayer')">Exit Lobby</button>
      </div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
