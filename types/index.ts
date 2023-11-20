import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Product {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: Variant[];
  images: Image[];
  options: Option[];
}

export interface Variant {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: FeaturedImage;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: string | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface FeaturedImage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

export interface Image {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids: number[];
  src: string;
  width: number;
  height: number;
}

export interface Option {
  name: string;
  position: number;
  values: string[];
}

export interface ProductData {
  product: Product;
}

export interface ProductListData {
  products: Product[];
}

export interface PagesData{
  collections: Collections[];
}

export interface Collections {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  updated_at: string;
  image: boolean;
  products_count: number[];
}
