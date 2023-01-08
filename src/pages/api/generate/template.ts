/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession as getServerSession } from "next-auth/next";
import csv from "csvtojson";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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

  const data = req.body;

  const jsonData = await csv()
    .fromString(data)
    .then((jsonObj) => {
      return jsonObj;
    });

  const template: Array<{
    fieldName: string;
    dataType: { id: number; name: string };
    constraints: [];
  }> = [];

  if (jsonData.length > 0) {
    const columns = Object.keys(jsonData[0]);
    for (const column of columns) {
      const rows = JSON.stringify(jsonData.map((item) => item[column]));
      const index = columns.indexOf(column);
      const prompt = `Classify the following data ${rows} with label ${column} into one of the following ${fakerTypes}.`;
      await openai
        .createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 256,
        })
        .then((res) => {
          if (res.data.choices[0].text) {
            // check if the type is valid
            if (!fakerTypes.includes(res.data.choices[0].text.trim())) {
              console.log(
                res.data.choices[0].text.trim(),
                "is an Invalid type for",
                column
              );
              template.push({
                fieldName: column,
                dataType: { id: index, name: "String" },
                constraints: [],
              });
            }
            template.push({
              fieldName: column,
              dataType: { id: index, name: res.data.choices[0].text?.trim() },
              constraints: [],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return res.status(200).json({ template });
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
  "String",
];
