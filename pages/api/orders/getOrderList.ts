import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { Order, PrismaClient } from "@prisma/client";

export type GetOrderListResponse = { orderList: Order[] };

export const path = "api/orders/getOrderList";

export const getOrderList: NextApiHandler<GetOrderListResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email }, include: { orderList: true } });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  if (!user.orderList) {
    res.statusMessage = `Users order list could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.json({ orderList: user.orderList });
};

export default getOrderList;
