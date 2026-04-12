window.showTab = window.createTabController({ total: 6 });

window.setupImageModal();

const quizQuestions = [
  {
    question: 'Para crear una base nueva desde la interfaz, primero se hace clic derecho sobre:',
    options: ['La carpeta Bases de datos', 'La carpeta Objetos del servidor', 'El editor de texto', 'El men&uacute; Archivo'],
    correct: 0,
    feedbackCorrect: 'Correcto. La opci&oacute;n aparece sobre el nodo Bases de datos.',
    feedbackWrong: 'El paso correcto parte del nodo Bases de datos.'
  },
  {
    question: 'Para crear una tabla desde la GUI de SSMS se trabaja sobre el nodo:',
    options: ['Vistas', 'Tablas', 'Programabilidad', 'Diagramas de bases de datos'],
    correct: 1,
    feedbackCorrect: 'Bien. Desde Tablas se abre el dise&ntilde;ador de tabla.',
    feedbackWrong: 'La opci&oacute;n Nueva tabla se encuentra en el nodo Tablas.'
  },
  {
    question: 'En el dise&ntilde;ador de tablas hay que definir, entre otras cosas:',
    options: [
      'Solo el nombre de la tabla.',
      'El lenguaje de programaci&oacute;n con el que se va a acceder a la base de datos.',
      'Nombre de columna, tipo de dato y si admite NULL.',
      'La carpeta donde se guardaran los datos.'
    ],
    correct: 2,
    feedbackCorrect: 'Exacto. Esa es la informaci&oacute;n b&aacute;sica de cada columna.',
    feedbackWrong: 'En el dise&ntilde;ador se definen nombre, tipo de dato y nulabilidad.'
  },
  {
    question: 'Para que una columna sea autonum&eacute;rica, normalmente debe ser de tipo:',
    options: ['INT', 'DATE', 'NVARCHAR', 'CHAR'],
    correct: 0,
    feedbackCorrect: 'S&iacute;. Lo habitual es usar una columna INT con identidad.',
    feedbackWrong: 'La identidad se aplica normalmente sobre una columna INT.'
  },
  {
    question: 'Despu&eacute;s de dise&ntilde;ar la tabla, el &uacute;ltimo paso es:',
    options: [
      'Ejecutar autom&aacute;ticamente consultas sobre la tabla para validar los datos.',
      'Definir los permisos de acceso para todos los usuarios del sistema.',
      'Exportar la tabla a un archivo externo para su almacenamiento.',
      'Guardar la tabla y asignarle un nombre.'
    ],
    correct: 3,
    feedbackCorrect: 'Correcto. Reci&eacute;n al guardar queda creada en la base.',
    feedbackWrong: 'El cierre del proceso es guardar la tabla y darle nombre.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  htmlFeedback: true,
  htmlScore: true,
  messages: {
    perfect: 'Excelente. Ten&eacute;s claro el circuito completo en SSMS.',
    good: 'Buen resultado. El proceso general ya se entiende bien.',
    retry: 'Conviene repasar la secuencia paso a paso dentro de SSMS.'
  }
});

window.setupProjectorToggle();
