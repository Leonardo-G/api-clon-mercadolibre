import { Router } from "express";
import ProductMiddleware from "../middlewares/product.middleware";

const router = Router();

router.post('/', ProductMiddleware.middlewareNewProduct(), )

export default router;