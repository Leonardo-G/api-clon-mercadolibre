import { IQuestionBody, IQuestionDocument } from "../interfaces/question";
import QuestionModels from "../models/Question.models";

class QuestionService {
    constructor( private _questionModel: typeof QuestionModels = QuestionModels ) {}

    async newQuestion(idProduct: string, questionBody: IQuestionBody): Promise<IQuestionDocument> {
        const question = new this._questionModel({
            idProduct,
            ...questionBody
        });

        await question.save();

        return question;
    }

    async updateQuestionResponse(idQuestion: string, response: string): Promise<IQuestionDocument | null> {
        const question = await this._questionModel.findByIdAndUpdate(idQuestion, { response }, { new: true });
        
        return question;
    }

    async getQuestion(idProduct: string, limit: number, skip: number): Promise<IQuestionDocument[]>{
        const question = await this._questionModel
            .find({ idProduct })
            .limit( limit )
            .skip( skip )
            .sort({ created: -1 })
            .exec();

        return question;
    }
}

export default new QuestionService();