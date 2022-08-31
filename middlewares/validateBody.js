import { request, response } from "express";
import { validationResult } from "express-validator"

export const validateBody = ( req = request, res = response, next ) => {
    const result = validationResult( req );

    if( !result.isEmpty() ) {
        res.status(400).json( result.array() )
        return
    }

    next();
    
}