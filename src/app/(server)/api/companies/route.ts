import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all companies
export async function GET() {
  const companies = await prisma.company.findMany({
    include: { products: true },
    orderBy: { id: 'asc' },
  });
  return NextResponse.json(companies);
}

// POST create new company
export async function POST(req: Request) {
  const data = await req.json();
  const company = await prisma.company.create({ data });
  return NextResponse.json(company);
}
