document.addEventListener('DOMContentLoaded', function() {
    const abrirmenu = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu-drop');

    abrirmenu.addEventListener('click',function () {
       menu.classList.toggle('abrir');
    })
});