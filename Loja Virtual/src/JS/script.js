const menuBtn = document.querySelector('.menu');
const menuDrop = document.querySelector('.menu_dropdown');

menuBtn.onclick = function () {
    menuDrop.classList.toggle('abrir');
    const mostrar = menuDrop.classList.contains('abrir')
}

let adicionados = 0;
 document.getElementById("btn_add").addEventListener("click", ()=>{
     adicionados ++;
    document.getElementById("nitem").textContent = adicionados
 })


//Numero de Itens

function itens() {
    const itens = document.querySelectorAll("section .produto").length;
    document.getElementById("itens").textContent = itens  
}

itens();

//Notificação Temporaria & ADD ao Carrinho
const notificar = document.getElementById('btn_add').addEventListener("click", ()=> {
    const sms = document.getElementById('sms')
    sms.style.display = "block";

    setTimeout(() => {
        sms.style.opacity = "0"
    }, 3500);
})


