import express, { Express } from "express";

//Packages
import dotenv, { DotenvConfigOutput } from "dotenv";
import cors from "cors";

//imports files
import DbConnection from "../utils/dbConfig";
import userRouter from '../routers/auth.router';
import subCategpryRouter from '../routers/subCategory.router';
import categoryRouter from '../routers/category.router';
import productsRouter from '../routers/product.router';
import opinionRouter from '../routers/opinion.router';

class Server {
    readonly app: Express;
    readonly dotenv: DotenvConfigOutput;
    readonly PORT: string | number;
    readonly routes: any;
    readonly controllers: any;

    constructor(private dbConnection: DbConnection){
        this.app = express();
        this.dotenv = dotenv.config();
        
        this.PORT = <string>process.env.PORT || 3000;
        this.routes = {
            authPath: "/api/user",
            productsPath: "/api/products",
            categoryPath: '/api/category',
            subCategoryPath: "/api/subcategory",
            questionsPath: "/api/questions",
            opinionsPath: "/api/opinions"
        }

        this.mongooseConnection();
        this.middlewares();
        this.routersPath();
    }

    mongooseConnection() {
        return this.dbConnection.connectDB();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routersPath() {
        this.app.use(this.routes.authPath, userRouter);
        this.app.use(this.routes.subCategoryPath, subCategpryRouter);
        this.app.use(this.routes.categoryPath, categoryRouter);
        this.app.use(this.routes.productsPath, productsRouter);
        this.app.use(this.routes.opinionsPath, opinionRouter);
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor Iniciado");
        })
    }
}

export default Server;