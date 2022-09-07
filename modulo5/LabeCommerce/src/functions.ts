import { productsData } from "./Types/typeProducts"
import { userData } from "./Types/typesUser"

export const productsType = (product:any)=>{

    const typeProduct:productsData ={
        id:product.id,
        name:product.name,
        price:product.price,
        image_url:product.image_url
    }

    return typeProduct
}

export const typeUser = (user: any) => {

    const createUser: userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }

    return createUser
}
