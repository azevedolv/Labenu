import { User, UserFirstNameOutputDTO, UserLastNameOutputDTO } from "../model/User";

export const userMock = new User(
    1,
    "LV",
    "azevedo",
    33
)

export const userFirstNameMock:UserFirstNameOutputDTO = {first_name:"Vinicius"}
export const userLastNameMock:UserLastNameOutputDTO = {last_name:"Azevedo"}
