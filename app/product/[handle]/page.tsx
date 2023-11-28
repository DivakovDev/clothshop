"use client";
import React, { useState, useEffect } from "react";
import VariantSelector from "@/components/VariantSelector";
import Image from "next/image";

import { ProductData } from "@/types";

export default function Product({ params }: any) {
  const [productData, setProductData] = useState<ProductData | null>(null); // State for storing product data
  const [currentIndex, setCurrentIndex] = useState(0); // Current main image index
  const [visibleThumbnails, setVisibleThumbnails] = useState<number[]>([]); // Indices of visible thumbnails

  useEffect(() => {
    const fetchProductData = async () => {
      const responseData = await fetch(
        `https://www.tenthousand.cc/products/${params.handle}.json`
      );
      const data = await responseData.json();
      setProductData(data);

      // Initialize visible thumbnails after data is fetched
      const initialThumbnails = data.product.images.slice(0, 4).map((_ : any, index : any) => index);
      setVisibleThumbnails(initialThumbnails);
    };

    fetchProductData();
  }, [params.handle]); // Depend on params.handle

  const goLeft = () => {
    setVisibleThumbnails((prevThumbnails) => {
      const firstIndex = prevThumbnails[0];
      if (firstIndex === 0) return prevThumbnails;
      return prevThumbnails.map((index) => index - 1);
    });
  };

  const goRight = () => {
    setVisibleThumbnails((prevThumbnails) => {
      const lastIndex = prevThumbnails[prevThumbnails.length - 1];
      if (productData && lastIndex === productData.product.images.length - 1) return prevThumbnails;
      return prevThumbnails.map((index) => index + 1);
    });
  };

  const handleThumbnailClick = (thumbnailIndex: number) => {
    // Adjusting to the actual index in product data
    const actualIndex = visibleThumbnails[thumbnailIndex];
    setCurrentIndex(actualIndex);
  };

  const hasMultipleImages = productData
    ? productData.product.images.length > 1
    : false;

  if (!productData) {
    return <div>Loading...</div>;
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

        {/* Main Image Section */}
        <div className="flex flex-col mt-10">
          <div className="w-full border-2 aspect-w-1 aspect-h-1">
            <Image
              src={productData.product.images[currentIndex].src}
              alt="Selected Product Image"
              className="w-full h-full object-center object-cover"
              width={720}
              height={720}
            />
          </div>

          {/* Image selector */}
          <div className="flex flex-row w-full h-28 justify-center items-center">
            {hasMultipleImages && (
              <button
                className="p-2 w-16 h-full bg-blue-600 text-white text-2xl font-extrabold border rounded-bl-lg"
                onClick={goLeft}
              >
                ←
              </button>
            )}

            <div className="w-full h-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 grid-rows-1 gap-1">
                {visibleThumbnails && productData.product.images
                  .filter((_, index) => visibleThumbnails.includes(index))
                  .map((image, index) => (
                    <div
                      className="h-28 border-2 border-gray-300 cursor-pointer"
                      key={image.id}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <Image
                        src={image.src}
                        alt="Product Thumbnail"
                        className="w-full h-full object-center object-cover"
                        width={640}
                        height={537}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {hasMultipleImages && (
              <button
                className="p-2 w-16 h-full bg-blue-600 text-white text-2xl font-extrabold rounded-br-lg"
                onClick={goRight}
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
