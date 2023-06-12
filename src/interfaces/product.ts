import { Document, Types } from "mongoose";

export interface IProductDocument extends Document {
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