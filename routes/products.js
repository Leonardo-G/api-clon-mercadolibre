import { Router } from "express";
import { getProducts, newProduct } from "../controllers/products.js";

const router = Router();

router.post( "/", newProduct );

router.get( "/", getProducts );

export default router