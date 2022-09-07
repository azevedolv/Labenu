export class User {
    constructor(
        private id: number,
        private first_name: string,
        private last_name: string,
        private participation: number,

    ) { }

    getId = (): number => {
        return this.id
    }
    getFirstName = (): string => {
        return this.first_name
    }
    getLastName = (): string => {
        return this.last_name
    }
    getParticipation = (): number => {
        return this.participation
    }
    setId(id: number){
        this.id = id;
    }
    setFirstName(first_name: string){
        this.first_name = first_name;
    }
    setLastName(last_name: string){
        this.last_name = last_name;
    }
    setParticipation(participation: number){
        this.participation = participation;
    }  
}

export interface UserInputDTO {
    first_name: string,
    last_name: string,
    participation: number
}
export interface UserOutputDTO {
    id:number,
    first_name: string,
    last_name: string,
    participation: number
}


export interface UserLastNameOutputDTO {
    last_name: string
}

export interface UserFirstNameOutputDTO {
    first_name: string
}