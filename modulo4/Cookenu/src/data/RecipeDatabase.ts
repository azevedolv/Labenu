import { Recipes } from "../entities/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipes) {
        try {

            await BaseDatabase.connection('lbn_Recipes').insert({
                id: recipe.getID(),
                date: recipe.getDate(),
                tittle: recipe.getTittle(),
                description: recipe.getDescription(),
                id_user: recipe.getUserID()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getRecipeByID(id: string): Promise<Recipes> {
        try {
            const recipe = await BaseDatabase.connection('lbn_Recipes').select("*").where({ id })
            return recipe[0] && Recipes.toUserModel(recipe[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async deleteRecipe(id: string): Promise<any> {
       const result = await BaseDatabase.connection()
            .delete()
            .from('lbn_Recipes')
            .where('id', id)
            .orWhere('id_user', id)
            return result 
    }

    public async editRecipe(id: string, tittle: string, description: string): Promise<void> {
        await BaseDatabase.connection()
            .update({
                tittle,
                description
            })
            .from('lbn_Recipes')
            .where('id', id)
    }
}

