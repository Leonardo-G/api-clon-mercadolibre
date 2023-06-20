import { Router } from "express";
import UserController from "../controllers/user.controllers";
import UserMiddleware from "../middlewares/user.middleware";

const router = Router();

router.post('/login', UserMiddleware.middlewareLogin(), UserController.postLogin);
router.post('/register', UserMiddleware.middlewareRegister(), UserController.postRegister);

router.get('/store/:category', UserMiddleware.middlewareStoreOfCategory(), UserController.postStoreCategory);

export default router;