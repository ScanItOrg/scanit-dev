// app/api/companies/route.ts

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prismadb =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb;

export async function GET() {
  try {
    const companies = await prismadb.companies.findMany();

    return NextResponse.json(companies);
  } catch (error) {
    console.error("[COMPANIES_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
