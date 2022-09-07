import { v4 } from "uuid";

export class IDGenerator{
    generateID = () =>{
        return v4();
    }
}