import NextAuth from "next-auth";
import { prisma } from "../../../src/utilities/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import sha256 from "crypto";

export default NextAuth({
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

      async authorize(credentials, req) {
        // fetch user from database here
        const user = await prisma.user.findUnique({
          where: { email: credentials.username.toLowerCase() },
          include: {
            UserOrganization: true,
          },
        });
        // validate the users credentials
        if (user && sha256(credentials.password).toString() === user.password) {
          // return user object
          const userOrg = await prisma.userOrganization.findFirst({
            where: {
              User: {
                email: credentials.username.toLowerCase(),
              },
            },
            include: {
              User: true,
              Organization: true,
            },
            orderBy: {
              last_login: "desc",
            },
          });

          // update last login
          await prisma.userOrganization.update({
            where: {
              id: userOrg.id,
            },
            data: {
              last_login: new Date(),
            },
          });

          return userOrg;
        } else {
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
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // initial sign in
      if (!token.surname && user.User.last_name) {
        token.name = user.User.first_name;
        token.surname = user.User.last_name;
        token.role = user.role;
        token.userOrgId = user.id;
        token.userId = user.User.id;
        token.orgId = user.Organization.id;
        return token;
      }
      return token;
    },
    async session({ session, token }) {
      // Here we can add items from the token to the session
      session.user.id = token?.userId;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.surname = token.surname;
      session.user.userOrgId = token.userOrgId;
      session.user.orgId = token.orgId;
      return session;
    },
  },
  events: {},
  debug: false,
});
