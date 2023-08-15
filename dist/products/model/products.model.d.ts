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
import { Document, Types, HydratedDocument } from 'mongoose';
import { User } from 'src/user/model/user.model';
export type ProductDocument = HydratedDocument<Products>;
export declare class Products extends Document {
    idUser: User;
    title: string;
    imgProduct: string[];
    category: string[];
    subCategory: string[];
    characteristics: [];
    characteristicsDetail: {
        code: string;
        info: {
            title: string;
            description: string;
        }[];
    }[];
    recommended: boolean;
    visited: number;
    description: string;
    stock: number;
    sold: number;
    offer: boolean;
    priceDetail: {
        price: number;
        offerPrice: number;
    };
    shipping: {
        code: number;
        detail: string;
    };
    interests: {
        accept: boolean;
        until: 0 | 3 | 6 | 12;
    };
    condition: 'nuevo' | 'usado' | 'reacondicionado';
    tags: string[];
}
export declare const ProductsSchema: import("mongoose").Schema<Products, import("mongoose").Model<Products, any, any, any, Document<unknown, any, Products> & Products & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Products, Document<unknown, {}, Products> & Products & {
    _id: Types.ObjectId;
}>;
