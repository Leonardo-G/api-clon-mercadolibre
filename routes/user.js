import { Router } from "express";
import { check } from "express-validator";

import { changeToStore, getUserOfCategories, login, signIn } from "../controllers/user.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateJWT } from "../middlewares/validateJWT.js";


const router = Router();

router.post( "/login", [
    check("email").isEmail().withMessage("Ingrese un email válido"),
    check("password").isLength({ min: 6 }).withMessage("La contraseña tiene que tener como mínimo 6 caracteres"),
    validateBody
], login );

router.post( "/sign-in", [
    check("username").isLength({min: 6}).withMessage("El campo username es requerido y como mínimo 6 caracteres"),
    check("email").isEmail().withMessage("Ingrese un email válido"),
    check("password").isLength({ min: 6 }).withMessage("La contraseña tiene que tener como mínimo 6 caracteres"),
    validateBody
], signIn );

//Cuando un usuario se crea, tendrá un ROL de usuario normal que pueda vender en la plataforma. 
//En esta URL, el usuario puede solicitar el ROLE como "Tienda verificada" por la aplicación
router.put( "/change-to-store", [
    check("categories", "El campo 'categories' es requerido y debe de ser un ARRAY").isArray({ min: 1 }),
    check("tags", "El campo 'tags' es requerido y debe de ser un ARRAY").isArray({ min: 1 }),
    validateBody,
    validateJWT
], changeToStore );

router.get( "/store-of-:category", getUserOfCategories );

export default router;