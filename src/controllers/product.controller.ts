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

    async productGet(req: Request, res: Response) {
        const products = await ProductService.getProductsByQuerys({
            search: req.query.search as string || "",
            category: req.query.category as string || "",
            subcategory: req.query.subcategory as string || "",
            offer: req.query.offer as "true" | undefined,
            shipping: req.query.shipping as "1" | "2" | "" || "",
            interest: req.query.interest as "true" | undefined,
            until: req.query.until as string,
            condition: req.query.condition as "nuevo" | "reacondicionado" | "usado" || "",
            price_gte: req.query.price_gte as string || "",
            price_lte: req.query.price_lte as string || "",
            tags: req.query.tags as string || "",
            sort: req.query.sort as string,
            limit: Number(req.query.limit) || 5,
            skip: Number(req.query.skip) || 0
        })

        super.sendOk(res, products);
    }
}

export default new ProductController();