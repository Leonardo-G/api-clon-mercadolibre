import { request, response } from "express"

import { createJWT } from "../utils/jwt.js"
import { comparePassword, hashPassword } from "../utils/passwordHash.js"

import MethodsApi from "../service/DAO.js"
import UserSchema from "../models/User.js"
const User = new MethodsApi( UserSchema );


const login = async ( req = request, res = response ) => {

    const isExistUser = await User.findObjByField({ email: req.body.email })
    if( !isExistUser ){
        return res.status(400).json({
            msg: `El usuario con el correo ${ req.body.email } no existe`
        })
    }

    const isPasswordEquals = comparePassword( isExistUser.password, req.body.password ) 

    if ( !isPasswordEquals ){
        return res.status(400).json({
            msg: "Email/contraseña incorrecta"
        })
    }

    const token = createJWT( isExistUser._id, isExistUser.email );

    const { username, email, typeUser, imgUrl } = isExistUser;

    res.status(201).json({
        username,
        email,
        typeUser,
        imgUrl,
        token
    });
}

const signIn = async ( req = request, res = response ) => {
    //Validar si el usuario existe
    
    const isExistUser = await User.findObjByField({ email: req.body.email })
    if( isExistUser ){
        return res.status(400).json({
            msg: `El usuario con el correo ${ req.body.email } ya existe`
        })
    }
    
    req.body.password = hashPassword( req.body.password );

    const user = await User.newObj( req.body );
    if( !user ){
        return res.status(500).json({
            msg: "Error al crear un usuario: SignIn"
        })
    }

    const token = createJWT( user._id, user.email );

    const { username, email, typeUser, imgUrl } = user;

    res.status(201).json({
        username,
        email,
        typeUser,
        imgUrl,
        token
    });
}

export {
    login,
    signIn
}