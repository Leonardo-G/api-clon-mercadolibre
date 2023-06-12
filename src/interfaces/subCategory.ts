import { Types } from "mongoose";

export interface ISubCategoryDocument {
    category: Types.ObjectId;
    code: string;
    title: string;
    imgUrl: string;
}

export interface ISubCategoryBody extends ISubCategoryDocument {};