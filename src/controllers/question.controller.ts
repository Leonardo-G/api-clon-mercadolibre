import { Request, Response } from "express";
import Controller from "./controller";
import questionService from "../service/question.service";
import { IQuestionBody, IQuestionUpdate } from '../interfaces/question';

class QuestionController extends Controller {
    constructor() {
        super()
    }

    async postControllerQuestion( req: Request, res: Response ) {
        const { idProduct } = req.params;
        const questionBody = req.body as IQuestionBody;

        const question = await questionService.newQuestion(idProduct, questionBody); 
    
        super.created(res, question);
    }

    async putControllerQuestion( req: Request, res: Response ) {
        const { idQuestion } = req.params;
        const { response } = req.body as IQuestionUpdate;

        const question = await questionService.updateQuestionResponse(idQuestion, response!);

        super.created(res, question);
    }

    async getControllerQuestion( req: Request, res: Response ){
        const { idProduct } = req.params;
        const { limit = 5, skip = 0 } = req.query;

        const questions = await questionService.getQuestion(idProduct, Number(limit), Number(skip));

        super.sendOk(res, questions);
    }
}

export default new QuestionController();