const btn_menu = document.getElementById('menu-drop');
const lista = document.getElementById('drop-list')

btn_menu.addEventListener('click', function () {
  lista.classList.toggle('abrir')
});
