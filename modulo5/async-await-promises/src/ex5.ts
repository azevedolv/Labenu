import axios from "axios"
import { baseURL } from "./baseURL"


type user ={
    id: string,
    name: string,
    email: string
}

const getAllSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((sub:any)=>{
        return {
            id: sub.id,
            name: sub.name,
            email: sub.email,
          };
    })
}

const message:string = "Olá, há uma nova notícia em nosso site"

const notifyAllSubscribers = async (users: user[], message:string):Promise<void> => {
    for (const user of users) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log(`Notificação enviada a ${user.name}`)
        } catch (erro) {
            console.log(`Erro ao enviar para ${user.id}`)
        }
    }
}

const main = async ():Promise<void> => {
    try {
        const subscribers = await getAllSubscribers()
        await notifyAllSubscribers(subscribers, message)
    } catch (error: any) {
        const res = error.response?.data || error.message
        console.log(res)
    }
}

main()