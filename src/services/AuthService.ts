import { AuthInterface, RefreshTokenInterface } from "../schemas/AuthSchema";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import bcrypt from "bcrypt";
import { decodeJWT, generateJWT, verifyJWT } from "./helpers/AuthHelper";

export default class AuthService {
  async execute(dataValidate: AuthInterface) {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const dataUser = await inMemoryUserRepository.getByEmail(
      dataValidate.email
    );
    if (!dataUser) {
      throw new Error("email or password is invalid!");
    }
    //console.log(await bcrypt.hash("edu12345", 10));
    const ifPasswordCorrect = await bcrypt.compare(
      dataValidate.password,
      dataUser.password
    );
    const token = generateJWT(
      dataUser,
      process.env.JWT_TOKEN_EXPIRES_IN as string
    );
    const refresh_token = generateJWT(
      dataUser,
      process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string
    );
    //console.log(ifPasswordCorrect)
    if (!ifPasswordCorrect) {
      throw new Error("email or password is invalid!");
    }
    dataUser.password = "not informed for security reasons!";
    //return { user: dataUser, statusAuth: true };
    return { token, refresh_token };
  }

  async refreshToken(dataValidade: RefreshTokenInterface) {
    const verifyToken = verifyJWT(dataValidade.token);
    const verifyRefreshToken = verifyJWT(dataValidade.refresh_token);
    if (!verifyToken && !verifyRefreshToken) {
      throw new Error("Invalid Token and Refresh Token");
    }

    const { name, email, phone, password } = decodeJWT(
      dataValidade.refresh_token
    );
    const payloadJWT = { name, email, phone, password };
    const token = generateJWT(
      payloadJWT,
      process.env.JWT_TOKEN_EXPIRES_IN as string
    );
    const refresh_token = generateJWT(
      payloadJWT,
      process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string
    );
    return { token, refresh_token };
  }
}
