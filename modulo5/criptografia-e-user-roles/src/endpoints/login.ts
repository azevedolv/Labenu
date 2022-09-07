
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getUserByEmailData } from "../data/getUserByEmailData";
import { authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { authenticationData } from "../types/types";



export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const {email, password} = req.body;
        // console.log(req.body);
        
        if(!email || !password) {
            throw new Error("Por favor, preencha email e senha")
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }
        
        const user = await getUserByEmailData(email);
        // console.log(user[0]);
        
        const hash = new HashManager().compareHash(password, user[0].password);

        // console.log(hash);

        if(!user || !hash) {
            throw new Error("Credenciais de acesso são inválidas!")
        }
        
        const newAuthenticator = new authenticator()

        const payload: authenticationData = {
            id: user[0].id,
            role: user[0].role
        }
        // console.log(payload);
        
        const token = newAuthenticator.generateToken(payload)
       
        

        res.status(201).send(token)

    } catch (error: any) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
}