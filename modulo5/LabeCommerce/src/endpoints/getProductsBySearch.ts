import { Request, Response } from "express";
import selectProductBySearch from "../data/selectProductBySearch";

export default async function getProductsBySearch(req:Request,res:Response){
    try {
        let search:string = req.query.search as string
        
        if(!search){
            search = ''
        }

        const allProductsBySearch = await selectProductBySearch(search)

        if(!allProductsBySearch?.length){
            throw new Error(`Nao ha nenhum produto com ' ${search} '`)
        }

        res.status(200).send(allProductsBySearch)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}