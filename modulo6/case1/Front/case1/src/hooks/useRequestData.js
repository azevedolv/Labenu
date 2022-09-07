import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    const request = () =>{
        axios
        .get(url)
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
            // console.log(data);
        })
        .catch((err) => {
            console.log(err);
            // console.log(JSON.stringify(err))
            // console.log(err.res.message)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        request()
        setIsLoading(true)
   
    }, [])

    return [data, request, isLoading]
}

export default useRequestData 