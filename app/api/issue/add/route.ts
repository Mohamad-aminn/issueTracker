import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { addIssueValidation } from "../../validation/issue";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    const res = addIssueValidation.safeParse(data);

    if (res.success) {
      await prisma.issue.create({ data });

      return NextResponse.json({}, { status: 201 });
    } else if (!res.success) {
      return NextResponse.json(res.error.format(), { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
