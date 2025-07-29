const btn = document.getElementById('botao');
const menu = document.querySelector('.menu-link');

btn.addEventListener('click',function () {
    menu.classList.toggle('abrir');
})

const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click',function(){
        menu.classList.remove('abrir')
    })
});