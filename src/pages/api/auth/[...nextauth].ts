/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { prisma } from "../../../utilities/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkPassword } from "../../../utilities/hash";

export const authOptions: NextAuthOptions = {
  providers: [
    // Azure AD B2C Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // fetch user from database here
        const user = await prisma.user.findUnique({
          where: { email: credentials.username.toLowerCase() },
        });
        // validate the users credentials
        if (user && checkPassword(credentials.password, user.password)) {
          // return user object
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.username.toLowerCase(),
            },
          });
          console.log({ user });
          return user;
        } else {
          console.log(`Incorrect password!`);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      // initial sign in
      if (!token.surname && user?.lastName) {
        token.firstName = user?.firstName;
        token.lastName = user?.lastName;
        token.userId = user.id;
        return token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Here we can add items from the token to the session
      session.user.id = token.userId;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      return session;
    },
  },
  events: {},
  debug: false,
};

export default NextAuth(authOptions);
