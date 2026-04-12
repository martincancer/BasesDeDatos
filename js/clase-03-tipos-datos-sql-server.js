window.showTab = window.createTabController({ total: 6 });

const quizQuestions = [
  {
    question: '&iquest;Qu&eacute; tipo conviene m&aacute;s para guardar un precio con exactitud?',
    options: ['FLOAT', 'DECIMAL(10,2)', 'BIT', 'CHAR'],
    correct: 1,
    feedbackCorrect: 'Correcto. DECIMAL permite trabajar con decimales exactos.',
    feedbackWrong: 'Para importes conviene usar DECIMAL y no FLOAT.'
  },
  {
    question: '&iquest;Qu&eacute; tipo guarda solo la fecha, sin hora?',
    options: ['TIME', 'DATETIMEOFFSET', 'DATE', 'DATETIME'],
    correct: 2,
    feedbackCorrect: 'Bien. DATE almacena solo la parte de fecha.',
    feedbackWrong: 'El tipo pensado para guardar solo fecha es DATE.'
  },
  {
    question: '&iquest;Qu&eacute; diferencia principal hay entre CHAR y VARCHAR?',
    options: [
      'CHAR almacena datos num&eacute;ricos y VARCHAR datos de texto.',
      'CHAR tiene longitud fija, mientras que VARCHAR tiene longitud variable.',
      'VARCHAR es m&aacute;s r&aacute;pido que CHAR en todos los casos.',
      'No hay ninguna diferencia.'
    ],
    correct: 1,
    feedbackCorrect: 'Exacto. El tipo de dato CHAR es fijo en su cantidad de caracteres mientras VARCHAR es variable.',
    feedbackWrong: 'La diferencia clave es la longitud, si es fija o no.'
  },
  {
    question: 'Si una columna solo indica verdadero o falso, el tipo m&aacute;s adecuado suele ser:',
    options: ['BIT', 'CHAR', 'VARBINARY', 'BINARY'],
    correct: 0,
    feedbackCorrect: 'S&iacute;. BIT representa valores l&oacute;gicos simples.',
    feedbackWrong: 'Para verdadero/falso el tipo adecuado es BIT.'
  },
  {
    question: '&iquest;Qu&eacute; tipo binario es variable en tama&ntilde;o?',
    options: ['BINARY', 'VARBINARY', 'INT', 'BIT'],
    correct: 1,
    feedbackCorrect: 'Correcto. VARBINARY se usa cuando el tama&ntilde;o puede cambiar.',
    feedbackWrong: 'El tipo variable para datos binarios es VARBINARY.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Elegiste muy bien los tipos de datos.',
    good: 'Buen trabajo. Ya distingu&iacute;s los tipos principales.',
    retry: 'Conviene repasar familias, usos y diferencias entre tipos.'
  }
});
