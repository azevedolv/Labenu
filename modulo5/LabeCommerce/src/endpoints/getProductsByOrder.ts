import { Request, Response } from "express";
import selectProductsByOrder from "../data/selectProductsByOrder";

export default async function getProductsByOrder(req: Request, res: Response) {
    try {
        let order:string = req.query.order as string
        
        if(order.toLowerCase() !== "asc" && order.toLowerCase() !== "desc"){
            order = "asc"
        }

        const allProductsByOrder = await selectProductsByOrder(order)

        res.status(200).send(allProductsByOrder)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}