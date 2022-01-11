class FormularioAlta {

    inputs = null
    form = null
    button = null
    camposValidos= [false,false,false,false,false,false,false]
    regExpValidar = [
        /([A-Za-z0-9]){1,20}\w+/,    // regexp nombre
        /^[0-9-]+$/,  // regexp precio
        /^[0-9-]+$/,  // regexp stock
        /^.+$/,       // regexp marca
        /^.+$/,       // regexp categoria
        /^.+$/,       // regexp detalle
        /^.+$/,       // regexp foto
    ]

    constructor(renderTablaAlta, guardarProducto) {
        this.inputs = document.querySelectorAll('main form input')
        this.form = document.querySelector('main form')
        this.button = document.querySelector('main form button') 
    
        this.button.disabled = true

        this.inputs.forEach((input,index) => {
            if(input.type != 'checkbox') {
                input.addEventListener('input', () => {
                    this.validar(input.value, this.regExpValidar[index], index )
                    if(renderTablaAlta) renderTablaAlta( !this.algunCampoNoValido(), productoController.productos )
                })
            }
        })
    
        this.form.addEventListener('submit', e => {
            e.preventDefault()
    
            let producto = this.leerProductoIngresado()
            this.limpiarFormulario()

            if(guardarProducto) guardarProducto(producto)
        })
    }

    setCustomValidity = function(mensaje, index) {

        const divs = document.querySelectorAll('.cartel')
        divs[index].innerText = mensaje
        divs[index].style.display = mensaje? 'block' : 'none'
    }

    algunCampoNoValido() {
    
        let valido = 
            this.camposValidos[0] &&
            this.camposValidos[1] &&
            this.camposValidos[2] &&
            this.camposValidos[3] &&
            this.camposValidos[4] &&
            this.camposValidos[5] &&
            this.camposValidos[6]

        return !valido        
    }

    validar(valor, validador, index ) {

        if(!validador.test(valor)) {
            this.setCustomValidity('❌Este campo no es válido❌', index)
            this.button.disabled = true
            this.camposValidos[index] = false
            return null
        }

        this.camposValidos[index] = true
        this.button.disabled = this.algunCampoNoValido()

        this.setCustomValidity('', index)
        return valor
    }

    leerProductoIngresado() {
        return {
            nombre: this.inputs[0].value,
            precio: this.inputs[1].value,
            stock: this.inputs[2].value,
            marca: this.inputs[3].value,
            categoria: this.inputs[4].value,
            detalles: this.inputs[5].value,
            foto: this.inputs[6].value,
            envio: this.inputs[7].checked,
        }
    }

    limpiarFormulario() {

        this.inputs.forEach(input => {
            if(input.type != 'checkbox') input.value = ''
            else if(input.type == 'checkbox') input.checked = false
        })
    
        this.button.disabled = true
        this.camposValidos = [false,false,false,false,false,false,false]
    }

}

function renderTablaAlta(validos, productos) {

    const xhr = new XMLHttpRequest
    xhr.open('get','plantillas/alta.hbs')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let plantillaHbs = xhr.response

            var template = Handlebars.compile(plantillaHbs);
            let html = template({ productos, validos })
            document.getElementById('product-list').innerHTML = html            
        }
    })
    xhr.send()
}
   

/* Zona de inicializaciones y puesta en marcha */

let formularioAlta = null

async function initAlta() {

    let btnListado = document.querySelector('#btnListado')
    let listadoProductos = document.getElementsByClassName('container-products')[0]

    btnListado.addEventListener('click', function(){
        listadoProductos.classList.toggle('container-products--open')
    })
    
    formularioAlta = new FormularioAlta(renderTablaAlta, productoController.guardarProducto)

    let productos = await productoController.obtenerProductos()
    renderTablaAlta(null, productos)
}