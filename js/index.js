const classCountNode = document.getElementById('class-count');
const publishedClasses = document.querySelectorAll('[data-class-item]').length;

if (classCountNode) {
  classCountNode.textContent = publishedClasses;
}

const evaluationModal = document.getElementById('evaluation-modal');
const evaluationClose = document.getElementById('evaluation-close');
const evaluationOk = document.getElementById('evaluation-ok');
const evaluationLastVisibleDate = new Date(2026, 4, 28, 19, 59, 59);

function closeEvaluationModal() {
  if (!evaluationModal) return;

  evaluationModal.classList.remove('open');
  evaluationModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openEvaluationModal() {
  if (!evaluationModal) return;
  if (new Date() > evaluationLastVisibleDate) return;

  evaluationModal.classList.add('open');
  evaluationModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (evaluationClose) evaluationClose.focus();
}

if (evaluationModal) {
  window.addEventListener('load', openEvaluationModal);
  evaluationClose?.addEventListener('click', closeEvaluationModal);
  evaluationOk?.addEventListener('click', closeEvaluationModal);

  evaluationModal.addEventListener('click', (event) => {
    if (event.target === evaluationModal) closeEvaluationModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && evaluationModal.classList.contains('open')) {
      closeEvaluationModal();
    }
  });
}
