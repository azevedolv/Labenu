import { BaseDatabase } from "./BaseDatabase";

export class FollowersDatabase extends BaseDatabase{

    public async following(id: string, idToFollow: string) {
        try {

            await BaseDatabase.connection('Followers_lbn').insert({
                id_follower: id,
                id_followed: idToFollow
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async unfollowing(id: string, idToUnfollow: string) {
        try {

            await BaseDatabase.connection('Followers_lbn').delete("*").where({ id_follower: id, id_followed: idToUnfollow })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getFeed(id: string) {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("Followers_lbn")
            .innerJoin("lbn_User", "lbn_User.id", "Followers_lbn.id_follower")
            .innerJoin("lbn_Recipes", "lbn_Recipes.id_user", "Followers_lbn.id_followed")
            .where("Followers_lbn.id_follower", `${id}`)
        const arrayRecipes = result.map((recipe: { date: string }) => {
            const ano = recipe.date.split("-")[0];
            const mes = recipe.date.split("-")[1];
            const dia = recipe.date.split("-")[2];
            return {
                ...recipe,
                date: `${dia}/${mes}/${ano}`
            }
        })
        return arrayRecipes

    }


    public async deleteFollowRelationship(id: string): Promise<any> {
      const result =  await BaseDatabase.connection()
            .delete()
            .from("Followers_lbn")
            .where('id_followed', id)
            .orWhere('id_follower', id)
            return result
    }

    }
