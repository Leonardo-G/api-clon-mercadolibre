import { IProductBody, IProductDocument } from '../interfaces/product';
import { IQuery } from "../interfaces/query";
import ProductModels from "../models/Product.models";

class ProductService {
    constructor( private _productModel = ProductModels ) {}   
    
    async newProduct( body: IProductBody ): Promise<IProductDocument> {
        const product = new this._productModel( body );
        await product.save();

        return product;
    }

    async getProductsByQuerys({
        search,
        category,
        subcategory,
        offer = "",
        shipping = "",
        interest,
        until,
        condition,
        price_gte,
        price_lte,
        tags,
        sort,
        limit = 5,
        skip = 0
    }: IQuery) {
        
        console.log(search);
        console.log(condition);
        let field: any = {};
        let orders = {};
    
        if ( search !== "" ) {
            field = {
                // ...field,
                $text: { $search: search, $caseSensitive: false }
            }
        }
        if ( category !== "" ) field.category = { $in: category }
        if ( subcategory !== "" ) field.subCategory = { $in: subcategory };
        if ( offer !== "" ) field.offer = offer;
        if ( shipping !== "" && (shipping === "1" || shipping === "2") ) field["shipping.code"] = Number(shipping);
    
        if ( interest === "true" && until ) {
            field["interests.accept"] = true;
            field["interests.until"] = until;
        }
        if ( interest === "true" && !until) field["interests.accept"] = true;
        if ( condition === "nuevo" || condition === "usado" || condition === "reacondicionado" ) field.condition = condition
    
        if ( price_lte !== "" && price_gte === "" ) field["priceDetail.price"] = { $lte: Number(price_lte) };
        if ( price_lte === "" && price_gte !== "" ) field["priceDetail.price"] = { $gte: Number(price_gte) };
        if ( price_lte !== "" && price_gte !== "" ) field["priceDetail.price"] = { $gte: Number(price_gte), $lte: Number(price_lte) };
        if ( tags !== "" ) field.tags = { $in: tags }
        if ( sort === "price_asc" ) orders = { "priceDetail.price": 1 } 
        if ( sort === "relevant" ) orders = { "visited": -1 } 
        
    
        const products= await this._productModel.find( field )
                                                      .skip( skip )
                                                      .limit( limit )
                                                      .sort( orders )
                                                      .exec();
        const totalProducts = await this._productModel.find(field).countDocuments().sort( orders ).exec();
    
        const newProducts = products.map( ( p: any ) => {
            const { category, subCategory, characteristics, characteristicsDetail,
                 description, stock, sold, __v, ...productsLigth } = p._doc;
            
            return productsLigth
        }) 
        
        return {
            products: newProducts,
            totalProducts
        };
    }

    async getProductById(id: string) {
        const product = await this._productModel.findById(id).exec();

        return product;
    }

    async getProductByOffer(limit: number = 5, skip: number = 0) {

        const products = await this._productModel.find({ offer: true }).limit( limit ).skip( skip );
    
        const newProducts = products.map( (p: any) => {
            const { category, subCategory, characteristics, characteristicsDetail,
                visited, description, stock, sold, __v, ...productsLigth } = p._doc;
            
            return productsLigth
        }) 

        return newProducts;
    }

    async getProductsBySubCategory(subcategory: string, limit: number = 5, skip: number = 0) {
        const products = await this._productModel.find({ subCategory: { $in: subcategory } }).limit(limit).skip(skip);
        const newProducts = products.map( (p: any) => {
            const { category, characteristics, characteristicsDetail,
                visited, description, stock, sold, __v, ...productsLigth } = p._doc;
            
            return productsLigth
        })
        return newProducts;
    }
}

export default new ProductService();