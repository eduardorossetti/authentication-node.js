import jwt, { TokenExpiredError } from "jsonwebtoken";

export const generateJWT = (payload: any, expiresIn: string): string => {
  const option = {
    expiresIn,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, option);
  return token;
};

export const decodeJWT = (token: string): any => {
    const payloadToken = jwt.decode(token)
    return payloadToken
}

export const verifyJWT = (jwtToken: string): boolean => {
  try {
    jwt.verify(jwtToken, process.env.JWT_SECRET as string);
    return true;
  } catch (err: any) {
    return false;
  }
};
