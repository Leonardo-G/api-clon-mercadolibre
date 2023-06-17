import { Document, Types } from "mongoose";

export interface IOpinion {
    created: Number;
    idProduct: Types.ObjectId;
    idUserOpinion: Types.ObjectId;
    title: string;
    comment: string;
    like: number;
    down: number;
    rater: number;
}

export interface IOpinioDocument extends IOpinion, Document {};

export type IOpinionBody = Omit<IOpinion, 'created' | 'like' | 'down' | 'idProduct'>;