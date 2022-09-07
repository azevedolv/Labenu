// import { Request, Response } from "express";
// import { connection } from "../data/connection";
// import { authenticator } from "../services/authenticator";
// import { authenticationData } from "../types/types";


// export default async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {
      
//       // Exemplo 5
//       // Transforme o endpoint de editar usuário em um endpoint 
//       // autenticado. Para isso, ele deve:

//       //Receber um token pelo cabeçalho da requisição 
//       //(não será mais necessário passar o id por path parameters)
//       //Editar os dados do usuário, caso o token seja válido, 
//       //ou devolver um erro, caso contrário 


//       const { name, nickname } = req.body
//       const token = req.headers.authorization as string

//       if (!name && !nickname) {
//          res.statusCode = 422
//          res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
//          throw new Error()
//       }

//       if(!token) {
//          res.statusCode = 422
//          res.statusMessage = "Token não informado"
//          throw new Error()
//       }

//       const newAuthenticator = new authenticator()
//       const tokenData = newAuthenticator.getTokenData(token) as authenticationData

//       if(!tokenData) {
//          res.statusCode = 401
//          res.statusMessage = "Token inválido"
//          throw new Error()
//       }

//       // verificar se o tipo do usuário é admin e se ele pode
//       // realizar ou não a edição
//       if(tokenData.role !== "USER_ROLES.ADMIN") {
//          res.statusCode = 403
//          res.statusMessage = "Você não tem autorização"
//          throw new Error("Você não tem autorização")
//       }

//       await connection('to_do_list_users')
//          .update({ name, nickname })
//          .where({ id: tokenData.id })

//       res.end()

//    } catch (error) {

//       if (res.statusCode === 200) {
//          res.status(500).end()
//       }

//       res.end()
//    }
// }