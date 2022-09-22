import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";


export default async function editRecipe(req: Request, res: Response): Promise<void> {
    try {
        const editRecipeID = req.params.id
        const {tittle, description} = req.body
        const token = req.headers.authorization as string
        const authorization = new Authenticator().getTokenData(token);
        const user = await new UserDatabase().findUserByID(authorization.id)
        
        if (!user) {
            res.status(404).send("Verifique token passado, não encontramos esse usuário!")   
        }

        if (!editRecipeID) {
            res.status(422).send("Verifique a ID passada, por favor!")
        }
        if (!tittle || !description) {
            res.status(422).send("Valores de 'tittle' e 'description' inválidos! Tente novamente, por favor!")
        }
       
       const recipe = await new RecipeDatabase().getRecipeByID(editRecipeID)
    if(authorization.id !== recipe.getUserID() && authorization.role !== "ADMIN"){
        res.status(422).send("Você possui atorização para realizar alterações apenas em suas receitas!")
    }
    await new RecipeDatabase().editRecipe(editRecipeID, tittle, description)
       
        res.status(200).send({
            message: "Receita editada com sucesso!"
          })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
} 