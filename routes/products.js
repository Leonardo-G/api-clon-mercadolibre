import { Router } from "express";
import { check } from "express-validator";
import { getOnlyProduct, getProducts, getProductsByOffer, getProductsByTags, newProduct } from "../controllers/products.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.post( "/new-product", [
    check("title").exists().withMessage("El campo titulo es obligatorio y tiene que teener como mínimo 10 caracteres"),
    check("imgProduct").isArray().withMessage("El campo 'imgProduct' tiene que ser de tipo ARRAY"),
    check("category").isArray().exists().withMessage("El campo categoria es obligatorio"),
    check("subCategory").isArray().exists().withMessage("El campo categoria es obligatorio"),
    check("characteristicsDetail").isArray().withMessage("El campo characteristicsDetail es obligatorio y tiene que ser de tipo ARRAY"),
    check("characteristicsDetail.*.code").exists().withMessage("El campo 'code' dentro de 'characteristicsDetail' es obligatorio."),
    check("characteristicsDetail.*.info").isArray().withMessage("El campo 'info' dentro de 'characteristicsDetail' es obligatorio y tiene que ser de tipo ARRAY."),
    check("description", "La descripcion del producto es obligatorio.").exists(),
    check("stock").isNumeric().exists().withMessage("El campo stock es obligatorio y tiene que ser un número"),
    check("priceDetail.price").isNumeric().exists().withMessage("Indicar el precio del producto"),
    validateBody
], newProduct );

router.get( "/", getProducts );

router.get( "/:id", getOnlyProduct )

router.get( "/short/by-offer", getProductsByOffer )

router.get( "/short/by-:subcategory", getProductsByTags )

export default router