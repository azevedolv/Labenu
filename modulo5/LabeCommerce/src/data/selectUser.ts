import { userData } from "../Types/typesUser";
import { connection } from "./baseDataBase";

export default async function selectUser(userId:string):Promise<userData | undefined>{

    const [result]= await connection("labecommerce_users").select("*").where({id:userId})
    
    if(result){
        const userType:userData = {
            id:result.id,
            name:result.name,
            email:result.email,
            password:result.password
        }
        return userType
    }else{
        return undefined
    }
    

}