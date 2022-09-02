import express from "express";
import { check } from "express-validator";

import { getSubCategoriesOfCategory, newSubCategory } from "../controllers/subCategory.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = express.Router();

router.post( "/new-subcategory", [
    check("category.code", "La propiedad 'code' dentro de 'category' es requerido").exists(),
    check("category.title", "La propiedad 'title' dentro de 'category' es requerido").exists(),
    check("subCategory.title", "La propiedad 'code' dentro de 'subCategory' es requerido").exists(),
    check("subCategory.title", "La propiedad 'title' dentro de 'subCategory' es requerido").exists(),
    check("imgUrl", "La propiedad 'imgUrl' es requerido").exists(),
    validateBody,
], newSubCategory )

router.get( "/:category", [
    check("category", "Se necesita el parametro 'category' para obtener las sub categorías")
], getSubCategoriesOfCategory )


export default router;