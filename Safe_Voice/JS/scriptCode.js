const menu_btn = document.getElementById("menu-btn");
const links_drop = document.getElementById("links");

menu_btn.addEventListener("click", function () {
  links_drop.classList.toggle("abrir");
});

const item = document.querySelectorAll(".item");
const item_link = document.querySelectorAll(".item-link");

item.forEach((link) => {
  link.addEventListener("click", function () {
    links_drop.classList.remove("abrir");
  });
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
    error_email.textContent = "Preencha corretamente!";
  } else {
    error_email.textContent = "";
  }

  if (verificar(senha)) {
    error_senha.textContent = "Preencha corretamente!";
  } else {
    error_senha.textContent = "";
  }
});

// SCRIPT PAGINA DENUNCIAR

function select_Validator(variavel) {
  return variavel === "" || variavel === "0";
}

function inputLocal_Validator(variavel) {
  return variavel.length < 5;
}

function inputDesc_Validator(variavel) {
  if (variavel.length < 50) return false;
  return true;
}

function validator(event) {
  event.preventDefault();

  /*Valores dos inputs */
  const tipo_dn = document.getElementById("tipo-denuncia");
  const loca_dn = document.getElementById("local-incidente");
  const desc_dn = document.getElementById("descricao");

  /*Variaveis de erro */
  const error_tipo = document.getElementById("error-tipo");
  const error_local = document.getElementById("error-local");
  const error_desc = document.getElementById("error-desc");

  /*Validar */

  /*LOGICA PARA VALIDAR Input Select */
  // if (tipo_dn.value === "" || tipo_dn.value === "0") {
  //   tipo_dn.classList.add('element-error')
  // } else {

  // }
  if (select_Validator(tipo_dn.value)) {
    tipo_dn.classList.add("element-error");
    error_tipo.textContent = "Este campo é obrigatório! *";
  } else {
    tipo_dn.classList.remove("element-error");
    error_tipo.textContent = "";
  }

  if (inputLocal_Validator(loca_dn.value)) {
    loca_dn.classList.add("element-error");
    error_local.textContent = "Este campo é obrigatório! *";
  } else {
    loca_dn.classList.remove("element-error");
    error_local.textContent = "";
  }

  if (!inputDesc_Validator(desc_dn.value)) {
    desc_dn.classList.add("element-error");
    error_desc.textContent = "Este campo é obrigatório! *";
  } else {
    desc_dn.classList.remove("element-error");
    error_desc.textContent = "";
  }
}

/*PAINEL DE CONTROLO */
