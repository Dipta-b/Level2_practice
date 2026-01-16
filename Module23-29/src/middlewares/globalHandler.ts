import { NextFunction, Request, Response } from "express"
import { prisma } from "../lib/prisma";
import { Prisma } from "../../generated/prisma/client";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(err)
    }

    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorDetails = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        errorMessage = "You provide incorrect field type or missing fields!";
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            statusCode = 400;
            errorMessage = "Prismar p2025 er message likhe dibo";
        }
    }

    res.status(statusCode)
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}


export default errorHandler; 
