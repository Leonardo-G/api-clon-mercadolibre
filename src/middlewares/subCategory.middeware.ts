import { check } from "express-validator";
import { Request, Response, NextFunction } from "express";
import Middleware from "./middleware";
import CategoryModels from "../models/Category.models";
import { BadRequestException } from "../exceptions/Error.exception";

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
            super.validateBody,
        ]
    };

    static middlewareSubCategoriesOfCategory() {
        return [
            check("category", "Se necesita el parametro 'category' para obtener las sub categorías"),
            this.middlewareIsExistCategory,
            super.validateBody
        ]
    }

    static async middlewareIsExistCategory(req: Request, res: Response, next: NextFunction) {
        const { category } = req.params;
        const categoryObj = await CategoryModels.findOne({ code: category });
        
        if( !categoryObj) {
            return new BadRequestException(res, "No es una categoria válida");
        }
        
        req.body.category = categoryObj;

        next();
    }
}

export default SubCategoryMiddleware;