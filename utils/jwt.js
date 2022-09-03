import jwt from "jsonwebtoken";

const createJWT = ( id, email ) => {
    const token = jwt.sign( { id, email }, process.env.SECRET_JWT );
    
    return token
}

export {
    createJWT
}