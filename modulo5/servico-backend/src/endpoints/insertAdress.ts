import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAdress } from "../services/getFullAdress"

export const insertAdress = async (req: Request, res: Response) => {
    try {
        // recebe cep por parametro
        const cep = req.params.cep
        const numero = Number(req.query.numero)
        const complemento =req.query.complemento as string
        
        // funcao que traz o meu endereco
        const address = await getFullAdress(cep)

        if(!address){
            throw new Error("cep inválido")
        }
        
        await insertAdressDb(address, cep, numero, complemento)

        res.status(201).send("Endereco criado com sucesso")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}