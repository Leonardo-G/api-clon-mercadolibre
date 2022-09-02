import { request, response } from "express";
import ProductSchema from "../models/Product.js";
import MethodsApi from "../service/DAO.js"

const Product = new MethodsApi( ProductSchema );

const getProducts = ( req = request, res = response ) => {
    res.status(200).send("Logrado Hola Mundo")
}

const newProduct = async ( req = request, res = response ) => {
    const product = req.body;

    const newProduct = await Product.newObj( product );
    
    if ( !newProduct ) {
        return res.status(500).json({
            msg: "Error al crear el producto. Intentelo de nuevo más tarde"
        })
    }
    
    res.status(201).json({
        msg: "Producto creado",
        status: 201
    })
}

export {
    getProducts,
    newProduct
}