let productos = []

/* Leer */
async function obtenerProductos(){

    productos = await obtenerProductosService()
}

/* Guardar */
async function guardarProducto(){

    let producto = leerProductoIngresado()
    limpiarFormulario()
    let productoGuardado = await guardarProductoService(producto)
    productos.push(productoGuardado)
    renderProds()
}

/* Actualizar */
async function actualizarProducto(id){

    let producto = leerProductoIngresado()
    limpiarFormulario() 

    let productoActualizado = await actualizarProductoService(id, producto)

    let index = productos.findIndex(producto => producto.id == productoActualizado.id)
    productos.splice(index, 1, productoActualizado)

    renderProds()
}

/* Borrar */
async function borrarProducto(id){

    let productoBorrado = await borrarProductoService(id)

    let index = productos.findIndex(producto => producto.id == productoBorrado.id)
    productos.splice(index, 1)
    
    renderProds()
}

/* async function test(){

    await obtenerProductos()
    console.log(productos)
}

test() */