import { User, UserFirstNameOutputDTO, UserLastNameOutputDTO } from "../model/User";
import { userFirstNameMock, userLastNameMock, userMock } from "./UserMocks";

export class UserDatabaseMock {
    public async createUser(
        first_name: string,
        last_name: string,
        participation: number
    ): Promise<void> {}

    public async getUserByFirstName(first_name: string): Promise<User> {
            return userMock
    }
    public getUserById = async (id: string): Promise<User> => {
            return userMock
    }
    public async getUserByLastName(last_name: string): Promise<User> {
        return userMock
 
    }

    public async getUsers(): Promise<User[]> {
        return [userMock]
    }

    public async getFirstName(id: number): Promise<UserFirstNameOutputDTO> {
        return userFirstNameMock
    }

    public async getLastName(id: number): Promise<UserLastNameOutputDTO> {
        return userLastNameMock
    }

    public async deleteUsers(): Promise<void> {}

    public countUsers = async (): Promise<any> => { return 3}

    public sumParticipation = async (): Promise<any> => {return 20}
}