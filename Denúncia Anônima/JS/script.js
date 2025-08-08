document.addEventListener("DOMContentLoaded", function () {
  const links = document.getElementById("links_drop");
  const menuBtn = document.getElementById("menu-btn");

  menuBtn.addEventListener("click", function () {
    links.classList.toggle("abrir");
  });
});

document.addEventListener("click", function () {
  links.classList.remove("abrir");
});

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
    error_email.textContent = 'Preencha corretamente!';
  }else{
    error_email.textContent = '';
  }

  if (verificar(senha)) {
    error_senha.textContent = 'Preencha corretamente!';
  } else {
    error_senha.textContent = '';
  }
});


/*SCRIPT PAGINA DENUNCIAR */

const send_btn = document.getElementById('send-btn');

send_btn.addEventListener('click',function (event) {
  event.preventDefault();
})