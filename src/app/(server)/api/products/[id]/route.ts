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
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    const userManual = await prisma.userManual.findFirst({
      where: { product_id: productId, language: "en" },
      include: {
        sections: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!userManual) {
      return NextResponse.json({ error: "Manual not found" }, { status: 404 });
    }
    // const section = await prisma.manualSection.findMany({
    //   where: { manual_id: userManual?.id },
    // });

    // if (!section) {
    //   return NextResponse.json({ error: "Manual not found" }, { status: 404 });
    // }

    return NextResponse.json({ product, userManual });
  } catch (error) {
    return NextResponse.json(
      { error: `SERVER ERROR: ${error}` },
      { status: 500 }
    );
  }
}
