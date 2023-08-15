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
import { Model, Types } from 'mongoose';
import { Category, CategoryDocument } from '../model/category.model';
import { NewCategoryDTO } from '../dto/category.dto';
import { SubCategory } from 'src/sub-category/model/SubCategory.model';
export declare class CategoryService {
    private categoryModel;
    private subCategoryModel;
    constructor(categoryModel: Model<Category>, subCategoryModel: Model<SubCategory>);
    newCategory(categoryDTO: NewCategoryDTO): Promise<Category>;
    findOneCategory(code: string): Promise<CategoryDocument | null>;
    findSubCategoriesOfCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, SubCategory> & SubCategory & {
        _id: Types.ObjectId;
    })[]>;
}
