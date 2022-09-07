import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { purchaseData } from "../Types/typePurchase";

export default async function createPurchases(req: Request, res: Response) {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new Error("Os parâmetros devem ser passados")
        }

        const userAlreadyExist = await selectUser(userId)

        if (!userAlreadyExist) {
            throw new Error(`O usuario com o id ${userId} nao foi encontrado`)
        }

        const productAlreadyExist = await selectProduct(productId)

        if (!productAlreadyExist) {
            throw new Error(`O produto com o id ${productId} nao foi encontrado`)
        }

        // calculando o preço total
        const totalPrice = productAlreadyExist.price * quantity;

        const purchase: purchaseData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const anwser = await insertPurchase(purchase)

        res.status(201).send({ message: anwser })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}