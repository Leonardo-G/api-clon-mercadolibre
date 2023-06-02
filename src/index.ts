import Server from "./server/server";
import DbConnection from "./utils/dbConfig";

const server = new Server(
    new DbConnection()
);

server.listen();