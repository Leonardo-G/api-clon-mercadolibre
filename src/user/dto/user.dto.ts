import { PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class UserRegisterDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'the fiel "username" requires a minimum of 6 characters',
  })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'La contraseña tiene que tener como mínimo 6 caracteres',
  })
  password: string;

  @IsOptional()
  @IsIn(['user', 'official-store'])
  typeUser: 'user' | 'official-store';

  @IsOptional()
  @IsString()
  imgUrl: string;
}

export class UserLoginDTO extends PickType(UserRegisterDTO, [
  'email',
  'password',
] as const) {}
