import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";
import dotenv from 'dotenv'

dotenv.config()
export class authenticator {

   public generateToken(payload:authenticationData): string{

        const token = jwt.sign(
            {payload},
            "senhaSuperSegura",
            {expiresIn: "1h"}
        )
        return token;
    }
}