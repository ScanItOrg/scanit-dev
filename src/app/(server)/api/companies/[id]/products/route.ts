import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const {id} = await params
  const companyId = Number(id);
  if (isNaN(companyId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  const products = await prisma.product.findMany({
    where: { company_id: companyId },
    select: {
      id: true,
      name: true,
      category: true,
      description: true,
    }
  });

  return NextResponse.json(products);
}
