import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { productsData, productsInsert } from "../Types/typeProducts";

export default async function createProducts(req: Request, res: Response) {
    try {
        const { name, price, image_url }: productsInsert = req.body

        if (!name || !price || !image_url) {
            throw new Error("Todos os parâmetros devem ser passados")
        }

        const productsData: productsData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productsData)
        
        res.status(201).send({ message: answer })
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}