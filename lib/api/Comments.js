import {getJSON, BASE_URL, createJSON, updateJSON, deleteJSON} from "."

const URL = `${BASE_URL}/comments`

const CommentsAPI = {
    create(){
        return createJSON(`${URL}`)
    },
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    },
    update(id){
        return updateJSON(`${URL}/${id}`)
    },
    delete(id){
        return deleteJSON(`${URL}/${id}`)
    }
}

export default CommentsAPI
