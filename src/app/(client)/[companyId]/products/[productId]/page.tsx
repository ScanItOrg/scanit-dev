import Info from "@/components/pages/product/Info";
import Header from "@/components/pages/product/header";
import Seemore from "@/components/pages/product/seemore";

export const metadata = {
    title: "Product",
    description: "Product"
}

type ProductData = {
  id: number;
  name: string;
  model_no: string;
  category: string;
  release_at: string;
  description: string;
};

type Media = {
  id: number;
  url: string;
  caption: string;
  is_main: "Y" | "N";
  type: string;
};

async function getProductData(companyId: string, productId: string): Promise<{ product: ProductData[]; media: Media[] }> {
  const API_URL = process.env.API_URL;
  if (!API_URL) throw new Error("Missing API_URL");

  const res = await fetch(`${API_URL}/api/companies/${companyId}/products/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}



export default async function Product({
  params,
}: {
  params: { companyId: string, productId: string };
}) {

  const { companyId, productId } = params;
  const { product, media } = await getProductData(companyId, productId);

  console.log(product, media)

  return (
    <>      
      <Header media={media}/>
      <Info product={product}/>
      <Seemore/>
    </>
  );
}
