import Express from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config();
const server = Express();


server.use(Express.urlencoded({ extended: true }));
server.use(cors());
server.use(router);
server.listen(process.env.PORT);
