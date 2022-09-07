import { Request, Response } from "express";
import connection from "../data/connection";
import { generateToken } from "../services/Authenticator";
import { authentication } from "../types";

export default async function getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
        const { email } = req.body

        if (!email) {
            res.statusCode = 422
            throw new Error("Preencha o campo 'email'")
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }
        const user = await connection.raw(`SELECT * FROM auth_User WHERE email LIKE '%${email}%'`)
       if(user[0].length < 1){
        throw new Error("Usuário não econtrado!");
        
       }
       

        res.status(201).send(user[0])
    } catch (err: any) {
        res.send({ message: err.message })
    }
}