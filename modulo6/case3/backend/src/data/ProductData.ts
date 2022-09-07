import { CustomError } from "../model/error/CustomError";
import { LinkDB, ProductDB, TagDB } from "../model/types";
import {BaseData} from "./BaseData";


export class ProductData extends BaseData {

    getProductById = async (id:string):Promise<ProductDB | undefined> => {
        try {
            const resultDB = await BaseData.connection('case3_Product').select('*').where({id})
            const result:ProductDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name
            }
            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductBySpecificName = async (name:string):Promise<ProductDB | undefined> => {
        try {
            const resultDB = await BaseData.connection('case3_Product').select('*').where({name})
            const result:ProductDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name
            }
            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductByName = async (name:string):Promise<ProductDB[] | undefined> => {
        try {
            const resultDB = await BaseData.connection.raw(`SELECT * FROM case3_Product WHERE name LIKE '%${name}%'`)
            const result:ProductDB[] = resultDB[0]?.map((product:ProductDB) => {
                return {id: product.id, name:product.name}
            })

            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getProductByTags = async (tags:string[]):Promise<ProductDB[] | undefined> => {
        try {
            const promisesArray = tags.map(tag => {
                return BaseData.connection('case3_Product')
                .select('case3_Product.id as id', 'case3_Product.name as name')
                .innerJoin('case3_Products_Tags','case3_Products_Tags.id_product','case3_Product.id')
                .innerJoin('case3_Tags','case3_Tags.id','case3_Products_Tags.id_tag')
                .where('case3_Tags.name',tag)
            })
            const resultDB = await Promise.all(promisesArray)

            if(resultDB.length > 0) {
                let result:ProductDB[] = []
                resultDB.map(a => a.map(b => result.push({ id: b.id, name: b.name})))
                const resultStrings = result.map(a => JSON.stringify(a))
                const set = new Set(resultStrings)
                result = Array.from(set).map(a => JSON.parse(a))
                return result
            }
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertProduct = async (product:ProductDB):Promise<void> => {
        try {
            await BaseData.connection('case3_Product').insert(product)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertTags = async (tag:TagDB):Promise<void> => {
        try {
            await BaseData.connection('case3_Tags').insert(tag)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    getTagByName = async (name:string):Promise<TagDB | undefined> => {
        try {
            const resultDB = await BaseData.connection("case3_Tags").where({name,});
            const result:TagDB = {
                id: resultDB[0]?.id,
                name: resultDB[0]?.name,
            };
            return result;
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    insertProductTagLink = async (Link:LinkDB):Promise<void> => {
        try {
            await BaseData.connection('case3_Products_Tags').insert(Link)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }
}