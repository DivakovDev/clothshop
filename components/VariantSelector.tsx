"use client"
import { useState, useEffect } from "react";

const VariantSelector = (props: any) => {
    const product = props.product.product;
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

    return(
        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>
{/* Create Variant swatches on different types */}
{/* add also a quantity counter */}
          <div className="flex items-center">
            <p className="text-lg text-gray-900 sm:text-xl">${selectedVariant.price}</p>

            <div className="ml-4 pl-4 border-l border-gray-300">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating, index) => (
                      <p key={index}> * </p>
                    ))}
                  </div>
                </div>
                {/* <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p> */}
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500"> {product.body_html.replace(/(<([^>]+)>)/gi, "")} </p>
          </div>

          <div className="mt-6 flex items-center">
            <p className="ml-2 text-sm text-gray-500">{selectedVariant.available ? "In stock and ready to ship" : "Out of stock"}</p>
          </div>
        </section>
    )
}

export default VariantSelector;