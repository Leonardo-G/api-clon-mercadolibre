import { Router } from "express";
import UserController from "../controllers/user.controllers";
import UserMiddleware from "../middlewares/user.middleware";

const router = Router();

router.post('/login', UserMiddleware.middlewareLogin(), UserController.postLogin);

export default router;