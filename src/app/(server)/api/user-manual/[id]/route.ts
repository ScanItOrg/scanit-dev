import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const userManualId = parseInt(id, 10);

  if (isNaN(userManualId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const company = await prisma.userManual.findUnique({
      where: { id: userManualId },
      include: { product: true },
    });

    if (!company) {
      return NextResponse.json(
        { error: "User Manual not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
