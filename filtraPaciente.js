  var campoFiltro = document.querySelector("#filtrar-tabela");

  campoFiltro.addEventListener("input", function() {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0){
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      // console.log(paciente);
      var tdNome = document.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");

         if (expressao.test(nome)) {
           paciente.classList.remove("invisivel");
           console.log(paciente);
         } else {
           paciente.classList.add("invisivel");
         }
       }
  }
  else {
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
}
);
