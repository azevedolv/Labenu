export class Recipes{
    
    constructor(private id:string, private date:string, private tittle:string, private description:string, private id_user:string){}

    public getID(){
        return this.id
    }
    public getDate(){
        return this.date
    }
    public getTittle(){
        return this.tittle
    }
    public getDescription(){
        return this.description
    }
    public getUserID(){
        return this.id_user
    }
    static toUserModel(info:any):Recipes{
        return new Recipes(info.id, info.date, info.tittle, info.description, info.id_user)
    }
}