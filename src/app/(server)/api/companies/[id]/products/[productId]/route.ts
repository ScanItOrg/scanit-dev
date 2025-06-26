import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string, productId: string } }) {
  const {id, productId} = await params
  
  const commpanyId = Number(id);
  const pid = Number(productId);

  if (isNaN(companyId)) return NextResponse.json({ error: "Invalid company id" }, { status: 400 });
  if (isNaN(productId)) return NextResponse.json({ error: "Invalid product id" }, { status: 400 });

  const products = await prisma.product.findMany({
    where: { company_id: companyId, id: productId },
    select: {
      id: true,
      name: true,
      model_no: true,
      category: true,
      release_at: true,
      description: true,
    },
  });

  return NextResponse.json(products);
}
