const tabThemeMap = {
  select: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  where: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  operadores: {
    accent: '#a78bfa',
    soft: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.24)',
    title: '#c4b5fd'
  },
  order: {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.24)',
    title: '#fcd34d'
  },
  top: {
    accent: '#f87171',
    soft: 'rgba(248,113,113,0.12)',
    border: 'rgba(248,113,113,0.24)',
    title: '#fca5a5'
  },
  resumen: {
    accent: '#38bdf8',
    soft: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.24)',
    title: '#7dd3fc'
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
  total: 7,
  onChange: (name) => applyTabTheme(name)
});

applyTabTheme('select');

const quizQuestions = [
  {
    question: '&iquest;Cu&aacute;l es el orden correcto de estas cl&aacute;usulas en una consulta simple?',
    options: [
      'FROM - SELECT - WHERE - ORDER BY',
      'SELECT - FROM - WHERE - ORDER BY',
      'SELECT - WHERE - FROM - ORDER BY',
      'WHERE - SELECT - FROM - ORDER BY'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Ese es el orden que SQL Server espera en una consulta simple.',
    feedbackWrong: 'La secuencia correcta es <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>ORDER BY</code>.'
  },
  {
    question: 'Si quer&eacute;s ver solo algunas columnas de una tabla, conviene:',
    options: [
      'Usar siempre <code>SELECT *</code>.',
      'Listar expl&iacute;citamente las columnas necesarias.',
      'Usar <code>ORDER BY</code> antes del SELECT.',
      'Reemplazar FROM por WHERE.'
    ],
    correct: 1,
    feedbackCorrect: 'Bien. Listar columnas hace la consulta m&aacute;s clara y m&aacute;s eficiente.',
    feedbackWrong: 'Lo recomendable es pedir solo las columnas que necesit&aacute;s.'
  },
  {
    question: 'La condici&oacute;n correcta para buscar filas sin presupuesto registrado es:',
    options: [
      '<code>Presupuesto = NULL</code>',
      '<code>Presupuesto &lt;&gt; NULL</code>',
      '<code>Presupuesto IS NULL</code>',
      '<code>Presupuesto LIKE NULL</code>'
    ],
    correct: 2,
    feedbackCorrect: 'Exacto. Los nulos se comprueban con <code>IS NULL</code>.',
    feedbackWrong: 'En SQL Server no se usa <code>= NULL</code>; la forma correcta es <code>IS NULL</code>.'
  },
  {
    question: "La expresi&oacute;n <code>LIKE '%ROBOT%'</code> encuentra t&iacute;tulos que:",
    options: [
      'Empiezan exactamente con ROBOT y nada m&aacute;s.',
      'Terminan con ROBOT solamente.',
      'Contienen la palabra ROBOT en cualquier parte.',
      'No contienen la palabra ROBOT.'
    ],
    correct: 2,
    feedbackCorrect: 'Correcto. Los comodines a ambos lados indican "contiene".',
    feedbackWrong: 'Con <code>%</code> a ambos lados, el texto puede aparecer en cualquier parte del valor.'
  },
  {
    question: '&iquest;Qu&eacute; afirmaci&oacute;n es m&aacute;s correcta sobre <code>TOP 5</code>?',
    options: [
      'Siempre devuelve las primeras 5 filas m&aacute;s nuevas, aunque no haya ORDER BY.',
      'Conviene usarlo con <code>ORDER BY</code> para que el resultado tenga un criterio claro.',
      'Solo funciona si tambi&eacute;n hay WHERE.',
      'Reemplaza a FROM cuando la tabla es muy grande.'
    ],
    correct: 1,
    feedbackCorrect: 'Muy bien. <code>TOP</code> gana sentido cuando se combina con un orden definido.',
    feedbackWrong: 'Sin <code>ORDER BY</code>, <code>TOP</code> puede devolver filas arbitrarias.'
  },
  {
    question: 'Si mezcl&aacute;s <code>AND</code> y <code>OR</code> en una misma consulta, lo m&aacute;s seguro es:',
    options: [
      'No usar WHERE.',
      'Repetir SELECT dos veces.',
      'Usar par&eacute;ntesis para dejar clara la l&oacute;gica.',
      'Poner ORDER BY antes de WHERE.'
    ],
    correct: 2,
    feedbackCorrect: 'S&iacute;. Los par&eacute;ntesis ayudan a controlar la precedencia y evitar resultados inesperados.',
    feedbackWrong: 'Cuando hay varias condiciones l&oacute;gicas, los par&eacute;ntesis son la forma m&aacute;s clara y segura de expresarlas.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya manej&aacute;s bien la base de las consultas simples.',
    good: 'Buen trabajo. Ya ten&eacute;s bastante claro c&oacute;mo recuperar y filtrar datos.',
    retry: 'Conviene repasar el orden de cl&aacute;usulas y los operadores de b&uacute;squeda.'
  }
});

window.setupProjectorToggle();
