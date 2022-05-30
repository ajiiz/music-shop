import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient, User } from "@prisma/client";
import { hash } from "bcryptjs";

export type UpdateUserRequest = { user: User };

export const path = "api/account/updateUser";

export const updateUser: NextApiHandler<UpdateUserRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const requestBody = req.body.params as UpdateUserRequest;
  const newUser = requestBody.user;
  if (!newUser) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email } });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const hashedPassword = newUser.password.length > 0 ? await hash(newUser.password, 12) : user.password;
  const newPassword = hashedPassword ? hashedPassword : user.password;

  await prisma.user.update({
    where: { email: newUser.email },
    data: { firstName: newUser.firstName, lastName: newUser.lastName, phoneNumber: newUser.phoneNumber, password: newPassword, role: newUser.role }
  });

  prisma.$disconnect();

  res.status(200).end();
  return;
};

export default updateUser;
