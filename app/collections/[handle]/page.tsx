import { Collections, PagesData } from "@/types";
import Image from "next/image";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

export default async function Collection({ params }: any) {
  const responseData = await fetch(
    `https://www.tenthousand.cc/collections/${params.handle}.json`
  );
  const productData: Collections = await responseData.json();

  console.log(productData.title);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {productData.title}
        </h2>
        <div>
            <div key={productData.id} className="group relative">
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={"/collections/" + productData.handle}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {productData.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
