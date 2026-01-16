import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from '../lib/auth';

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}


declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: String;
                role: string;
                emailVerified: boolean;
            }
        }
    }
}

const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction
    ) => {
        try {
            //get iuser session from prisma schema session by better auth
            const session = await betterAuth.api.getSession({
                headers: req.headers as any
            })
            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                })
            }


            if (!session.user.emailVerified) {
                return res.status(403).json({
                    success: false,
                    message: "Email verification required"
                })
            }

            req.user = {
                id: session.user.id,
                email: session.user.email!,
                name: session.user.name!,
                role: session.user.role!,
                emailVerified: session.user.emailVerified!
            }


            if (roles.length && !roles.includes(req.user.role as UserRole)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden"
                })
            }
            next();
        } catch (error) {
            next(error)
        }
    }
}


export default auth;