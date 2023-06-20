import { Request, Response } from "express";

import SubCategoryService from "../service/subCategory.service";
import Controller from "./controller";

class SubCategoryControllers extends Controller{
    constructor() {
        super()
    }

    async postSubCategory( req: Request, res: Response ) {
        const subCategory = await SubCategoryService.newSubCategory(req.body);

        super.created(res, subCategory);
    }

    async getSubCategoriesOfCategory( req: Request, res: Response ) {
        const { category } = req.body;
        const { limit, skip } = req.query;

        const limitQuery = parseInt(limit as string);
        const skipQuery = parseInt(skip as string);
        
        const subCategories = await SubCategoryService.getSubCategories( category._id, limitQuery, skipQuery );

        super.sendOk(res, subCategories);
    }
}

export default new SubCategoryControllers();