import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.product.findMany({
    // include: { company: true, manuals: true },
    select: {
      id: true,
      name: true,
      company: true,
      manuals: true,
      model_no: true,
      release_at: true,
      _count: true,
    },
  });
  return NextResponse.json(products);
}
