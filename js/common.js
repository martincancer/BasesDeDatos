(function () {
  window.createTabController = function createTabController(config) {
    const total = config.total;
    const onChange = config.onChange;

    return function showTab(name, idx) {
      document.querySelectorAll('.section').forEach((section) => section.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach((button) => button.classList.remove('active'));

      const target = document.getElementById('tab-' + name);
      if (target) target.classList.add('active');

      const navButton = document.querySelectorAll('.nav-btn')[idx];
      if (navButton) navButton.classList.add('active');

      if (typeof onChange === 'function') {
        onChange(name, idx);
      }

      const progress = document.getElementById('progress');
      if (progress && total) {
        progress.style.width = Math.round(((idx + 1) / total) * 100) + '%';
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  };

  window.setupQuiz = function setupQuiz(config) {
    const questions = config.questions || [];
    const messages = config.messages || {};
    const threshold = config.goodThreshold || 0.6;
    const htmlFeedback = Boolean(config.htmlFeedback);
    const htmlScore = Boolean(config.htmlScore);
    let quizState = Array(questions.length).fill(null);

    function setNodeContent(node, value, useHtml) {
      if (!node) return;
      if (useHtml) node.innerHTML = value;
      else node.textContent = value;
    }

    function renderQuiz() {
      const root = document.getElementById('quiz-root');
      if (!root) return;

      root.innerHTML = questions.map((item, qIndex) => `
        <div class="quiz-card" data-question="${qIndex}">
          <div class="quiz-q">
            <span class="q-num">Pregunta ${qIndex + 1}</span>
            ${item.question}
          </div>
          ${item.code ? `<div class="quiz-code">${item.code}</div>` : ''}
          <div class="options">
            ${item.options.map((option, oIndex) => `
              <button class="option" type="button" onclick="answerQuiz(${qIndex}, ${oIndex})">
                <span class="opt-letter">${String.fromCharCode(65 + oIndex)}</span>
                <span>${option}</span>
              </button>
            `).join('')}
          </div>
          <div class="feedback" id="feedback-${qIndex}"></div>
        </div>
      `).join('');
    }

    function updateQuizScore() {
      const score = quizState.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0);
      const scoreBox = document.getElementById('quiz-score');

      setNodeContent(document.getElementById('score-num'), `${score}/${questions.length}`, false);

      let label = messages.retry || 'Conviene repasar un poco m&aacute;s.';
      if (score === questions.length) label = messages.perfect || 'Excelente.';
      else if (score >= Math.ceil(questions.length * threshold)) label = messages.good || 'Buen trabajo.';

      setNodeContent(document.getElementById('score-label'), label, htmlScore);

      if (scoreBox) scoreBox.style.display = 'block';
    }

    window.answerQuiz = function answerQuiz(qIndex, optionIndex) {
      if (quizState[qIndex] !== null) return;
      quizState[qIndex] = optionIndex;

      const question = questions[qIndex];
      const card = document.querySelector(`[data-question="${qIndex}"]`);
      if (!card) return;

      const buttons = card.querySelectorAll('.option');
      buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correct) button.classList.add('correct');
        if (index === optionIndex && index !== question.correct) button.classList.add('wrong');
      });

      const feedback = document.getElementById(`feedback-${qIndex}`);
      const ok = optionIndex === question.correct;
      feedback.className = `feedback show ${ok ? 'ok' : 'err'}`;
      setNodeContent(feedback, ok ? question.feedbackCorrect : question.feedbackWrong, htmlFeedback);

      if (quizState.every((answer) => answer !== null)) {
        updateQuizScore();
      }
    };

    window.resetQuiz = function resetQuiz() {
      quizState = Array(questions.length).fill(null);
      renderQuiz();
      const scoreBox = document.getElementById('quiz-score');
      if (scoreBox) scoreBox.style.display = 'none';
    };

    renderQuiz();
  };

  window.setupImageModal = function setupImageModal() {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('image-modal-img');
    const titleNode = document.getElementById('image-modal-title');
    if (!modal || !img || !titleNode) return;

    window.openImageModal = function openImageModal(src, title) {
      img.src = src;
      img.alt = title;
      titleNode.textContent = title;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeImageModal = function closeImageModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      img.src = '';
      document.body.style.overflow = '';
    };
  };

  window.setupProjectorToggle = function setupProjectorToggle() {
    if (window.__projectorToggleReady) return;
    window.__projectorToggleReady = true;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && typeof window.closeImageModal === 'function') {
        window.closeImageModal();
      }

      if (event.key.toLowerCase() === 'p') {
        document.body.classList.toggle('projector');
      }
    });
  };
})();
