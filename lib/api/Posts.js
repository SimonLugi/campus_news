import { createJSON, updateJSON, getJSON,deleteJSON, BASE_URL } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    create(post,token){
        console.log(`${URL}/`); // Log the URL to verify it's correct
        console.log(post)
        return createJSON(`${URL}/`, { body: post,token });
    },
    readAll() {
        return getJSON(`${URL}?_sort=createdAt`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    },
    update(put,token){
        console.log(put)
        //${put.id} By Cyrill
        return updateJSON(`${URL}/${put.id}`, { body: put, token})

    },
    delete(id,token){
        return deleteJSON(`${URL}/${id}`, {body:token})
    }
}

export default PostsAPI
