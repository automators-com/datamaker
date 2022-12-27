import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utilities/dbConnect";
import { hashPassword } from "../../../utilities/hash";
import sgMail from "@sendgrid/mail";

type passwordResetBody = {
  email: string;
  code: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Getting email and password from body
    const { email } = req.body as passwordResetBody;

    //  6 digit integer password reset code
    const passwordResetCode = String(
      Math.floor(100000 + Math.random() * 900000)
    );

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // If user exists, update password reset code
    if (user) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          passwordResetCode: passwordResetCode,
        },
      });

      // Send email with password reset code
      await sendPasswordResetEmail(email, passwordResetCode);
      res.status(201).json({ message: "Password reset code sent" });
    } else {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    }
  } else if (req.method === "PUT") {
    // Getting code and password from body
    const { code, password, email } = req.body as passwordResetBody;

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // If user exists, update password
    if (user) {
      // Check if code matches
      if (Number(user.passwordResetCode) === Number(code)) {
        // Hash password and update user
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            password: hashPassword(password),
            passwordResetCode: null,
          },
        });
        res.status(201).json({ message: "Password reset" });
      } else {
        res.status(404).json({ message: "Invalid code" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(500).json({ message: "Route not valid", data: null });
  }
}

const sendPasswordResetEmail = async (
  email: string,
  passwordResetCode: string
) => {
  console.log("Sending password reset email");
  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));
  const msg = {
    to: email,
    from: "noreply@datamaker.app",
    templateId: "d-c25a88e5be364ca480ddb051b2c61d5e",
    dynamicTemplateData: {
      Generated_Code: passwordResetCode,
    },
  };
  await sgMail.send(msg);
  console.log("Password reset email sent");
  return;
};
