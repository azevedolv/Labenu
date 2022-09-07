import * as jwt from "jsonwebtoken";
import { authentication } from "../types";

export  const getData = (token: string): authentication => {
  const payload = jwt.verify(token, "senhaSuperSegura") as any;
  const result = {
    id: payload.id,
  };
  return result;
};