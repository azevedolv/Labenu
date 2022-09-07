import { Router } from "express";
import productController from "../controller/ProductController";

export const ProductRouter = Router()

ProductRouter.post('/register', productController.resgister)
ProductRouter.get('', productController.search)