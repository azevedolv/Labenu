import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

const useProtectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(navigate)
        }
    }, [])
}

export default useProtectedPage
