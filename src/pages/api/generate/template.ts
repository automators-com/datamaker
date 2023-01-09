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
import { DataTypes } from "../../../utilities/constants";
import type { dropDownList } from "../../../utilities/types";
import { prisma } from "../../../utilities/dbConnect";

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
  try {
    const data = req.body;

    const jsonData = await csv()
      .fromString(data)
      .then((jsonObj) => {
        return jsonObj;
      });

    const template: Array<{
      fieldName: string;
      dataType: dropDownList;
      constraints: [];
    }> = [];

    if (jsonData.length > 0) {
      const columns = Object.keys(jsonData[0]);
      for (const column of columns) {
        console.log("Using open AI to determine type of", column);
        const rows = JSON.stringify(jsonData.map((item) => item[column]));
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
              const openAISelection = res.data.choices[0].text;
              if (!fakerTypes.includes(openAISelection.trim())) {
                console.log(
                  res.data.choices[0].text.trim(),
                  "is an Invalid type for",
                  column
                );
                template.push({
                  fieldName: column,
                  dataType: { id: 1, name: "String" },
                  constraints: [],
                });
              } else {
                const fakerTypeToUse = DataTypes.find(
                  (item) => item.name === openAISelection.trim()
                );
                template.push({
                  fieldName: column,
                  dataType: fakerTypeToUse as dropDownList,
                  constraints: [],
                });
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    await prisma.template.create({
      data: {
        fields: JSON.stringify(template),
        name: "AI Generated Template",
        User: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return res.status(200).json(template);
  } catch {
    return res.status(500).json({ message: "Error creating template" });
  }
}

// Our predefined datatypes - faker.js
const fakerTypes = DataTypes.map((item) => item.name);
