import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

class UserMiddleware {
    constructor() {}

    static validateBody( req: Request, res: Response, next: NextFunction ){
        const result = validationResult( req );
        
        if( !result.isEmpty() ) {
            res.status(404).json(result.array());
    
            return
        }
    
        next();
    }
    
    static middlewareLogin(): any[] {
        return [
            check('email').isEmail().withMessage('Ingrese en email válido'),
            check('password').isLength({ min: 6 }).withMessage('La contraseña tiene que tener como mínimo 6 caracteres'),
            UserMiddleware.validateBody
        ]
    }
}

export default UserMiddleware;