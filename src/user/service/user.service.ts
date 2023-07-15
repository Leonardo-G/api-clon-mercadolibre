import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/user.model';
import { Model } from 'mongoose';
import { UserRegisterDTO } from '../dto/user.dto';
import { IUserReturn } from '../interface/user.interface';
import { BcryptPassword } from '../utils/bcryptPassword';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private bcryptPassword: BcryptPassword,
  ) {}

  async newUser(userDTO: UserRegisterDTO): Promise<IUserReturn> {
    const isExistUSer = await this.userModel
      .findOne({ email: userDTO.email })
      .exec();

    if (isExistUSer)
      throw new BadRequestException(
        `The email ${userDTO.email} it already exists`,
      );

    userDTO.password = this.bcryptPassword.hashPassword(userDTO.password);

    const user = new this.userModel(userDTO);
    user.save();

    const { username, email, typeUser, imgUrl, _id } = user;

    return {
      _id,
      username,
      email,
      typeUser,
      imgUrl,
    };
  }
}
