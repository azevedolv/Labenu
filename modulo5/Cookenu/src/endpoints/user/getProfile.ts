import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getProfile(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string;

        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }

        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)

        
        const user = await new UserDatabase().findUserByID(getTokenData.id)
        if(!user){
            res.status(404).send("Usuário não encontrado :( ")
        }
        res.status(200).send(user)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}