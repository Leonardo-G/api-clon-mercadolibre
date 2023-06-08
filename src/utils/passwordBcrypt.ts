import bcrypt from "bcryptjs";

class PasswordBcrypt {
    constructor() {}

    static hashPassword( password: string ): string {
        const hashPassword = bcrypt.hashSync(password);
        
        return hashPassword;
    }

    static comparePassword( password: string, passwordUser: string ): boolean {
        const isPasswordEquals = bcrypt.compareSync( password, passwordUser );

        return isPasswordEquals;
    }
}

export default PasswordBcrypt;