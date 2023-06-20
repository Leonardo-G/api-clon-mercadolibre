import { IUserBody, IUserDB } from "../interfaces/user";
import User, { IUserDocument } from "../models/User.models";
import PasswordBcrypt from "../utils/passwordBcrypt";

class UserService {
    private _userModel;

    constructor( ) {
        this._userModel = User;
    }

    async findOne(email: string): Promise<IUserDocument | null> {
        console.log("SERVICIO");
        const user = await this._userModel.findOne({ email }).exec();
        return user;
    }

    async createUser(body: IUserBody): Promise<IUserDB> {
        body.password = PasswordBcrypt.hashPassword(body.password);
        
        const user = new this._userModel( body );
        await  user.save();

        const { username, email, typeUser, imgUrl, _id } = user;

        return {
            _id,
            username,
            email,
            typeUser,
            imgUrl,
        }
    }

    async getStoreByCategory(category: string, limit: number = 5, skip: number = 0) {
        console.log(category);
        const stores =  await this._userModel
            .find( { categories: { $in: category }, typeUser: "official-store" } )
            .limit( limit )
            .skip( skip )
            .exec();

        return stores;
    }
}

export default new UserService();