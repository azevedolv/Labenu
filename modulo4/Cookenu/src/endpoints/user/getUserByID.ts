import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getUserByID(req: Request, res: Response){
    try {
        const id = req.params.id
        const token = req.headers.authorization as string;

        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }
        if(!id){
            res.status(422).send("Precisamos da ID do usuário para encontrá-lo :/")
        } 
        const user = await new UserDatabase().findUserByID(id)
        if(!user){
            res.status(404).send("Usuário não encontrado :( ")
        }
        res.status(200).send(user)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}