const header = document.querySelector(".header");
const btnShowMenu = document.querySelector(".btn-show-menu");
const btnHideMenu = document.querySelector(".btn-hide-menu");
const menuMobile = document.querySelector(".nav-mobile");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        header.classList.add(toggleClass);
    } else if (currentScroll <= 0) {
        header.classList.remove(toggleClass);
    }
});


var accordionItems = document.querySelectorAll('.accordion-item');
var accordionHeaders = document.querySelectorAll('.accordion-header');
  
for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function () {
        accordionHeaders[i].nextElementSibling.classList.toggle('hidden');
        accordionHeaders[i].children[1].classList.toggle('rotate-180');
        accordionHeaders[i].parentNode.classList.toggle('bg-pray-color-1');
    });
}

btnShowMenu.addEventListener('click', () => {
    menuMobile.classList.add('translate-x-0');
    menuMobile.classList.remove('translate-x-[100%]');
    document.body.style.overflow = "hidden";
})

btnHideMenu.addEventListener('click', () => {
    menuMobile.classList.remove('translate-x-0');
    menuMobile.classList.add('translate-x-[100%]');
    document.body.style.overflow = "auto";
})

