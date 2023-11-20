import { ProdHero } from "@/components";
import VariantSelector from "@/components/VariantSelector";
import { Collections, PagesData, ProductListData } from "@/types";
import Image from "next/image";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

export default async function Collection ({ params }: { params: { handle: string } }){
  const responseData = await fetch(
    "https://www.tenthousand.cc/products.json?limit=8"
  );
  const productData: ProductListData = await responseData.json();

  console.log(productData.products);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {params.handle}
            </h1>
          </div>
          
        </div>
      </div>
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
    </div>
  );
}
