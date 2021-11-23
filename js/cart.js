var btnCart = document.getElementsByClassName('search-bar__carrito-container')[0];
var addCart = document.getElementsByClassName('card__back-add-to-carrito');

btnCart.addEventListener('click', function () {
    elemSectionCart.classList.toggle('section-cart--open')
})

addCart.addEventListener('click', function () {

    for(var cart of addCart){
        this.heading = document.getElementsByClassName('card__heading');
        elemSectionCart.appendTo(this.heading);
    }


});