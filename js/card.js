/* function initInicio() {

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
            
            function renderProds() {
        
                const xhr = new XMLHttpRequest
                xhr.open('get', 'plantillas/cards.hbs')
                xhr.addEventListener('load', () => {
                    if(xhr.status == 200) {
                        let plantillaHbs = xhr.response
                        var template = Handlebars.compile(plantillaHbs);
                        let html = template({cards})
                        newCard.innerHTML = html
                        
                    }
                })
                xhr.send()
            }
            
            renderProds()
            
            elemCardsContainer.appendChild(newCard)
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

 */

function initInicio() {



    const cards = [
        {heading: 'Iphone 11', description: 'bla bla bla', image: 'img/productos/apple-iphone-11-pro-max.jpg', btn: 1, price: 999},
        {heading: 'Iphone 12', description: 'bla bla bla', image: 'img/productos/apple-iphone-12.jpg', btn: 2, price: 999},
        {heading: 'Sony Mdr-Zx110', description: 'bla bla bla', image: 'img/productos/auriculares-sony.jpg', btn: 3, price: 999},
        {heading: 'Canon PowerShot SX', description: 'bla bla bla', image: 'img/productos/camara-canon.jpg', btn: 4, price: 999},
        {heading: 'Samsung Galaxy S-21', description: 'bla bla bla', image: 'img/productos/celular-samsung.jpg', btn: 5, price: 999},
        {heading: 'Chromecast', description: 'bla bla bla', image: 'img/productos/chromecast-google.jpg', btn: 6, price: 999},
        {heading: 'DJI Mavic Pro', description: 'bla bla bla', image: 'img/productos/dji-mavic-2-pro.jpg', btn: 7, price: 999},
        {heading: 'DJI Mavic 2 Pro', description: 'bla bla bla', image: 'img/productos/drone-dji.jpg', btn: 8, price: 999},
        {heading: 'Google Nest Mini', description: 'bla bla bla', image: 'img/productos/google-nest-mini.jpg', btn: 9, price: 999},
        {heading: 'Lavarropas DH', description: 'bla bla bla', image: 'img/productos/lavarropas-dh.jpg', btn: 10, price: 999},
        {heading: 'Modem Motorola SBG675', description: 'bla bla bla', image: 'img/productos/modem-motorola.jpg', btn: 11, price: 999},
        {heading: 'Motorola Moto e7', description: 'bla bla bla', image: 'img/productos/motorola-moto-e7.jpg', btn: 12, price: 999 },
        {heading: 'Notebook Lenovo Core I7', description: 'bla bla bla', image: 'img/productos/notebook-lenovo.jpg', btn: 13, price: 999 },
        {heading: 'Parlante JBL', description: 'bla bla bla', image: 'img/productos/parlante-jbl.jpg', btn: 14, price: 999 },
        {heading: 'Samsung Galaxy s21', description: 'bla bla bla', image: 'img/productos/samsung-galaxy-s21-plus-5g.jpg', btn: 15, price: 999 },
        {heading: 'Samsung tu7000', description: 'bla bla bla', image: 'img/productos/samsung-tu7000.jpg', btn: 16, price: 999 },
        {heading: 'Sony Playstation 5', description: 'bla bla bla', image: 'img/productos/sony-playstation-5.jpg', btn: 17, price: 999 },
        {heading: 'Televisor LG', description: 'bla bla bla', image: 'img/productos/televisor-lg.jpg', btn: 18, price: 999 },
    ]

    console.log(cards[0].heading)
    const elemCardsContainer = document.getElementsByClassName('cards-container')[0]

    function renderProds() {
            
        const xhr = new XMLHttpRequest
        xhr.open('get', 'plantillas/cards.hbs')
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let plantillaHbs = xhr.response
                var template = Handlebars.compile(plantillaHbs);
                let html = template({cards})
                elemCardsContainer.innerHTML += html                
            }
        })
        xhr.send()
    }

    renderProds()

    

}