import { Request, Response } from "express";
import { RecipeDatabase } from "../../data/RecipeDatabase";

export async function getRecipe(req: Request, res: Response) {
    try {
        const recipeID = req.params.id
        const token = req.headers.authorization as string;

        if (!token) {
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }
        if (!recipeID) {
            res.status(422).send("Essa funcionalidade demanda uma ID para busca! Passe a ID pela url, por favor!")
        }


        const recipe = await new RecipeDatabase().getRecipeByID(recipeID)
        if (!recipe) {
            res.status(404).send("Receita não encontrada :( ")
        }
        const data = recipe.getDate()
        let ano = data.split("-")[0];
        let mes = data.split("-")[1];
        let dia = data.split("-")[2];
        const realDate = `${dia}/${mes}/${ano}`
        const recipeToShow = {
            id: recipeID,
            date: realDate,
            tittle: recipe.getTittle(),
            description: recipe.getDescription()
        }
        res.status(200).send(recipeToShow)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}