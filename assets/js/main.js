// SELECTORES
const navbarEmail = document.querySelector('.navbar-email')
const navbarDesktopMenu = document.querySelector('.desktop-menu')

console.log(navbarEmail)

// EVENT LISTENERS
navbarEmail.addEventListener('click', toggleDesktopMenu)

// FUNCIONES
function toggleDesktopMenu() {
    navbarDesktopMenu.classList.toggle('hidden')
}