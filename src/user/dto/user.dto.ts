import { PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UserRegisterDTO {
  @IsString()
  @IsNotEmpty()
  @Min(6, {
    message: 'El campo username es requerido y como mínimo 6 caracteres',
  })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Min(6, {
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
