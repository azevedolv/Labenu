import {compareSync, genSaltSync, hashSync} from "bcryptjs"

export class HashManager{
    createHash = (plainText: string):string => {
        // 12 -> numero magico
        // parametro que define o tempo de execução do algoritmo
        const cost = 12
        // string aleatoria para gerar hashs diferentes mesmo com senhas iguais
        const salt: string = genSaltSync(cost)
        
        // const salt: string = "$2a$12$R76aG8inQRY9F3U2TUdoyS" 
        // gerando a hash aleatoria
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    } 

    compareHash = (plainText: string, cypherText: string):boolean => {
        return compareSync(plainText, cypherText)
    }
}