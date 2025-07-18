/*Validação do Formulario */

function Verificar(variavel) {
    if (variavel.length < 1) return false;
    return true
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

    /*
    function ValidarEmail(variavel) {
        return variavel.includes('@') && 
        variavel.indexOf('.') > variavel.indexOf('@') + 1 && variavel.length > 12;
    }
    function ValidarSenha(variavel) {
        if (variavel.length < 0) return false;
        if (!/[A-Z]/.test(variavel)) return false;
        if (!/[a-z]/.test(variavel)) return false;
        if (!/[0-9]/.test(variavel)) return false;
        if (!/[\W_]/.test(variavel)) return false;
        return true;
    }
    */
})

/*FIM VALIDAÇÃO */


const menuBtn = document.querySelector('.menu');
const menuDrop = document.querySelector('.menu_dropdown');

menuBtn.onclick = function () {
    menuDrop.classList.toggle('abrir');
    const mostrar = menuDrop.classList.contains('abrir')
}

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
