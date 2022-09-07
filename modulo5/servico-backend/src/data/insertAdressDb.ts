import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address, cep:string, numero:number, complemento:string) {

    const { logradouro,bairro,cidade,estado} = adress
    if(adress && cep && numero && complemento) {
        await connection("Adress").insert({
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
    }
    if(adress && cep && numero && !complemento) {
        await connection("Adress").insert({
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            estado
        })
    }
    

}