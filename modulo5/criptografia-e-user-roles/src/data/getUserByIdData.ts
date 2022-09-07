import { connection } from "./connection";


export const getUserByIdData = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("auth_User")
    .where({ id });

  return result;
}