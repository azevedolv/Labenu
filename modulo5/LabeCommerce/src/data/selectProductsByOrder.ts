import { productsType } from "../functions";
import { productsData } from "../Types/typeProducts";
import { connection } from "./baseDataBase";

export default async function selectProductsByOrder(order:string):Promise<productsData[] | undefined>{
    console.log(order);
    
    const result = await connection("labecommerce_products")
    .orderBy("name",`${order}`)

    const allProductsType = result.map((product)=>{
        return productsType(product)
    })

    return allProductsType

}