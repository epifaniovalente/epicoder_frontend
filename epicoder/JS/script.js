document.addEventListener('DOMContentLoaded', function() {
    const abrirmenu = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.aside');

    abrirmenu.addEventListener('click', function abrir() {
        sidebar.classList.toggle('abrir');
    })
});