const tabThemeMap = {
  intro: { accent: '#2dd4bf', soft: 'rgba(45,212,191,.12)', border: 'rgba(45,212,191,.24)', title: '#5eead4' },
  sintaxis: { accent: '#60a5fa', soft: 'rgba(96,165,250,.12)', border: 'rgba(96,165,250,.24)', title: '#93c5fd' },
  ejemplo: { accent: '#4ade80', soft: 'rgba(74,222,128,.12)', border: 'rgba(74,222,128,.24)', title: '#86efac' },
  usar: { accent: '#a78bfa', soft: 'rgba(167,139,250,.12)', border: 'rgba(167,139,250,.24)', title: '#c4b5fd' },
  ubicacion: { accent: '#f59e0b', soft: 'rgba(245,158,11,.12)', border: 'rgba(245,158,11,.24)', title: '#fcd34d' },
  resumen: { accent: '#38bdf8', soft: 'rgba(56,189,248,.12)', border: 'rgba(56,189,248,.24)', title: '#7dd3fc' },
  quiz: { accent: '#f87171', soft: 'rgba(248,113,113,.12)', border: 'rgba(248,113,113,.24)', title: '#fca5a5' }
};
function applyTabTheme(name) { const theme = tabThemeMap[name] || tabThemeMap.intro; document.documentElement.style.setProperty('--tab-accent', theme.accent); document.documentElement.style.setProperty('--tab-accent-soft', theme.soft); document.documentElement.style.setProperty('--tab-accent-border', theme.border); document.documentElement.style.setProperty('--tab-accent-title', theme.title); }
window.showTab = window.createTabController({ total: 7, onChange: (name) => applyTabTheme(name) });
applyTabTheme('intro');

window.setupQuiz({
  htmlFeedback: true, htmlScore: true,
  questions: [
    { question: '&iquest;Qu&eacute; caracteriza a una funci&oacute;n escalar definida por el usuario?', options: ['Devuelve un &uacute;nico valor.', 'Crea una tabla nueva.', 'Solo se ejecuta fuera de SQL Server.', 'No puede recibir datos.'], correct: 0, feedbackCorrect: 'Correcto. Una funci&oacute;n escalar devuelve un &uacute;nico resultado.', feedbackWrong: 'Las funciones escalares reciben datos si hace falta y retornan un solo valor.' },
    { question: '&iquest;Qu&eacute; sentencia inicia la creaci&oacute;n de una funci&oacute;n?', options: ['<code>CREATE FUNCTION</code>', '<code>CREATE PROCEDURE</code>', '<code>INSERT FUNCTION</code>', '<code>SELECT FUNCTION</code>'], correct: 0, feedbackCorrect: 'Bien. La definici&oacute;n comienza con <code>CREATE FUNCTION</code>.', feedbackWrong: 'Para crear una UDF se usa <code>CREATE FUNCTION</code>.' },
    { question: '&iquest;Qu&eacute; indica la cl&aacute;usula <code>RETURNS</code>?', options: ['El tipo de dato que devolver&aacute; la funci&oacute;n.', 'La tabla que se eliminar&aacute;.', 'La cantidad de par&aacute;metros.', 'El nombre del usuario que ejecuta la consulta.'], correct: 0, feedbackCorrect: 'Exacto. <code>RETURNS</code> define el tipo del resultado.', feedbackWrong: '<code>RETURNS</code> especifica el tipo de dato del valor final.' },
    { question: 'En <code>dbo.uf_SumaVentas(799)</code>, &iquest;qu&eacute; representa <code>dbo</code>?', options: ['El propietario o esquema de la funci&oacute;n.', 'Una tabla temporal.', 'El valor que devuelve la funci&oacute;n.', 'Una variable local.'], correct: 0, feedbackCorrect: 'Correcto. <code>dbo</code> es el esquema propietario habitual.', feedbackWrong: 'El nombre de una UDF se invoca precedido por su esquema, normalmente <code>dbo</code>.' },
    { question: '&iquest;D&oacute;nde puede usarse el resultado de una UDF escalar?', options: ['Como una columna dentro de un <code>SELECT</code>.', 'Solo en la pantalla de inicio de SSMS.', 'Solo dentro de un comentario.', 'Nunca dentro de una consulta.'], correct: 0, feedbackCorrect: 'Muy bien. Se puede incluir como resultado de una columna.', feedbackWrong: 'Una UDF escalar puede utilizarse en un <code>SELECT</code> como parte de la consulta.' },
    { question: '&iquest;Qu&eacute; instrucci&oacute;n entrega el valor final de la funci&oacute;n?', options: ['<code>RETURN</code>', '<code>FROM</code>', '<code>ORDER BY</code>', '<code>DROP</code>'], correct: 0, feedbackCorrect: 'Exacto. <code>RETURN</code> devuelve el resultado calculado.', feedbackWrong: 'La instrucci&oacute;n que devuelve el valor es <code>RETURN</code>.' }
  ],
  messages: { perfect: 'Excelente. Ya domin&aacute;s la estructura y el uso de las funciones escalares.', good: 'Buen trabajo. Los conceptos principales sobre UDF ya est&aacute;n claros.', retry: 'Conviene repasar <code>CREATE FUNCTION</code>, <code>RETURNS</code> y <code>RETURN</code>.' }
});
window.setupProjectorToggle();
