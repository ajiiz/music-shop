import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

export type AddProductToFavouritesRequest = { productId: string };

export const path = "api/products/addProductToFavourites";

export const addProductToFavourites: NextApiHandler<AddProductToFavouritesRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const requestBody = req.body.params as AddProductToFavouritesRequest;
  if (!requestBody.productId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const product = await prisma.product.findFirst({ where: { id: requestBody.productId } });
  if (!product) {
    res.statusMessage = `Product could not be found`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email }, include: { favourites: true } });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  await prisma.user.update({ where: { email: session.user.email }, data: { favourites: { connect: { id: product.id } } } });

  prisma.$disconnect();

  res.status(200).end();
  return;
};

export default addProductToFavourites;
