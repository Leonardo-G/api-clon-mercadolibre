import { Document, HydratedDocument, Types } from "mongoose";

export interface IProductDocument extends Document {
    _id: Types.ObjectId;
    idUser: Types.ObjectId;
    title: String;
    imgProduct: string[];
    category: string[];
    subCategory: string[];
    characteristics: string[];
    characteristicsDetail: ICharacteristicsDetail[];
    recommended: boolean;
    visited: number;
    description: string;
    stock: number;
    sold: number;
    created: Date;
    offer: boolean;
    priceDetail: IPriceDetail;
    shipping: IShipping;
    interests: InterfaceInterest;
    condition: "nuevo" | "usado" | "reacondicionado";
    tags: string[];
}

export interface IProductDoc extends IProductDocument {
    _doc: any
} ;

export interface IProductBody {
    title: String;
    imgProduct?: string[];
    category: string[];
    subCategory: string[];
    characteristics: string[];
    characteristicsDetail: ICharacteristicsDetail[];
    recommended?: boolean;
    visited?: number;
    description: string;
    stock: number;
    sold?: number;
    offer?: boolean;
    priceDetail: Partial<IPriceDetail>;
    shipping: Partial<IShipping>;
    interests: Partial<InterfaceInterest>;
    condition?: "nuevo" | "usado" | "reacondicionado";
    tags: string[];
}

interface InfoCharacteristics {
    title: string;
    type: string;
}

interface ICharacteristicsDetail {
    code: string,
    info: InfoCharacteristics[]
}

interface IPriceDetail {
    price: number;
    offerPrice: number;
}

interface IShipping {
    code: 0 | 1 | 2;
    detail: string;
}

interface InterfaceInterest {
    accept: boolean;
    until: 0 | 3 | 6 | 12;
}