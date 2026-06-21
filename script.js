/**
 * MedMaster - Main Application Script
 * Full implementation with Course filtering, Question count, Timer selection,
 * Practice, Exam, History, Bookmarks, Flashcards, and MCQ support.
 * Debug version with console logs.
 */

const App = {
  // Current view
  currentView: 'dashboard',

  // DOM elements
  viewContainer: null,

  // ---- Practice state ----
  practice: {
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    total: 0,
    results: [],
    course: 'all',
    topic: 'all',
    started: false,
  },

  // ---- Exam state ----
  exam: {
    questions: [],
    currentIndex: 0,
    answers: [],
    total: 0,
    score: 0,
    course: 'all',
    topic: 'all',
    started: false,
    finished: false,
    timer: 0,
    timerInterval: null,
    results: [],
    questionCount: 10,
    duration: 30,
  },

  // ---- Bookmarks ----
  bookmarks: new Set(),
  flashcard: {
    questions: [],
    currentIndex: 0,
    revealed: false,
    total: 0,
  },

  // ---- History ----
  history: [],

  // ---- Init ----
  init() {
    console.log('App initializing...');
    this.viewContainer = document.getElementById('view-container');
    console.log('viewContainer found?', !!this.viewContainer);
    this.loadHistory();
    this.loadBookmarks();
    this.setupNavigation();
    this.showView('dashboard');
  },

  // ---- Navigation ----
  setupNavigation() {
    console.log('Setting up navigation...');
    const navBtns = document.querySelectorAll('.nav-btn');
    console.log('navBtns count:', navBtns.length);
    navBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = btn.dataset.view;
        console.log('Navigation clicked:', view);
        if (view) {
          this.showView(view);
          navBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  },

  showView(viewName) {
    console.log('showView called with:', viewName);
    this.currentView = viewName;
    let html = '';
    try {
      switch (viewName) {
        case 'dashboard': html = this.renderDashboard(); break;
        case 'practice': html = this.renderPractice(); break;
        case 'exam': html = this.renderExam(); break;
        case 'history': html = this.renderHistory(); break;
        case 'bookmarks': html = this.renderBookmarks(); break;
        default: html = '<p>View not found.</p>';
      }
      console.log('HTML generated for', viewName, 'length:', html.length);
      this.viewContainer.innerHTML = html;
      console.log('innerHTML set successfully');
      this.bindViewEvents(viewName);
      console.log('Events bound for', viewName);
    } catch (error) {
      console.error('Error in showView for', viewName, ':', error);
      this.viewContainer.innerHTML = `<p style="color:red;">Error loading view: ${error.message}</p>`;
    }
  },

  // ---- Event Binding ----
  bindViewEvents(viewName) {
    console.log('bindViewEvents for', viewName);
    try {
      if (viewName === 'practice') {
        const startBtn = document.getElementById('start-practice');
        if (startBtn) startBtn.addEventListener('click', () => this.startPractice());
        const area = document.getElementById('practice-area');
        if (area) {
          area.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.btn-answer')) {
              const value = target.dataset.value;
              this.handlePracticeAnswer(value);
            } else if (target.matches('.btn-next')) {
              this.nextPracticeQuestion();
            } else if (target.matches('.btn-finish')) {
              this.finishPractice();
            } else if (target.matches('.btn-review-restart')) {
              this.startPractice();
            } else if (target.matches('.btn-bookmark')) {
              this.toggleBookmark(target.dataset.question);
            }
          });
        }
        this.bindPracticeCourseEvents();
      } else if (viewName === 'exam') {
        const startBtn = document.getElementById('start-exam');
        if (startBtn) startBtn.addEventListener('click', () => this.startExam());
        const area = document.getElementById('exam-area');
        if (area) {
          area.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.btn-exam-answer')) {
              const value = target.dataset.value;
              this.handleExamAnswer(value);
            } else if (target.matches('.btn-exam-finish')) {
              this.finishExam(false);
            } else if (target.matches('.btn-exam-restart')) {
              this.startExam();
            } else if (target.matches('.btn-bookmark')) {
              this.toggleBookmark(target.dataset.question);
            }
          });
        }
        this.bindExamCourseEvents();
      } else if (viewName === 'history') {
        const clearBtn = document.getElementById('clear-history-btn');
        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all history?')) {
              this.clearHistory();
              this.renderHistory();
            }
          });
        }
      } else if (viewName === 'bookmarks') {
        const flashBtn = document.getElementById('start-flashcards');
        if (flashBtn) flashBtn.addEventListener('click', () => this.startFlashcards());
        const area = document.getElementById('flashcard-area');
        if (area) {
          area.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.btn-flip')) {
              this.flipCard();
            } else if (target.matches('.btn-flash-next')) {
              this.nextFlashcard();
            } else if (target.matches('.btn-flash-prev')) {
              this.prevFlashcard();
            } else if (target.matches('.btn-flash-restart')) {
              this.startFlashcards();
            }
          });
        }
        const list = document.getElementById('bookmark-list');
        if (list) {
          list.addEventListener('click', (e) => {
            if (e.target.matches('.btn-remove-bookmark')) {
              const qText = e.target.dataset.question;
              this.toggleBookmark(qText);
              this.renderBookmarks();
            }
          });
        }
      }
    } catch (error) {
      console.error('Error in bindViewEvents for', viewName, ':', error);
    }
  },

  // ---- Course/Topic UI Helpers ----
  bindPracticeCourseEvents() {
    console.log('bindPracticeCourseEvents');
    const courseCheckboxes = document.querySelectorAll('#practice-courses input[type="checkbox"]');
    const topicSelect = document.getElementById('practice-topic');
    if (courseCheckboxes.length && topicSelect) {
      courseCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
          this.updatePracticeTopicOptions();
        });
      });
    } else {
      console.warn('Practice course checkboxes or topic select not found');
    }
  },

  bindExamCourseEvents() {
    console.log('bindExamCourseEvents');
    const courseCheckboxes = document.querySelectorAll('#exam-courses input[type="checkbox"]');
    const topicSelect = document.getElementById('exam-topic');
    if (courseCheckboxes.length && topicSelect) {
      courseCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
          this.updateExamTopicOptions();
          this.updateExamMaxQuestions();
        });
      });
    } else {
      console.warn('Exam course checkboxes or topic select not found');
    }
    if (topicSelect) {
      topicSelect.addEventListener('change', () => this.updateExamMaxQuestions());
    }
  },

  getSelectedCourses(prefix) {
    const checkboxes = document.querySelectorAll(`#${prefix}-courses input[type="checkbox"]:checked`);
    const values = [];
    checkboxes.forEach(cb => {
      if (cb.value !== 'all') values.push(cb.value);
    });
    const allChecked = document.querySelector(`#${prefix}-courses input[value="all"]:checked`);
    if (allChecked || values.length === 0) return ['all'];
    return values;
  },

  getSelectedTopic(prefix) {
    const select = document.getElementById(`${prefix}-topic`);
    return select ? select.value : 'all';
  },

  updatePracticeTopicOptions() {
    console.log('updatePracticeTopicOptions');
    const selectedCourses = this.getSelectedCourses('practice');
    const topicSelect = document.getElementById('practice-topic');
    if (!topicSelect) return;
    const currentTopic = topicSelect.value;
    let topics = [];
    try {
      if (selectedCourses.includes('all')) {
        topics = [...new Set(questions.map(q => q.topic))].sort();
      } else {
        const filtered = questions.filter(q => selectedCourses.includes(q.course));
        topics = [...new Set(filtered.map(q => q.topic))].sort();
      }
    } catch (error) {
      console.error('Error building topics:', error);
      topics = [];
    }
    let options = '<option value="all">All Topics</option>';
    topics.forEach(t => {
      const selected = (t === currentTopic) ? 'selected' : '';
      options += `<option value="${t}" ${selected}>${t}</option>`;
    });
    topicSelect.innerHTML = options;
  },

  updateExamTopicOptions() {
    console.log('updateExamTopicOptions');
    const selectedCourses = this.getSelectedCourses('exam');
    const topicSelect = document.getElementById('exam-topic');
    if (!topicSelect) return;
    const currentTopic = topicSelect.value;
    let topics = [];
    try {
      if (selectedCourses.includes('all')) {
        topics = [...new Set(questions.map(q => q.topic))].sort();
      } else {
        const filtered = questions.filter(q => selectedCourses.includes(q.course));
        topics = [...new Set(filtered.map(q => q.topic))].sort();
      }
    } catch (error) {
      console.error('Error building topics:', error);
      topics = [];
    }
    let options = '<option value="all">All Topics</option>';
    topics.forEach(t => {
      const selected = (t === currentTopic) ? 'selected' : '';
      options += `<option value="${t}" ${selected}>${t}</option>`;
    });
    topicSelect.innerHTML = options;
    this.updateExamMaxQuestions();
  },

  updateExamMaxQuestions() {
    const pool = this.getExamQuestionPool();
    const max = pool.length;
    const select = document.getElementById('exam-question-count');
    if (!select) return;
    const currentVal = parseInt(select.value);
    const maxDisplay = Math.min(max, 100);
    let options = '';
    for (let i = 5; i <= maxDisplay; i += 5) {
      const selected = (i === currentVal || (currentVal > maxDisplay && i === maxDisplay)) ? 'selected' : '';
      options += `<option value="${i}" ${selected}>${i}</option>`;
    }
    if (max < 5) {
      options = '<option value="5">5</option>';
    }
    select.innerHTML = options;
    if (parseInt(select.value) > max) {
      select.value = Math.min(max, 5);
    }
  },

  getExamQuestionPool() {
    const selectedCourses = this.getSelectedCourses('exam');
    const selectedTopic = this.getSelectedTopic('exam');
    let pool = [];
    try {
      pool = [...questions];
      if (!selectedCourses.includes('all')) {
        pool = pool.filter(q => selectedCourses.includes(q.course));
      }
      if (selectedTopic !== 'all') {
        pool = pool.filter(q => q.topic === selectedTopic);
      }
    } catch (error) {
      console.error('Error filtering exam pool:', error);
    }
    return pool;
  },

  // ---- LocalStorage Helpers ----
  loadHistory() {
    try {
      const data = localStorage.getItem('medmaster_history');
      if (data) this.history = JSON.parse(data);
      else this.history = [];
    } catch (e) {
      this.history = [];
    }
  },

  saveHistory() {
    try {
      localStorage.setItem('medmaster_history', JSON.stringify(this.history));
    } catch (e) {
      console.warn('Could not save history:', e);
      alert('Your browser storage is full. Please clear some history to continue saving.');
    }
  },

  clearHistory() {
    this.history = [];
    this.saveHistory();
  },

  addAttempt(attempt) {
    attempt.date = new Date().toISOString();
    this.history.unshift(attempt);
    if (this.history.length > 500) this.history.pop();
    this.saveHistory();
  },

  // ---- Bookmarks ----
  loadBookmarks() {
    try {
      const data = localStorage.getItem('medmaster_bookmarks');
      if (data) {
        const arr = JSON.parse(data);
        this.bookmarks = new Set(arr);
      } else {
        this.bookmarks = new Set();
      }
    } catch (e) {
      this.bookmarks = new Set();
    }
  },

  saveBookmarks() {
    try {
      localStorage.setItem('medmaster_bookmarks', JSON.stringify([...this.bookmarks]));
    } catch (e) {
      console.warn('Could not save bookmarks:', e);
    }
  },

  toggleBookmark(questionText) {
    if (this.bookmarks.has(questionText)) {
      this.bookmarks.delete(questionText);
    } else {
      this.bookmarks.add(questionText);
    }
    this.saveBookmarks();
    if (this.currentView === 'practice') {
      this.renderPracticeQuestion();
    } else if (this.currentView === 'exam' && this.exam.finished) {
      this.showExamReview();
    } else if (this.currentView === 'exam') {
      this.renderExamQuestion();
    } else if (this.currentView === 'bookmarks') {
      this.renderBookmarks();
    }
  },

  isBookmarked(questionText) {
    return this.bookmarks.has(questionText);
  },

  // ---- Timer ----
  stopExamTimer() {
    if (this.exam.timerInterval) {
      clearInterval(this.exam.timerInterval);
      this.exam.timerInterval = null;
    }
  },

  // ---- Practice Mode ----
  startPractice() {
    console.log('startPractice');
    const selectedCourses = this.getSelectedCourses('practice');
    const selectedTopic = this.getSelectedTopic('practice');
    let pool = [];
    try {
      pool = [...questions];
      if (!selectedCourses.includes('all')) {
        pool = pool.filter(q => selectedCourses.includes(q.course));
      }
      if (selectedTopic !== 'all') {
        pool = pool.filter(q => q.topic === selectedTopic);
      }
    } catch (error) {
      console.error('Error filtering practice pool:', error);
    }
    if (pool.length === 0) {
      alert('No questions available for the selected filters. Please adjust your selection.');
      return;
    }
    this.shuffleArray(pool);
    this.practice.questions = pool;
    this.practice.currentIndex = 0;
    this.practice.score = 0;
    this.practice.answered = false;
    this.practice.total = pool.length;
    this.practice.results = [];
    this.practice.started = true;
    this.practice.course = selectedCourses.join(',');
    this.practice.topic = selectedTopic;
    this.renderPracticeQuestion();
  },

  renderPracticeQuestion() {
    const area = document.getElementById('practice-area');
    if (!area) return;
    const p = this.practice;
    if (p.currentIndex >= p.total) {
      this.showPracticeReview();
      return;
    }
    const q = p.questions[p.currentIndex];
    const progress = `${p.currentIndex + 1} / ${p.total}`;
    const bookmarked = this.isBookmarked(q.question);
    const isTrueFalse = q.type === 'truefalse';

    let answerButtons = '';
    if (isTrueFalse) {
      answerButtons = `
        <div class="answer-buttons flex" style="gap:1rem; margin-top:1rem;">
          <button class="btn btn-success btn-answer" data-value="true">True</button>
          <button class="btn btn-danger btn-answer" data-value="false">False</button>
        </div>
      `;
    } else if (q.type === 'multiplechoice') {
      const optionsHtml = q.options.map((opt, idx) => {
        const selectedClass = (p.answered && p.results[p.currentIndex] && p.results[p.currentIndex].selected === opt) ? 'selected' : '';
        return `<button class="btn btn-option btn-answer ${selectedClass}" data-value="${opt}" ${p.answered ? 'disabled' : ''}>${opt}</button>`;
      }).join('');
      answerButtons = `
        <div class="answer-buttons flex" style="gap:0.75rem; margin-top:1rem; flex-wrap:wrap;">
          ${optionsHtml}
        </div>
      `;
    } else {
      answerButtons = `<p style="color:#b91c1c;">Unsupported question type.</p>`;
    }

    const feedbackHtml = p.answered ? this.getPracticeFeedbackHTML(p.currentIndex) : '';

    area.innerHTML = `
      <div class="card practice-card">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge topic-badge">${q.topic} › ${q.subTopic}</span>
          <span class="progress-text">${progress}</span>
        </div>
        <p class="question-text">${q.question}</p>
        ${answerButtons}
        <div class="flex" style="margin-top:0.5rem; gap:0.5rem;">
          <button class="btn btn-outline btn-bookmark" data-question="${q.question}">${bookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
        </div>
        <div id="feedback-area" class="mt-1" style="display:${p.answered ? 'block' : 'none'};">
          ${feedbackHtml}
        </div>
        <div class="mt-1 flex" style="justify-content:space-between;">
          <span>Score: ${p.score} / ${p.currentIndex + (p.answered ? 1 : 0)}</span>
          ${p.answered ? `<button class="btn btn-primary btn-next">Next →</button>` : ''}
        </div>
      </div>
    `;
  },

  getPracticeFeedbackHTML(index) {
    const q = this.practice.questions[index];
    const result = this.practice.results[index];
    if (!result) return '';
    const isCorrect = result.selected === result.correct;
    const correctDisplay = result.correct;
    const selectedDisplay = result.selected;
    return `
      <div class="feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}" style="padding:0.75rem; border-radius:8px; background:${isCorrect ? '#dcfce7' : '#fee2e2'};">
        <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong>
        ${q.type === 'multiplechoice' ? `<p>Your answer: ${selectedDisplay} | Correct: ${correctDisplay}</p>` : ''}
        <p>${q.explanation}</p>
      </div>
    `;
  },

  handlePracticeAnswer(selected) {
    const p = this.practice;
    if (p.answered) return;
    const q = p.questions[p.currentIndex];
    const isCorrect = (q.type === 'truefalse') ? (selected === String(q.answer)) : (selected === q.correctAnswer);
    if (isCorrect) p.score += 1;
    p.results[p.currentIndex] = {
      question: q.question,
      selected: selected,
      correct: q.type === 'truefalse' ? String(q.answer) : q.correctAnswer,
      explanation: q.explanation,
      topic: q.topic,
      subTopic: q.subTopic,
      course: q.course,
      type: q.type,
      options: q.options || [],
    };
    p.answered = true;
    this.renderPracticeQuestion();
  },

  nextPracticeQuestion() {
    const p = this.practice;
    if (!p.answered) return;
    p.currentIndex += 1;
    p.answered = false;
    if (p.currentIndex >= p.total) {
      this.showPracticeReview();
    } else {
      this.renderPracticeQuestion();
    }
  },

  showPracticeReview() {
    const area = document.getElementById('practice-area');
    if (!area) return;
    const p = this.practice;
    const total = p.total;
    const correct = p.score;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    this.addAttempt({
      mode: 'Practice',
      course: p.course,
      topic: p.topic,
      score: correct,
      total: total,
      percentage: percentage,
    });

    let incorrectList = '';
    const incorrect = p.results.filter(r => r.selected !== r.correct);
    if (incorrect.length > 0) {
      incorrectList = incorrect.map((r, i) => {
        const bookmarked = this.isBookmarked(r.question);
        let answerDisplay = '';
        if (r.type === 'truefalse') {
          answerDisplay = `Your answer: ${r.selected === 'true' ? 'True' : 'False'} | Correct: ${r.correct === 'true' ? 'True' : 'False'}`;
        } else {
          answerDisplay = `Your answer: ${r.selected} | Correct: ${r.correct}`;
        }
        return `
          <div class="card" style="background:#f8fafc; margin-bottom:0.75rem;">
            <p><strong>${i+1}.</strong> ${r.question}</p>
            <p>${answerDisplay}</p>
            <p class="explanation">${r.explanation}</p>
            <span class="badge">${r.topic} › ${r.subTopic}</span>
            <button class="btn btn-outline btn-bookmark" data-question="${r.question}" style="margin-left:1rem;">${bookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
          </div>
        `;
      }).join('');
    } else {
      incorrectList = '<p>Perfect! All correct.</p>';
    }

    area.innerHTML = `
      <div class="card practice-review">
        <h3>Practice Complete</h3>
        <p><strong>Score:</strong> ${correct} / ${total} (${percentage}%)</p>
        <div class="progress-bar" style="background:#e2e8f0; border-radius:8px; height:8px; margin:1rem 0;">
          <div style="width:${percentage}%; background:#0b2b4a; height:100%; border-radius:8px;"></div>
        </div>
        <h4>Incorrect Questions</h4>
        <div id="incorrect-list">${incorrectList}</div>
        <button class="btn btn-primary btn-review-restart">Practice Again</button>
      </div>
    `;
  },

  finishPractice() {
    if (this.practice.currentIndex < this.practice.total) {
      this.practice.currentIndex = this.practice.total;
    }
    this.showPracticeReview();
  },

  // ---- Exam Mode ----
  startExam() {
    console.log('startExam');
    this.stopExamTimer();
    const pool = this.getExamQuestionPool();
    if (pool.length === 0) {
      alert('No questions available for the selected filters. Please adjust your selection.');
      return;
    }

    const questionCountSelect = document.getElementById('exam-question-count');
    let requestedCount = parseInt(questionCountSelect ? questionCountSelect.value : 10);
    requestedCount = Math.min(requestedCount, pool.length);
    if (requestedCount < 5) requestedCount = Math.min(5, pool.length);

    this.shuffleArray(pool);
    const selectedQuestions = pool.slice(0, requestedCount);

    const durationSelect = document.getElementById('exam-duration');
    const duration = parseInt(durationSelect ? durationSelect.value : 30);

    this.exam.questions = selectedQuestions;
    this.exam.currentIndex = 0;
    this.exam.answers = new Array(selectedQuestions.length).fill(null);
    this.exam.total = selectedQuestions.length;
    this.exam.score = 0;
    this.exam.started = true;
    this.exam.finished = false;
    this.exam.results = [];
    this.exam.questionCount = requestedCount;
    this.exam.duration = duration;
    this.exam.course = this.getSelectedCourses('exam').join(',');
    this.exam.topic = this.getSelectedTopic('exam');

    this.exam.timer = duration * 60;
    this.renderExamQuestion();
    this.exam.timerInterval = setInterval(() => {
      this.exam.timer -= 1;
      this.updateExamTimerDisplay();
      if (this.exam.timer <= 0) {
        this.stopExamTimer();
        this.finishExam(true);
      }
    }, 1000);
  },

  renderExamQuestion() {
    const area = document.getElementById('exam-area');
    if (!area) return;
    const e = this.exam;
    if (e.currentIndex >= e.total || e.finished) {
      this.showExamReview();
      return;
    }
    const q = e.questions[e.currentIndex];
    const progress = `${e.currentIndex + 1} / ${e.total}`;
    const answered = e.answers[e.currentIndex] !== null;
    const selected = e.answers[e.currentIndex];
    const bookmarked = this.isBookmarked(q.question);
    const isTrueFalse = q.type === 'truefalse';

    let answerButtons = '';
    if (isTrueFalse) {
      answerButtons = `
        <div class="answer-buttons flex" style="gap:1rem; margin-top:1rem;">
          <button class="btn btn-success btn-exam-answer ${selected === 'true' ? 'selected' : ''}" data-value="true">True</button>
          <button class="btn btn-danger btn-exam-answer ${selected === 'false' ? 'selected' : ''}" data-value="false">False</button>
        </div>
      `;
    } else if (q.type === 'multiplechoice') {
      const optionsHtml = q.options.map((opt, idx) => {
        const selClass = (selected === opt) ? 'selected' : '';
        return `<button class="btn btn-option btn-exam-answer ${selClass}" data-value="${opt}" ${answered ? 'disabled' : ''}>${opt}</button>`;
      }).join('');
      answerButtons = `
        <div class="answer-buttons flex" style="gap:0.75rem; margin-top:1rem; flex-wrap:wrap;">
          ${optionsHtml}
        </div>
      `;
    } else {
      answerButtons = `<p style="color:#b91c1c;">Unsupported question type.</p>`;
    }

    area.innerHTML = `
      <div class="card exam-card">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge topic-badge">${q.topic} › ${q.subTopic}</span>
          <span class="progress-text">${progress}</span>
        </div>
        <div class="exam-timer" style="font-size:1.2rem; font-weight:bold; color:#b91c1c; margin:0.5rem 0;">
          ⏱️ <span id="exam-timer-display">${this.formatTime(e.timer)}</span>
        </div>
        <p class="question-text">${q.question}</p>
        ${answerButtons}
        ${answered ? `<p style="margin-top:0.5rem; color:#475569;">Answered: ${selected}</p>` : `<p style="margin-top:0.5rem; color:#94a3b8;">Select an option</p>`}
        <div class="flex" style="margin-top:0.5rem; gap:0.5rem;">
          <button class="btn btn-outline btn-bookmark" data-question="${q.question}">${bookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
        </div>
        <div class="mt-1 flex" style="justify-content:space-between;">
          <span>Answered: ${e.answers.filter(a => a !== null).length} / ${e.total}</span>
          <button class="btn btn-primary btn-exam-finish">Finish Exam</button>
        </div>
        <div class="progress-bar" style="background:#e2e8f0; border-radius:8px; height:6px; margin-top:0.75rem;">
          <div style="width:${(e.answers.filter(a => a !== null).length / e.total) * 100}%; background:#0b2b4a; height:100%; border-radius:8px;"></div>
        </div>
      </div>
    `;
  },

  updateExamTimerDisplay() {
    const display = document.getElementById('exam-timer-display');
    if (display) {
      display.textContent = this.formatTime(this.exam.timer);
    }
  },

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  },

  handleExamAnswer(selected) {
    const e = this.exam;
    if (e.finished) return;
    if (e.currentIndex >= e.total) return;
    e.answers[e.currentIndex] = selected;
    this.renderExamQuestion();
    if (e.currentIndex < e.total - 1) {
      setTimeout(() => {
        if (!e.finished) {
          e.currentIndex += 1;
          this.renderExamQuestion();
        }
      }, 800);
    } else {
      setTimeout(() => {
        if (!e.finished) {
          this.finishExam(false);
        }
      }, 1000);
    }
  },

  finishExam(autoTimeout = false) {
    const e = this.exam;
    if (e.finished) return;
    this.stopExamTimer();
    e.finished = true;
    let correct = 0;
    const results = [];
    for (let i = 0; i < e.total; i++) {
      const q = e.questions[i];
      const selected = e.answers[i];
      let isCorrect = false;
      if (q.type === 'truefalse') {
        isCorrect = (selected === String(q.answer));
      } else if (q.type === 'multiplechoice') {
        isCorrect = (selected === q.correctAnswer);
      }
      if (isCorrect) correct += 1;
      results.push({
        question: q.question,
        selected: selected,
        correct: q.type === 'truefalse' ? String(q.answer) : q.correctAnswer,
        explanation: q.explanation,
        topic: q.topic,
        subTopic: q.subTopic,
        course: q.course,
        type: q.type,
        options: q.options || [],
      });
    }
    e.score = correct;
    e.results = results;
    this.addAttempt({
      mode: 'Exam',
      course: e.course,
      topic: e.topic,
      score: correct,
      total: e.total,
      percentage: Math.round((correct / e.total) * 100),
      duration: e.duration,
      questionCount: e.questionCount,
    });
    this.showExamReview();
  },

  showExamReview() {
    const area = document.getElementById('exam-area');
    if (!area) return;
    const e = this.exam;
    const total = e.total;
    const correct = e.score;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    let incorrectList = '';
    const incorrect = e.results.filter(r => r.selected !== r.correct);
    if (incorrect.length > 0) {
      incorrectList = incorrect.map((r, i) => {
        const bookmarked = this.isBookmarked(r.question);
        let answerDisplay = '';
        if (r.type === 'truefalse') {
          answerDisplay = `Your answer: ${r.selected === 'true' ? 'True' : r.selected === 'false' ? 'False' : 'Not answered'} | Correct: ${r.correct === 'true' ? 'True' : 'False'}`;
        } else {
          answerDisplay = `Your answer: ${r.selected || 'Not answered'} | Correct: ${r.correct}`;
        }
        return `
          <div class="card" style="background:#f8fafc; margin-bottom:0.75rem;">
            <p><strong>${i+1}.</strong> ${r.question}</p>
            <p>${answerDisplay}</p>
            <p class="explanation">${r.explanation}</p>
            <span class="badge">${r.topic} › ${r.subTopic}</span>
            <button class="btn btn-outline btn-bookmark" data-question="${r.question}" style="margin-left:1rem;">${bookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
          </div>
        `;
      }).join('');
    } else {
      incorrectList = '<p>Perfect! All correct.</p>';
    }

    area.innerHTML = `
      <div class="card exam-review">
        <h3>Exam Complete</h3>
        <p><strong>Score:</strong> ${correct} / ${total} (${percentage}%)</p>
        <div class="progress-bar" style="background:#e2e8f0; border-radius:8px; height:8px; margin:1rem 0;">
          <div style="width:${percentage}%; background:#0b2b4a; height:100%; border-radius:8px;"></div>
        </div>
        <h4>Incorrect Questions</h4>
        <div id="incorrect-list">${incorrectList}</div>
        <button class="btn btn-primary btn-exam-restart">Start New Exam</button>
      </div>
    `;
  },

  // ---- Bookmarks & Flashcards ----
  renderBookmarks() {
    console.log('renderBookmarks');
    const bookmarkList = [...this.bookmarks];
    let listHtml = '';
    if (bookmarkList.length === 0) {
      listHtml = '<p>No bookmarks yet. Bookmark questions during practice or review.</p>';
    } else {
      try {
        const bookmarkedQuestions = questions.filter(q => this.bookmarks.has(q.question));
        if (bookmarkedQuestions.length === 0) {
          listHtml = '<p>Bookmarks exist but questions not found. Please re-add.</p>';
        } else {
          listHtml = bookmarkedQuestions.map(q => `
            <div class="card bookmark-item" style="margin-bottom:0.75rem;">
              <div class="flex" style="justify-content:space-between; align-items:center;">
                <span class="badge topic-badge">${q.topic} › ${q.subTopic}</span>
                <button class="btn btn-danger btn-remove-bookmark" data-question="${q.question}">Remove</button>
              </div>
              <p>${q.question}</p>
              <p style="font-size:0.9rem; color:#475569;">Answer: ${q.type === 'truefalse' ? (q.answer ? 'True' : 'False') : q.correctAnswer}</p>
            </div>
          `).join('');
        }
      } catch (error) {
        console.error('Error building bookmark list:', error);
        listHtml = '<p>Error loading bookmarks.</p>';
      }
    }

    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title">Bookmarks</h2>
          <p>Your saved questions.</p>
          <button class="btn btn-primary" id="start-flashcards" ${bookmarkList.length === 0 ? 'disabled' : ''}>Start Flashcards</button>
          <div id="flashcard-area" class="mt-1">
            <!-- Flashcard will render here -->
          </div>
          <div id="bookmark-list" class="mt-1">
            ${listHtml}
          </div>
        </div>
      </div>
    `;
  },

  startFlashcards() {
    const bookmarkedQuestions = questions.filter(q => this.bookmarks.has(q.question));
    if (bookmarkedQuestions.length === 0) {
      alert('No bookmarked questions. Please bookmark some first.');
      return;
    }
    this.flashcard.questions = bookmarkedQuestions;
    this.flashcard.currentIndex = 0;
    this.flashcard.revealed = false;
    this.flashcard.total = bookmarkedQuestions.length;
    this.renderFlashcard();
  },

  renderFlashcard() {
    const area = document.getElementById('flashcard-area');
    if (!area) return;
    const f = this.flashcard;
    if (f.total === 0) {
      area.innerHTML = '<p>No flashcards to show.</p>';
      return;
    }
    const q = f.questions[f.currentIndex];
    const progress = `${f.currentIndex + 1} / ${f.total}`;
    let answerText = '';
    if (q.type === 'truefalse') {
      answerText = q.answer ? 'True' : 'False';
    } else {
      answerText = q.correctAnswer;
    }
    area.innerHTML = `
      <div class="card flashcard">
        <div class="flex" style="justify-content:space-between; align-items:center;">
          <span class="badge topic-badge">${q.topic} › ${q.subTopic}</span>
          <span class="progress-text">${progress}</span>
        </div>
        <div class="flashcard-question" style="font-size:1.2rem; margin:1rem 0;">
          ${q.question}
        </div>
        <div class="flashcard-answer" style="display:${f.revealed ? 'block' : 'none'}; margin:1rem 0; padding:0.75rem; background:#f1f5f9; border-radius:8px;">
          <strong>Answer:</strong> ${answerText}
          <p style="margin-top:0.5rem; font-size:0.95rem; color:#475569;">${q.explanation}</p>
        </div>
        <div class="flex" style="gap:1rem; justify-content:center;">
          <button class="btn btn-outline btn-flash-prev" ${f.currentIndex === 0 ? 'disabled' : ''}>Previous</button>
          <button class="btn btn-primary btn-flip">${f.revealed ? 'Hide Answer' : 'Reveal Answer'}</button>
          <button class="btn btn-outline btn-flash-next" ${f.currentIndex === f.total - 1 ? 'disabled' : ''}>Next</button>
        </div>
        <div style="margin-top:1rem;">
          <button class="btn btn-secondary btn-flash-restart">Restart</button>
        </div>
      </div>
    `;
  },

  flipCard() {
    this.flashcard.revealed = !this.flashcard.revealed;
    this.renderFlashcard();
  },

  nextFlashcard() {
    if (this.flashcard.currentIndex < this.flashcard.total - 1) {
      this.flashcard.currentIndex += 1;
      this.flashcard.revealed = false;
      this.renderFlashcard();
    }
  },

  prevFlashcard() {
    if (this.flashcard.currentIndex > 0) {
      this.flashcard.currentIndex -= 1;
      this.flashcard.revealed = false;
      this.renderFlashcard();
    }
  },

  // ---- Helper ----
  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // ---- View Renderers ----
  renderDashboard() {
    console.log('renderDashboard');
    const totalAttempts = this.history.length;
    const completed = this.history.filter(h => h.score !== undefined && h.total > 0);
    let avgScore = 0, highest = 0, lowest = 100, totalQ = 0, correctQ = 0;
    if (completed.length > 0) {
      const scores = completed.map(h => (h.score / h.total) * 100);
      avgScore = Math.round(scores.reduce((a,b) => a+b, 0) / scores.length);
      highest = Math.round(Math.max(...scores));
      lowest = Math.round(Math.min(...scores));
      totalQ = completed.reduce((sum, h) => sum + h.total, 0);
      correctQ = completed.reduce((sum, h) => sum + h.score, 0);
    }
    const accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;

    const courseStats = {};
    completed.forEach(h => {
      if (h.course && h.course !== 'all') {
        const courses = h.course.split(',').filter(c => c !== 'all');
        courses.forEach(c => {
          if (!courseStats[c]) courseStats[c] = { correct: 0, total: 0 };
          courseStats[c].correct += h.score;
          courseStats[c].total += h.total;
        });
      }
    });
    let weakest = 'N/A', strongest = 'N/A';
    let weakPct = 100, strongPct = 0;
    for (const [course, stats] of Object.entries(courseStats)) {
      const pct = (stats.correct / stats.total) * 100;
      if (pct < weakPct) { weakPct = pct; weakest = course; }
      if (pct > strongPct) { strongPct = pct; strongest = course; }
    }

    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title">Dashboard</h2>
          <div class="stats-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap:1rem;">
            <div class="stat-card"><strong>Attempts</strong><br><span style="font-size:2rem;">${totalAttempts}</span></div>
            <div class="stat-card"><strong>Avg Score</strong><br><span style="font-size:2rem;">${avgScore}%</span></div>
            <div class="stat-card"><strong>Highest</strong><br><span style="font-size:2rem;">${highest}%</span></div>
            <div class="stat-card"><strong>Lowest</strong><br><span style="font-size:2rem;">${lowest}%</span></div>
            <div class="stat-card"><strong>Accuracy</strong><br><span style="font-size:2rem;">${accuracy}%</span></div>
            <div class="stat-card"><strong>Questions</strong><br><span style="font-size:2rem;">${totalQ}</span></div>
          </div>
          <div class="flex" style="margin-top:1rem; gap:1rem;">
            <div class="card" style="flex:1;"><strong>Weakest Course:</strong> ${weakest} (${Math.round(weakPct)}%)</div>
            <div class="card" style="flex:1;"><strong>Strongest Course:</strong> ${strongest} (${Math.round(strongPct)}%)</div>
          </div>
        </div>
      </div>
    `;
  },

  // ---- Practice Render ----
  renderPractice() {
    console.log('renderPractice');
    try {
      const courses = this.getUniqueCourses();
      const courseCheckboxes = courses.map(c => `
        <label style="margin-right:0.5rem;">
          <input type="checkbox" value="${c}" checked> ${c}
        </label>
      `).join('');

      return `
        <div class="container">
          <div class="card">
            <h2 class="card-title">Practice Mode</h2>
            <p>Practice questions with immediate feedback.</p>
            <div style="margin-top:1rem;">
              <label><strong>Select Courses:</strong></label>
              <div id="practice-courses" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:0.5rem 0;">
                <label style="margin-right:0.5rem;">
                  <input type="checkbox" value="all" checked> All Courses
                </label>
                ${courseCheckboxes}
              </div>
              <label for="practice-topic"><strong>Topic:</strong></label>
              <select id="practice-topic" class="btn" style="padding:0.4rem 1rem; border-radius:8px; border:1px solid #ccc; margin:0.5rem 0;">
                <option value="all">All Topics</option>
              </select>
              <button class="btn btn-primary" id="start-practice">Start Practice</button>
            </div>
            <div id="practice-area" class="mt-1">
              <p>Select courses and topic, then click "Start Practice".</p>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Error in renderPractice:', error);
      return `<p style="color:red;">Error rendering Practice: ${error.message}</p>`;
    }
  },

  // ---- Exam Render ----
  renderExam() {
    console.log('renderExam');
    try {
      const courses = this.getUniqueCourses();
      const courseCheckboxes = courses.map(c => `
        <label style="margin-right:0.5rem;">
          <input type="checkbox" value="${c}" checked> ${c}
        </label>
      `).join('');

      const totalQ = questions.length;
      const maxDisplay = Math.min(totalQ, 100);
      let qOptions = '';
      for (let i = 5; i <= maxDisplay; i += 5) {
        qOptions += `<option value="${i}" ${i === 10 ? 'selected' : ''}>${i}</option>`;
      }
      if (maxDisplay < 5) qOptions = '<option value="5">5</option>';

      let timeOptions = '';
      for (let i = 5; i <= 60; i += 5) {
        timeOptions += `<option value="${i}" ${i === 30 ? 'selected' : ''}>${i} min</option>`;
      }

      return `
        <div class="container">
          <div class="card">
            <h2 class="card-title">Exam Mode</h2>
            <p>Timed exam with no feedback until the end.</p>
            <div style="margin-top:1rem;">
              <label><strong>Select Courses:</strong></label>
              <div id="exam-courses" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:0.5rem 0;">
                <label style="margin-right:0.5rem;">
                  <input type="checkbox" value="all" checked> All Courses
                </label>
                ${courseCheckboxes}
              </div>
              <label for="exam-topic"><strong>Topic:</strong></label>
              <select id="exam-topic" class="btn" style="padding:0.4rem 1rem; border-radius:8px; border:1px solid #ccc; margin:0.5rem 0;">
                <option value="all">All Topics</option>
              </select>
              <div style="display:flex; flex-wrap:wrap; gap:1rem; margin:0.5rem 0;">
                <div>
                  <label for="exam-question-count"><strong>Questions:</strong></label>
                  <select id="exam-question-count" class="btn" style="padding:0.4rem 1rem; border-radius:8px; border:1px solid #ccc;">
                    ${qOptions}
                  </select>
                </div>
                <div>
                  <label for="exam-duration"><strong>Time:</strong></label>
                  <select id="exam-duration" class="btn" style="padding:0.4rem 1rem; border-radius:8px; border:1px solid #ccc;">
                    ${timeOptions}
                  </select>
                </div>
              </div>
              <button class="btn btn-primary" id="start-exam">Start Exam</button>
            </div>
            <div id="exam-area" class="mt-1">
              <p>Select courses, topic, number of questions, and time, then click "Start Exam".</p>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Error in renderExam:', error);
      return `<p style="color:red;">Error rendering Exam: ${error.message}</p>`;
    }
  },

  // ---- History Render ----
  renderHistory() {
    console.log('renderHistory');
    let historyHtml = '';
    if (this.history.length === 0) {
      historyHtml = '<p>No attempts yet.</p>';
    } else {
      historyHtml = this.history.map((h, i) => `
        <div class="card history-item" style="margin-bottom:0.75rem;">
          <div class="flex" style="justify-content:space-between; flex-wrap:wrap;">
            <span><strong>${h.mode}</strong> · ${h.course || 'All'} · ${h.topic || 'All'}</span>
            <span>${new Date(h.date).toLocaleString()}</span>
          </div>
          <div>Score: ${h.score} / ${h.total} (${h.percentage}%)</div>
          ${h.duration ? `<div>Time: ${h.duration} min · Questions: ${h.questionCount || h.total}</div>` : ''}
        </div>
      `).join('');
    }
    return `
      <div class="container">
        <div class="card">
          <h2 class="card-title">History</h2>
          <div id="history-list">${historyHtml}</div>
          ${this.history.length > 0 ? `<button class="btn btn-danger" id="clear-history-btn" style="margin-top:1rem;">Clear All History</button>` : ''}
        </div>
      </div>
    `;
  },

  getUniqueCourses() {
    try {
      const courses = [...new Set(questions.map(q => q.course))].sort();
      return courses;
    } catch (error) {
      console.error('Error getting unique courses:', error);
      return [];
    }
  },

  // ---- Topic Options (for initial render) ----
  getTopicOptions() {
    try {
      const topics = [...new Set(questions.map(q => q.topic))].sort();
      return topics.map(t => `<option value="${t}">${t}</option>`).join('');
    } catch (error) {
      console.error('Error getting topic options:', error);
      return '';
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});