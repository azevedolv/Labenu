import { UserData } from "../data/UserData";
import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/User";


export class UserBusiness {

    // constructor(private UserData: UserData){

    // }

    async deleteUsers(){
        try {
            new UserData().deleteUsers()
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
    async createUser(user: UserInputDTO) {
        try {
            const first_name = user.first_name
            const last_name = user.last_name
            const participation = user.participation

            if (!first_name || !last_name || !participation) { throw new CustomError(422, `Please, review the parameters sent! `) }
            if(participation > 100){
                throw new CustomError(422, `You can only have a maximum of 100% participation, if there is a share of participation avaiable.`)
            }
        
  
            const consultUsers = await new UserData().countUsers()
            if ( consultUsers[0].total === 0) {
                await new UserData().createUser(first_name, last_name, participation) //dependencia
            }
             if(Number(consultUsers[0].total) > 0){
                const sumParticipation = await new UserData().sumParticipation()
                if(Number(sumParticipation[0].total) <100){                  
                    const avaiableParticipation = 100 - Number(sumParticipation[0].total)
                    if (avaiableParticipation >= participation){
                        const UserDatabase = new UserData()
                await UserDatabase.createUser(first_name, last_name, participation)
                    } 
                    if(avaiableParticipation < participation){ 
                        throw new CustomError(422, `The share of participation is bigger than what is avaiable. There is ${avaiableParticipation}% avaiable. `)
                    }
                 }
                 if(Number(sumParticipation[0].total) == 100){
                    throw new CustomError(422, `There is no share of participation avaiable for you :(`)
                 }
                 if(Number(sumParticipation[0].total) > 100){
                    throw new CustomError(422, `Some thing goes wrong :S`)
                 }
             } 
            
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getUser(data: any) {
        try {
            const { id, first_name, last_name } = data


            if (!first_name && !id && !last_name) { throw new CustomError(422, `User's firs name, last name or id required`) }
            if (id && !first_name && !last_name) {
                const userDatabase = new UserData()
                const result = await userDatabase.getUserById(id)
                // const result = await this.UserData.getUserById(id)
                if(!result){
                    throw new CustomError(404, "User not found.")
                }
                return result
            } else if (first_name && !id && !last_name) {
                const userDatabase = new UserData()
                const result = await userDatabase.getUserByFirstName(first_name)
                // const result = await this.UserData.getUserByFirstName(first_name)
                if(!result){
                    throw new CustomError(404, "User not found.")
                }
               
                return result
            } else if (last_name && !id && !first_name) {
                const userDatabase = new UserData()
                const result = await userDatabase.getUserByLastName(last_name)
                // const result = await this.UserData.getUserByLastName(last_name)
                if(!result){
                    throw new CustomError(404, "User not found.")
                }
                // const output = {
                //     id: result.getId(),
                //     first_name: result.getFirstName(),
                //     last_name: result.getLastName(),
                //     participation: result.getParticipation()
                // }
                return result
            }else {
                throw new CustomError(422, `User's ID, first name or last name is required`)
            }
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    getAllUsers = async () => {
        try {
           const results = await new UserData().getUsers();
            // const results = await this.UserData.getUsers();
            // console.log(results);
            
            if(!results){
                throw new CustomError(400, "Something goes wrong.")
            }
            if(results.length == 0 ){
                throw new CustomError(404, "No user found.")
            }
            return results.map((user)=>{
                return {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    participation: user.participation
                }
            });
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    getFirstName = async (id:number) =>{
        try {           
            if(!id){
                throw new CustomError(422, `User's ID is required.`)
            }
            const result = await new UserData().getFirstName(id)
            // const result = await this.UserData.getFirstName(id)
            // console.log(result.first_name);
            
            if(result == undefined){
                
                throw new CustomError(404, "User not found.")
            }
            return result.first_name
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);   
        }
    }
    getLastName = async (id:number) =>{
        try {
            if(!id){
                throw new CustomError(422, `User's ID is required.`)
            }

            const result = await new UserData().getLastName(id)

            // const result = await this.UserData.getLastName(id)
            if(!result){
                throw new CustomError(404, "User not found.")
            }
            return result.last_name
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
}

// export default new UserBusiness(new UserData)