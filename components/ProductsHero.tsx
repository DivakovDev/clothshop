'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product, ProductListData } from "@/types/index";

export const ProdHero = ({ collectionTitle }: { collectionTitle?: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.tenthousand.cc/products.json?limit=8`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const rawData: ProductListData = await response.json();
        setProducts(rawData.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="mx-auto mb-20 max-w-2xl px-4 py-6 sm:max-w-xl sm:px-6 lg:max-w-7xl lg:px-8">
      {collectionTitle && (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Believe
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {collectionTitle}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Unveil the Exceptional - Where Style Meets Substance.
            </p>
          </div>
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product: any) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={product.images[0].src}
                alt={product.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={"/product/" + product.handle}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {"$" + product.variants[0].price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
