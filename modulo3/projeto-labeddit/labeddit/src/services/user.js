import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
export   const login = (body, clear, navigate) =>{
    const url = `${BASE_URL}/users/login`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        goToFeed(navigate)
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
        alert(error.response.data)
        console.log(error.response.data)
        } else {
            alert(error.response.data.message)
        console.log(error.response.data.message)
        }
    })
}

export   const signup = (body, clear, navigate) =>{
    const url = `${BASE_URL}/users/signup`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        goToFeed(navigate)
        clear()
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
            alert(error.response.data)
            console.log(error.response.data)
            } else {
                alert(error.response.data.message)
            console.log(error.response.data.message)
            }
    })
}