import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "../../../prisma/client";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      authorize: async credentials => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          const user = await prisma.user.findFirst({ where: { email: credentials.email } });

          if (!user) {
            return null;
          }

          if (!user?.email || !user?.password) {
            return null;
          }

          const checkPassword = await compare(credentials.password, user.password);
          if (checkPassword && user.email === credentials.email) {
            return { id: user.id, email: user.email, role: user.role };
          }
        } catch (error) {
          console.error(error);
          return null;
        }

        return null;
      }
    })
  ],
  secret: process.env.SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.picture = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.sub;
        session.user.role = token.picture as string;
      }

      return session;
    }
  },
  session: {
    maxAge: 24 * 60 * 60
  },
  pages: {
    signIn: "/signin"
  }
});
