function initInicio() {

    function Card(heading, description, image, btn, price) {
        this.heading = heading
        this.description = description
        this.image = image
        this.btn = btn
        this.price = price
        

        var that = this

        this.appendTo = function (destinationElement) {
            var newCard = document.createElement('div')
            newCard.classList.add('card')
            newCard.addEventListener('dblclick', function (ev) {
                ev.preventDefault()
                console.log('this:', this)
                console.log('that:', that)
                console.log('that.heading:', that.heading)
                this.classList.toggle('card--selected')
                elemSectionCart.innerHTML += `<div class="cart__item">${that.heading}</div>`
            })
            newCard.innerHTML = 
                `
                <input type="checkbox" id="card${this.btn}" class="card__input" aria-hidden="true">
                <div class="card__content">
                    <div class="card__image" style="background-image: url(${this.image})">
                        <div class="card__front">
                            <h3 class="card__heading">
                                ${this.heading} 
                            </h3>
                            <label for="card${this.btn}" class="card__button" style="background-image: url(/img/iconos/ir.png);" aria-hidden="true">
                            </label>
                        </div>
                    </div>
                    <div class="card__back">
                        <div class="card__back-inner">
                            <div class="card__back-description">
                                <p>
                                    ${this.description}
                                </p>
                            </div>
                            <div class="card__back-price">
                                $${this.price}
                            </div>
                            <label for="card${this.btn}" class="card__back-button" style="background-image: url(/img/iconos/retorno.png);" aria-hidden="true">
                            </label>
                        </div>
                    </div>
                </div>

                `
            destinationElement.appendChild(newCard)
        }

    }

    var elemCardsContainer = document.getElementsByClassName('cards-container')[0]

    var cards = [
        new Card('Iphone 11', 'bla bla bla', 'img/productos/apple-iphone-11-pro-max.jpg', 1, 999),
        new Card('Iphone 12', 'bla bla bla', 'img/productos/apple-iphone-12.jpg', 2, 999),
        new Card('Sony Mdr-Zx110', 'bla bla bla', 'img/productos/auriculares-sony.jpg', 3, 999),
        new Card('Canon PowerShot SX', 'bla bla bla', 'img/productos/camara-canon.jpg', 4, 999),
        new Card('Samsung Galaxy S-21', 'bla bla bla', 'img/productos/celular-samsung.jpg', 5, 999),
        new Card('Chromecast', 'bla bla bla', 'img/productos/chromecast-google.jpg', 6, 999),
        new Card('DJI Mavic Pro', 'bla bla bla', 'img/productos/dji-mavic-2-pro.jpg', 7, 999),
        new Card('DJI Mavic 2 Pro', 'bla bla bla', 'img/productos/drone-dji.jpg', 8, 999),
        new Card('Google Nest Mini', 'bla bla bla', 'img/productos/google-nest-mini.jpg', 9, 999),
        new Card('Lavarropas DH', 'bla bla bla', 'img/productos/lavarropas-dh.jpg', 10, 999),
        new Card('Modem Motorola SBG675', 'bla bla bla', 'img/productos/modem-motorola.jpg', 11, 999),
        new Card('Motorola Moto e7', 'bla bla bla', 'img/productos/motorola-moto-e7.jpg', 12, 999 ),
        new Card('Notebook Lenovo Core I7', 'bla bla bla', 'img/productos/notebook-lenovo.jpg', 13, 999 ),
        new Card('Parlante JBL', 'bla bla bla', 'img/productos/parlante-jbl.jpg', 14, 999 ),
        new Card('Samsung Galaxy s21', 'bla bla bla', 'img/productos/samsung-galaxy-s21-plus-5g.jpg', 15, 999 ),
        new Card('Samsung tu7000', 'bla bla bla', 'img/productos/samsung-tu7000.jpg', 16, 999 ),
        new Card('Sony Playstation 5', 'bla bla bla', 'img/productos/sony-playstation-5.jpg', 17, 999 ),
        new Card('Televisor LG', 'bla bla bla', 'img/productos/televisor-lg.jpg', 18, 999 ),
    ]


    for (var card of cards) {
        card.appendTo(elemCardsContainer)
    }

}