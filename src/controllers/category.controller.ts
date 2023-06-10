import { Request, Response } from "express";

import CategoryService from "../service/category.service";
import Controller from "./controller";
import { ICategory } from "../interfaces/category";

class CategoryController extends Controller {

    constructor() {
        super()
    }

    async postCategory(req: Request, res: Response) {
        const { code, title } = req.body as ICategory;
        const category = await CategoryService.newCategory({ code, title });
        
        super.created(res, category);
    }
}

export default new CategoryController();