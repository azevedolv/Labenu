export interface AuthenticationData {
    id: string
}

export interface UserCredentials {
    email: string
    senha: string
}

export interface User extends AuthenticationData, UserCredentials {
    nome: string
}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}