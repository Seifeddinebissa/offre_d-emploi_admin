let myBody = document.getElementById('my-body')
let myNavbar = document.getElementById('my-navbar')
let btnCart = document.getElementById('btn-cart')
let btnDarkMode = document.getElementById('btn-dark-mode')
let iconDarkMode = document.getElementById('icon-dark-mode')

let cartNumber = document.getElementById('cart-number')

let productsList = document.getElementById('products-list')
let categoriesRow = document.getElementById('categories')


let cartProducts = []

let products = [
    {
        id: 1,
        image: "./assets/images/iphone-410324__340.webp",
        name: "Iphone 4",
        price: 200,
        categoryId: 1
    },
    {
        id: 2,
        image: "./assets/images/mobile-phone-1875813_960_720.webp",
        name: "Iphone 5",
        price: 500,
        categoryId: 1
    },
    {
        id: 3,
        image: "./assets/images/home-office-336377__340.webp",
        name: "MacBook Air",
        price: 3500,
        categoryId: 2
    },
    {
        id: 4,
        image: "./assets/images/laptop-336378_1920.jpg",
        name: "MacBook Pro",
        price: 3600,
        categoryId: 2
    },
    {
        id: 5,
        image: "./assets/images/mobile-605422_1920.jpg",
        name: "Galaxy S219",
        price: 230,
        categoryId: 1
    },
    {
        id: 6,
        image: "./assets/images/mobile-phone-1917737_1920.jpg",
        name: "Sony RX20",
        price: 136,
        categoryId: 1
    }
]

let categories = [
    {
        id: 0,
        name: "All"
    },
    {
        id: 1,
        name: "Smartphones"
    },
    {
        id: 2,
        name: "Laptops"
    },
]

//appel mta3 fonction
intiWebsite()

function intiWebsite() {

    let cart = localStorage.getItem("cart")
    let allProducts = localStorage.getItem("products")

    cart ? cartNumber.textContent = cart : cartNumber.textContent = 0
    allProducts ? cartProducts = JSON.parse(allProducts) : cartProducts = []


    // display categories
    for (let i = 0; i < categories.length; i++) {
        categoriesRow.innerHTML = categoriesRow.innerHTML +
            `
                <li style="cursor:pointer" onclick="filter(${categories[i].id})" class="list-group-item">${categories[i].name}</li>
            `
    }

    // display products
    for (let i = 0; i < products.length; i++) {
        productsList.innerHTML = productsList.innerHTML +
            `<div class="col-4 mb-3">
                <div class="card">
                    <img src="${products[i].image}" class="img-fluid">
                    <div class="card-body text-center">
                        <h4 class="card-title">${products[i].name}</h4>
                        <p class="card-text">${products[i].price} DT</p>
                    </div>
                    <div class="card-footer">
                        <button onclick="addToCart(${products[i].id},'${products[i].image}','${products[i].name}',${products[i].price})" class="btn btn-dark btn-block">
                            <i class="fa fa-plus"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>`
    }

}

function addToCart(id, image, name, price) {

    cartNumber.textContent = Number(cartNumber.textContent) + 1
    localStorage.setItem("cart", cartNumber.textContent)

    if (cartProducts.length == 0) {
        let product = { id, image, name, price, qte: 1 }
        cartProducts.push(product)
    } else {
        let trouve = false
        
        for (let i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].id == id) {
                trouve = true
                cartProducts[i].qte = cartProducts[i].qte + 1
                break;
            }
        }

        if (!trouve) {
            let product = { id, image, name, price, qte: 1 }
            cartProducts.push(product)
        }
    }

    localStorage.setItem("products", JSON.stringify(cartProducts))
}

function filter(idCategory) {

    let displayedProducts = []

    if (idCategory == 0) {
        displayedProducts = products
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].categoryId == idCategory) {
                displayedProducts.push(products[i])
            }
        }
    }

    productsList.innerHTML = ""

    // display products
    displayProducts(displayedProducts)

}

function displayProducts(productsToDisplay) {

    for (let i = 0; i < productsToDisplay.length; i++) {
        productsList.innerHTML = productsList.innerHTML +
            `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${productsToDisplay[i].image}" class="img-fluid">
                        <div class="card-body text-center">
                            <h4 class="card-title">${productsToDisplay[i].name}</h4>
                            <p class="card-text">${productsToDisplay[i].price} DT</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-dark btn-block" onclick="addToCart()">
                                <i class="fa fa-plus"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            `
    }
}

function darkMode() {
    // body toggle bg-dark
    myBody.classList.toggle('bg-dark')
    // navbar toggle navbar-light bg-light
    myNavbar.classList.toggle('navbar-light')
    myNavbar.classList.toggle('bg-light')
    // navbar toggle navbar-dark bg-dark
    myNavbar.classList.toggle('navbar-dark')
    myNavbar.classList.toggle('bg-dark')
    // btncart toggle btn-light
    btnCart.classList.toggle('btn-light')
    // btndarkmode toggle btn-dark
    btnDarkMode.classList.toggle('btn-dark')
    // btndarkmode toggle btn-light
    btnDarkMode.classList.toggle('btn-light')
    // iconedarkmode toggle fa-moon
    iconDarkMode.classList.toggle('fa-moon')
    // iconedarkmode toggle fa-sun
    iconDarkMode.classList.toggle('fa-sun')
}