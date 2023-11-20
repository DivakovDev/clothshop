import { ProdHero } from "@/components";
import VariantSelector from "@/components/VariantSelector";
import { Collections, PagesData, ProductListData } from "@/types";
import Image from "next/image";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

export default async function Collection ({ params }: { params: { handle: string } }){
  const responseData = await fetch(
    `https://www.tenthousand.cc/collections/${params.handle}.json`
  );
  const productData: PagesData = await responseData.json();

  console.log(productData.collections);

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
      </div>
    </div>
    </div>
  );
}
