const tabThemeMap = {
  intro: {
    accent: '#60a5fa',
    soft: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#93c5fd'
  },
  texto: {
    accent: '#4ade80',
    soft: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.24)',
    title: '#86efac'
  },
  fechas: {
    accent: '#f59e0b',
    soft: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.24)',
    title: '#fcd34d'
  },
  numericas: {
    accent: '#a78bfa',
    soft: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.24)',
    title: '#c4b5fd'
  },
  conversiones: {
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
    question: '&iquest;Qu&eacute; hacen las funciones de manipulaci&oacute;n de datos en una consulta <code>SELECT</code>?',
    options: [
      'Modifican permanentemente los valores almacenados en la tabla.',
      'Generan resultados derivados sin cambiar los datos originales.',
      'Reemplazan la cl&aacute;usula <code>FROM</code>.',
      'Solo funcionan dentro de <code>INSERT</code> y <code>UPDATE</code>.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Transforman el resultado de la consulta, no los datos guardados.',
    feedbackWrong: 'Estas funciones no alteran la tabla: solo procesan lo que devuelve el <code>SELECT</code>.'
  },
  {
    question: 'Si concaten&aacute;s texto con un valor de fecha usando el operador <code>+</code>, lo m&aacute;s probable es que necesites:',
    options: [
      'Usar <code>ORDER BY</code> antes de concatenar.',
      'Convertir la fecha con <code>CAST</code> o <code>CONVERT</code>.',
      'Eliminar la columna de fecha de la tabla.',
      'Reemplazar <code>+</code> por <code>TOP</code>.'
    ],
    correct: 1,
    feedbackCorrect: 'Bien. El operador <code>+</code> exige tipos compatibles entre cadenas y fechas.',
    feedbackWrong: 'Para mezclar texto y fechas con <code>+</code>, primero conviene convertir la fecha a texto.'
  },
  {
    question: '&iquest;Cu&aacute;l es la diferencia principal entre <code>CONCAT</code> y el operador <code>+</code> para cadenas?',
    options: [
      '<code>CONCAT</code> solo acepta dos valores.',
      '<code>CONCAT</code> admite varios argumentos y convierte tipos autom&aacute;ticamente.',
      'El operador <code>+</code> siempre convierte fechas sin ayuda.',
      'No hay diferencia en SQL Server.'
    ],
    correct: 1,
    feedbackCorrect: 'Exacto. <code>CONCAT</code> es m&aacute;s flexible para unir distintos tipos.',
    feedbackWrong: '<code>CONCAT</code> facilita concatenar varios valores sin preocuparte tanto por el tipo.'
  },
  {
    question: 'La funci&oacute;n <code>CHARINDEX</code> sirve para:',
    options: [
      'Contar cu&aacute;ntos caracteres tiene una cadena.',
      'Extraer una parte fija de un texto.',
      'Buscar la posici&oacute;n de un car&aacute;cter o subcadena dentro de un texto.',
      'Convertir texto a may&uacute;sculas.'
    ],
    correct: 2,
    feedbackCorrect: 'Correcto. Devuelve la posici&oacute;n donde aparece el valor buscado.',
    feedbackWrong: '<code>CHARINDEX</code> indica en qu&eacute; posici&oacute;n se encuentra un car&aacute;cter o fragmento.'
  },
  {
    question: 'Para calcular la edad de forma m&aacute;s precisa a partir de una fecha de nacimiento, conviene:',
    options: [
      'Usar solo <code>DATEDIFF(YEAR, ...)</code> siempre.',
      'Calcular la diferencia en d&iacute;as y dividir por 365.25.',
      'Usar <code>LEN(FechaNac)</code>.',
      'Aplicar <code>UPPER</code> sobre la fecha.'
    ],
    correct: 1,
    feedbackCorrect: 'Muy bien. La diferencia en d&iacute;as evita errores de cumplea&ntilde;os no cumplidos.',
    feedbackWrong: '<code>DATEDIFF(YEAR)</code> puede fallar si a&uacute;n no se cumpli&oacute; el a&ntilde;o; la diferencia en d&iacute;as es m&aacute;s fiable.'
  },
  {
    question: '&iquest;Qu&eacute; hace <code>CONVERT(varchar, FechaNac, 106)</code>?',
    options: [
      'Convierte la fecha a un formato de texto determinado por el estilo 106.',
      'Suma 106 d&iacute;as a la fecha.',
      'Elimina la hora y deja solo el a&ntilde;o.',
      'Reemplaza a <code>CAST</code> en todos los casos.'
    ],
    correct: 0,
    feedbackCorrect: 'S&iacute;. El tercer par&aacute;metro define el formato de salida.',
    feedbackWrong: 'El estilo 106 indica c&oacute;mo se mostrar&aacute; la fecha al convertirla a texto.'
  },
  {
    question: 'El operador <code>%</code> en SQL Server se utiliza para:',
    options: [
      'Calcular porcentajes sobre columnas.',
      'Obtener el resto de una divisi&oacute;n.',
      'Buscar patrones de texto como en <code>LIKE</code>.',
      'Redondear n&uacute;meros decimales.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. Es el operador m&oacute;dulo.',
    feedbackWrong: 'En operaciones num&eacute;ricas, <code>%</code> devuelve el resto de una divisi&oacute;n.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ya domin&aacute;s muy bien las funciones de manipulaci&oacute;n de datos.',
    good: 'Buen trabajo. La idea general de transformar datos en consultas ya est&aacute; bastante clara.',
    retry: 'Conviene repasar concatenaci&oacute;n, fechas, conversiones y funciones num&eacute;ricas.'
  }
});

window.setupProjectorToggle();
