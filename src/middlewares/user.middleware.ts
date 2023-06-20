import { check, param } from "express-validator";

import Middleware from "./middleware";

class UserMiddleware extends Middleware {
    constructor() {
        super()
    }
    
    static middlewareLogin(): any[] {
        return [
            check('email').isEmail().withMessage('Ingrese en email válido'),
            check('password').isLength({ min: 6 }).withMessage('La contraseña tiene que tener como mínimo 6 caracteres'),
            UserMiddleware.validateBody
        ]
    }

    static middlewareRegister(): any[] {
        return [
            check("username").isLength({min: 6}).withMessage("El campo username es requerido y como mínimo 6 caracteres"),
            check("email").isEmail().withMessage("Ingrese un email válido"),
            check("password").isLength({ min: 6 }).withMessage("La contraseña tiene que tener como mínimo 6 caracteres"),
            UserMiddleware.validateBody
        ]
    }

    static middlewareStoreOfCategory(): any[] {
        return [
            param('category').isIn([
                'herramientas',
                'construccion',
                'deportes-y-fitness',
                'hogar-muebles',
                'electrodomesticos',
                'ropa-y-accesorios'
            ]),
            UserMiddleware.validateBody
        ]
    }
}

export default UserMiddleware;