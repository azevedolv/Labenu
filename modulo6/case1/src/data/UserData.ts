import { CustomError } from '../error/CustomError';
import { User, UserFirstNameOutputDTO, UserInputDTO, UserLastNameOutputDTO, UserOutputDTO } from '../model/User';
import { BaseData } from "./BaseData"
const nomeTabela = "case1"

export class UserData extends BaseData {

    public sumParticipation = async (): Promise<any> => {
        const result = await UserData.connection.raw(`SELECT SUM(participation) AS total FROM ${nomeTabela} ;`)
        return result[0]
    }
    public countUsers = async (): Promise<any> => {
        const result = await UserData.connection.raw(`SELECT COUNT(participation) AS total FROM ${nomeTabela} `)
        // console.log(result[0]);

        return result[0]
    }

    public getUserById = async (id: number): Promise<UserInputDTO | undefined> => {
        try {
            const [user]: UserInputDTO[] = await UserData
                .connection(nomeTabela)
                .select(`*`)
                .where({ id })
            return user;
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    public async createUser(
        first_name: string,
        last_name: string,
        participation: number
    ): Promise<void | undefined> {
        try {
            await UserData
                .connection(nomeTabela)
                .insert({ first_name, last_name, participation })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getUserByFirstName(first_name: string): Promise<UserOutputDTO> {
        try {
            const result = await UserData
                .connection(nomeTabela)
                .select("*")
                .where({ first_name })
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getUserByLastName(last_name: string): Promise<UserOutputDTO> {
        try {
            const result = await UserData
                .connection(nomeTabela)
                .select("*")
                .where({ last_name })
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getUsers(): Promise<UserOutputDTO[]> {
        try {
            const results = await UserData
                .connection(nomeTabela)
                .select("*")
                .as("users")
            return results;
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getFirstName(id: number): Promise<UserFirstNameOutputDTO> {
        const result = await UserData
            .connection(nomeTabela)
            .select(`first_name`)
            .where({ id })


        // raw(`SELECT first_name FROM ${nomeTabela} WHERE id = ${id}`)
        return result[0]
    }

    public async getLastName(id: number): Promise<UserLastNameOutputDTO> {
        const result = await UserData
            .connection(nomeTabela)
            .select(`last_name`)
            .where({ id })
            // .raw(`SELECT last_name FROM ${nomeTabela} WHERE id = ${id}`)
        return result[0]
    }

    public async deleteUsers(): Promise<void> {
        try {
            await UserData
                .connection(nomeTabela)
                .truncate()
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}
