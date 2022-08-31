import bcrypt from "bcryptjs";

const hashPassword = ( password ) => {
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync( password, salt );
    
    return hashPassword;
}

const comparePassword = ( passwordUserDB, password ) => {
    const isPasswordEquals = bcrypt.compareSync( password, passwordUserDB );

    return isPasswordEquals;
}

export {
    hashPassword,
    comparePassword
}