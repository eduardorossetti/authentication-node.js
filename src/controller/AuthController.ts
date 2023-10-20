import { Request, Response } from "express";
import {
  executeAuthSchema,
  refreshTokenSchema,
  AuthInterface,
  RefreshTokenInterface,
} from "../schemas/AuthSchema";
import AuthService from "../services/AuthService.js";

console.log("oi")

console.log("oi")

export default class AuthController {
  async execute(req: Request, res: Response) {
    try {
      const authService = new AuthService();
      const dataValidate: AuthInterface = await executeAuthSchema.validate(
        req.body,
        {
          stripUnknown: true,
        }
      );
      const resultAuth = await authService.execute(dataValidate);
      res.json(resultAuth);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const authService = new AuthService();
      const dataValidate: RefreshTokenInterface =
        await refreshTokenSchema.validate(req.body, {
          stripUnknown: true,
        });

      const resultRefreshToken = await authService.refreshToken(dataValidate);
      res.json(resultRefreshToken);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async get(req: Request, res: Response) {
    res.json({ success: true });
  }
}
