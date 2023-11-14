import VariantSelector from '@/components/VariantSelector';
import Image from 'next/image'

import ProductData from '@/types/index';

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default async function Product({ params }: any) {
  const responseData = await fetch(`https://www.tenthousand.cc/products/${params.handle}.json`)
  const productData: ProductData = await responseData.json()
  
  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      {/* Product details */}
      <div className="lg:max-w-lg lg:self-end">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center text-sm">
                  <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {breadcrumb.name}
                  </a>
                  {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{productData.product.title}</h1>
        </div>
        <VariantSelector product={productData}/>
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

      {/* Product form */}
      <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            Product options
          </h2>

          <form>
            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
            </div>
            <div className="mt-4">
              <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span>What size should I buy?</span>

              </a>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">

                <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  );
}
