import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class BcryptPassword {
  hashPassword(password: string): string {
    const saltOrRounds = 10;
    const hash = bcrypt.hashSync(password, saltOrRounds);

    return hash;
  }

  comparePassword(password: string, hashPassword: string) {
    const isCorrectPassword = bcrypt.compareSync(password, hashPassword);

    if (!isCorrectPassword)
      throw new BadRequestException('email/password incorrect');

    return isCorrectPassword;
  }
}
