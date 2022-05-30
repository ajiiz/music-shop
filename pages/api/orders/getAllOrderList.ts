import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { Order, PrismaClient } from "@prisma/client";

export type GetAllOrderListResponse = { orderList: Order[] };

export const path = "api/orders/getAllOrderList";

export const getAllOrderList: NextApiHandler<GetAllOrderListResponse> = async (req, res) => {
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

  if (user.role !== "admin") {
    res.statusMessage = `User is not authorized`;
    res.status(401).end();
    return;
  }

  const orders = await prisma.order.findMany({});
  if (!orders) {
    res.statusMessage = `Orders could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.json({ orderList: orders });
};

export default getAllOrderList;
