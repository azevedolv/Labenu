import { Request, Response } from "express";
import { FollowersDatabase } from "../../data/FollowersDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function following(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string;
        const idToFollow = req.body.userToFollowID
        if(!token){
            res.status(422).send("Essa funcionalidade demanda uma autorização! Passe o token pelo headers, por favor!")
        }
        if(!idToFollow){
            res.status(422).send("Essa funcionalidade demanda uma ID para funcionar! Passe o ID de quem você quer seguir pela variável 'userToFollowID', por favor!")
        }
        const authentication = new Authenticator()
        const getTokenData = authentication.getTokenData(token)

        
        const user = await new UserDatabase().findUserByID(getTokenData.id)
        if(!user){
            res.status(422).send("Seu Token está incorreto. Não encontramos usuários associados a ele :( ")
        }
        const userToFollow = await new UserDatabase().findUserByID(idToFollow)
        if(!userToFollow){
            res.status(404).send("Não econtramos usuário com a ID passada. Não se sinta solitário, tente novamente :/ ")
        }

        await new FollowersDatabase().following(getTokenData.id, idToFollow)
        res.status(200).send(`${user.getName()} acaba de seguir ${userToFollow.getName()}.`)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}