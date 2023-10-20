import { Router } from "express";
import AuthController from "./src/controller/AuthController";
import { AuthMiddleware } from "./src/middleware/AuthMiddleware";

const router = Router();

const authController = new AuthController();

router
  .post("/auth", authController.execute)
  .post("/auth/refresh-token", authController.refreshToken)
  .get("/admin/users", AuthMiddleware, () => {
    console.log({ success: true });
  })
  .get("/admin/users/:id", AuthMiddleware, () => {
    console.log({ success: true });
  });

export default router;
