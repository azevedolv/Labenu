import { connection } from "./connection";

export const getUserByEmailData = async(email: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM auth_User WHERE email LIKE '%${email}%'`)

    return result[0];
   }