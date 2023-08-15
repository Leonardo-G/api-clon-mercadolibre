declare class CharacteristicInfo {
    title: string;
    description: string;
}
declare class CharacteristicDetail {
    code: string;
    info: CharacteristicInfo[];
}
declare class Shipping {
    code: number;
    detail: string;
}
declare class PriceDetail {
    price: number;
    offerPrice: number;
}
declare class Interests {
    accept: boolean;
    until: number;
}
export declare class CreateProductsDTO {
    title: string;
    category: string[];
    subCategory: string[];
    imgProduct: string[];
    characteristics: string[];
    characteristicsDetail: CharacteristicDetail[];
    recommended: boolean;
    description: string;
    stock: number;
    sold: number;
    offer: boolean;
    priceDetail: PriceDetail;
    shipping: Shipping;
    interests: Interests;
    condition: ['nuevo', 'usado', 'reacondicionado'];
    tags: string[];
}
export {};
