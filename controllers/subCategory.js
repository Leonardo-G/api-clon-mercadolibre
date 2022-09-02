import { request, response } from "express"

import MethodsApi from "../service/DAO.js";
import SubCategorySchema from "../models/SubCategory.js";

const SubCategory = new MethodsApi( SubCategorySchema );

const newSubCategory = async ( req = request, res = response ) => {

    const subCategory = await SubCategory.newObj( req.body );

    if( !subCategory ) {
        return res.status(500).json({
            msg: "Error al crear una nueva sub categoría. Intentelo de nuevo más tarde"
        })
    }

    res.status(201).json( subCategory )
}

const getSubCategoriesOfCategory = async ( req = request, res = response ) => {
    
    const { category } = req.params;

    if ( !category ) {
        return res.status(400).json({
            msg: "Error al obtener la categoria"
        })
    }

    const subCategories = await SubCategory.findDocumentsWithFields({ "category.code": category })
    
    if( !subCategories ) {
        return res.status( 500 ).json({
            msg: "Error al obtener las sub categorías"
        })
    }

    return res.status(200).json(subCategories)
}

export {
    newSubCategory,
    getSubCategoriesOfCategory
}