import { Request, Response } from "express";
import { FollowersDatabase } from "../../data/FollowersDatabase";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";


export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const deleteRecipeID = req.params.id
        const token = req.headers.authorization as string
        const authorization = new Authenticator().getTokenData(token);
        const user = await new UserDatabase().findUserByID(authorization.id)
        
        if (!user) {
            res.status(404).send("Verifique token passado, não encontramos esse usuário!")   
        }

        if (!deleteRecipeID) {
            res.status(422).send("Verifique a ID passada, por favor!")
        }

       
       const recipe = await new RecipeDatabase().getRecipeByID(deleteRecipeID)
    if(authorization.id !== recipe.getUserID() && authorization.role !== "ADMIN"){
        res.status(422).send("Você não possui autorização para deletar receitas de terceiros!")
    }
    await new RecipeDatabase().deleteRecipe(deleteRecipeID)
       
        res.status(200).send({
            message: "Receita apagada com sucesso!"
          })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
} 