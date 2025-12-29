import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";

const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const token = req.headers.authorization;
            next()
            console.log({ token })
            if (!token) {
                return res.status(500).json({
                    message: "You are not allowed"
                })
            }
            const decode = jwt.verify(token, config.jetSecret as string)
            req.user = decode as JwtPayload;
            if(roles.length && !roles.includes(req.user.role as string)){
                return res.status(403).json({
                    message:"You are not authorized"
                })
            }
            next()

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
};


export default auth;