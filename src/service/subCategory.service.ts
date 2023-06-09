import { ISubCategoryBody, ISubCategoryDocument } from "../interfaces/subCategory";
import subCategoryModels from "../models/subCategory.models";


class SubCategoryService {
    private _subCategoryModel = subCategoryModels;
    constructor() {}

    async newSubCategory(body: ISubCategoryBody): Promise<ISubCategoryDocument> {
        const subCategory = new this._subCategoryModel( body );
        await subCategory.save();

        return subCategory;
    }
}

export default new SubCategoryService();