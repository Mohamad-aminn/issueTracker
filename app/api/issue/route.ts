import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const GET = async (req: NextRequest) => {
  try {
    const issues = await prisma.issue.findMany();
    return NextResponse.json(issues, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
