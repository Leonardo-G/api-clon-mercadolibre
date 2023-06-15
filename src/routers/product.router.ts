import { Router } from "express";
import ProductMiddleware from "../middlewares/product.middleware";
import productController from "../controllers/product.controller";

const router = Router();

router.post('/', ProductMiddleware.middlewareNewProduct(), productController.newProductPost);
router.get("/", productController.productGet);

export default router;