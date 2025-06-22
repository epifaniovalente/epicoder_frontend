document.addEventListener('DOMContentLoaded', function () {
    const links = document.getElementById('links_drop');
    const menuBtn = document.getElementById('menu_drop');

    menuBtn.addEventListener('click', function () {
        links.classList.toggle('abrir');
    })
});


document.addEventListener('click', function () {
    links.classList.remove('abrir');
})