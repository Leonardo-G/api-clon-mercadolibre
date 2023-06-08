import dotenv from "dotenv";
dotenv.config();

const env = {
    SECRET_JWT: process.env.SECRET_JWT as string,
    PORT: process.env.PORT || 3000
}

export default env;