import { NextAuthOptions } from "next-auth";
import prisma from "@/prisma/client";
import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: "name",
      credentials: {
        email: {
          label: "email",
          placeholder: "emali@gamil.com",
          type: "string",
        },
        password: {
          label: "password",
          placeholder: "Enter password ",
          type: "string",
        },
      },
      async authorize(credentials, req) {
        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
