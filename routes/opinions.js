import { Router } from "express";
import { check, param } from "express-validator";
import { getOpinions, newComment } from "../controllers/opinions.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.post( "/new-comment/:idProduct", [
    param( "idProduct" ).exists().isMongoId().withMessage("el parametro 'idproduct' tiene que ser un MONGO ID válido"),
    check( "title", "el campo 'title' es requerido y tiene que se mayor a 6 caracteres").isLength({ min: 6 }),
    check( "comment", "El campo 'comment' es requerido y tiene que tener mayor a 10 caracteres" ).isLength({ min: 10 }),
    check( "rate", "El campo 'rate' es requerido y tiene que ser un número" ).isNumeric(),
    validateBody
], newComment );

router.get( "/:idproduct", [],  getOpinions )

export default router