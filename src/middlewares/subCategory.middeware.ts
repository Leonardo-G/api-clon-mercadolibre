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
            check("category", "La propiedad 'category' tiene que ser un id de mongo válido").isMongoId(),
            check("code", "La propiedad 'code' es requerido").exists(),
            check("title", "La propiedad 'title' dentro es requerido").exists(),
            check("imgUrl", "La propiedad 'imgUrl' es requerido").exists(),
            super.validateBody,
            this.middlewareIsExistCategory,
        ]
    };

    static middlewareSubCategoriesOfCategory() {
        return [
            check("category", "Se necesita el campo 'category' para obtener las sub categorías").exists(),
            super.validateBody,
            this.middlewareIsExistCategory,
        ]
    }

    static async middlewareIsExistCategory(req: Request, res: Response, next: NextFunction) {
        const { category } = req.body;
        const categoryObj = await CategoryModels.findOne({ code: category });
        
        if( !categoryObj) {
            return new BadRequestException(res, `La categoria con el nombre ${ category } no es una categoria válida`);
        }
        
        req.body.category = categoryObj;

        next();
    }
}

export default SubCategoryMiddleware;