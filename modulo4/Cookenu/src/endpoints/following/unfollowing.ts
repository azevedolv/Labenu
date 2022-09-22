import { Request, Response } from "express";
import { FollowersDatabase } from "../../data/FollowersDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function unfollowing(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string;
        const idToUnfollow = req.body.userToUnfollowID
        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }
        if(!idToUnfollow){
            res.status(422).send("Essa funcionalidade demanda uma ID para funcionar! Passe o ID de quem você quer seguir pela variável 'userToUnfollowID', por favor!")
        }
        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)

        
        const user = await new UserDatabase().findUserByID(getTokenData.id)
        if(!user){
            res.status(422).send("Seu Token está incorreto. Não encontramos usuários associados a ele :( ")
        }
        const userToUnfollow = await new UserDatabase().findUserByID(idToUnfollow)
        if(!userToUnfollow){
            res.status(404).send("Não econtramos usuário com a ID passada. Insira a ID do seguidor indesejável novamente :/ ")
        }

        await new FollowersDatabase().unfollowing(getTokenData.id, idToUnfollow)
        res.status(200).send(`${user.getName()} parou de seguir ${userToUnfollow.getName()}.`)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}