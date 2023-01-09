/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { NextApiRequest, NextApiResponse } from "next";
// import { authOptions } from "../auth/[...nextauth]";
// import { unstable_getServerSession as getServerSession } from "next-auth/next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  // check if user is logged in
  //   const session = await getServerSession(req, res, authOptions);

  // if not, return unauthorized
  //   if (!session) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  // TODO: Check to see if the user is allowed to access this endpoint
  // TODO: For now all users will be allowed to
  try {
    const { field: fieldName }: { field: string } = req.body;

    const quantity = 10;
    const prompt = `Generate a simple array that contains ${quantity} ${fieldName}. Use this as an example template for the response: ['a', 'b', 'c']. The response should be a valid JSON array. Repeat a value multiple times if needed.`;
    await openai
      .createCompletion({
        model: "text-davinci-003",
        temperature: 0,
        prompt: prompt,
        max_tokens: 256,
      })
      .then((response) => {
        if (response.data.choices[0].text) {
          const openAISelection = response.data.choices[0].text;
          // ensure correct quotes are used
          const cleanedData = JSON.parse(openAISelection.replaceAll("'", '"'));

          // ensure it is of type array and that array contains the correct quantity
          if (!Array.isArray(cleanedData) || cleanedData.length !== quantity) {
            console.log("OpenAI returned an invalid length");
            throw new Error("OpenAI returned an invalid length or quantity");
          }
          return res.status(200).json(cleanedData);
        } else {
          console.log("OpenAI returned an invalid type");
          return res.status(500).json({ message: "Error generating data." });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json([]);
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Invalid request" });
  }
}
