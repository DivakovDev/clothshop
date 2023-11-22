'use client';

import { useEffect, useState } from 'react';
import { ProdHero } from "@/components";
import { PagesData, Product } from "@/types";
import Image from "next/image";

export default function Collection({ params } : any) {
  const [collectionData, setCollectionData] = useState<PagesData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await fetch(
          `https://www.tenthousand.cc/collections/${params.handle}.json`
        );
        if (!response.ok) {
          throw new Error(`Error fetching collection data: ${response.statusText}`);
        }
        const rawData: PagesData = await response.json();
        setCollectionData(rawData);
      } catch (error) {
        console.error("Fetching collection error:", error);
        setError(error);
      }
    };

    const fetchProductsData = async () => {
      try {
        const response = await fetch(`https://www.tenthousand.cc/collections/${params.handle}/products.json`);
        if (!response.ok) {
          throw new Error(`Error fetching products data: ${response.statusText}`);
        }
        const productsData = await response.json();
        console.log(productsData.products);
        setProducts(productsData.products); // Adjust according to the actual structure of your response
      } catch (error) {
        console.error("Fetching products error:", error);
        // Handle error or set error state
      }
    };

    fetchCollectionData();
    fetchProductsData(); // Call this if it's a separate endpoint
  }, [params.handle]);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!collectionData) {
    return <div>Loading...</div>;
  }


  return (
    <div >
      <ProdHero products={products} collectionTitle={collectionData.collection.title} />
    </div>
  );
}
