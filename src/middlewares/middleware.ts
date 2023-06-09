import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class Middleware {
    constructor() {}

    static validateBody( req: Request, res: Response, next: NextFunction ){
        const result = validationResult( req );
        
        if( !result.isEmpty() ) {
            res.status(404).json(result.array());
    
            return
        }
        
        next();
    }
}

export default Middleware