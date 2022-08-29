import express from "express";
import routerProducts from "../routes/products.js";

class Server {
    constructor() {
        this.app = express();

        this.PORT = process.env.PORT || 8000;
        this.routes = {
            authPath: "/api/auth",
            productsAuth: "/api/products"
        }

        this.middlewares()
    }

    middlewares(){
        // this.app.use( this.routes.authPath )
        this.app.use( this.routes.productsAuth, routerProducts )
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor iniciado")
        })
    }
}

export default Server