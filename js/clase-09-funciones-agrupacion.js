const tabThemeMap = {
  intro: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  funciones: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  groupby: {
    accent: '#a78bfa',
    soft: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.24)',
    title: '#c4b5fd'
  },
  having: {
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
    accent: '#2dd4bf',
    soft: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.24)',
    title: '#5eead4'
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
  total: 6,
  onChange: (name) => applyTabTheme(name)
});

applyTabTheme('intro');

const quizQuestions = [
  {
    question: '&iquest;Qu&eacute; hacen las funciones de agrupaci&oacute;n en SQL?',
    options: [
      'Modifican los valores almacenados en la tabla.',
      'Operan sobre un conjunto de filas y devuelven un valor agregado.',
      'Reemplazan la cl&aacute;usula <code>FROM</code>.',
      'Solo funcionan con columnas de texto.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Resumen un conjunto de datos en un solo valor.',
    feedbackWrong: 'Las funciones de agrupaci&oacute;n calculan totales, promedios, m&aacute;ximos, m&iacute;nimos o cantidades.'
  },
  {
    question: '&iquest;Cu&aacute;l es la diferencia entre <code>COUNT(*)</code> y <code>COUNT(columna)</code>?',
    options: [
      '<code>COUNT(*)</code> cuenta filas; <code>COUNT(columna)</code> no cuenta los valores nulos de esa columna.',
      'No hay diferencia en SQL Server.',
      '<code>COUNT(columna)</code> cuenta todas las filas incluyendo nulos.',
      '<code>COUNT(*)</code> solo funciona con claves primarias.'
    ],
    correct: 0,
    feedbackCorrect: 'Bien. Esa es una diferencia clave al contar registros.',
    feedbackWrong: 'Con una columna concreta, los <code>NULL</code> no se incluyen en el conteo.'
  },
  {
    question: '&iquest;Qu&eacute; funciones de agrupaci&oacute;n solo se pueden usar en columnas num&eacute;ricas?',
    options: [
      '<code>COUNT</code> y <code>MIN</code>',
      '<code>SUM</code> y <code>AVG</code>',
      '<code>MAX</code> y <code>COUNT</code>',
      'Todas requieren columnas num&eacute;ricas.'
    ],
    correct: 1,
    feedbackCorrect: 'Exacto. <code>SUM</code> y <code>AVG</code> suman y promedian valores num&eacute;ricos.',
    feedbackWrong: '<code>SUM</code> y <code>AVG</code> est&aacute;n pensadas para datos num&eacute;ricos.'
  },
  {
    question: 'Si en el <code>SELECT</code> hay funciones de agrupaci&oacute;n y tambi&eacute;n columnas sin agregar, deb&eacute;s:',
    options: [
      'Usar <code>ORDER BY</code> con esas columnas.',
      'Incluir esas columnas en la cl&aacute;usula <code>GROUP BY</code>.',
      'Eliminar las funciones de agrupaci&oacute;n.',
      'Usar <code>TOP</code> antes del <code>SELECT</code>.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. <code>GROUP BY</code> es obligatorio en ese caso.',
    feedbackWrong: 'Toda columna del <code>SELECT</code> que no est&eacute; dentro de una funci&oacute;n debe aparecer en <code>GROUP BY</code>.'
  },
  {
    question: '&iquest;Cu&aacute;l es la diferencia principal entre <code>WHERE</code> y <code>HAVING</code>?',
    options: [
      '<code>WHERE</code> filtra filas antes de agrupar; <code>HAVING</code> filtra grupos despu&eacute;s de agrupar.',
      'Son equivalentes y se pueden intercambiar siempre.',
      '<code>HAVING</code> filtra filas individuales antes del join.',
      '<code>WHERE</code> solo funciona con <code>COUNT</code>.'
    ],
    correct: 0,
    feedbackCorrect: 'Muy bien. Esa es la distinci&oacute;n central entre ambas cl&aacute;usulas.',
    feedbackWrong: '<code>WHERE</code> act&uacute;a sobre filas; <code>HAVING</code> sobre resultados ya agrupados.'
  },
  {
    question: 'Para mostrar solo los g&eacute;neros cuya suma de recaudaci&oacute;n supera un valor, conviene usar:',
    options: [
      '<code>WHERE SUM(Recaudacion) &gt; 1000000</code>',
      '<code>GROUP BY Genero HAVING SUM(Recaudacion) &gt; 1000000</code>',
      '<code>ORDER BY SUM(Recaudacion)</code> sin agrupar.',
      '<code>TOP 5 SUM(Recaudacion)</code>.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. <code>HAVING</code> filtra grupos seg&uacute;n el resultado agregado.',
    feedbackWrong: 'Las condiciones sobre funciones de agrupaci&oacute;n van en <code>HAVING</code>, no en <code>WHERE</code>.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya domin&aacute;s muy bien las funciones de agrupaci&oacute;n.',
    good: 'Buen trabajo. La idea de resumir datos con agregaciones ya est&aacute; bastante clara.',
    retry: 'Conviene repasar <code>COUNT</code>, <code>GROUP BY</code> y la diferencia entre <code>WHERE</code> y <code>HAVING</code>.'
  }
});

window.setupProjectorToggle();
