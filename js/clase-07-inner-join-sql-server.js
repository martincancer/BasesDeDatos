const tabThemeMap = {
  intro: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  join: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  ejemplos: {
    accent: '#a78bfa',
    soft: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.24)',
    title: '#c4b5fd'
  },
  encadenados: {
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
    question: '&iquest;Qu&eacute; devuelve un <code>INNER JOIN</code>?',
    options: [
      'Todas las filas de la tabla izquierda, coincidan o no.',
      'Solo las filas que tienen coincidencia en ambas tablas.',
      'Solo las filas de la tabla derecha.',
      'Todas las filas de ambas tablas sin relaci&oacute;n.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Ese es justamente el comportamiento de INNER JOIN.',
    feedbackWrong: 'INNER JOIN conserva &uacute;nicamente las filas que encuentran correspondencia en ambos lados.'
  },
  {
    question: 'En una condici&oacute;n de join, lo m&aacute;s habitual es relacionar:',
    options: [
      'Una PK con una FK.',
      'Dos columnas sin relaci&oacute;n definida.',
      'Dos columnas de texto elegidas al azar.',
      'Siempre dos claves primarias entre s&iacute;.'
    ],
    correct: 0,
    feedbackCorrect: 'Bien. La uni&oacute;n suele apoyarse en el v&iacute;nculo PK-FK.',
    feedbackWrong: 'La forma m&aacute;s com&uacute;n es unir una clave for&aacute;nea con la clave primaria correspondiente.'
  },
  {
    question: '&iquest;Qu&eacute; ventaja tienen los alias de tabla?',
    options: [
      'Obligan a usar INNER JOIN y proh&iacute;ben JOIN.',
      'Hacen el c&oacute;digo m&aacute;s corto y ayudan a evitar ambig&uuml;edades.',
      'Reemplazan la cl&aacute;usula ON.',
      'Solo sirven en consultas con una sola tabla.'
    ],
    correct: 1,
    feedbackCorrect: 'Exacto. Los alias simplifican la escritura y mejoran la lectura.',
    feedbackWrong: 'Los alias se usan para abreviar nombres de tabla y distinguir columnas cuando hace falta.'
  },
  {
    question: 'En SQL Server, usar <code>JOIN</code> a secas en lugar de <code>INNER JOIN</code>:',
    options: [
      'Produce un resultado diferente.',
      'No est&aacute; permitido.',
      'Es equivalente a INNER JOIN.',
      'Convierte la consulta en LEFT JOIN.'
    ],
    correct: 2,
    feedbackCorrect: 'S&iacute;. En SQL Server ambas formas son equivalentes.',
    feedbackWrong: 'JOIN y INNER JOIN significan lo mismo en este contexto.'
  },
  {
    question: 'Si <code>Personaje</code> se relaciona con <code>Actor</code> y <code>Actor</code> con <code>Pais</code>, para obtener el pa&iacute;s del personaje conviene:',
    options: [
      'Unir Personaje directamente con Pais sin pasar por Actor.',
      'Encadenar los joins siguiendo la ruta Personaje - Actor - Pais.',
      'Evitar joins y usar solo WHERE.',
      'Usar TOP antes del JOIN.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Hay que seguir la cadena real de relaciones.',
    feedbackWrong: 'Cuando la relaci&oacute;n es indirecta, el join debe pasar por la tabla intermedia.'
  },
  {
    question: 'Si una fila de la tabla izquierda no encuentra coincidencia en la derecha durante un INNER JOIN:',
    options: [
      'Igual aparece en el resultado con NULL.',
      'Aparece duplicada.',
      'Queda fuera del resultado.',
      'Se mueve autom&aacute;ticamente a otra tabla.'
    ],
    correct: 2,
    feedbackCorrect: 'Muy bien. Esa fila se excluye del resultado final.',
    feedbackWrong: 'INNER JOIN no conserva filas sin coincidencia; simplemente las descarta.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya entend&eacute;s muy bien la l&oacute;gica de INNER JOIN.',
    good: 'Buen trabajo. La idea general de las consultas multitabla ya est&aacute; bastante clara.',
    retry: 'Conviene repasar c&oacute;mo se relacionan PK, FK y la condici&oacute;n del ON.'
  }
});

window.setupProjectorToggle();
