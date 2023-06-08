import jwt from "jsonwebtoken";
import env from "../common/env";

class Jwt {
    constructor() {}

    static createJwt(id: string, email: string) {
        console.log(env.SECRET_JWT);
        const token = jwt.sign( { id, email }, env.SECRET_JWT );
    
        return token;
    }
}

export default Jwt;