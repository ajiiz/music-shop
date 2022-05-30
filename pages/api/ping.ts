import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";

export const ping: NextApiHandler = async (req, res) => {
  const prisma = new PrismaClient();

  const isUsers = await prisma.user.findMany();
  if (!isUsers) {
    res.statusMessage = `Could not fetch users!`;
    res.status(422).end();
    return;
  }

  console.log("Pinged successfully!");

  prisma.$disconnect();
  res.statusMessage = `Pinged successfully`;
  res.status(200).end();
  return;
};

export default ping;
