import { Router } from "express";
import MiddlwareQuestion from "../middlewares/question.middleware";
import questionController from "../controllers/question.controller";

const router = Router();

router.post('/:idProduct', MiddlwareQuestion.middlewarePost(), questionController.postControllerQuestion);

router.put('/:idQuestion/response', MiddlwareQuestion.middlewarePut(), questionController.putControllerQuestion);

router.get('/:idProduct', MiddlwareQuestion.middlewareGet(), questionController.getControllerQuestion);

export default router;