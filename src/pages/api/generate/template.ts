import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession as getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if user is logged in
  const session = await getServerSession(req, res, authOptions);

  // if not, return unauthorized
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // TODO: Check to see if the user is allowed to access this endpoint
  // TODO: For now all users will be allowed to

  console.log(req.body);
  console.log(fakerTypes);

  //   wait for 30 seconds
  await new Promise((resolve) => setTimeout(resolve, 30000));

  return res.status(200).json({ message: "Hello World" });
}

// Our predefined datatypes - faker.js
// TODO: Get this from the same place as the frontend
const fakerTypes = [
  "Integer",
  "Name",
  "EMail",
  "Address",
  "City",
  "Country",
  "Phone Number",
  "ZipCode",
  "Gender",
  "Avatar",
  "Job Title",
  "Account Name",
  "IBAN",
  "Currency Name",
  "Credit Card Number",
  "Account",
  "Amount",
  "Password",
  "Domain Name",
  "Color",
  "Emoji",
  "IPv4",
  "MAC Address",
  "URL",
  "Product",
  "Department",
  "Price",
  "Product Name",
  "Boolean",
  "BirthDate",
  "Between",
  "Month",
  "Weekday",
  "Time Zone",
];
