"use client";
import React, { useState, useEffect } from "react";
import VariantSelector from "@/components/VariantSelector";
import Image from "next/image";

import { ProductData } from "@/types";

export default function Product({ params }: any) {
  const [productData, setProductData] = useState<ProductData | null>(null); // State for storing product data
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => 
    (prevIndex > 0 ? prevIndex - 1 : 0)
    );
  };

  // Function to handle right arrow click
  const goRight = () => {
    if (!productData || productData.product.images.length === 0) {
      // Handle the case when productData is null or the images array is empty
      return;
    }
  
    setCurrentIndex((prevIndex) =>
      prevIndex < productData.product.images.length - 4 ? prevIndex + 1 : 0
    );
  };

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

  if (!productData) {
    return <div>Loading...</div>; // Display a loading message or spinner while data is being fetched
  }

  const displayedImages = productData.product.images.slice(
    currentIndex,
    currentIndex + 4
  );

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
        <div className="flex flex-col">
          {/* Main Image Section */}
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image
              src={productData.product.images[0].src}
              alt="Selected Product Image"
              className="w-full h-full object-center object-cover sm:rounded-lg"
              width={640}
              height={537}
            />
          </div>

           {/* Image selector */}
           <div className="flex flex-row w-full h-28 justify-center items-center mt-10">
          <button className="p-2 w-16 h-full bg-indigo-600 text-white font-bold border rounded-l-lg" onClick={goLeft}>left</button>
          <div className="w-full h-full max-w-2xl mx-auto sm:block lg:max-w-none">
            
            <div className="grid grid-cols-4 grid-rows-1">
              
                {displayedImages.map((image) =>   (
                  <div className="h-28 border-2 border-gray-300" key={image.id}>
                    <Image
                      src={image.src}
                      alt="Selected product variation of Images"
                      className="w-full h-full object-center object-cover"
                      width={640}
                      height={537}
                    />
                  </div>
                ))}
              </div>
  
            </div>
            <button className="p-2 w-16 h-full bg-indigo-600 text-white font-bold rounded-r-lg" onClick={goRight}>right</button>

          </div>
          
        </div>
      </div>
    </div>
  );
}
