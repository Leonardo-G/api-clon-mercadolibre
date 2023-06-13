import { IProductBody, IProductDocument } from "../interfaces/product";
import ProductModels from "../models/Product.models";

class ProductService {
    constructor( private _productModel = ProductModels ) {}   
    
    async newProduct( body: IProductBody ): Promise<IProductDocument> {
        const product = new this._productModel( body );
        await product.save();

        return product;
    }
}

export default new ProductService();