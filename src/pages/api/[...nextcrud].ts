/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from "next";
import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { prisma } from "../../utilities/dbConnect";
import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession as getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: prisma,
    }),
    middlewares: [
      async (ctx: any, next) => {
        const session = await getServerSession(ctx.req, ctx.res, authOptions);
        const fieldToFilterOn = filterOnField(ctx.req);

        let updatedResult = ctx.result;

        if (session) {
          updatedResult = ctx.result.filter((item: any) => {
            return item[fieldToFilterOn] === session.user.id;
          });
          ctx.result = updatedResult;
        } else {
          ctx.result = [];
        }
        next();
      },
    ],
  });
  return nextCrudHandler(req, res);
};
export default handler;

// Add a new check for each new route to filter data appropriately
function filterOnField(req: NextApiRequest) {
  if (req.url) {
    if (req.url.includes("/api/templates")) {
      return "createdBy";
    } else if (req.url.includes("/api/users")) {
      return "id";
    } else {
      return "id";
    }
  } else {
    return "id";
  }
}
