import { Types } from "mongoose";
import { IOpinioDocument, IOpinionBody } from "../interfaces/opinion";
import OpinionModels from "../models/Opinion.models";

class OpinionService {
    constructor( private _opinionModel: typeof OpinionModels = OpinionModels) {}

    async newComment(opinionBody: IOpinionBody, idProduct: string): Promise<IOpinioDocument> {
        const opinion = new this._opinionModel({idProduct, ...opinionBody});

        await opinion.save();

        return opinion;
    }
}

export default new OpinionService();