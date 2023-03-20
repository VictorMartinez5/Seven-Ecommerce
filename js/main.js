document.querySelector(".menu__btn").addEventListener("click", () => {
    document.querySelector(".nav__menu").classList.toggle("show");
});

ScrollReveal().reveal('.portada');
ScrollReveal().reveal('.noticias__cards', { delay: 500 });
ScrollReveal().reveal('.noticias__grande1', { delay: 500 });
ScrollReveal().reveal('.noticias__grande2', { delay: 500 });