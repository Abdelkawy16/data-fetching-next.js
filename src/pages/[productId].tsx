import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const [product, setProduct] = useState<any>();
  const router = useRouter();
  console.log(router.query);
  const id = router.query.productId as string;
  useEffect(() => {
    getProduct("/api/dumy-data", id).then((data) => setProduct(data));
  }, []);
  return (
    <>
      {product && <h1>{product.title}</h1>}
      {product && <p>{product.description}</p>}
    </>
  );
}

async function getProduct(url: string, id: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.products.find((p: any) => p.id === id);
}
