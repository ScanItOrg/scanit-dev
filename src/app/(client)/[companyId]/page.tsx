// app/companies/[id]/products/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
    title: "Product",
    description: "Product"
}

type Product = {
  id: number;
  name: string;
  description: string;
  logo_url?: string;
};

async function getProductByCompany(companyId: number): Promise<Product[]> {
  const API_URL = process.env.API_URL;

  if (!API_URL) throw new Error("Missing API_URL in environment");

  const res = await fetch(`${API_URL}/api/companies/${companyId}/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export default async function ProductByCompany({
  params,
}: {
  params: { companyId: string };
}) {
  const {companyId} = await params;
  const products = await getProductByCompany(Number(companyId));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-sm:w-full">
      {products.map((product) => (
        <Link key={product.id} href={`${companyId}/products/${product.id}`}>
          <Card key={product.id} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
