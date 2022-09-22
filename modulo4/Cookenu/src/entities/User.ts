export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export class User{
   
    constructor(private id:string, private name:string, private email:string, private password:string, private role:USER_ROLES){}
    
    public getID(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getEmail(){
        return this.email
    }
    public getPassword(){
        return this.password
    }
    public getRole(){
        return this.role
    }
    static toUserModel(info:any):User{
        return new User(info.id, info.name, info.email, info.password, info.role)
    }
}