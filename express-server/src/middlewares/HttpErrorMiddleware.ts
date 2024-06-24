import { Request, Response, NextFunction, ErrorRequestHandler } from "express"
import HttpException from "../exceptions/HttpException"

export default function HttpErrorHandler(
    err: ErrorRequestHandler,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (err instanceof HttpException) {
        response
            .status(err.getStatusCode())
            .json({ message: err.message })
    } else {
        response
            .status(500)
            .json({ message: "Internal server error" })
    }
}