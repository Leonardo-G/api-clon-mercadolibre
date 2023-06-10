import { check } from "express-validator";
import CategoryModels from "../models/Category.models";
import Middleware from "./middleware";
import { NextFunction, Request, Response } from "express";
import { BadRequestException } from "../exceptions/Error.exception";

class CategoryMiddleware extends Middleware {

    constructor() {
        super()
    }

    static middlewarePostCategory(){
        return [
            check('code')
                .exists().withMessage("Se necesita el campo 'code'")
                .isString().withMessage('Tiene que ser de tipo String')
                .isLength({ min: 2 }).withMessage('Tiene que tener mínimo 2 caracteres'),
            check('title')
                .exists().withMessage("Se necesita el campo 'title'")
                .isString().withMessage('Tiene que ser de tipo String')
                .isLength({ min: 2 }).withMessage('Tiene que tener mínimo 2 caracteres'),
            this.middlewareIsExistCategory,    
            super.validateBody
        ]
    }

    static async middlewareIsExistCategory(req: Request, res: Response, next: NextFunction) {
        const { code } = req.body;
        const categoryObj = await CategoryModels.findOne({ code });
        
        if( categoryObj ) {
            return new BadRequestException(res, `Ya existe la categoría ${ categoryObj.code }`);
        }
        
        req.body.category = categoryObj;

        next();
    }
}

export default CategoryMiddleware; 