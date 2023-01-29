const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu")
const menu__scroll = document.querySelectorAll(".navbar__links");
const hero__btn__scroll = document.querySelectorAll(".hero__btn")
console.log(hero__btn__scroll);

menu__scroll.forEach((section)=> {
    section.addEventListener("click", ()=> {
        const el = document.getElementById(section.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"start" })
    })
});

hero__btn__scroll.forEach((section)=> {
    section.addEventListener("click", ()=> {
        const el = document.getElementById(section.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"start"})
    })
});

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
});