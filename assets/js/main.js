// SELECTORES
const navbarEmail = document.querySelector('.navbar-email')
const navbarDesktopMenu = document.querySelector('.desktop-menu')
const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

// EVENT LISTENERS
navbarEmail.addEventListener('click', toggleDesktopMenu)

hamburguerMenu.addEventListener('click', toggleMobileMenu)

// FUNCIONES
// Mostrar u ocultar el menu del navbar en desktop
function toggleDesktopMenu() {
    navbarDesktopMenu.classList.toggle('hidden')
}

// Mostrar u ocultar el menu del mobile del navbar
function toggleMobileMenu() {
    mobileMenu.classList.toggle('slide-right')
}