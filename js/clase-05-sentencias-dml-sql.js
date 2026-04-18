const tabThemeMap = {
  select: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  insert: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  update: {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.24)',
    title: '#fcd34d'
  },
  delete: {
    accent: '#f87171',
    soft: 'rgba(248,113,113,0.12)',
    border: 'rgba(248,113,113,0.24)',
    title: '#fca5a5'
  },
  quiz: {
    accent: '#2dd4bf',
    soft: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.24)',
    title: '#5eead4'
  }
};

function applyTabTheme(name) {
  const theme = tabThemeMap[name] || tabThemeMap.select;
  document.documentElement.style.setProperty('--tab-accent', theme.accent);
  document.documentElement.style.setProperty('--tab-accent-soft', theme.soft);
  document.documentElement.style.setProperty('--tab-accent-border', theme.border);
  document.documentElement.style.setProperty('--tab-accent-title', theme.title);
}

window.showTab = window.createTabController({
  total: 5,
  onChange: (name) => applyTabTheme(name)
});

applyTabTheme('select');

const quizQuestions = [
  {
    question: '&iquest;Cu&aacute;l de estas sentencias solo consulta datos y no modifica la tabla?',
    options: ['UPDATE', 'DELETE', 'SELECT', 'INSERT'],
    correct: 2,
    feedbackCorrect: 'Correcto. <code>SELECT</code> solo lee datos.',
    feedbackWrong: 'La &uacute;nica sentencia de esa lista que no modifica registros es <code>SELECT</code>.'
  },
  {
    question: 'Si quer&eacute;s agregar una fila nueva a una tabla, la sentencia correcta es:',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correct: 0,
    feedbackCorrect: 'Bien. <code>INSERT</code> agrega nuevos registros.',
    feedbackWrong: '<code>INSERT</code> es la sentencia que crea filas nuevas.'
  },
  {
    question: '&iquest;Qu&eacute; pasa si ejecut&aacute;s un <code>UPDATE</code> sin <code>WHERE</code>?',
    options: [
      'Solo cambia la primera fila de la tabla.',
      'Actualiza todas las filas de la tabla.',
      'Da error obligatoriamente.',
      'Convierte el UPDATE en SELECT.'
    ],
    correct: 1,
    feedbackCorrect: 'Exacto. Sin <code>WHERE</code>, el cambio se aplica a todas las filas.',
    feedbackWrong: 'Ese es el riesgo cl&aacute;sico: sin <code>WHERE</code>, <code>UPDATE</code> afecta todas las filas.'
  },
  {
    question: 'La sentencia <code>DELETE FROM Peliculas;</code> elimina:',
    options: [
      'Solo una fila elegida al azar.',
      'La tabla completa, incluida su estructura.',
      'Todas las filas de la tabla.',
      'Nada, porque falta el WHERE.'
    ],
    correct: 2,
    feedbackCorrect: 'Correcto. Borra todos los registros, pero la tabla sigue existiendo.',
    feedbackWrong: 'Sin <code>WHERE</code>, <code>DELETE</code> elimina todas las filas, no la estructura.'
  },
  {
    question: '&iquest;Cu&aacute;l es la opci&oacute;n m&aacute;s prolija y segura al escribir un <code>INSERT</code>?',
    options: [
      'Usar siempre <code>SELECT *</code> antes.',
      'Escribir el nombre de la tabla y dejar que SQL adivine las columnas.',
      'Indicar expl&iacute;citamente las columnas y luego los valores.',
      'Usar <code>WHERE</code> para decidir qu&eacute; columnas se completan.'
    ],
    correct: 2,
    feedbackCorrect: 'S&iacute;. Declarar las columnas hace el INSERT m&aacute;s claro y menos propenso a errores.',
    feedbackWrong: 'Lo recomendable es indicar de forma expl&iacute;cita las columnas que vas a completar.'
  },
  {
    question: 'Si primero hac&eacute;s un <code>SELECT</code> con una condici&oacute;n y luego us&aacute;s esa misma condici&oacute;n en un <code>DELETE</code>, la idea es:',
    options: [
      'Ver de antemano qu&eacute; filas se van a borrar.',
      'Duplicar los datos antes de borrarlos.',
      'Convertir el DELETE en una consulta de prueba.',
      'Hacer que el DELETE sea m&aacute;s r&aacute;pido.'
    ],
    correct: 0,
    feedbackCorrect: 'Muy bien. Es una buena pr&aacute;ctica para comprobar qu&eacute; registros ser&aacute;n afectados.',
    feedbackWrong: 'Ese SELECT previo sirve para verificar exactamente qu&eacute; filas coinciden con la condici&oacute;n.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya diferenci&aacute;s bastante bien qu&eacute; hace cada sentencia DML.',
    good: 'Buen trabajo. Los conceptos principales est&aacute;n claros.',
    retry: 'Conviene repasar especialmente cu&aacute;ndo una sentencia solo consulta y cu&aacute;ndo modifica datos.'
  }
});

window.setupProjectorToggle();
