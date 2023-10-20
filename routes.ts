import { Router } from "express";
import AuthController from "./src/controller/AuthController";
import { AuthMiddleware } from "./src/middleware/AuthMiddleware";

const router = Router();

const authController = new AuthController();

router
  .post("/auth", authController.execute)
  .post("/auth/refresh-token", authController.refreshToken)
  .get("/users", AuthMiddleware, authController.get);

export default router;
