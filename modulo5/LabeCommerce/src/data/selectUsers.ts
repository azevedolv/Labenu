import { typeUser } from "../functions";
import { userData } from "../Types/typesUser";
import { connection } from "./baseDataBase";


export default async function selectUsers(): Promise<userData[] | undefined> {

    const result = await connection("labecommerce_users")

    const allUserType = result.map((user)=>{
        return typeUser(user)
    })

    return allUserType
}