window.showTab = window.createTabController({ total: 4 });

window.showNorm = function showNorm(id) {
  document.querySelectorAll('.norm-pane').forEach((pane) => pane.classList.remove('active'));
  document.querySelectorAll('.norm-tab').forEach((tab) => tab.classList.remove('active'));

  const pane = document.getElementById('npane-' + id);
  if (pane) pane.classList.add('active');

  const trigger = window.event && window.event.target;
  if (trigger) trigger.classList.add('active');
};

const quizQuestions = [
  {
    question: '&iquest;Qu&eacute; identifica de manera &uacute;nica cada fila de una tabla?',
    options: [
      'La clave primaria.',
      'La clave for&aacute;nea.',
      'El nombre de la tabla.',
      'Un conjunto de columnas que contienen informaci&oacute;n relevante del registro.'
    ],
    correct: 0,
    feedbackCorrect: 'Correcto. La clave primaria distingue cada registro.',
    feedbackWrong: 'La respuesta correcta es la clave primaria.'
  },
  {
    question: 'Una clave for&aacute;nea sirve para:',
    options: [
      'Identificar de manera &uacute;nica cada registro dentro de una tabla.',
      'Evitar que se ingresen valores duplicados en una columna.',
      'Establecer una relaci&oacute;n entre tablas mediante un campo que referencia la clave primaria de otra tabla.',
      'Mejorar la velocidad de las consultas.'
    ],
    correct: 2,
    feedbackCorrect: 'Bien. La clave for&aacute;nea conecta registros entre tablas.',
    feedbackWrong: 'La clave for&aacute;nea se usa para establecer relaciones entre tablas.'
  },
  {
    question: 'La relaci&oacute;n 1:N significa que:',
    options: [
      'Un registro de la tabla principal puede asociarse con muchos de la otra.',
      'Un registro de una tabla puede estar relacionado con un &uacute;nico registro de otra, y viceversa.',
      'Varios registros de ambas tablas pueden relacionarse libremente entre s&iacute; sin restricciones.',
      'Cada registro de una tabla debe tener obligatoriamente m&aacute;s de una relaci&oacute;n con la otra.'
    ],
    correct: 0,
    feedbackCorrect: 'Exacto. Un caso t&iacute;pico es Cliente -> muchos Pedidos.',
    feedbackWrong: 'En 1:N, un registro del lado 1 puede vincularse con varios del lado N.'
  },
  {
    question: 'La primera forma normal (1FN) busca principalmente que:',
    options: [
      'No existan dependencias parciales entre los atributos de una tabla.',
      'Cada celda tenga un solo valor y no listas dentro del campo.',
      'Todas las tablas tengan una clave primaria compuesta.',
      'Se eliminen todas las claves for&aacute;neas.'
    ],
    correct: 1,
    feedbackCorrect: 'S&iacute;. En 1FN los valores deben ser at&oacute;micos.',
    feedbackWrong: '1FN apunta a evitar listas o grupos repetidos dentro de una celda.'
  },
  {
    question: 'En 3FN se intenta evitar:',
    options: [
      'La existencia de claves primarias compuestas en una tabla.',
      'El uso de claves primarias.',
      'Que exista m&aacute;s de una tabla.',
      'Dependencias transitivas entre atributos.'
    ],
    correct: 3,
    feedbackCorrect: 'Correcto. 3FN elimina dependencias que no dependen directamente de la clave.',
    feedbackWrong: 'La tercera forma normal apunta a eliminar dependencias transitivas.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  messages: {
    perfect: 'Excelente. Dominaste la estructura relacional.',
    good: 'Buen resultado. Los conceptos principales est&aacute;n claros.',
    retry: 'Conviene repasar claves, relaciones y formas normales.'
  }
});

window.setupProjectorToggle();
