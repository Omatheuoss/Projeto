// Detecta a rolagem da página
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');

    if (window.scrollY > 0) {
        navbar.classList.add('header-scroll'); // Adiciona a classe ao rolar
    } else {
        navbar.classList.remove('header-scroll'); // Remove a classe ao voltar ao topo
    }
});
$(document).ready(function () {
    $('#carouselExampleIndicators').carousel();
});
