import axios from "axios"
import { baseURL } from "./baseURL"



// a. O que o `Promise.all` faz?
// Recebe um array de Promises e retorna outra Promise, que resolve todas as outras. Como se transformasse todas em 1 (?)

// b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?
//ele otimiza o processo de fazer varias requisições, executando todas as promises ao mesmo tempo!
// c. Reimplemente a função utilizando `Promise.all`


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
        try {
            const requests = users.map(user =>
                axios.post(`${baseURL}/notifications`, {
                    subscriberId: user.id,
                    message: "Olá, há uma nova notícia em nosso site"
                }))
            await Promise.all(requests)
            console.log(`Notificações enviadas!`)
        } catch (erro) {
            console.log(`Erro ao enviar notificações`)
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
