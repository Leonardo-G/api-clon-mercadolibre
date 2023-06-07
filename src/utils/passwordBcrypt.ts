import bcrypt from "bcryptjs";

class PasswordBcrypt {
    constructor() {}

    static hashPassword( password: string ): string {
        const salt = bcrypt.genSaltSync();
        const hashPassword = bcrypt.hashSync( password, salt );
        
        return hashPassword;
    }

    static comparePassword( password: string, passwordUser: string ): boolean {
        const isPasswordEquals = bcrypt.compareSync( password, passwordUser );

        return isPasswordEquals;
    }
}

export default PasswordBcrypt;