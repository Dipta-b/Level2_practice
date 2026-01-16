import { prisma } from "../lib/prisma"
import { UserRole } from "../middlewares/auth"

async function seedAdmin() {
    try {

        const adminData = {
            name: "Admin",
            email: "admin@gmail.com",
            role: UserRole.ADMIN,
            password: "admin1234"
        }
        //check if user exists on db or not
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        })
        if (existingUser) {
            throw new Error("User exists in db");
        }

        //gpt bollo and amr error o ashteche je sign-up/email etar maddhome admin create kora jabe na,  abar prisma.create oita diye bhai o koray nai bollo ebahbe korte ekhon ki korbo bhai?

        const signUpAdmin = await fetch("http://localhost:5000/api/auth/sign-up/email", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(adminData)
        })

        console.log(signUpAdmin)
        if (signUpAdmin.ok) {

            await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            })

        }


    } catch (error) {
        console.log(error)
    }
}


seedAdmin();