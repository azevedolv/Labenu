import { Request, Response } from "express";
import { FollowersDatabase } from "../../data/FollowersDatabase";
import { RecipeDatabase } from "../../data/RecipeDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";


export default async function deleteAccount(req: Request, res: Response): Promise<void> {
    try {
        const deleteUserId = req.params.id
        const token = req.headers.authorization as string
        const authorization = new Authenticator().getTokenData(token);



        if (authorization.role !== 'ADMIN') {
            res.status(422).send("Apenas administradores podem executar essa funcionalidade.")
        }

        if (!deleteUserId) {
            res.status(422).send("Verifique a ID passada, por favor!")
        }

        // para deletar um usuário, preciso deletar todas as relações desse usuário.
        //ou seja, preciso deletar as receitas que ele criou, os follows, por fim, deletar o usuário.
        await new RecipeDatabase().deleteRecipe(deleteUserId)
        // deletando as receitas que o usuário criou.
        await new FollowersDatabase().deleteFollowRelationship(deleteUserId)
        // deletando a relação dele com outros usuários(seguir/deixar de seguir)
        await new UserDatabase().deleteUser(deleteUserId)
        // deletando, por fim, o usuário.

        res.status(200).send({
            message: "User successfully deleted!"
          })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
} 