import axios from 'axios'
import { baseUrl } from '../constants/url'


export const RequestData = async (input) => {
    input.setLoading(true)
    try {
       const lotteries =  await axios.get(`${baseUrl}/${input.endpoint}`)
       input.setData(lotteries.data)
       input.setLoading(false)
    } catch (error) {
        input.setLoading(false)
        input.setMessageError("Sorry, something went wrong. Try again later!")

    }
}