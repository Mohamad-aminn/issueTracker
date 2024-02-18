import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { issueId, email } = body;

    const developer = prisma.user.findUnique({ where: { email } });
    if (!developer) {
      return NextResponse.json(
        { error: "authentication failed!" },
        { status: 400 }
      );
    }

    const issue = await prisma.issue.findFirst({ where: { id: issueId } });

    if (!issue) {
      return NextResponse.json({ error: "issue not found!" }, { status: 404 });
    } else if (issue.status === "IN_PROGRESS") {
      return NextResponse.json(
        { error: "issue already in progress dear developer" },
        { status: 400 }
      );
    } else if (issue.status === "CLOSED") {
      return NextResponse.json(
        { error: "this issue case is CLOSED!" },
        { status: 400 }
      );
    }

    const updatedIssue = await prisma.issue.update({
      where: { id: issueId },
      data: { status: "IN_PROGRESS" },
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
