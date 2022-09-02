import { request, response } from "express";
import { validationResult } from "express-validator"

export const validateBody = ( req = request, res = response, next ) => {
    const result = validationResult( req );

    if( !result.isEmpty() ) {
        const errors = result.array().map( e => e.msg ).join("\n") 
        res.status(404).json({
            msg: errors
        })

        return
    }

    next();
    
}