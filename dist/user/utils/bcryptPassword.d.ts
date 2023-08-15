export declare class BcryptPassword {
    hashPassword(password: string): string;
    comparePassword(password: string, hashPassword: string): true;
}
