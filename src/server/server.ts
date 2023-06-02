import dotenv, { DotenvConfigOutput } from "dotenv";
import express, { Express } from "express";

class Server {
    readonly app: Express;
    readonly dotenv: DotenvConfigOutput;
    readonly PORT: string | number;
    readonly routes: any;

    constructor(){
        this.app = express();
        this.dotenv = dotenv.config();

        this.PORT = <string>process.env.PORT || 3000;
        this.routes = {
            authPath: "/api/user",
            productsPath: "/api/products",
            subCategoryPath: "/api/subcategory",
            questionsPath: "/api/questions",
            opinionsPath: "/api/opinions"
        }
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor Iniciado");
        })
    }
}

export default Server;