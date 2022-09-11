import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../routes/coordinator";

const useUnProtectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
            goToFeed(navigate)
        }
    }, [])
}

export default useUnProtectedPage
