// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";

const example = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Hello Datamaker!" });
};

export default example;