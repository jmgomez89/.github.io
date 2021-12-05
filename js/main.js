var elemSectionCart = document.getElementsByClassName('section-cart')[0]

function start() {

    function ajax(url, metodo) {
        let xhr = new XMLHttpRequest
        xhr.open(metodo || 'get', url)    
        xhr.send()

        return xhr
    }

    function getNombreArchivo(id) {
        return '/vistas/' + id + '.html'
    }

    function marcarLink(id) {
        let links = document.querySelectorAll('.nav-bar__link')
        links.forEach(link => {
            if(link.id == id) link.classList.add('active')
            else link.classList.remove('active')
        })
    }

    function initJS(id) {
        if(id == 'inicio') {
            initInicio()
        }
        else if(id == 'alta') {
            initAlta()
        }
        else if(id == 'contacto') {
            initContacto()
        }
        else if(id == 'nosotros') {
            initNosotros()
        }                
    }

    function cargarPlantilla(id) {
        let archivo = getNombreArchivo(id)
        let xhr = ajax(archivo)
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                let plantilla = xhr.response
                document.querySelector('main').innerHTML = plantilla
                initJS(id)
            }
        })
    }

    function cargarPlantillas() {
        let links = document.querySelectorAll('.nav-bar__link')
        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarPlantilla(id)

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
                let id = link.id
                location.hash = id

            })

        })

        window.addEventListener('hashchange', () => {
            let id = location.hash.slice(1) || 'inicio'
            marcarLink(id)
            cargarPlantilla(id)
        })
    }

    cargarPlantillas()
}

start()

