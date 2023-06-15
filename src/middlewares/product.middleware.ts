import { check, param } from "express-validator";
import Middleware from "./middleware";
import { NextFunction, Request, Response } from "express";
import Jwt, { IToken } from "../utils/jwt";
import { UnauthorizedException } from "../exceptions/Error.exception";
import UserModels from "../models/User.models";

class ProductMiddleware extends Middleware {
    constructor () {
        super()
    }

    static middlewareNewProduct () {
        return [
            this.isExistUser,
            check("title")
                .exists().withMessage("El campo titulo es obligatorio y tiene que teener como mínimo 10 caracteres"),
            check("imgProduct")
                .isArray().withMessage("El campo 'imgProduct' tiene que ser de tipo ARRAY"),
            check("category")
                .isArray()
                .exists().withMessage("El campo categoria es obligatorio"),
            check("subCategory")
                .isArray()
                .exists().withMessage("El campo categoria es obligatorio"),
            check("characteristicsDetail")
                .isArray().withMessage("El campo characteristicsDetail es obligatorio y tiene que ser de tipo ARRAY"),
            check("characteristicsDetail.*.code")
                .exists().withMessage("El campo 'code' dentro de 'characteristicsDetail' es obligatorio."),
            check("characteristicsDetail.*.info")
                .isArray().withMessage("El campo 'info' dentro de 'characteristicsDetail' es obligatorio y tiene que ser de tipo ARRAY."),
            check("description", "La descripcion del producto es obligatorio.")
                .exists(),
            check("stock")
                .isNumeric()
                .exists().withMessage("El campo stock es obligatorio y tiene que ser un número"),
            check("priceDetail.price")
                .isNumeric()
                .exists().withMessage("Indicar el precio del producto"),
            super.validateBody    
        ]
    }

    static middlewareGetOneProduct() {
        return [
            param('id').isMongoId().withMessage('Tiene que ser un id de mongo válido'),
            super.validateBody
        ]
    }

    static middlewareGetPoductBySubCategory() {
        return [
            param('subcategory').exists(),
            super.validateBody
        ]
    }

    static async isExistUser(req: Request & { id?: string }, res: Response, next: NextFunction) {
        const token = req.headers['token-auth'] as string;
        if ( !token ) {
            return new UnauthorizedException(res, 'Token is required');
        }

        const tokenDecode = Jwt.verifyToken(res, token) as IToken;
        
        const user = await UserModels.findById(tokenDecode.id);
        if ( !user ) {
            return new UnauthorizedException(res, 'The user does not exists');
        }
        
        req.id = user._id;
    }
}

export default ProductMiddleware;