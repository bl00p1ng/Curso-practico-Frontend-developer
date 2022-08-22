// SELECTORES
const navbarEmail = document.querySelector('.navbar-email')
const navbarDesktopMenu = document.querySelector('.desktop-menu')
const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productOrders = document.querySelector('.my-order')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('.product-detail')
const closeIcon = document.querySelector('.close-icon')

// EVENT LISTENERS
navbarEmail.addEventListener('click', () => toggleElement(navbarDesktopMenu, 'hidden'))
hamburguerMenu.addEventListener('click', () => toggleElement(mobileMenu, 'slide-right'))
navbarShoppingCart.addEventListener('click', () => toggleElement(productOrders, 'hidden'))
closeIcon.addEventListener('click', () => hideElement(productDetail))

// FUNCIONES
// Ocultar un elemento
const hideElement = (element) => {
    element.classList.add('hidden')
}

// Agregar o quitar una clase a un elemento
const toggleElement = (element, className) => {
    /* Si el detalle de un producto esta abierto y se abre 
    el carrito, ocultar el detalle del producto */
    const isDetailOpen = !productDetail.classList.contains('hidden')

    if (isDetailOpen) {
        hideElement(productDetail)
    }

    element.classList.toggle(className)
}

// Mostrar un elemento
const showElement = (element) => {
    /* Si el carrito esta abierto y se abre el detalle 
    de un producto, cerrar el carrito */
    const isCartOpen = !productOrders.classList.contains('hidden')

    if (isCartOpen) {
        hideElement(productOrders)
    }

    element.classList.remove('hidden')
}

// Agregar productos al DOM
const renderProducts = (productList) => {
    for (const product of productList) {
        const {name, price, img} = product
    
        // Crear la card
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        // Crear la imagen del producto
        const image = document.createElement('img')
        image.src = img
        image.alt = 'Product image'
        // Abrir detalle del producto al hacer click en la imagen
        image.addEventListener('click', () => showElement(productDetail))
    
        /* Infomación del producto:
        - <div> -> precio, nombre
        - Boton de agregar al carrito) */
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        // Alberga el precio y el nombre del producto
        const productData = document.createElement('div')
        // Precio
        const productPrice = document.createElement('p')
        productPrice.textContent = `$ ${price}.00`
        // Nombre del producto
        const productName = document.createElement('p')
        productName.textContent = name
        // Agregar precio y nombre del producto productData
        productData.append(productPrice, productName)
    
        // Icono de agregar al carrito
        const figure = document.createElement('figure')
        const addToCartIcon = document.createElement('img')
        addToCartIcon.src = './assets/icons/bt_add_to_cart.svg'
        addToCartIcon.alt = 'Add to cart icon'
        figure.appendChild(addToCartIcon)
        // Agregar los datos del producto y el icono a productInfo
        productInfo.append(productData, figure)
    
        // Agregar elementos a la card
        productCard.append(image, productInfo)
        // Agregar card al DOM
        cardsContainer.appendChild(productCard)
    }
}

// DATOS PRODUCTOS
const productList = [
    {
        name: 'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Shelf',
        price: 20,
        img: 'https://images.pexels.com/photos/2062427/pexels-photo-2062427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Desk',
        price: 100,
        img: 'https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Guitar',
        price: 40,
        img: 'https://images.pexels.com/photos/1624753/pexels-photo-1624753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Skateboard',
        price: 50,
        img: 'https://images.pexels.com/photos/841369/pexels-photo-841369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Lamp',
        price: 15,
        img: 'https://images.pexels.com/photos/242827/pexels-photo-242827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Toys',
        price: 25,
        img: 'https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Chair',
        price: 10,
        img: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Table',
        price: 20,
        img: 'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Flower vase',
        price: 15,
        img: 'https://images.pexels.com/photos/269220/pexels-photo-269220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

renderProducts(productList)