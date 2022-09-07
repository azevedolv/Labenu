import connection from "./connection";

export const getUserByEmailData = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("auth_User")
      .where({ email });
 
    return result[0];
   }
