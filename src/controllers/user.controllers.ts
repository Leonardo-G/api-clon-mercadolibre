import { Request, Response } from 'express';

import { BadRequestException, ServerErrorException } from '../exceptions/Error.exception';
import PasswordBcrypt from '../utils/passwordBcrypt';
import Jwt from '../utils/jwt';
import UserService from '../service/user.service';
import Controller from './controller';

class UserController extends Controller{

    constructor() {
        super()
    }
    
    async postLogin(req: Request, res: Response){
        try {
            const { email, password } = req.body;
            const user = await UserService.findOne( email );

            if ( !user ) {
                return new BadRequestException(res, `The email ${ email } does not exist`);
            }

            const isPasswordEquals = PasswordBcrypt.comparePassword(password, user.password);
            
            if ( !isPasswordEquals ){
                return new BadRequestException(res, 'Email/password incorrect');
            }

            const token = Jwt.createJwt(user._id, user.email);
            const { username, email: emailUser, typeUser, imgUrl } = user;

            super.created(res, {
                email: emailUser,
                username,
                typeUser, 
                imgUrl,
                token
            })
        } catch (error) {
            return new ServerErrorException(res, 'Error in postLogin');
        }
    }

    async postRegister(req: Request, res: Response){
        const isExistUser = await UserService.findOne( req.body.email );
    
        if ( isExistUser ) {
            return new BadRequestException(res, `The email ${ req.body.email } it already exists`);
        }

        const user = await UserService.createUser(req.body);
        const token = Jwt.createJwt(user._id, user.email);

        super.created(res, {
            ...user,
            token
        })
        
    }

    async postStoreCategory( req: Request, res: Response ) {
        const { category } = req.params;
        const { limit, query } = req.query;
        const stores = await UserService.getStoreByCategory(category, Number(limit), Number(query));

        super.sendOk(res, stores);
    }
}

export default new UserController();