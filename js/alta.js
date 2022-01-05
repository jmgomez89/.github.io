/* Declaraciones de variables y funciones */

    let inputs 
    let form 
    let button 
    let camposValidos 
    let listadoProductos
    let btnListado
    let elemSectionProd

    function algunCampoNoValido() {
        let valido = 
            camposValidos[0] &&
            camposValidos[1] &&
            camposValidos[2] &&
            camposValidos[3] &&
            camposValidos[4] &&
            camposValidos[5] &&
            camposValidos[6]

        return !valido        
    }

    var setCustomValidity = function(mensaje, index) {

        const divs = document.querySelectorAll('.cartel')
        divs[index].innerText = mensaje
        divs[index].style.display = mensaje? 'block' : 'none'
    }

    function validar(valor, validador, index ) {

        if(!validador.test(valor)) {
            setCustomValidity('❌Este campo no es válido❌', index)
            button.disabled = true
            camposValidos[index] = false
            return null
        }

        camposValidos[index] = true
        button.disabled = algunCampoNoValido()

        setCustomValidity('', index)
        return valor
    }

    var regExpValidar = [
        /([A-Za-z0-9]){1,20}\w+/,    // regexp nombre
        /^[0-9-]+$/,  // regexp precio
        /^[0-9-]+$/,  // regexp stock
        /^.+$/,       // regexp marca
        /^.+$/,       // regexp categoria
        /^.+$/,       // regexp detalle
        /^.+$/,       // regexp foto
    ]

    function renderProds() {
        
        const xhr = new XMLHttpRequest
        xhr.open('get', 'plantillas/listado.hbs')
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let plantillaHbs = xhr.response

                var template = Handlebars.compile(plantillaHbs);
                let html = template({ productos, validos : !algunCampoNoValido() })

                elemSectionProd.innerHTML = html
            }
        })
        xhr.send()
    }

    function leerProductoIngresado(){
        return {
            nombre: inputs[0].value,
            precio: inputs[1].value,
            stock: inputs[2].value,
            marca: inputs[3].value,
            categoria: inputs[4].value,
            detalles: inputs[5].value,
            foto: inputs[6].value,
            envio: inputs[7].checked,
        }
    }

    function limpiarFormulario(){
        inputs.forEach(input => {
            if(input.type == 'checkbox') input.checked = false
            else input.value = ''
        })
        button.disabled = true
        camposValidos = [false, false, false, false, false, false, false ]
    }


/* Zona de inicializaciones y puesta en marcha */

async function initAlta() {

    inputs = document.querySelectorAll('.inputs')
    form = document.getElementById('form-alta')
    button = document.querySelector('.btn-agregar')

    elemSectionProd = document.getElementById('product-list')

    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false ]

    inputs.forEach( (input,index) => {
        if(input.type != 'checkbox') {
            input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index )
                renderProds()
            })
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault()

        guardarProducto()        
    })

    await obtenerProductos()
    renderProds()


    /* Listado de productos */

    listadoProductos = document.getElementsByClassName('container-products')[0]

    btnListado = document.getElementById('btnListado')
    btnListado.addEventListener('click', function () {
        listadoProductos.classList.toggle('container-products--open')
    })

}