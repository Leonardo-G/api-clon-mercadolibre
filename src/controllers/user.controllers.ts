import { Request, Response } from 'express';

import { BadRequestException } from '../exceptions/Error.exception';
import UserMiddleware from '../middlewares/user.middleware';

class UserController {
    readonly userMiddleware: UserMiddleware;

    constructor() {
        
        this.userMiddleware = new UserMiddleware();
    }
    
    static postLogin(req: Request, res: Response){
        try {
            
            throw new BadRequestException(res);
        } catch (error) {
        }
    }

    postRegister(){
    }
}

export default UserController;