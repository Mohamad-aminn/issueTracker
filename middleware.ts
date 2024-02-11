import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async (req: NextRequest, res: NextResponse) => {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
};

export const config = {
  matchers: ["/dashboard"],
};
