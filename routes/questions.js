import { Router } from "express";
import { check } from "express-validator";
import { getQuestion, newQuestion, reponseQuestion } from "../controllers/questions.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.post( "/:idproduct/new-question", [
    check( "idproduct", "El parametro 'idproduct', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
    check( "question" ).notEmpty().withMessage("El campo 'question' no tiene que estar vacío").exists().withMessage("El campo 'question' es requerido"),
    validateBody
], newQuestion );

router.put( "/:idquestion/response", [
    check( "idquestion", "El parametro 'idquestion', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
    check( "response" ).notEmpty().withMessage("El campo 'question' no tiene que estar vacío").exists().withMessage("El campo 'question' es requerido"),
    validateBody
], reponseQuestion );

router.get( "/:idquestion/get", [
    check( "idquestion", "El parametro 'idquestion', tiene que ser el ID del producto y un MONGO ID válido").isMongoId(),
    validateBody
], getQuestion )

export default router