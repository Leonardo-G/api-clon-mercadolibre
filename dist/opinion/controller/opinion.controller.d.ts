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
import { Request } from 'express';
import { Types } from 'mongoose';
import { OpinionService } from '../service/opinion.service';
import { CreateOpinionDTO, UpdateOpinionDTO } from '../dto/opinion.dto';
export declare class OpinionController {
    private opinionService;
    constructor(opinionService: OpinionService);
    getOpinions(idProduct: Types.ObjectId): Promise<(import("mongoose").FlattenMaps<import("../model/opinion.model").Opinion> & {
        _id: Types.ObjectId;
    })[]>;
    createOpinion(idProduct: Types.ObjectId, { id }: Request & {
        id: Types.ObjectId;
    }, createOpinionDTO: CreateOpinionDTO): Promise<import("mongoose").Document<unknown, {}, import("../model/opinion.model").Opinion> & import("../model/opinion.model").Opinion & {
        _id: Types.ObjectId;
    }>;
    updateOpinion(idOpinion: Types.ObjectId, updateOpinionDTO: UpdateOpinionDTO): Promise<import("mongoose").Document<unknown, {}, import("../model/opinion.model").Opinion> & import("../model/opinion.model").Opinion & {
        _id: Types.ObjectId;
    }>;
    deleteOpinion(idOpinion: Types.ObjectId): Promise<{
        msg: string;
    }>;
}
