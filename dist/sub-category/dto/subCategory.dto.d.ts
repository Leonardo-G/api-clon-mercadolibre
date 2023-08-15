import { Types } from 'mongoose';
export declare class CreateSubCategoryDTO {
    category: Types.ObjectId;
    code: string;
    title: string;
    imgUrl: string;
}
