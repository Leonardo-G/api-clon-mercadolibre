import { request, response } from "express";
import jwt from "jsonwebtoken";

const validateJWT = ( req = request, res = response, next ) => {
    const tokenHeaders = req.headers["auth-token"];

    jwt.verify( tokenHeaders, process.env.SECRET_JWT, ( err, token ) => {
        if ( err ) {
            console.log( err )
            return res.status( 401 ).json({
                msg: "Error de autenticación"
            })
        }

        req._id = token.id;
        next();
    } );

}

export {
    validateJWT
}