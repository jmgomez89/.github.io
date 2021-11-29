const inputs = document.querySelectorAll('.inputs')
const form = document.getElementById('form-alta')
const button = document.querySelector('.btn-agregar')

const elemSectionProd = document.getElementById('product-list')


const productos = [
    { nombre : 'Pizarrón', precio: 23, stock: 4, marca: 'b', categoria: 'c', detalles: 'd', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-128.png', envio: true },
    { nombre : 'Calculadora', precio: 33, stock: 5, marca: 'bb', categoria: 'cc', detalles: 'dd', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png', envio: false },
    { nombre : 'Escuadra', precio: 43, stock: 6, marca: 'bbb', categoria: 'ccc', detalles: 'ddd', foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png', envio: true },
]

button.disabled = true
var camposValidos = [false, false, false, false, false, false, false ]

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
    /^.+$/,       // regexp nombre
    /^[0-9-]+$/,  // regexp precio
    /^[0-9-]+$/,  // regexp stock
    /^.+$/,       // regexp marca
    /^.+$/,       // regexp categoria
    /^.+$/,       // regexp detalle
    /^.+$/,       // regexp foto
]

inputs.forEach( (input,index) => {
    if(input.type != 'checkbox') {
        input.addEventListener('input', () => {
            validar(input.value, regExpValidar[index], index )
        })
    }
})

form.addEventListener('submit', e => {
    e.preventDefault()

    let producto = {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        stock: inputs[2].value,
        marca: inputs[3].value,
        categoria: inputs[4].value,
        detalles: inputs[5].value,
        foto: inputs[6].value,
        envio: inputs[7].checked,
    }

    productos.push(producto)
    renderProds()

    inputs.forEach(input => {
        if(input.type == 'checkbox') input.checked = false
        else input.value = ''
    })
    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false ]
})


function renderProds() {
    
    const xhr = new XMLHttpRequest
    xhr.open('get', 'plantillas/listado.hbs')
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let plantillaHbs = xhr.response

            // compile the template
            var template = Handlebars.compile(plantillaHbs);
            // execute the compiled template and print the output to the console
            let html = template({ productos: productos })

            elemSectionProd.innerHTML = html
        }
    })
    xhr.send()
}

renderProds()


/* Listado de productos */
var listadoProductos = document.getElementsByClassName('container-products')[0]
var mainImg = document.getElementsByClassName('main-img')[0]

var btnListado = document.getElementById('btnListado')
btnListado.addEventListener('click', function () {
    listadoProductos.classList.toggle('container-products--open')
    mainImg.classList.toggle('main-img--closed')

})