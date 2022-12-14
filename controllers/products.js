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
        offer,              //"Offer" del producto se espera un "true"
        shipping = "",      // Se espera un "1" | "2"
        interest,           //Se espera un "true"
        until,              //Se espera el numero de cuotas en caso de que INTEREST sea "true"
        condition = "",     // se espera "nuevo" | "usado" | "reacondicionado"
        price_lte = "",     // Precio que sean menores o igual que...
        price_gte = "",     // Precio que sean mayores o igual que...
        tags = "",
        search = "",
        sort                // "price_asc" ==> Precio de menor a mayor | "relevant" ==> Productos mas relevantes
    } = req.query;

    let field = {};
    let orders = {};

    if ( search !== "" ) {
        field = {
            // ...field,
            $text: { $search: search, $caseSensitive: false }
        }
    }
    if ( category !== "" ) field.category = { $in: category }
    if ( subcategory !== "" ) field.subCategory = { $in: subcategory };
    if ( offer !== undefined ) field.offer = offer;
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
    

    const products = await Product.findDocumentsWithFields( field, { limit, skip }, orders)
    const totalProducts = await Product.countDocuments( field, orders );
    
    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo m??s tarde"
        })
    }

    const newProducts = products.map( p => {
        const { category, subCategory, characteristics, characteristicsDetail,
             description, stock, sold, __v, ...productsLigth } = p._doc;
        
        return productsLigth
    }) 
    
    res.status(200).json( {
        products: newProducts,
        totalProducts
    });
}

const newProduct = async ( req = request, res = response ) => {
    const product = req.body;

    const newProduct = await Product.newObj({ ...product } );
    
    if ( !newProduct ) {
        return res.status(500).json({
            msg: "Error al crear el producto. Intentelo de nuevo m??s tarde"
        })
    }
    
    res.status(201).json(newProduct)
}

const getOnlyProduct = async ( req = request, res = response ) => {
    const product = await Product.findOneDocument( req.params.id, { path: "idUser", select: "username _id typeUser" } );

    if ( product === "ERROR" ){
        return res.status(500).json({
            msg: "Error al obtener el producto. Intentelo de nuevo m??s tarde"
        })
    }
    
    res.status( 200 ).json( product )
}

const getProductsByOffer = async ( req = request, res = response ) => {

    const { limit = 5, skip = 0 } = req.query;

    const products = await Product.findDocumentsWithFields({ offer: true }, { limit, skip })
    
    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo m??s tarde"
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

    if ( products === "ERROR") {
        return res.status(500).json({
            msg: "Error al obtener los productos. Intentelo de nuevo m??s tarde"
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