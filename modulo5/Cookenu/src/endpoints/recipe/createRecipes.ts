import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Recipes } from "../../entities/Recipes";
import { Authenticator } from "../../services/Authenticator";
import { IDGenerator } from "../../services/IDGenerator";

export async function createRecipes(req: Request, res: Response){
    try {
        const token = req.headers.authorization
        const {tittle, description} = req.body

        //validações
        if(!tittle || !description){
            res.status(422).send("Insira corretamente as informações de 'tittle' e 'description'.")
        }
        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }
        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)
        const user = await new UserDatabase().findUserByID(getTokenData.id)
        if(!user){
            res.status(404).send("Usuário não encontrado!")
        }

        //conexão com o banco de dados
        const id = new IDGenerator().generateID()
        const date = new Date()
        const formatedDate = date.toISOString().slice(0, 10)
        const recipe = new Recipes(id, formatedDate, tittle, description, getTokenData.id)
        await new RecipeDatabase().createRecipe(recipe)

        //só para mostrar o post ao criar
        let realDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();
        const post = {
            id,
            date: realDate,
            tittle: tittle,
            description: description
        }
        res.status(200).send({message: "Receita criada com sucesso :D", post})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}