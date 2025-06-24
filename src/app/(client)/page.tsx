import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
    title: "Companies",
    description: "A good company will always be connected to use."
}

type Company = {
  id: number;
  name: string;
  description: string;
  logo_url: string;
};

async function getCompanies(): Promise<Company[]> {
  const API_URL = process.env.API_URL;

  if (!API_URL) throw new Error("Missing API_URL in environment");

  const res = await fetch(`${API_URL}/api/companies`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) throw new Error("Failed to fetch companies");

  return res.json();
}

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {companies.map((company) => (
        <Link key={company.id} href={`/${company.id}`}>
          <Card key={company.id} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>{company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{company.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
