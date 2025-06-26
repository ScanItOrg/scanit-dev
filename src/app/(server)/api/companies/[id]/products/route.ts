import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const companyId = Number(id);

  if (isNaN(companyId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const productsWithMedia = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.name,
      p.category,
      p.model_no,
      p.release_at,
      p.description,
      COALESCE(
        json_agg(
          json_build_object(
            'id', m.id,
            'type', m.type,
            'url', m.url,
            'caption', m.caption,
            'created_at', m.created_at,
            'updated_at', m.updated_at
          )
        ) FILTER (WHERE m.id IS NOT NULL),
        '[]'
      ) AS media
    FROM Product p
    LEFT JOIN Media m 
      ON m.owner_id = p.id AND m.owner_type = 'PRODUCT'
    WHERE p.company_id = ${companyId}
    GROUP BY p.id
  `;

  return NextResponse.json(productsWithMedia);
}
