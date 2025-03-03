const menuBtn = document.querySelector('.menu');
const menuDrop = document.querySelector('.menu_dropdown');

menuBtn.onclick = function () {
    menuDrop.classList.toggle('abrir');
    const mostrar = menuDrop.classList.contains('abrir')
}