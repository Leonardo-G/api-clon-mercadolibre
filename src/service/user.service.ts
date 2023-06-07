import { BadRequestException } from "../exceptions/Error.exception";
import User, { IUser } from "../models/User.models";

class UserService {
    private _userModel = User;

    constructor() {}
    
    // async login(email: string, password: string) {
    //     const user = await this.findOne(email);
    // }

    async findOne(email: string): Promise<IUser | null> {
        const user = await this._userModel.findOne({ email }).exec();
        return user;
    }
}

export default UserService;