import { check } from "express-validator";
import Middleware from "./middleware";

class SubCategoryMiddleware extends Middleware{
    constructor() {
        super()
    }

    static middlewareNewSubCategory() {
        return [
            check("category.code", "La propiedad 'code' dentro de 'category' es requerido").exists(),
            check("category.title", "La propiedad 'title' dentro de 'category' es requerido").exists(),
            check("subCategory.title", "La propiedad 'code' dentro de 'subCategory' es requerido").exists(),
            check("subCategory.title", "La propiedad 'title' dentro de 'subCategory' es requerido").exists(),
            check("imgUrl", "La propiedad 'imgUrl' es requerido").exists(),
            SubCategoryMiddleware.validateBody,
        ]
    };
}

export default SubCategoryMiddleware;