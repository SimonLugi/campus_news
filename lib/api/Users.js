import { createJSON, updateJSON, getJSON,deleteJSON, BASE_URL } from "."

const URL = `${BASE_URL}/login`

const UsersAPI = {
    create(post){
        return createJSON(`${URL}/`, { body: post });
    },
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    },
    update(put){
        //${put.id} By Cyrill
        return updateJSON(`${URL}/${put.id}`, { body: put})

    },
    delete(id){
        return deleteJSON(`${URL}/${id}`)
    }
}

export default UsersAPI
