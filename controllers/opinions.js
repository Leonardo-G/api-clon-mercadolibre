import { request, response } from "express";
import MethodsApi from "../service/DAO.js";
import OpinionSchema from "../models/Opinion.js";

const Opinion = new MethodsApi( OpinionSchema )

const newComment = async ( req = request, res = response ) => {
    const { idproduct } = req.params;

    const opinion = await Opinion.newObj({ idProduct: idproduct, idUser: "1", ...req.body })

    if ( opinion === "ERROR" ) {
        return res.status( 500 ).json({
            msg: "Error al obtener el documento"
        })
    }

    res.status( 201 ).json( opinion )
}

const getOpinions = async ( req = request, res = response ) => {

    const { idproduct } = req.params
    const { limit = 20, skip = 0 } = req.query;

    const opinions = await Opinion.findDocumentsWithFields({ idProduct: idproduct }, { limit, skip });

    if ( opinions === "ERROR" ) {
        return res.status( 500 ).json({
            msg: "Error al obtener el documento"
        })
    }

    const [ 
        totalOpinions,
        rate_1,
        rate_2,
        rate_3,
        rate_4,
        rate_5,
    ] = await Promise.all([
        Opinion.countDocuments({ idProduct: idproduct }, {}),
        Opinion.countDocuments({ idProduct: idproduct }, { rate: 1 }),
        Opinion.countDocuments({ idProduct: idproduct }, { rate: 2 }),
        Opinion.countDocuments({ idProduct: idproduct }, { rate: 3 }),
        Opinion.countDocuments({ idProduct: idproduct }, { rate: 4 }),
        Opinion.countDocuments({ idProduct: idproduct }, { rate: 5 })
    ])

    res.status(200).json({
        opinions: opinions,
        totalOpinions,
        rating: {
            rate_1,
            rate_2,
            rate_3,
            rate_4,
            rate_5
        }
    })
}

export {
    newComment,
    getOpinions
}