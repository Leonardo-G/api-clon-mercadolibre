import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/user.model';
import { Model } from 'mongoose';
import { UserLoginDTO, UserRegisterDTO } from '../dto/user.dto';
import { IUserReturn } from '../interface/user.interface';
import { BcryptPassword } from '../utils/bcryptPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private bcryptPassword: BcryptPassword,
    private jwtService: JwtService,
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
      token: this.jwtService.sign({ _id, email }),
    };
  }

  async login(userDTO: UserLoginDTO) {
    const user = await this.userModel.findOne({ email: userDTO.email }).exec();

    if (!user)
      throw new BadRequestException(`User ${userDTO.email} is does not exists`);

    this.bcryptPassword.comparePassword(userDTO.password, user.password);

    const { username, email, typeUser, imgUrl, _id } = user;

    return {
      _id,
      username,
      email,
      typeUser,
      imgUrl,
      token: this.jwtService.sign({ _id, email }),
    };
  }

  async getAllStores(category: string, limit: number, skip: number) {
    const stores = await this.userModel
      .find({
        categories: { $in: [category] },
        typeUser: 'official-store',
      })
      .limit(limit)
      .skip(skip)
      .exec();

    return stores;
  }
}
