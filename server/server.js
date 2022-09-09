import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import routerProducts from "../routes/products.js";
import routerAuth from "../routes/user.js";
import routerSubCategory from "../routes/subCategory.js";
import routerQuestions from "../routes/questions.js";

class Server {
    constructor() {
        this.app = express();
        this.dotenv = dotenv.config()

        this.PORT = process.env.PORT || 8000;
        this.routes = {
            authPath: "/api/user",
            productsPath: "/api/products",
            subCategoryPath: "/api/subcategory",
            questionsPath: "/api/questions"
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
        this.app.use( cors() )
        this.app.use( express.json() );
    }

    routerPath(){
        this.app.use( this.routes.authPath, routerAuth );
        this.app.use( this.routes.productsPath, routerProducts );
        this.app.use( this.routes.subCategoryPath, routerSubCategory );
        this.app.use( this.routes.questionsPath, routerQuestions );
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor iniciado")
        })
    }
}

export default Server