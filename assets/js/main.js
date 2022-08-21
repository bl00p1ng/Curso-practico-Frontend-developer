// SELECTORES
const navbarEmail = document.querySelector('.navbar-email')
const navbarDesktopMenu = document.querySelector('.desktop-menu')
const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productOrders = document.querySelector('.my-order')

// EVENT LISTENERS
navbarEmail.addEventListener('click', () => toggleElement(navbarDesktopMenu, 'hidden'))
hamburguerMenu.addEventListener('click', () => toggleElement(mobileMenu, 'slide-right'))
navbarShoppingCart.addEventListener('click', () => toggleElement(productOrders, 'hidden'))

// FUNCIONES
// Agregar o quitar una clase a un elemento
const toggleElement = (element, className) => {
    element.classList.toggle(className)
}