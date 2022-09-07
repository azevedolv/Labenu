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
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }

        if (password.length < 6) {
            throw new Error("Senha deve conter pelo menos 6 dígitos!");
        }
        const [user] = await connection("auth_User").where({ email })
        if (!user || user.password !== password) {
            throw new Error("Credenciais de acesso inválidas!");

        }
        const payload: authentication = {
            id: user.id
        }
        const token = generateToken(payload)
        res.status(201).send({ token })
    } catch (err: any) {
        res.send({ message: err.message })
    }
}