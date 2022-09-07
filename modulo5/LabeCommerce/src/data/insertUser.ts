import { userData } from "../Types/typesUser";
import { connection } from "./baseDataBase";

export default async function insertUser(insertUser: userData): Promise<string> {

    const { id, name, email, password } = insertUser

    await connection("labecommerce_users")
        .insert({
            id,
            name,
            email,
            password
        })

    return `usuario ${name} criado com sucesso`
}