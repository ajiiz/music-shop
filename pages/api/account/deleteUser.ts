import { PrismaClient, User } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type DeleteUserRequest = { user: User };

export const path = "api/account/deleteUser";

export const deleteUser: NextApiHandler<DeleteUserRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const requestedData = req.body as DeleteUserRequest;

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  if (requestedData.user.email === session.user.email) {
    res.statusMessage = `You cannot delete your account`;
    res.status(401).end();
    return;
  }

  if (!requestedData.user) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const deletedUser = await prisma.user.delete({ where: { email: requestedData.user.email } });
  if (!deletedUser) {
    res.statusMessage = `User could not be deleted`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
  return;
};

export default deleteUser;
