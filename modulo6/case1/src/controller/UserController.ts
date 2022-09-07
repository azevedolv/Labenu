import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { UserInputDTO } from '../model/User';
export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }
    async deleteUsers(req: Request, res: Response){
        try {
           await new UserBusiness().deleteUsers()
        //    await this.userBusiness.deleteUsers()
            res.status(200).send("Successfully deleted users!")
        } catch (error:any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
        }
    async createUser(req: Request, res: Response) {
        try {
            const input: UserInputDTO = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                participation: Number(req.body.participation)
            }
            // console.log(input);
            await new UserBusiness().createUser(input)
            // await this.userBusiness.createUser(input)
            
            

            res.status(200).send({ message: `User inserted successfully` })
        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    async getUser(req: Request, res: Response) {
        const id = req.query.id
        const first_name = req.query.first_name
        const last_name = req.query.last_name

        const dataId = { id: id }
        const dataFirst_name = { first_name: first_name }
        const dataLast_name = { last_name: last_name }
        try {
            if (id && !first_name && !last_name) {
                const result = await new UserBusiness().getUser(dataId)
                // const result = await this.userBusiness.getUser(dataId)
                res.status(200).send(result)
            } else if (!id && first_name && !last_name) {
                const result = await new UserBusiness().getUser(dataFirst_name)
                res.status(200).send(result)
            } else if(!id && !first_name && last_name){
                const result = await new UserBusiness().getUser(dataLast_name)
                res.status(200).send(result)
            } else {
                const results = await new UserBusiness().getAllUsers();
                // console.log(results);
                
                res.status(200).send(results);
            }

        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    public async getFirstName (req:Request, res:Response) {
        try {
            const id = Number(req.params.id)


            const result = await new UserBusiness().getFirstName(id)
            
            res.status(200).send({result})

        } catch (error:any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    public async getLastName (req:Request, res:Response) {
        try {
            const id = Number(req.params.id)

            const result = await new UserBusiness().getLastName(id)
            res.status(200).send({result})
        } catch (error:any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }
}