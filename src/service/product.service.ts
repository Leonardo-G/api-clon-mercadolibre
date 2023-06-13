import ProductModels from "../models/Product.models";

class Product {
    constructor( private _productModel = ProductModels ) {}   
    
    async newProduct( ) {
        const product = new this._productModel();

        return product;
    }
}