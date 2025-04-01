import { getJSON, BASE_URL } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=-createdAt`)
    },
    read(id){
        return getJSON(`${URL}/${id}`)
    }
}

export default PostsAPI
