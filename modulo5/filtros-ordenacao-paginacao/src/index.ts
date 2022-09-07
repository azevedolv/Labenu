import { app } from "./app";
import express, { Request, Response } from "express"
import cors from "cors"
import { connection } from "./data/connection";

app.use(express.json())
app.use(cors())

//1)a-

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
 
    return result[0]
 }
export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const filterName = req.query.name
       const table = "aula49_exercicio"
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
       const result = await connection(table)
      .where('name','LIKE',`%${filterName}%`)
      if(result.length == 0){
        res.statusCode = 404 
        throw new Error("User not found");
        
      }
 
       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  app.get("/users", getUsersByName)

 //1)b-
 export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const table = "aula49_exercicio"
       const type = req.params.type
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
       const result = await connection(table)
      .where('type','LIKE',`%${type}%`)
      if(result.length == 0){
        res.statusCode = 404 
        throw new Error("User not found");
        
      }
 
       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  app.get("/users/:type", getUsersByType)

 //2) busca nome ou tipo, ordenação padrão é crescente e caso não haja paramentro a ordenação deve ser por email
 export const getUsersByName2 = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const filterName = req.query.name
       const table = "aula49_exercicio"
       const filterType = req.query.type
       let sort = req.query.sort as string
       let order = req.query.order as string
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }

       if(!sort || sort.toUpperCase()!== "ASC" && sort.toUpperCase()!== "DESC"){
        sort="ASC"
     }


     if(!order || order!=="type"&& order !== "name"&& order !== "id"){
        order ="email"
     }

     if(!filterName && !filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       ORDER BY ${order} ${sort}
       `
       )
       res.status(200).send(result[0])
     }
     if(!filterName && filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       WHERE type LIKE '%${filterType}%'
       ORDER BY ${order} ${sort}
       `
       )
       res.status(200).send(result[0])
     }
     if(filterName && !filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       WHERE name LIKE '%${filterName}%'
       ORDER BY ${order} ${sort}
       `
       )
       res.status(200).send(result[0])
     }
     
       const result = await connection.raw(`
       SELECT * FROM ${table} 
       WHERE name LIKE '%${filterName}%' OR type LIKE '%${filterType}%'
       ORDER BY ${order} ${sort}
       `
       )
      
      if(result[0].length == 0){
        res.statusCode = 404 
        throw new Error("User not found");
        
      }
 
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  app.get("/users", getUsersByName2)

 //3) exiba apenas 5 users por vez, e permita que o usuário possa passar, por query, a página que deseja ver. 
 export const getUsersByName3 = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const filterName = req.query.name
       const table = "aula49_exercicio"
       let page = Number(req.query.page)
       if(page <1|| isNaN(page)){
        page=1
     }
     let size = 5
     let offset = size*(page -1)
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
       if(!filterName){
        const result = await connection(table)
      .limit(5)
      .offset(offset)
      res.status(200).send(result)
       }
       const result = await connection(table)
      .where('name','LIKE',`%${filterName}%`)
      .limit(size)
      .offset(offset)

      if(result.length == 0){
        res.statusCode = 404 
        throw new Error("User not found");
        
      }
 
       res.status(200).send(result)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  app.get("/users", getUsersByName3)

// 4)
export const getUsersByName4 = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       const filterName = req.query.name
       const table = "aula49_exercicio"
       const filterType = req.query.type
       let sort = req.query.sort as string
       let order = req.query.order as string
       let page = Number(req.query.page)
       if(page <1|| isNaN(page) || !page){
        page=1
     }
     let size = 5
     let offset = size*(page -1)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }

       if(!sort || sort.toUpperCase()!== "ASC" && sort.toUpperCase()!== "DESC"){
        sort="DESC"
     }


     if(!order || order!=="type"&& order !== "name"&& order !== "id"){
        order ="name"
     }

     if(!filterName && !filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       ORDER BY ${order} ${sort}
       LIMIT ${size}
       OFFSET ${offset}
       `
       )
       res.status(200).send(result[0])
     }
     if(!filterName && filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       WHERE type LIKE '%${filterType}%'
       ORDER BY ${order} ${sort}
       LIMIT ${size}
       OFFSET ${offset}
       `
       )
       res.status(200).send(result[0])
     }
     if(filterName && !filterType){
        const result = await connection.raw(`
       SELECT * FROM ${table}
       WHERE name LIKE '%${filterName}%'
       ORDER BY ${order} ${sort}
       LIMIT ${size}
       OFFSET ${offset}
       `
       )
       res.status(200).send(result[0])
     }
     
       const result = await connection.raw(`
       SELECT * FROM ${table} 
       WHERE name LIKE '%${filterName}%' OR type LIKE '%${filterType}%'
       ORDER BY ${order} ${sort}
       LIMIT ${size}
       OFFSET ${offset}
       `
       )
      
      if(result[0].length == 0){
        res.statusCode = 404 
        throw new Error("User not found");
        
      }
 
       res.status(200).send(result[0])
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 app.get("/users", getUsersByName4)