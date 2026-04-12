const tabThemeMap = {
  concepto: {
    accent: '#22c55e',
    soft: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.28)',
    title: '#7ee7a7'
  },
  tipos: {
    accent: '#2d6a4f',
    soft: 'rgba(45,106,79,0.14)',
    border: 'rgba(74,222,128,0.18)',
    title: '#74c69d'
  },
  sgbd: {
    accent: '#1d4ed8',
    soft: 'rgba(29,78,216,0.12)',
    border: 'rgba(96,165,250,0.24)',
    title: '#60a5fa'
  },
  ssms: {
    accent: '#92400e',
    soft: 'rgba(146,64,14,0.14)',
    border: 'rgba(251,191,36,0.22)',
    title: '#fbbf24'
  },
  quiz: {
    accent: '#0f766e',
    soft: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.26)',
    title: '#5eead4'
  }
};

function applyTabTheme(name) {
  const theme = tabThemeMap[name] || tabThemeMap.concepto;
  document.documentElement.style.setProperty('--tab-accent', theme.accent);
  document.documentElement.style.setProperty('--tab-accent-soft', theme.soft);
  document.documentElement.style.setProperty('--tab-accent-border', theme.border);
  document.documentElement.style.setProperty('--tab-accent-title', theme.title);
}

window.showTab = window.createTabController({
  total: 5,
  onChange: (name) => applyTabTheme(name)
});

applyTabTheme('concepto');
window.setupImageModal();

const quizQuestions = [
  {
    question: '&iquest;Qu&eacute; idea define mejor a una base de datos?',
    options: [
      'Un sistema que permite almacenar datos en archivos digitales dentro de una computadora.',
      'Un conjunto organizado de datos relacionados entre s&iacute;, dise&ntilde;ado para ser accedido, gestionado y actualizado de manera eficiente.',
      'Un programa que se utiliza para crear tablas y cargar informaci&oacute;n en ellas.',
      'Un repositorio de informaci&oacute;n donde los datos se guardan sin necesidad de una estructura definida.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. La idea central es organizaci&oacute;n y relaci&oacute;n entre datos.',
    feedbackWrong: 'La definici&oacute;n correcta apunta a un conjunto organizado de datos relacionados.'
  },
  {
    question: 'En un modelo relacional, los datos se organizan principalmente en:',
    options: [
      'Archivos jer&aacute;rquicos compuestos por nodos y subnodos.',
      'Objetos que contienen m&eacute;todos y propiedades relacionadas.',
      'Tablas formadas por filas y columnas que representan entidades y atributos.',
      'Listas din&aacute;micas que almacenan datos sin una estructura fija.'
    ],
    correct: 2,
    feedbackCorrect: 'Bien. Las tablas son la estructura b&aacute;sica del modelo relacional.',
    feedbackWrong: 'En bases relacionales los datos se estructuran en tablas, filas y columnas.'
  },
  {
    question: 'Dentro de ACID, la atomicidad significa que una operaci&oacute;n importante debe:',
    options: [
      'Ejecutarse lo m&aacute;s r&aacute;pido posible para no afectar el rendimiento del sistema.',
      'Mantener los datos organizados en estructuras consistentes durante toda la operaci&oacute;n.',
      'Realizarse completa o no realizarse.',
      'Permitir que varias transacciones se ejecuten al mismo tiempo sin interferencias.'
    ],
    correct: 2,
    feedbackCorrect: 'Exacto. O se completa toda la transacci&oacute;n o se revierte.',
    feedbackWrong: 'Atomicidad significa “todo o nada”.'
  },
  {
    question: '&iquest;Cu&aacute;l es la funci&oacute;n principal de un motor de base de datos (SQL Server por ej.)?',
    options: [
      'Crear programas que permitan interactuar con el usuario final.',
      'Gestionar la base de datos: crear, consultar, actualizar y administrar la informaci&oacute;n.',
      'Dise&ntilde;ar la estructura f&iacute;sica del hardware donde se guardan los datos.',
      'Ejecutar autom&aacute;ticamente consultas sin intervenci&oacute;n del usuario.'
    ],
    correct: 1,
    feedbackCorrect: 'Correcto. El SGBD es el software que administra la base.',
    feedbackWrong: 'El SGBD es el sistema que permite gestionar y operar con la base de datos.'
  },
  {
    question: '&iquest;Para qu&eacute; vamos a usar SQL Server Management Studio en la materia?',
    options: [
      'Para escribir consultas, crear objetos y trabajar visualmente con SQL Server.',
      'Para desarrollar aplicaciones completas con interfaz gr&aacute;fica para usuarios.',
      'Para dise&ntilde;ar exclusivamente diagramas sin interactuar con los datos.',
      'Para programar en m&uacute;ltiples lenguajes adem&aacute;s de SQL dentro de un mismo entorno.'
    ],
    correct: 0,
    feedbackCorrect: 'S&iacute;. SSMS es la herramienta de trabajo con la que vamos a practicar.',
    feedbackWrong: 'SSMS se usa para conectarse a SQL Server, crear objetos y ejecutar consultas.'
  }
];

window.setupQuiz({
  questions: quizQuestions,
  messages: {
    perfect: 'Excelente. Respondiste todo correctamente.',
    good: 'Buen trabajo. Ya ten&eacute;s una base s&oacute;lida.',
    retry: 'Conviene repasar una vez m&aacute;s antes de seguir.'
  }
});

window.setupProjectorToggle();
