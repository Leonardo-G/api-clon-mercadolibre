import { request, response } from "express"
import MethodsApi from "../service/DAO.js"
import UserSchema from "../models/User.js"
import { createJWT } from "../utils/jwt.js"
const User = new MethodsApi( UserSchema )

const login = async ( req = request, res = response ) => {

    const isExistUser = await User.findObjByField({ email: req.body.email })
    if( !isExistUser ){
        return res.status(400).json({
            msg: `El usuario con el correo ${ req.body.email } no existe`
        })
    }

    res.status(200).json(users)
}

const signIn = async ( req = request, res = response ) => {
    //Validar si el usuario existe
    
    const isExistUser = await User.findObjByField({ email: req.body.email })
    if( isExistUser ){
        return res.status(400).json({
            msg: `El usuario con el correo ${ req.body.email } ya existe`
        })
    }
    
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