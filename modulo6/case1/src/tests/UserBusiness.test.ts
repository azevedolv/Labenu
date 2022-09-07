import {UserBusiness} from "../business/UserBusiness";
import { UserDatabaseMock } from "./UserDatabaseMock";

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock()
    )


    describe("Testando o createUser", () =>{
        test("Deve retornar erro quando um parametro não seja enviado", async () =>{
            try {
                await userBusinessMock.createUser({first_name: "", last_name: "azevedo", participation: 30});
            } catch (error:any) {
                expect(error.message).toEqual("Please, review the parameters sent!")
                expect(error.statusCode).toBe(422)
            }
            finally{
                expect.assertions(2)
            }
        })
    })