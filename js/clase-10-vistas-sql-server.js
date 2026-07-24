const tabThemeMap = {
  intro: {
    accent: '#2dd4bf',
    soft: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.24)',
    title: '#5eead4'
  },
  razones: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  crear: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  usar: {
    accent: '#a78bfa',
    soft: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.24)',
    title: '#c4b5fd'
  },
  modificar: {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.24)',
    title: '#fcd34d'
  },
  resumen: {
    accent: '#38bdf8',
    soft: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.24)',
    title: '#7dd3fc'
  },
  quiz: {
    accent: '#f87171',
    soft: 'rgba(248,113,113,0.12)',
    border: 'rgba(248,113,113,0.24)',
    title: '#fca5a5'
  }
};

function applyTabTheme(name) {
  const theme = tabThemeMap[name] || tabThemeMap.intro;
  document.documentElement.style.setProperty('--tab-accent', theme.accent);
  document.documentElement.style.setProperty('--tab-accent-soft', theme.soft);
  document.documentElement.style.setProperty('--tab-accent-border', theme.border);
  document.documentElement.style.setProperty('--tab-accent-title', theme.title);
}

window.showTab = window.createTabController({
  total: 7,
  onChange: (name) => applyTabTheme(name)
});

applyTabTheme('intro');

const quizQuestions = [
  {
    question: '&iquest;Qu&eacute; es una vista en SQL Server?',
    options: [
      'Una tabla virtual basada en una consulta guardada.',
      'Una copia completa e independiente de una tabla.',
      'Un tipo de dato para almacenar texto largo.',
      'Una sentencia para eliminar registros.'
    ],
    correct: 0,
    feedbackCorrect: 'Correcto. Una vista muestra datos obtenidos desde tablas mediante una consulta.',
    feedbackWrong: 'Una vista no guarda una copia propia de los datos: guarda una consulta para mostrarlos.'
  },
  {
    question: '&iquest;Qu&eacute; sentencia se usa para crear una vista nueva?',
    options: [
      '<code>INSERT VIEW</code>',
      '<code>CREATE VIEW</code>',
      '<code>SELECT VIEW</code>',
      '<code>NEW VIEW</code>'
    ],
    correct: 1,
    feedbackCorrect: 'Bien. <code>CREATE VIEW</code> crea una vista nueva.',
    feedbackWrong: 'Para crear una vista se usa <code>CREATE VIEW</code>, seguido del nombre y la consulta.'
  },
  {
    question: 'Para consultar una vista ya creada, podemos escribir:',
    options: [
      '<code>SELECT * FROM v_VendedoresActivos;</code>',
      '<code>OPEN VIEW v_VendedoresActivos;</code>',
      '<code>RUN v_VendedoresActivos;</code>',
      '<code>SHOW TABLE v_VendedoresActivos;</code>'
    ],
    correct: 0,
    feedbackCorrect: 'Exacto. Una vista se consulta como una tabla.',
    feedbackWrong: 'Las vistas se leen con <code>SELECT</code>, igual que una tabla.'
  },
  {
    question: '&iquest;Para qu&eacute; puede servir una vista?',
    options: [
      'Para simplificar consultas repetidas o complejas.',
      'Para reemplazar todas las claves primarias.',
      'Para borrar autom&aacute;ticamente tablas sin uso.',
      'Para impedir cualquier consulta con <code>JOIN</code>.'
    ],
    correct: 0,
    feedbackCorrect: 'Correcto. Una vista permite reutilizar consultas y presentar datos de forma m&aacute;s clara.',
    feedbackWrong: 'Las vistas son especialmente &uacute;tiles para simplificar y reutilizar consultas.'
  },
  {
    question: '&iquest;Qu&eacute; comando se utiliza para cambiar la definici&oacute;n de una vista existente?',
    options: [
      '<code>UPDATE VIEW</code>',
      '<code>CHANGE VIEW</code>',
      '<code>ALTER VIEW</code>',
      '<code>MODIFY SELECT</code>'
    ],
    correct: 2,
    feedbackCorrect: 'Muy bien. <code>ALTER VIEW</code> reemplaza la definici&oacute;n de una vista existente.',
    feedbackWrong: 'Para modificar la consulta guardada en una vista se usa <code>ALTER VIEW</code>.'
  },
  {
    question: 'Si cambian los datos en las tablas originales, &iquest;qu&eacute; ocurre con la vista?',
    options: [
      'La vista muestra esos cambios cuando se vuelve a consultar.',
      'La vista queda congelada con los datos anteriores.',
      'La vista se elimina autom&aacute;ticamente.',
      'La vista deja de poder usarse con <code>SELECT</code>.'
    ],
    correct: 0,
    feedbackCorrect: 'Exacto. La vista refleja el estado actual de las tablas base al consultarse.',
    feedbackWrong: 'Como la vista depende de las tablas base, muestra los datos actuales cuando se consulta.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya ten&eacute;s clara la idea de vistas en SQL Server.',
    good: 'Buen trabajo. El concepto de vista y sus comandos principales est&aacute;n bastante firmes.',
    retry: 'Conviene repasar qu&eacute; guarda una vista, c&oacute;mo se crea y c&oacute;mo se modifica.'
  }
});

window.setupImageModal();
window.setupProjectorToggle();
