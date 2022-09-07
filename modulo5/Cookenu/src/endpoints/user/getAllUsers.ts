import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getAllUsers(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string;

        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }

        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)

        if(getTokenData.role !== "ADMIN"){
            res.status(401).send("Apenas administradores podem acessar essa funcionalidade :( ")
        }
        const users = await new UserDatabase().getAllUsers()
        res.status(200).send(users)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}