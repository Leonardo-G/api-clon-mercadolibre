import jwt from "jsonwebtoken";
import env from "../common/env";

class Jwt {
    constructor() {}

    static createJwt(id: string, email: string) {
        const token = jwt.sign( { id, email }, env.SECRET_JWT );
    
        return token
    }
}

export default Jwt;