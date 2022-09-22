import {v4} from 'uuid'

export class IDGenerator{
    public generateID():string{
        return v4();
    }
}