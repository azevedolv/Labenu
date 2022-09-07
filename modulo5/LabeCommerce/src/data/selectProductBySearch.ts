import { productsType } from "../functions"
import { productsData } from "../Types/typeProducts"
import { connection } from "./baseDataBase"

export default async function selectProductBySearch(search:string):Promise<productsData[] | undefined>{

    const result = await connection("labecommerce_products")
    .where("name","like",`%${search}%`)

    const allProductsType = result.map((product)=>{
        return productsType(product)
    })

    return allProductsType
}