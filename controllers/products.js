import { request, response } from "express";
import ProductSchema from "../models/Product.js";
import MethodsApi from "../service/DAO.js"

const Product = new MethodsApi( ProductSchema );

const getProducts = ( req = request, res = response ) => {
    res.status(200).send("Logrado Hola Mundo")
}

const newProduct = async ( req = request, res = response ) => {
    const product = req.body;

    const newProduct = await Product.newObj({ idProduct: "6312e5a047935034ad9bcba9",...product } );
    
    if ( !newProduct ) {
        return res.status(500).json({
            msg: "Error al crear el producto. Intentelo de nuevo más tarde"
        })
    }
    
    res.status(201).json(newProduct)
}

const getOnlyProduct = async ( req = request, res = response ) => {
    const product = await Product.findOneDocument( req.params.id );

    if ( product === "ERROR" ){
        return res.status(500).json({
            msg: "Error al obtener el producto. Intentelo de nuevo más tarde"
        })
    }
    console.log(product)
    res.status( 200 ).json( product )
}

const getProductsByOffer = async ( req = request, res = response ) => {

    const { limit = 5, skip = 0 } = req.query;

    const products = await Product.findDocumentsWithFields({ offer: true }, { limit, skip })
    
    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo más tarde"
        })
    }
    console.log(products)
    const newProducts = products.map( p => {
        const { category, subCategory, characteristics, characteristicsDetail,
            visited, description, stock, sold, __v, ...productsLigth } = p._doc;
        
        return productsLigth
    }) 
    
    res.status(200).json( newProducts )
}

export {
    getProducts,
    newProduct,
    getOnlyProduct,
    getProductsByOffer
}