import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from 'src/user/model/user.model';
export declare class IsExisteUserGuard implements CanActivate {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
