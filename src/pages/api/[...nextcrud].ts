import type { NextApiRequest, NextApiResponse } from "next";
import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { prisma } from "../../utilities/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: prisma,
    }),
  });
  return nextCrudHandler(req, res);
};
export default handler;
