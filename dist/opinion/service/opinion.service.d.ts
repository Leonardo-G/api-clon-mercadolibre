/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Opinion } from '../model/opinion.model';
import { Model, Types } from 'mongoose';
import { CreateOpinionDTO, UpdateOpinionDTO } from '../dto/opinion.dto';
export declare class OpinionService {
    private opinionModel;
    constructor(opinionModel: Model<Opinion>);
    newOpinion(idUser: Types.ObjectId, idProduct: Types.ObjectId, createOpinionDTO: CreateOpinionDTO): Promise<import("mongoose").Document<unknown, {}, Opinion> & Opinion & {
        _id: Types.ObjectId;
    }>;
    getOpinions(idProduct: Types.ObjectId): Promise<(import("mongoose").FlattenMaps<Opinion> & {
        _id: Types.ObjectId;
    })[]>;
    findAndUpdate(idOpinion: Types.ObjectId, updateOpinionDTO: UpdateOpinionDTO): Promise<import("mongoose").Document<unknown, {}, Opinion> & Opinion & {
        _id: Types.ObjectId;
    }>;
    findAndDelete(idOpinion: Types.ObjectId): Promise<{
        msg: string;
    }>;
}
