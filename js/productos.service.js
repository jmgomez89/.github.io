const URL_PRODUCTOS = 'https://61ca482920ac1c0017ed901d.mockapi.io/productos'

async function obtenerProductosService(){

    let productos = await get(URL_PRODUCTOS)
    return productos
}

async function guardarProductoService(producto){

    let productoGuardado = await post(URL_PRODUCTOS, producto)
    return productoGuardado
}

async function actualizarProductoService(id, producto){

    let productoActualizado = await put(URL_PRODUCTOS, id, producto)
    return productoActualizado
}

async function borrarProductoService(id){

    let productoBorrado = await del(URL_PRODUCTOS, id)
    return productoBorrado
}

