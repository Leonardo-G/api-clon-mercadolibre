import { Router } from "express";
import MiddlewareOpinion from "../middlewares/opinion.middleware";
import opinionController from "../controllers/opinion.controller";

const router = Router();

router.post('/:idproduct', MiddlewareOpinion.middlewareNewComment(), opinionController.postControllerOpinion);

export default router;