import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { User, USER_ROLES } from "../../entities/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";


import { IDGenerator } from "../../services/IDGenerator";

export async function signup(req: Request, res: Response){
    try {
        const {name, email, password, role} = req.body
        if(!name || !email || !password || !role){
            res.status(422).send("Insira corretamente as informações de 'name', 'email', 'password' e 'role'.")
        }
        // if(role !== USER_ROLES.ADMIN || role !== USER_ROLES.NORMAL ){
        //     res.status(422).send("O parâmetro 'role' precisa ser 'NORMAL' ou 'ADMIN'. Insira novamente os dados.")
        // }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        if(user){
            res.status(409).send("Usuário já cadastrado!")
        }
        const generateId = new IDGenerator()
        const id = generateId.generateID();
        // console.log(id);
        
        const hashPassword = await new HashManager().hash(password)

        const newUser = new User(id, name, email, hashPassword, role)
        // console.log(newUser);
        
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()

        const token = authenticator.generateToken({id, role})

        res.status(200).send({message: "Usuário criado com sucesso", token})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}