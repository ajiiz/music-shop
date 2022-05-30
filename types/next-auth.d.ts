// eslint-disable-next-line no-unused-vars
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      /** The user's postal address. */
      role: string;
    } & DefaultSession["user"] &
      DefaultSession["expires"];
  }

  // eslint-disable-next-line no-unused-vars
  interface User extends DefaultUser {
    role: string;
  }
}
