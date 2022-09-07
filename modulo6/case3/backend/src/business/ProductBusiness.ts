import { ProductData } from "../data/ProductData"
import { CustomError } from "../model/error/CustomError"
import { LinkDB, ProductDB, RegisterInputsDTO, SearchInputsDTO, TagDB } from "../model/types"
import { IdGenerator } from "../services/idGenerator"



export class ProductBusiness {
    constructor(
        private productDataBase: ProductData,
        private IdGenerator: IdGenerator
    ){}

    register =  async (inputs:RegisterInputsDTO):Promise<void> => {
        try {
            const tags = inputs.tags as string[];

            if(!inputs.name || !inputs.tags || typeof(inputs.name) !== 'string' || tags.length<1){
                throw new CustomError(422,'Please, review the parameters sent!')
            }
            const findProduct = await this.productDataBase.getProductBySpecificName(inputs.name) as ProductDB
            if(findProduct.id || findProduct.name){
                throw new CustomError(409,'Product already registred!')
            }
            tags.map(tag => {
                if(typeof(tag) !== 'string') {
                    throw new CustomError(422,`A tag ${tag} é inválida`)
                }
            })

            const productId = this.IdGenerator.generate()
            await this.productDataBase.insertProduct({id: productId, name:inputs.name,})

            const tagsArray = tags.map(async (tag:any) => {
                const tagDB = await this.productDataBase.getTagByName(tag) as TagDB
                if(!tagDB.id || !tagDB.name){
                    const tagId = this.IdGenerator.generate()
                    await this.productDataBase.insertTags({id:tagId,name:tag})
                    tagDB.id = tagId,
                    tagDB.name = tag
                }
                return tagDB
            })

            const insertTags = await Promise.all(tagsArray)

            insertTags.map(async (tag:any) => {
                const Link:LinkDB = {
                    id_product: productId,
                    id_tag:tag.id
                }
                await this.productDataBase.insertProductTagLink(Link)
            })
            
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    search = async (inputs: SearchInputsDTO) => {
        try {
            if(inputs.id) {
                return this.productDataBase.getProductById(inputs.id)
            } else if (inputs.name) {
                
                const result = this.productDataBase.getProductByName(inputs.name)
                // console.log(result);
                
                return result
            } else {
                return this.productDataBase.getProductByTags(inputs.tags)
            }

        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new ProductBusiness(
    new ProductData(),
    new IdGenerator()
)