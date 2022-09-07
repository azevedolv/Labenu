import { ProductBusiness } from "../src/business/ProductBusiness"
import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { ProductDataMock } from "./mocks/productDataMock"
import { product1, product3, product4 } from "./mocks/productsMocks"




let inputs = {
            id: 'id' ,
            name: 'name',
            tags: ['abc','def','ghi'] 
        }



const productBusinessMock = new ProductBusiness(
    new ProductDataMock(),
    new IdGeneratorMock()

)

describe('test class ProductBusiness' , () => {
    describe('test register method', ()=> {
        test('test product already register', async () => {
            inputs.name = 'name2'
            try {
                await productBusinessMock.register(inputs)
            } catch (error:any) {
                inputs.name = 'name'
                expect(error.message).toEqual('Product already registred!')
                expect(error.statusCode).toStrictEqual(409)
            } finally {
                expect.assertions(2)
            }
        })
        test('test new product', async () => {
            
            try {
                await productBusinessMock.register(inputs)
            } catch (error:any) {
                expect(error.message).toEqual("Cannot read properties of undefined (reading 'id')")
            } finally {
                expect.assertions(1)
            }
        })
    })
    describe('test searc method', () => {
        test('search by id', async () => {
            const input = {id: 'id1',name:undefined as any, tags: undefined as any}
            const result = await productBusinessMock.search(input)
            expect(result).toEqual(product1)
        })
        test('search by name', async () => {
            const input = {id: '',name:'name' as any, tags: undefined as any}
            const result = await productBusinessMock.search(input)
            expect(result).toEqual([product3])
        })
        test('search by tags', async () => {
            const input = {id: '',name:undefined as any, tags: ['tag'] as any}
            const result = await productBusinessMock.search(input)
            
            expect(result).toEqual([product4])
        })
    })
})