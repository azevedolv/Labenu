import * as jwt from "jsonwebtoken";
import { authentication } from "../types";

const expiresIn = "1h"

export const generateToken = (id: authentication): string => {
  const token = jwt.sign(
    {
      id
    },
    // process.env.JWT_KEY as string,
    "senhaSuperSegura",
    {
      expiresIn
    }
  );
  return token;
}