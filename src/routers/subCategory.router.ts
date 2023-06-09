import { Router } from "express";
import SubCategoryControllers from "../controllers/subCategory.controllers";
import SubCategoryMiddleware from "../middlewares/subCategory.middeware";

const router = Router();

router.post('/', SubCategoryMiddleware.middlewareNewSubCategory(), SubCategoryControllers.postSubCategory);

export default router;