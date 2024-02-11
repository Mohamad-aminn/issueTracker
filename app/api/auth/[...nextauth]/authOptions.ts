import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "a name",
      credentials: {
        email: { label: "email", type: "string", placeholder: "email" },
        passowrd: {
          label: "password",
          type: "string",
          placeholder: "رمز کیری",
        },
      },
      async authorize(cred, req) {
        return null;
      },
    }),
  ],
};
