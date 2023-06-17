import { Request, Response } from "express";
import Controller from "./controller";
import opinionService from "../service/opinion.service";

class OpinionController extends Controller {
    constructor() {
        super()
    }

    async postControllerOpinion(req: Request, res: Response) {
        const { idProduct } = req.params;

        const opinion = await opinionService.newComment(req.body, idProduct);
    
        super.created(res, opinion);
    }

    async getControllerOpinion(req: Request, res: Response) {
        const { idProduct } = req.params;
        const { limit = 20, skip = 0 } = req.query;

        const opinions = await opinionService.getOpinions(idProduct, Number(limit), Number(skip));

        super.created(res, opinions);
    }
}

export default new OpinionController();