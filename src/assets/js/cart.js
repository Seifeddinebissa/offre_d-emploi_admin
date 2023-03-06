let myBody = document.getElementById('my-body')
let myNavbar = document.getElementById('my-navbar')
let btnCart = document.getElementById('btn-cart')
let btnDarkMode = document.getElementById('btn-dark-mode')
let iconDarkMode = document.getElementById('icon-dark-mode')

let cartNumber = document.getElementById('cart-number')

let productsList = document.getElementById('products-list')

let totalPrice = document.getElementById('total-price')

let cartProducts = []

//appel mta3 fonction
intiWebsite()

function intiWebsite() {

    let cart = localStorage.getItem("cart")
    let allProducts = localStorage.getItem("products")

    cart ? cartNumber.textContent = cart : cartNumber.textContent = 0
    allProducts ? cartProducts = JSON.parse(allProducts) : cartProducts = []

    productsList.innerHTML = ""
    totalPrice.textContent = 0 + " DT"

    if (cartProducts.length == 0) {
        productsList.innerHTML = "<div class='col alert alert-warning text-center'>Votre panier est vide</div>"
    } else {

        let total = 0
        for (let i = 0; i < cartProducts.length; i++) {
            productsList.innerHTML = productsList.innerHTML +
                `
            <div class="col-md-2 mb-2 text-center">
            <img class="img-responsive" src="${cartProducts[i].image}" alt="prewiew" width="120"
                height="80">
        </div>
        <div class="text-md-left col-md-6 my-auto">
            <h4 class="product-name"><strong>${cartProducts[i].name}</strong></h4>
        </div>
        <div class="col-md-4 text-md-right row my-auto">
            <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                <h6><strong>${cartProducts[i].price} <span class="text-muted">x</span></strong></h6>
            </div>
            <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                    <input onclick="addQte(${i})" type="button" value="+" class="plus">
                    <input type="text" value="${cartProducts[i].qte}" title="Qty" class="qty"
                        size="4">
                    <input onclick="removeQte(${i})" type="button" value="-" class="minus">
                </div>
            </div>
            <div class="col-2 col-sm-2 col-md-2 text-right">
                <button onclick="removeProduct(${i})" type="button" class="btn btn-outline-danger btn-xs">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div>
            `
            total = total + (cartProducts[i].price * cartProducts[i].qte);
        }
        totalPrice.textContent = total + " DT"
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

function removeProduct(indice) {
    cartNumber.textContent = Number(cartNumber.textContent) - cartProducts[indice].qte
    localStorage.setItem("cart", cartNumber.textContent)

    cartProducts.splice(indice, 1)
    localStorage.setItem("products", JSON.stringify(cartProducts))

    intiWebsite()
}

function addQte(indice) {
    cartNumber.textContent = Number(cartNumber.textContent) + 1
    localStorage.setItem("cart", cartNumber.textContent)

    cartProducts[indice].qte++
    localStorage.setItem("products", JSON.stringify(cartProducts))

    intiWebsite()
}

function removeQte(indice) {

    if (cartProducts[indice].qte > 1) {
        cartNumber.textContent = Number(cartNumber.textContent) - 1
        localStorage.setItem("cart", cartNumber.textContent)

        cartProducts[indice].qte--
        localStorage.setItem("products", JSON.stringify(cartProducts))

        intiWebsite()
    }
    
}
