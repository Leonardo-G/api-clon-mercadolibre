import { request, response } from "express";

import MethodsApi from "../service/DAO.js";
import QuestionSchema from "../models/Question.js";

const Question = new MethodsApi( QuestionSchema )

const newQuestion = async ( req = request, res = response ) => {
    const { idproduct } = req.params;
    const { question } = req.body

    const body = {
        idProduct: idproduct,
        // question,
        ...req.body
    }

    const newQuestion = await Question.newObj( body )

    if ( newQuestion === "ERROR" ) {
        return res.status(500).json({
            msg: "Error al crear una nueva pregunta del producto."
        })
    }

    res.status(201).json( newQuestion );

}

const reponseQuestion = async ( req = request, res = response ) => {
    
    const { idquestion } = req.params;
    const { response } = req.body

    const question = await Question.documentUpdate( idquestion, { response, answered: true } )

    if ( question === "ERROR" ) {
        return res.status(500).json({
            msg: "Error al crear una nueva pregunta del producto."
        })
    }

    res.status(200).json( question );
}

const getQuestion = async ( req = request, res = response ) => {
    
    const { idquestion } = req.params;
    const { limit = 12, skip = 0 } = req.query;

    const question = await Question.findDocumentsWithFields({ idProduct: idquestion }, { limit, skip }, { created: -1 });

    if ( question === "ERROR" ) {
        return res.status(500).json({
            msg: "Error al crear una nueva pregunta del producto."
        })
    }

    res.status(200).json( question );
}

export {
    newQuestion,
    reponseQuestion,
    getQuestion
}