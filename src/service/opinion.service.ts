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

    async getOpinions(idProduct: string, limit: number, skip: number) {
        const opinions = await this._opinionModel.find({idProduct}).limit( limit ).skip( skip ).exec();
    
        const [ 
            totalOpinions,
            rate_1,
            rate_2,
            rate_3,
            rate_4,
            rate_5,
        ] = await Promise.all([
            this._opinionModel.countDocuments({ idProduct }),
            this._opinionModel.countDocuments({ idProduct, rate: 1 }),
            this._opinionModel.countDocuments({ idProduct, rate: 2 }),
            this._opinionModel.countDocuments({ idProduct, rate: 3 }),
            this._opinionModel.countDocuments({ idProduct, rate: 4 }),
            this._opinionModel.countDocuments({ idProduct, rate: 5 })
        ])
    
        return {
            opinions: opinions,
            totalOpinions,
            rating: {
                rate_1,
                rate_2,
                rate_3,
                rate_4,
                rate_5
            }
        }
    }
}

export default new OpinionService();