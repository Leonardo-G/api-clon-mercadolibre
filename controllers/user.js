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
        return res.status(404).json({
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

const changeToStore = async ( req = request, res = response ) => {
    const { categories, tags } = req.body;

    const user = await User.documentUpdate( req._id, { categories, tags, typeUser: "official-store" } )

    if ( !user ){
        return res.status(400).json({
            msg: "El usuario no se encuentra en nuestra base de datos"
        })
    }

    if ( user === "ERROR" ){
        return res.status(500).json({
            msg: "Error en la base de datos"
        })
    }

    return res.status(200).json({
        msg: "Sos Tienda oficial de mercado libre clon"
    })
}

const getUserOfCategories = async ( req = request, res = response ) => {
    const { category } = req.params;

    const storeOfCategories = await User.findDocumentsWithFields( { categories: { $in: category }, typeUser: "official-store" } )
    
    if ( storeOfCategories === "ERROR" ) {
        return res.status(500).json({
            msg: "Error en el servidor"
        })
    }

    res.status(200).json( storeOfCategories );
}

export {
    login,
    signIn,
    changeToStore,
    getUserOfCategories
}

