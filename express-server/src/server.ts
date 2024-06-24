import express, { Express, Request, Response } from "express";
import { AuthRouter, ProductRouter, UserRouter } from "./routes";
import { HttpErrorHandler } from "./middlewares";

const port = process.env.SERVER_PORT || 5000
const server: Express = express();

server.use(AuthRouter)
server.use(UserRouter)
server.use(ProductRouter)

server.use(HttpErrorHandler)

server.listen(port, () => console.info(`Server is running on port: ${port}`))