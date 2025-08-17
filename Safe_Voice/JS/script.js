/*LOGICA para validar email */
function verificar(variavel) {
  return variavel.length < 10;
}

/*Variaveis de erro */

let error_email = document.getElementById("error_email");
let error_senha = document.getElementById("error_senha");

const login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let error_email = document.getElementById("error_email");
  let error_senha = document.getElementById("error_senha");

  if (verificar(email)) {
    error_email.textContent = "Preencha o campo corretamente!";
  } else {
    error_email.textContent = "";
  }

  if (verificar(senha)) {
    error_senha.textContent = "Preencha o campo corretamente!";
  } else {
    error_senha.textContent = "";
  }
});
