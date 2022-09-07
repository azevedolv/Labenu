import { Request, Response } from "express";
import { getData } from "../data/getData";
import { getUserByIdData } from "../data/getUserByIDData";

export default async function getUserByToken(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string;
        console.log(token);
        
        const authenticationData = getData(token);
        const id:any = authenticationData.id
        
        const user = await getUserByIdData(id.id);
        

    if(!token){
        throw new Error("Insira o token de autenticação");
        
    }
       if(!user){
        throw new Error("Usuário não econtrado!");
        
       }
       
        const newUser ={
            id: user[0].id,
            email:user[0].email
        }
       res.status(200).send(newUser);
    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}