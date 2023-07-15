import * as bcrypt from 'bcrypt';

export class BcryptPassword {
  hashPassword(password: string): string {
    const saltOrRounds = 10;
    const hash = bcrypt.hashSync(password, saltOrRounds);

    return hash;
  }
}
