import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient, User } from "@prisma/client";

export type GetUserResponse = { user: User };

export const path = "api/account/getUser";

export const getUser: NextApiHandler<GetUserResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email } });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.json({ user });
};

export default getUser;
