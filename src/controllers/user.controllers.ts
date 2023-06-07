import { Request, Response } from 'express';

import { BadRequestException, ServerErrorException } from '../exceptions/Error.exception';
import UserMiddleware from '../middlewares/user.middleware';
import UserService from '../service/user.service';
import PasswordBcrypt from '../utils/passwordBcrypt';
import Jwt from '../utils/jwt';

class UserController {
    readonly userMiddleware: UserMiddleware;
    readonly userServices: UserService

    constructor() {
        
        this.userServices = new UserService();
        this.userMiddleware = new UserMiddleware();
    }
    
    async postLogin(req: Request, res: Response){
        try {
            const { email, password } = req.body;
            const user = await this.userServices.findOne( email );

            if ( !user ) {
                throw new BadRequestException(res, `The email ${ email } does not exist`);
            }

            const isPasswordEquals = PasswordBcrypt.comparePassword(password, user.password);
            
            if ( !isPasswordEquals ){
                throw new BadRequestException(res, 'Email/password incorrect');
            }

            const token = Jwt.createJwt(user._id, user.email);
            const { username, email: emailUser, typeUser, imgUrl } = user;
            res.status(201).json({
                email: emailUser,
                username,
                typeUser, 
                imgUrl,
                token
            })
        } catch (error) {
            throw new ServerErrorException(res, 'Error in postLogin');
        }
    }

    postRegister(){
    }
}

export default UserController;