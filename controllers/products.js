import { request, response } from "express"

const getProducts = ( req = request, res = response ) => {
    res.status(200).send("Logrado Hola Mundo")
}

const newProduct = ( req = request, res = response ) => {

}

export {
    getProducts,
    newProduct
}