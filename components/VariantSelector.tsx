"use client";
import { useState, useEffect } from "react";

const VariantSelector = (props: any) => {
  const product = props.product.product;
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.variants[0].option1
  );
  const [selectedSize, setSelectedSize] = useState(product.variants[0].option2);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const variant = product.variants;
  console.log(product.variants);

  const stockMessage =
    selectedVariant.inventory_quantity > 0
      ? selectedVariant.inventory_quantity < 5
        ? "Low in stock"
        : "In stock"
      : "Out of stock";

  // Extract unique colors and sizes
  const uniqueSizes = Array.from(new Set(variant.map((v: any) => v.option2)));
  const availableVariants = variant.filter(
    (v: any) => v.inventory_quantity > 0
  );
  const uniqueColors = Array.from(new Set(availableVariants.map((v: any) => v.option1)));

  // Check if a variant is available based on color and size
  const isVariantAvailable = (color: any, size: any) => {
    return variant.some(
      (v: any) =>
        v.option1 === color && v.option2 === size && v.inventory_quantity > 0
    );
  };

  //Handle quantity change
  const handleQuantityChange = (event: any) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0 && newQuantity <= selectedVariant.inventory_quantity) {
      setSelectedQuantity(newQuantity);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => {
      return prevQuantity < selectedVariant.inventory_quantity
        ? prevQuantity + 1
        : prevQuantity;
    });
  };
  // Decrease quantity
  const decreaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => {
      return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
    });
  };

  // Add to cart function
  const addToCart = () => {
    // Logic to add selectedVariant and selectedQuantity to the cart
    // This might involve updating a global state, calling an API, etc.
    console.log("Added to cart:", selectedVariant, selectedQuantity);
  };

  // Update the selected variant based on color and size
  useEffect(() => {
    const newSelectedVariant = variant.find(
      (v: any) => v.option1 === selectedColor && v.option2 === selectedSize
    );
    if (newSelectedVariant) setSelectedVariant(newSelectedVariant);
  }, [selectedColor, selectedSize, variant]);

  return (
    <section aria-labelledby="information-heading" className="mt-4">
      {/* Variants Swatches */}
      <div>
        {variant ? (
          // If there are variants, display color and size swatches
          <>
            {/* Color Swatches */}
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">Color</h3>
              <div className="flex space-x-2">
                {uniqueColors.slice(0, 6).map((color: any) => (
                  <button
                    key={color}
                    className={`p-2 border ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Swatches */}
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Size</h3>
              <div className="flex space-x-2">
                {uniqueSizes.map((size: any) => (
                  <button
                    key={size}
                    className={`p-2 border ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-gray-300"
                    }
                    ${
                      !isVariantAvailable(selectedColor, size)
                        ? "bg-gray-700 line-through text-red-500"
                        : ""
                    }`}
                    onClick={() =>
                      isVariantAvailable(selectedColor, size) &&
                      setSelectedSize(size)
                    }
                    disabled={!isVariantAvailable(selectedColor, size)}
                  >
                    {size ? size : "Not Available"}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          // If there are no available variants
          <>
            {/* Color Swatches */}
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">Color</h3>
              <div className="flex space-x-2">
              <h3 className="p-2 bg-gray-700 line-through text-red-500">No Colors Availlable</h3> 
              </div>
            </div>

            {/* Size Swatches */}
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Size</h3>
              <div className="flex space-x-2">
                 <h3 className="p-2 bg-gray-700 line-through text-red-500">No Sizes Availlable</h3> 
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center mt-6">
        {/* Product Price */}
        <p className="text-lg text-gray-900 sm:text-xl">
          ${selectedVariant.price}
        </p>
          {/* Product rating Section */}
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
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div className="mt-4 space-y-6">
        <p className="text-base text-gray-500">
          {" "}
          {product.body_html.replace(/(<([^>]+)>)/gi, "")}{" "}
        </p>
      </div>
      {/* Product Stock Message*/}
      <div className="mt-6 flex items-center">
        <p className="ml-2 text-sm text-gray-500">{stockMessage}</p>
      </div>
      {/* Quantity Swatch */}
      <div className="mt-4 flex flex-col items-center justify-center">
        <label
          htmlFor="quantity"
          className="block text-lg text-center mb-4 font-medium text-gray-700"
        >
          Quantity
        </label>
        <div className="flex flex-row w-full items-center justify-center">
          <button
            onClick={decreaseQuantity}
            className="p-1 my-auto h-16 w-16 font-extrabold text-lg border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-100"
          >
            -
          </button>
          <input
            id="quantity"
            name="quantity"
            min="1"
            max={selectedVariant.inventory_quantity}
            value={selectedQuantity}
            onChange={handleQuantityChange}
            className="w-full h-16 text-center border-t border-b border-gray-300"
          />
          <button
            onClick={increaseQuantity}
            className="p-1 my-auto h-16 w-16 font-extrabold text-lg border border-gray-300 rounded-r-md bg-white text-gray-500 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="group text-left inline-flex text-sm text-gray-500 hover:text-gray-700"
          >
            <span>What size should I buy?</span>
          </a>
        </div>
        <button
          onClick={addToCart}
          className="flex mt-6 w-full h-16 bg-blue-600 border border-transparent rounded-md py-2 px-4 items-center justify-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add to Bag
        </button>
      </div>
    </section>
  );
};

export default VariantSelector;
