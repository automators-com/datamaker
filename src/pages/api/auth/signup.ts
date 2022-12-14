/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { prisma } from "../../../utilities/dbConnect";

import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../utilities/hash";

type signUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Getting email and password from body
    const { firstName, lastName, email, password } = req.body as signUpForm;

    // Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    // Check existing
    const checkExistingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Send error response if duplicate user is found
    if (checkExistingUser) {
      res.status(422).json({ message: "User already exists" });
      return;
    }

    // Hash password and create user
    const hashed_pwd = hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password: hashed_pwd,
      },
    });

    // Send success response
    res.status(201).json({ message: "User created", data: user });
  } else {
    res.status(500).json({ message: "Route not valid", data: null });
  }
}
