import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IJwtUser } from 'src/common/interfaces/jwtUser.interface';
import { User } from 'src/user/model/user.model';

@Injectable()
export class IsExisteUserGuard implements CanActivate {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request['authorization'];

    const isValidToken = this.jwtService.verify<IJwtUser>(token);

    if (!isValidToken) throw new UnauthorizedException('Token is not valid');

    const user = await this.userModel.findById(isValidToken._id);

    if (!user) throw new UnauthorizedException('User does not exists');

    request.id = isValidToken._id;

    return true;
  }
}
