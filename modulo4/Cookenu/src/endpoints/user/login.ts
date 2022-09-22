import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { User, USER_ROLES } from "../../entities/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";


import { IDGenerator } from "../../services/IDGenerator";

export async function login(req: Request, res: Response){
    try {
        const {email, password} = req.body
        if(!email || !password){
            res.status(422).send("Insira corretamente as informações de 'email' e 'password'")
        }
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        if(!user){
            res.status(409).send("Usuário não econtrado!")
        }
        
        const comparePassword = await new HashManager().compare(password, user.getPassword())

       if(!comparePassword){
        res.status(401).send("Senha incorreta!")
       }

        const authenticator = new Authenticator()
       const payload = {
        id: user.getID(),
        role: user.getRole()
       }
        const token = authenticator.generateToken(payload)

        res.status(200).send({message: `Seja bem-vind@ ${user.getName()}`, token})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}