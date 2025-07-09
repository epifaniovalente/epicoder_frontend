const btn = document.getElementById('botao');
const menu = document.querySelector('.menu-link');

btn.addEventListener('click',function () {
    menu.classList.toggle('abrir');
})