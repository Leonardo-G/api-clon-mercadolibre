import { check, param } from "express-validator";
import Middleware from "./middleware";

class MiddlewareOpinion extends Middleware {
    constructor() {
        super()
    }

    static middlewareNewComment() {
        return [
            param( "idProduct" ).exists().isMongoId().withMessage("el parametro 'idproduct' tiene que ser un MONGO ID válido"),
            check( "title", "el campo 'title' es requerido y tiene que se mayor a 6 caracteres").isLength({ min: 6 }),
            check( "comment", "El campo 'comment' es requerido y tiene que tener mayor a 10 caracteres" ).isLength({ min: 10 }),
            check( "rate", "El campo 'rate' es requerido y tiene que ser un número" ).isNumeric(),
            super.validateBody
        ]
    }

    static middlewareGetOpinions() {
        return [
            param( 'idProduct ').exists().isMongoId().withMessage("el parametro 'idproduct' tiene que ser un MONGO ID válido"),
            super.validateBody
        ]
    }
}

export default MiddlewareOpinion