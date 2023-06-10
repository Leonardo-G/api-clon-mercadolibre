import { Router } from "express";

import CategoryController from "../controllers/category.controller";
import CategoryMiddleware from "../middlewares/category.middleware";

const router = Router();

router.post('/', CategoryMiddleware.middlewarePostCategory(), CategoryController.postCategory);

export default router;