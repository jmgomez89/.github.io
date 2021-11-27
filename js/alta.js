const productos = []

const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const btn = document.querySelectorAll('button')[0]

console.log(btn)
const setCustomValidity = function(mensaje, index) {

    const divs = document.getElementsByClassName('.cartel')[0]
    console.log(divs)
    divs[index].innerText = mensaje
    divs[index].style.display = mensaje? 'block' : 'none'

}

setCustomValidity('Campo no valido', 4)

