import { Router } from "express";

import SubCategoryControllers from "../controllers/subCategory.controllers";
import SubCategoryMiddleware from "../middlewares/subCategory.middeware";
import SubCategoryModels from "../models/SubCategory.models";
import { ISubCategoryDocument } from "../interfaces/subCategory";

const router = Router();

router.post('/', SubCategoryMiddleware.middlewareNewSubCategory(), SubCategoryControllers.postSubCategory);
router.get('/', SubCategoryMiddleware.middlewareSubCategoriesOfCategory(), SubCategoryControllers.getSubCategoriesOfCategory);

export default router;