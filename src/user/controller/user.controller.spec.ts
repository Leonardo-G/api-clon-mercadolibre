import mongoose, { Types } from 'mongoose';
import { UserController } from './user.controller';
import { UserService } from '../service/user.service';
import { IUserReturn } from '../interface/user.interface';
import { UserRegisterDTO } from '../dto/user.dto';
import { UserSchema } from '../model/user.model';
import { BcryptPassword } from '../utils/bcryptPassword';
import { JwtService } from '@nestjs/jwt';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(
      mongoose.model('User', UserSchema),
      new BcryptPassword(),
      new JwtService(),
    );
    userController = new UserController(userService);
  });

  describe('Register', () => {
    it('Return newUser correctly', async () => {
      const userRegisterDTO: UserRegisterDTO = {
        email: 'correo@correo.com',
        imgUrl: 'asdad',
        password: '123456',
        username: 'leonardo',
      };

      const result: IUserReturn = {
        _id: new Types.ObjectId(),
        email: 'leob@hasd',
        imgUrl: '',
        token: '',
        typeUser: 'ad',
        username: 'asdea',
      };

      jest.spyOn(userService, 'newUser').mockImplementation(async () => result);
      const resultController = await userController.postRegister(
        userRegisterDTO,
      );

      expect(resultController).toEqual(result);
    });
  });
});
