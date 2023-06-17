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
}

export default new OpinionController();