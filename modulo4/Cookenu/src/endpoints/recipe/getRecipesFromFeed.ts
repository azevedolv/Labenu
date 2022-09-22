import { Request, Response } from "express";
import { FollowersDatabase } from "../../data/FollowersDatabase";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getRecipesFromFeed(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string;

        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }

        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)
        // console.log(getTokenData.id);
        
        const user = new UserDatabase().findUserByID(getTokenData.id)
        // console.log(user);
        
        if(!user){
            res.status(422).send("Usuário não encontrado, verifique seu token! :( ")
        }
        const recipesArray = await new FollowersDatabase().getFeed(getTokenData.id)
        if(recipesArray.length < 1){
            res.status(404).send("Seu feed ainda está vazio... siga seus amigos e encontre suas receitas favoritas!! :D")
        }
        res.status(200).send(recipesArray)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}