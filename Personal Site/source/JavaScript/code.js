let h = document.getElementById('hora');
let m = document.getElementById('minuto');
let s = document.getElementById('segundo')

const horario = setInterval(function relogio() {
    const informa = new Date();

    let hora = informa.getHours();
    let min = informa.getMinutes();
    let sec = informa.getSeconds();
    let data = informa.getDay();
    if (hora < 10) hora = '0' + hora;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    h.textContent = hora;
    m.textContent = min;
    s.textContent = sec;
})

function efeito(){
    let botao = document.getElementById('botao');
    botao.style.scale = 0.9;
}

document.getElementById('btn-menu').addEventListener('click',function() {
    let listar = document.getElementById('links-btn');

    if (listar.style.display === 'none') {
        listar.style.display = 'block';
    } else {
        listar.style.display = 'none';
    }
})