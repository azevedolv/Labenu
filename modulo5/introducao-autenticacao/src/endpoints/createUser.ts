import { Request, Response } from "express";
import connection from "../data/connection";
import { createUserData } from "../data/createUserData";
import { generateToken } from "../services/Authenticator";
import { IDGenerator } from "../services/IDGenerator";
import { authentication, user } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }
      if(email.indexOf("@") === -1){
         throw new Error("Email inválido!");
      }

      if (password.length < 6) {
         throw new Error("Senha inválida!");
       }
      const [user] = await connection('auth_User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IDGenerator().generateID()

      const newUser: user = { id, email, password }

      // await connection('auth_User')
      //    .insert(newUser)
      createUserData(newUser.id, newUser.email, newUser.password)
      const payload :authentication = {
         id: newUser.id
      }
      const token = generateToken(payload)
      res.status(201).send(token)

   } catch (error:any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}