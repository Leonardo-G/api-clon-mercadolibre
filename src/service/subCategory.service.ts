import { ISubCategoryBody, ISubCategoryDocument } from "../interfaces/subCategory";
import subCategoryModels from "../models/SubCategory.models";

class SubCategoryService {
    private _subCategoryModel = subCategoryModels;
    constructor() {}

    async newSubCategory(body: ISubCategoryBody): Promise<ISubCategoryDocument> {
        const subCategory = new this._subCategoryModel( body );
        await subCategory.save();

        return subCategory;
    }

    async getSubCategories(category: string, limit: number = 5, skip: number = 0): Promise<ISubCategoryBody[]> {
        const subCategories = await this._subCategoryModel
            .find({ "category": category })
            .populate("category").select("code title")
            .limit( limit )
            .skip( skip )
            .exec();
        
        return subCategories;
    }
}

export default new SubCategoryService();