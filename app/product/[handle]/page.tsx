'use client';
import React, { useState, useEffect } from 'react';
import VariantSelector from "@/components/VariantSelector";
import Image from "next/image";

export default function Product({ params }: any) {
  const [productData, setProductData] = useState(null); // State for storing product data
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

{/* Main Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src={productData.product.images[0].src}
              alt={productData.product.title}
              className="w-full h-full object-center object-cover"
              width={640}
              height={543}
            />
          </div>
          {/* Additional Product images */}
          <div className="mt-4 grid grid-cols-2 gap-4">
          {productData.product.images.slice(0, showAllImages ? undefined : 3).map((image) => (
            <div key={image.id} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={productData.product.title}
                className="w-full h-full object-center object-cover"
                width={780}
                height={710}
              />
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={toggleShowAllImages}>
          {showAllImages ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </div>
    </div>
  );
}
