"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/dummy-backend.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // debugger;
        console.log(data)
        setProducts(data.products);
      });
  }, []);
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

type Product = {
  id: string;
  title: string;
  description: string;
};
