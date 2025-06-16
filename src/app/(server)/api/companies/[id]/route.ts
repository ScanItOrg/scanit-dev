import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const companyId = parseInt(id, 10);

  if (isNaN(companyId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      include: { products: true },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
