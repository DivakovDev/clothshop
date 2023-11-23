'use client';
import React, { useState, useEffect } from 'react';
import VariantSelector from "@/components/VariantSelector";
import Image from "next/image";

import { ProductData } from '@/types';

export default function Product({ params }: any) {
  const [productData, setProductData] = useState<ProductData | null>(null); // State for storing product data
  const [showAllImages, setShowAllImages] = useState(false); // State for controlling image display

  useEffect(() => {
    const fetchProductData = async () => {
      const responseData = await fetch(
        `https://www.tenthousand.cc/products/${params.handle}.json`
      );
      const data = await responseData.json();
      setProductData(data); // Update the state with fetched data
    };

    fetchProductData();
  }, [params.handle]); // Dependency array, ensures the effect runs only when params.handle changes

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages); // Toggle the state to show/hide images
  };

  if (!productData) {
    return <div>Loading...</div>; // Display a loading message or spinner while data is being fetched
  }

  return (
    <div className="bg-wite">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {productData.product.title}
            </h1>
          </div>
          <VariantSelector product={productData} />
        </div>
  <div className="flex flex-col-reverse">
  {/* Image selector */}
  <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
    <div
      className="grid grid-cols-4 gap-6"
      aria-orientation="horizontal"
      role="tablist"
    >
      <button
        id="tabs-1-tab-1"
        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
        aria-controls="tabs-1-panel-1"
        role="tab"
        type="button"
      >
        <span className="sr-only"> Angled view </span>
        <span className="absolute inset-0 rounded-md overflow-hidden">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
            width={640}
            height={537}
          />
        </span>
        {/* Selected: "ring-indigo-500", Not Selected: "ring-transparent" */}
        <span
          className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
          aria-hidden="true"
        />
      </button>
      {/* More images... */}
    </div>
  </div>
  <div className="w-full aspect-w-1 aspect-h-1">
    {/* Tab panel, show/hide based on tab state. */}
    <div
      id="tabs-1-panel-1"
      aria-labelledby="tabs-1-tab-1"
      role="tabpanel"
      tabIndex={0}
    >
      <Image
        src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
        alt="Angled front view with bag zipped and handles upright."
        className="w-full h-full object-center object-cover sm:rounded-lg"
        width={640}
            height={537}
      />
    </div>
    {/* More images... */}
  </div>

      </div>
    </div>
    </div>
  );
}
