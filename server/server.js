import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routerProducts from "../routes/products.js";
import routerAuth from "../routes/auth.js";

class Server {
    constructor() {
        this.app = express();
        this.dotenv = dotenv.config()

        this.PORT = process.env.PORT || 8000;
        this.routes = {
            authPath: "/api/auth",
            productsAuth: "/api/products"
        }

        this.mongooseConnection();
        this.middlewares();
        this.routerPath();
    }

    async mongooseConnection(){
        try {
            await mongoose.connect(process.env.DB_URL_MONGODB_CONNECTION)
            console.log("Base de datos conectada...")
        } catch (error) {
            console.log(error)
        }
    }

    middlewares(){
        this.app.use( express.json() );
    }

    routerPath(){
        this.app.use( this.routes.authPath, routerAuth )
        this.app.use( this.routes.productsAuth, routerProducts );
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor iniciado")
        })
    }
}

export default Server