import VariantSelector from "@/components/VariantSelector";
import Image from "next/image";

import ProductData from "@/types/index";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Product({ params }: any) {
  const responseData = await fetch(
    `https://www.tenthousand.cc/products/${params.handle}.json`
  );
  const productData: ProductData = await responseData.json();
  
  return (
    <div className="bg-white">
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

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src={productData.product.images[0].src}
              alt={productData.product.title}
              className="w-full h-full object-center object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
