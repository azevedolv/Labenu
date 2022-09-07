import { connection } from "../connection"
import { user } from "../types/user"

class UserData{

   async insertUser(user: user){
        await connection.insert({
           id: user.id,
           name: user.name,
           nickname: user.nickname,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('to_do_list_users')
     }
     
}

export default UserData