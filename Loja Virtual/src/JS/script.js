/*Validação do Formulario */

function Verificar(variavel) {
    if (variavel.length < 1) return false;
    return true
}

function ValidarEmail(variavel) {
    return variavel.includes('@') &&
        variavel.indexOf('.') > variavel.indexOf('@') + 1 && variavel.length > 12;
}
function ValidarSenha(variavel) {
    if (variavel.length < 12) return false;
    if (!/[A-Z]/.test(variavel)) return false;
    if (!/[a-z]/.test(variavel)) return false;
    if (!/[0-9]/.test(variavel)) return false;
    if (!/[\W_]/.test(variavel)) return false;

    return true;
}

function ValidarNome(variavel) {
    if (variavel.length < 12) return false;
    if (!/[A-Z]/.test(variavel)) return false;
    if (!/[a-z]/.test(variavel)) return false;
    if (!/[0-9]/.test(variavel)) return false;

    return true;
}

const formulario = document.getElementById('login');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const errorEmail = document.getElementById('errorEmail');
    const errorSenha = document.getElementById('errorSenha');


    if (!Verificar(email)) {
        errorEmail.textContent = 'Este campo é obrigatorio!';
    } else {
        errorEmail.textContent = '';
    }

    if (!Verificar(senha)) {
        errorSenha.textContent = 'Este campo é obrigatorio!'
    } else {
        errorSenha.textContent = ''
    }
})

function Validar(event) {
    event.preventDefault();
    /*Variaveis de inputs */    
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    /*variaveis de sms de erro */
    let errorName = document.getElementById('errorNome');
    let errorEmail = document.getElementById('errorEmail');
    let errorSenha = document.getElementById('errorSenha');

    if (!ValidarNome(name)) {
        errorName.textContent = 'Erro!'
    }else{
        errorName.textContent = '';
    }

    if (!ValidarEmail(email)) {
        errorEmail.textContent = 'Erro! Por favor verifique seu email.'
    } else {
        errorEmail.textContent = '';
    }

    if (!ValidarSenha(senha)) {
        errorSenha.textContent = 'Não permitida! Escreva em senha forte.'
    } else {
        errorSenha.textContent = '';
    }

}


/*FIM VALIDAÇÃO */

const menuBtn = document.getElementById('btn-menu').addEventListener('click', function () {
    const aside = document.getElementById('menu');
    aside.classList.toggle('open');
});

//Numero de Itens
function itens() {
    const itens = document.querySelectorAll("section .produto").length;
    document.getElementById("itens").textContent = itens
}

itens();

/*Notificação Temporaria & ADD ao Carrinho
//const notificar = document.getElementById('btn_add').addEventListener("click", () => {

})
    Produtos adicionados no carrinho
let adicionados = 0;
document.getElementById("btn_add").addEventListener("click", () => {
    adicionados++;
    document.getElementById("nitem").textContent = adicionados
})
    */

let add = 0;
function notificar() {
    let sms = document.getElementById('sms');
    sms.style.display = 'block'
    sms.style.opacity = '1'

    setTimeout(() => {
        sms.style.opacity = '0'
    }, 3000);

    add++;
    document.getElementById('nitem').textContent = add;
}
