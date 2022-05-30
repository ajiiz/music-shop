import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient, User } from "@prisma/client";

export type GetUsersResponse = { users: User[] };

export const path = "api/account/getUsers";

export const getUsers: NextApiHandler<GetUsersResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const fetchedUser = await prisma.user.findFirst({ where: { email: session.user.email } });
  if (!fetchedUser) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  if (fetchedUser.role !== "admin") {
    res.statusMessage = `User role is not admin`;
    res.status(401).end();
    return;
  }

  const users = await prisma.user.findMany({});
  const filteredUsers = users.map(user => ({ ...user, password: "" })).sort((a, b) => a.email.localeCompare(b.email));

  prisma.$disconnect();

  res.json({ users: filteredUsers });
};

export default getUsers;
