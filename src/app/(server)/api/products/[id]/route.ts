import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const company = await prisma.product.findUnique({
      where: { id: productId },
      include: { manuals: true },
    });

    if (!company) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
