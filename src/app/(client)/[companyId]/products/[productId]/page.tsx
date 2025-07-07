import Info from "@/components/pages/product/Info";
import Header from "@/components/pages/product/header";
import Seemore from "@/components/pages/product/seemore";
import { Product as ProductData, Media } from "@/lib/types";

export const metadata = {
    title: "Product",
    description: "Product"
}

async function getProductData(companyId: string, productId: string): Promise<{ product: ProductData; media: Media[] }> {
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

  console.log("product: ", product, "media: ", media)

  return (
    <>      
      <Header media ={media} product={product}/>
      <Info product={product}/>
      <Seemore companyId={companyId}/>
    </>
  );
}
