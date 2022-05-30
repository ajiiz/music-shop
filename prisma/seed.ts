import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { products, users } from "./databaseData";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  const foundUser = await prisma.user.findFirst({ where: { email: "ajiiz@gmail.com" } });
  if (!foundUser) {
    const hashedPassword = await hash("password", 12);
    for (const user of users) {
      await prisma.user.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: hashedPassword,
          role: user.role
        }
      });
    }

    console.log("Added default user");
  }

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        details: product.details,
        imageSrc: product.imageSrc,
        genre: product.genre,
        price: product.price
      }
    });
  }
  console.log("Added default products");
};

load()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
