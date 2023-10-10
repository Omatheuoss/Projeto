// Detecta a rolagem da página
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');

    if (window.scrollY > 0) {
        navbar.classList.add('header-scroll'); // Adiciona a classe ao rolar
    } else {
        navbar.classList.remove('header-scroll'); // Remove a classe ao voltar ao topo
    }
});

const botao = document.querySelector("#menu-item")

const lista = document.querySelector("#menu")

botao.addEventListener("click", (evento)=> {
    evento.stopImmediatePropagation()

    lista.classList.toggle("active")
})



