import { ICategory } from "../interfaces/category";
import CategoryModel from "../models/Category.models";

class CategoryService {
    constructor( private _categoryModel: typeof CategoryModel = CategoryModel) {}

    async newCategory(category: ICategory) {
        const categoryObj = new this._categoryModel(category);
        await categoryObj.save();

        return categoryObj;
    }
}

export default new CategoryService();