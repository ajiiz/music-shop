import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { ProductType } from "redux/basketSlice";
import { PrismaClient } from "@prisma/client";

export type GetProductsResponse = { products: ProductType[] };

export const path = "api/products/getProducts";

export const getProducts: NextApiHandler<GetProductsResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const products = await prisma.product.findMany();
  if (!products) {
    res.statusMessage = `Products could not be fetched`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email }, include: { favourites: true } });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const favouritesIds = user.favourites.map(product => product.id);

  const modifiedProducts = products.map(product => ({ ...product, isFavourite: favouritesIds.includes(product.id) }));

  prisma.$disconnect();

  res.json({ products: modifiedProducts });
};

export default getProducts;
