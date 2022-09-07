import { Request, Response } from "express";
import { createUserData } from "../data/createUserData";
import { getUserByEmailData } from "../data/getUserByEmailData";
import { authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/IDGenerator";
import { authenticationData, user, USER_ROLES } from "../types/types";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
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
         throw new Error("Senha inválida! Deve conter ao menos 6 caracteres.");
       }
      const user = await getUserByEmailData(email)

      if (user.email === email) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generateId()
      const hashPassword =  new HashManager().createHash(password)
      const newUser: user = { id, email, password: hashPassword, role: USER_ROLES.normal }

      // await connection('auth_User')
      //    .insert(newUser)
      createUserData(newUser.id, newUser.email, newUser.password)
      const payload :authenticationData = {
         id: newUser.id,
         role: newUser.role
      }
      const token = new authenticator().generateToken(payload)
      res.status(201).send(token)

   } catch (error:any) {
     
         res.send({ message: error.message })
     
   }
} 