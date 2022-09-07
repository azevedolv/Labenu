export enum USER_ROLES {
   normal = "normal",
   admin = "admin"

}

export type user = {
   id: string
   email: string
   password: string
   role:string
}


export type authenticationData = {
   id: string
   role:string
}