function initCarrito() {

    var btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]
    btnCarrito.addEventListener('click', function () {
        elemSectionCart.classList.toggle('section-cart--open')
    })

}

initCarrito()