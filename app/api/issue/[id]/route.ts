import { addIssueSchema } from "@/app/validation/addIssueSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// PUT method to change a issue model
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    console.log(body);

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });
    console.log(issue);

    if (!issue) {
      return NextResponse.json({ error: "no issue found!" }, { status: 404 });
    }

    const validationRes = addIssueSchema.safeParse(body);
    if (!validationRes.success) {
      return NextResponse.json({ error: "validation error!" }, { status: 401 });
    }

    const updateIssue = await prisma.issue.update({
      where: { id: parseInt(params.id) },
      data: body,
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 401 });
  }
};
