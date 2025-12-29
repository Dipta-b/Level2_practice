import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body ?? {};

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const result = await authServices.loginUser(email, password);

        // 🔴 Email not found
        if (result === null) {
            return res.status(404).json({
                success: false,
                message: "User not found with this email",
            });
        }

        // 🔴 Wrong password
        if (result === false) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // ✅ Success
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const authController = {
    loginUser,
};
