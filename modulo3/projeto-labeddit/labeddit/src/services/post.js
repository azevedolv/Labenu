import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export   const postar = (body, clear, getPosts) =>{
    const url = `${BASE_URL}/posts`;
    const headers = { 
        headers: {
            'Content-Type': 'application/json',
            Authorization:  localStorage.getItem("token")
    }
}
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response.data)
        getPosts()
        clear()
    })
    .catch((error) =>{
        console.log(error)
    })
}

export const comentar = (body, clear, getComments, id) =>{
    const url = `${BASE_URL}/posts/${id}/comments`;
    const headers = { 
        headers: {
            'Content-Type': 'application/json',
            Authorization:  localStorage.getItem("token")
    }
}
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response.data)
        getComments()
        clear()
    })
    .catch((error) =>{
        console.log(error)
    })
}