import jwt from "jsonwebtoken";
import env from "../common/env";
import { Request, Response, request } from "express";
import { UnauthorizedException } from "../exceptions/Error.exception";

class Jwt {
    constructor() {}

    static createJwt(id: string, email: string): string {
        const token = jwt.sign( { id, email }, env.SECRET_JWT );
    
        return token;
    }

    static verifyToken(res: Response, token: string): IToken | UnauthorizedException {
        try {
            const payload = jwt.verify(token, env.SECRET_JWT) as IToken;
            return payload;
        } catch (error) {
            return new UnauthorizedException(res, 'Invalid token');
        }
    }
}

export interface IToken {
    id: string;
    email: string
}

export default Jwt;