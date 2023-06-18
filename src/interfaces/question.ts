import { Document, Types } from "mongoose";

export interface IQuestion {
    created: number;
    idProduct: Types.ObjectId;
    question: string;
    response: string | null;
    answered: boolean;
}

export interface IQuestionDocument extends Document {}

export type IQuestionBody = Pick<IQuestion, 'question'>;

export type IQuestionUpdate = Pick<IQuestion, 'response'>;