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
}

export default new SubCategoryControllers();