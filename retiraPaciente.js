var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(evento){
  var alvoEvento = evento.target;
  var linhaAlvo = alvoEvento.parentNode;
  linhaAlvo.classList.add("fadeOut");
  setTimeout(function() {
    linhaAlvo.remove();
  }, 500);
})

// // esta variável acaba pegando cada linha da tabela.
// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     this.remove();
//   })
// }
