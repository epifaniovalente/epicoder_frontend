document.addEventListener('DOMContentLoaded', function () {
    const abrirmenu = document.querySelector('.menu-btn');
    const body = document.body;

    // Alternar menu lateral
    function toggleSidebar() {
        body.classList.toggle('sidebar-collapsed');

        // Para dispositivos móveis
        if (window.innerWidth <= 768) {
            body.classList.toggle('sidebar-expanded');
        }
    }

    abrirmenu.addEventListener('click', toggleSidebar);

    // Ativar link clicado
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Fechar menu ao clicar fora em dispositivos móveis
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 &&
            !e.target.closest('aside') &&
            !e.target.closest('.toggle-btn')) {
            body.classList.remove('sidebar-expanded');
        }
    });
});