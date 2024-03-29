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
import { Products } from '../model/products.model';
import { Model, Types } from 'mongoose';
import { CreateProductsDTO } from '../dto/products.dto';
import { SearchQuerys } from '../dto/queryProducts.dto';
import { ProductShort } from '../transformers/products.transformers';
export declare class ProductsService {
    private productsModel;
    constructor(productsModel: Model<Products>);
    newProduct(id: Types.ObjectId, products: CreateProductsDTO): Promise<import("mongoose").Document<unknown, {}, Products> & Products & {
        _id: Types.ObjectId;
    }>;
    findProductById(id: Types.ObjectId): Promise<import("mongoose").FlattenMaps<Products> & {
        _id: Types.ObjectId;
    }>;
    findProductsByQuerys(searchQuerys: SearchQuerys): Promise<{
        products: ProductShort[];
        totalProducts: number;
    }>;
    getProductsBySubCategory(subCategory: string): Promise<{
        products: ProductShort[];
    }>;
}
