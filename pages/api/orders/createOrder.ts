import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { ProductType } from "redux/basketSlice";

export type CreateOrderRequest = { products: ProductType[] };

export const path = "api/orders/createOrder";

export const createOrder: NextApiHandler<CreateOrderRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const requestBody = req.body.params as CreateOrderRequest;
  if (!requestBody.products) {
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

  const fullPrice = requestBody.products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);

  const newOrder = await prisma.order.create({
    data: {
      fullPrice: fullPrice,
      productsData: JSON.stringify(requestBody.products),
      user: {
        connect: {
          id: user.id
        }
      }
    }
  });

  if (!newOrder) {
    res.statusMessage = `Couldnt create new products order`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
  return;
};

export default createOrder;
