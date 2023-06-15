import { Router } from "express";
import ProductMiddleware from "../middlewares/product.middleware";
import productController from "../controllers/product.controller";

const router = Router();

router.post('/', ProductMiddleware.middlewareNewProduct(), productController.newProductPost);
router.get("/", productController.productGet);
router.get("/:id", ProductMiddleware.middlewareGetOneProduct(), productController.getOnlyProduct);
router.get("/short/by-offer", productController.getProductsFieldOfFer);
router.get("/short/by-:subcategory", ProductMiddleware.middlewareGetPoductBySubCategory(), productController.getProductsFieldOfFer);

export default router;