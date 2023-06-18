import { check, param } from "express-validator";
import Middleware from "./middleware";

class MiddlwareQuestion extends Middleware {
    constructor() {
        super()
    }

    static middlewarePost() {
        return [
            param( "idProduct", "El parametro 'idProduct', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
            check( "question" ).notEmpty().withMessage("El campo 'question' no tiene que estar vacío").exists().withMessage("El campo 'question' es requerido"),
            super.validateBody
        ]
    }

    static middlewarePut() {
        return [
            param( "idQuestion", "El parametro 'idQuestion', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
            check( "response" ).notEmpty().withMessage("El campo 'question' no tiene que estar vacío").exists().withMessage("El campo 'question' es requerido"),
            super.validateBody
        ]
    }

    static middlewareGet() {
        return [
            param( "idProduct", "El parametro 'idQuestion', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
            super.validateBody
        ]
    }

}

export default MiddlwareQuestion;