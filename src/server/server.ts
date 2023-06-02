import dotenv, { DotenvConfigOutput } from "dotenv";
import express, { Express } from "express";
import DbConnection from "../utils/dbConfig";
import cors from "cors";

class Server {
    readonly app: Express;
    readonly dotenv: DotenvConfigOutput;
    readonly PORT: string | number;
    readonly routes: any;

    constructor(private dbConnection: DbConnection){
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

        this.mongooseConnection();
    }

    mongooseConnection() {
        return this.dbConnection.connectDB();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor Iniciado");
        })
    }
}

export default Server;