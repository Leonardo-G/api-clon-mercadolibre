import mongoose from "mongoose";

class DbConnection {
    constructor() {}

    async connectDB() {
        try {
            await mongoose.connect(process.env.DB_URL_MONGODB_CONNECTION as string);
            console.log("Base de datos conectada");
        } catch (error) {
            console.log(error);
        }
    }
}

export default DbConnection;