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
