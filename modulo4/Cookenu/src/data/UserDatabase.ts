import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {


    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('lbn_User').select("*").where({ email: email })

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    public async createUser(user: User) {
        try {

            await BaseDatabase.connection('lbn_User').insert({
                id: user.getID(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    public async getAllUsers(): Promise<User[]> {
        try {

            const users = await BaseDatabase.connection('lbn_User').select("id", "name", "email", "role")
            return users.map((user) => {
                return User.toUserModel(user)
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    public async findUserByID(id: string): Promise<User> {
        try {

            const user = await BaseDatabase.connection('lbn_User').select("id", "name", "email").where({ id })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


    public async deleteUser(id:string):Promise<any>{
       const result = await BaseDatabase.connection()
        .delete()
        .from('lbn_User')
        .where('id', id)
        return result
    }
}
