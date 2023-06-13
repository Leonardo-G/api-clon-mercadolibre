import { Request, Response } from "express";
import Controller from "./controller";
import ProductService from "../service/product.service";

class ProductController extends Controller {
    constructor() {
        super()
    }

    async newProductPost(req: Request, res: Response) {
        const product = await ProductService.newProduct(req.body);

        super.created(res, product);
    }
}

export default new ProductController();