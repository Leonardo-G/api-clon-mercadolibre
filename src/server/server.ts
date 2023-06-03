import express, { Express } from "express";

//Packages
import dotenv, { DotenvConfigOutput } from "dotenv";
import cors from "cors";

//imports files
import DbConnection from "../utils/dbConfig";
import UserRouter from "../routes/user";

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
            subCategoryPath: "/api/subcategory",
            questionsPath: "/api/questions",
            opinionsPath: "/api/opinions"
        }

        this.controllers = {
            auth: new UserRouter(),
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
        this.app.use(this.routes.authPath, this.controllers.auth);
    }

    listen(){
        this.app.listen( this.PORT, () => {
            console.log("Servidor Iniciado");
        })
    }
}

export default Server;