const menuBtn = document.querySelector('.menu');
const menuDrop = document.querySelector('.menu_dropdown');

menuBtn.onclick = function () {
    menuDrop.classList.toggle('abrir');
    const mostrar = menuDrop.classList.contains('abrir')
}

const notificar = document.getElementById('btn_add').addEventListener('click', function () {
    const sms = document.getElementById('sms')
    sms.style.display = "block";

    setTimeout(() => {
        sms.style.opacity = "0"
    }, 3500);
})
const notificar1 = document.getElementById('btn_add1').addEventListener('click', function () {
    const sms = document.getElementById('sms')
    sms.style.display = "block";

    setTimeout(() => {
        sms.style.opacity = "0"
    }, 3500);
})