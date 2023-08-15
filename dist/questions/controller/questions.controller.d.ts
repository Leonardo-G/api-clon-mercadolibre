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
import { Types } from 'mongoose';
import { QuestionsService } from '../service/questions.service';
export declare class QuestionsController {
    private questionsService;
    constructor(questionsService: QuestionsService);
    createQuestion(idProduct: Types.ObjectId, question: string): Promise<import("mongoose").Document<unknown, {}, import("../model/questions.model").Questions> & import("../model/questions.model").Questions & {
        _id: Types.ObjectId;
    }>;
    responseQuestion(idQuestion: Types.ObjectId, response: string): Promise<import("mongoose").Document<unknown, {}, import("../model/questions.model").Questions> & import("../model/questions.model").Questions & {
        _id: Types.ObjectId;
    }>;
    getQuestions(idProduct: Types.ObjectId, limit: number, skip: number): Promise<(import("mongoose").FlattenMaps<import("../model/questions.model").Questions> & {
        _id: Types.ObjectId;
    })[]>;
}
