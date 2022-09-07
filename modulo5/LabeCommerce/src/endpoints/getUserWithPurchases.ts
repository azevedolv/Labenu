import { Request, Response } from "express";
import selectUsersWithPurchases from "../data/selectUsersWithPurchases";

export default async function getUserWithPurchases(req:Request,res:Response){
    try {
        
        const allUsersWithPurchases = await selectUsersWithPurchases()

        // if(!allUsersWithPurchases.length){
        //     throw new Error("Não há nenhum usuario cadastrado!")
        // }

        res.status(200).send(allUsersWithPurchases)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}