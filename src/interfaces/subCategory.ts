import { Types } from "mongoose";

export interface ISubCategoryDocument {
    category: Types.ObjectId;
    subCategory: ISubCategory;
    imgUrl: string;
}

interface ISubCategory {
    code: string;
    title: string;
}

export interface ISubCategoryBody extends ISubCategoryDocument {};