import sha256 from "crypto-js/sha256";
import { prisma } from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Getting email and password from body
    const { email } = req.body;

    //  6 digit integer password reset code
    const passwordResetCode = Math.floor(100000 + Math.random() * 900000);

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
          password_reset_code: passwordResetCode,
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
    const { code, password, email } = req.body;

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // If user exists, update password
    if (user) {
      // Check if code matches
      if (Number(user.password_reset_code) === Number(code)) {
        // Hash password and update user
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            password: sha256(password).toString(),
            password_reset_code: null,
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

const sendPasswordResetEmail = async (email, passwordResetCode) => {
  console.log("Sending password reset email");
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "noreply@capacities.app",
    templateId: "d-d7498cab9c564ed79626f9373e4b58ab",
    dynamicTemplateData: {
      Generated_Code: passwordResetCode,
    },
  };
  sgMail.send(msg);
  console.log("Password reset email sent");
  return;
};
