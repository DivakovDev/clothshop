import Image from "next/image";

import { ProductListData } from "@/types/index";

export const ProdHero = async () => {
  const responseData = await fetch(
    "https://www.tenthousand.cc/products.json?limit=8"
  );
  const productData: ProductListData = await responseData.json();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.products.map((product) => (
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
    </div>
  );
};
