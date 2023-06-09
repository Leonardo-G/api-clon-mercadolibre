import { ICategory } from "./category";

export interface ISubCategoryDocument {
    category: ICategory;
    subCategory: ISubCategory;
    imgUrl: string;
}

interface ISubCategory {
    code: string;
    title: string;
}

export interface ISubCategoryBody extends ISubCategoryDocument {};