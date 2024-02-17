import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const body = await req.json();

    const issue = await prisma.issue.findFirst({ where: { id: parseInt(id) } });

    if (issue?.status === "CLOSED") {
      return NextResponse.json(
        { error: "issue already CLOSED!" },
        { status: 400 }
      );
    } else if (issue?.status === "OPEN") {
      return NextResponse.json(
        { error: "first accept issue in dashboard then solve it!" },
        { status: 400 }
      );
    }

    await prisma.issue.update({
      where: { id: parseInt(id) },
      data: { status: "CLOSED" },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};
