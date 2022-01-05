/* GET */
async function get(url, id) {
    try {
        return await (await fetch(url + (id || ''), { method: 'get' })).json()
    }
    catch (error) {
        console.error('GET ERROR', error)
    }
}

/* POST */
async function post(url, dato) {
    try {
        return await (await fetch(url, {
            method: 'post',
            body: JSON.stringify(dato),
            headers: { 'content-type': 'application/json' }
        })).json()
    }
    catch (error) {
        console.error('POST ERROR', error)
    }
}

/* PUT */
async function put(url, id, dato) {
    try {
        return await (await fetch(url + '/' + id, {
            method: 'put',
            body: JSON.stringify(dato),
            headers: { 'content-type': 'application/json' }
        })).json()
    }
    catch (error) {
        console.error('PUT ERROR', error)
    }
}

/* DELETE */
async function del(url, id) {
    try {
        return await (await fetch(url + '/' + id, { method: 'delete' })).json()
    }
    catch (error) {
        console.error('DEL ERROR', error)
    }
}

