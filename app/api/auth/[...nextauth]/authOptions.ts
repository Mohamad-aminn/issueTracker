import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Name",
      credentials: {
        email: {
          label: "Email",
          placeholder: "example@gmail.com",
          type: "string",
        },
        password: {
          label: "Password",
          placeholder: "Enter you're password here",
          type: "string",
        },
      },
      async authorize(cred, req) {
        return null;
      },
    }),
  ],
};
