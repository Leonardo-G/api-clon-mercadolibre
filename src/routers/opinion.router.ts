import { Router } from "express";
import MiddlewareOpinion from "../middlewares/opinion.middleware";
import opinionController from "../controllers/opinion.controller";

const router = Router();

router.post('/:idProduct', MiddlewareOpinion.middlewareNewComment(), opinionController.postControllerOpinion);
router.get('/:idProduct', MiddlewareOpinion.middlewareGetOpinions(), opinionController.getControllerOpinion);

export default router;