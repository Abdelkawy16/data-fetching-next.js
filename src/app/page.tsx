"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(__dirname);
      const data = await fetchData("/api/dumy-data");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}><Link href={`/${product.id}`}> {product.title}</Link></li>
        ))}
      </ul>
    </>
  );
}

async function fetchData(url: string) {
  const res = await fetch(url, { next: { revalidate: 1 } });
  return res.json();
}

type Product = {
  id: string;
  title: string;
  description: string;
};
