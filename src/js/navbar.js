const toggleMenu = document.querySelector('.mobile-menu-button')
const mobileMenu = document.querySelector('.mobile-menu')


toggleMenu.onclick = function () {
    mobileMenu.classList.toggle('hidden')
}

