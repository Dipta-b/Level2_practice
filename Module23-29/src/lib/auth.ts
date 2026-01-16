import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL!],

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "USER",
      }
    }
  },
  phone: {
    type: "string",
    required: false
  },
  status: {
    type: "string",
    defaultValue: "ACTIVE",
    required: false
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,

  },
  emailVerification: {
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationEmail = `${process.env.APP_URL}/verify-email?token=${token}`;
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
          to: user.email,
          subject: "Hello ✔",
          text: "Hello world?", // Plain-text version of the message
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333333;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #555555;
      line-height: 1.5;
    }
    .button {
      display: block;
      width: 200px;
      margin: 20px auto;
      padding: 12px;
      text-align: center;
      background-color: #4caf50;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }
    .footer {
      font-size: 12px;
      color: #888888;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Verify Your Email</h1>
    <p>Hi there,</p>
    <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
    <a class="button" href="${verificationEmail}">Verify Email</a>
    <p>If the button doesn't work, copy and paste the following link into your browser:</p>
    <p><a href="${verificationEmail}">${verificationEmail}</a></p>
    <p>Welcome aboard!<br/>— The Team</p>
    <div class="footer">
      &copy; 2026 Your Company. All rights reserved.
    </div>
  </div>
</body>
</html>
`
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account consent",
      accessType: "offline",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    },
  }
});