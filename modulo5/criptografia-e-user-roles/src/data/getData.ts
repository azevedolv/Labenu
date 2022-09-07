import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";


export  const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, "senhaSuperSegura") as any;
  // console.log(payload);
  
  const result = {
    id: payload.payload.id,
    role:payload.payload.role
  };
  // console.log(result);
  
  return result;
}; 