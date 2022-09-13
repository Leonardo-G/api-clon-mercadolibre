import { request, response } from "express";
import ProductSchema from "../models/Product.js";
import MethodsApi from "../service/DAO.js";

const Product = new MethodsApi( ProductSchema );

const getProducts = async ( req = request, res = response ) => {
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
    const { 
        limit = 5, 
        skip = 0,
        category = "",
        subcategory = "",
        offer,
        shipping = "",
        interest,           //Se espera un "true"
        until,              //Se espera el numero de cuotas en caso de que INTEREST sea "true"
        condition = "",     // se espera "nuevo" | "usado" | "reacondicionado"
        price_lte = "",     // Precio que sean menores o igual que...
        price_gte = "",     // Precio que sean mayores o igual que...
        tags = "",
        search = ""   
    } = req.query;

    let field = {};
    
    if ( category !== "" ) field.category = { $in: category }
    if ( subcategory !== "" ) field.subCategory = { $in: subcategory };
    if ( offer !== undefined ) field.offer = offer;
    if ( shipping !== "" && (shipping === "1" || shipping === "2" || shipping === "3") ) field["shipping.code"] = Number(shipping);
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
    if ( search !== "" ) {
        field = {
            // ...field,
            $text: { $search: search, $caseSensitive: false }
        }
    }

    const products = await Product.findDocumentsWithFields( field, { limit, skip })
    
    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo más tarde"
        })
    }

    const newProducts = products.map( p => {
        const { category, subCategory, characteristics, characteristicsDetail,
            visited, description, stock, sold, __v, ...productsLigth } = p._doc;
        
        return productsLigth
    }) 
    
    res.status(200).json( products );
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

    const newProducts = products.map( p => {
        const { category, subCategory, characteristics, characteristicsDetail,
            visited, description, stock, sold, __v, ...productsLigth } = p._doc;
        
        return productsLigth
    }) 
    
    res.status(200).json( newProducts )
}

const getProductsByTags = async ( req = request, res = response ) => {

    const { limit = 5, skip = 0 } = req.query;
    const { subcategory } = req.params;
    const products = await Product.findDocumentsWithFields({ subCategory: { $in: subcategory } }, { limit, skip })
    console.log( "PADasd" )
    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo más tarde"
        })
    }

    const newProducts = products.map( p => {
        const { category, characteristics, characteristicsDetail,
            visited, description, stock, sold, __v, ...productsLigth } = p._doc;
        
        return productsLigth
    }) 
    
    res.status(200).json( newProducts )
}

export {
    getProducts,
    newProduct,
    getOnlyProduct,
    getProductsByOffer,
    getProductsByTags
}