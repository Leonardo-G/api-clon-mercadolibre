import { Router } from "express";
import { check } from "express-validator";

import { login, signIn } from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";

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
], signIn )

export default router;