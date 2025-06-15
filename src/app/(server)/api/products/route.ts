
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    
    return NextResponse.json(products);
  } catch (error) {
    console.error("[products]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
