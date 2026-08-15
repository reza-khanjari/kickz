export interface Audience {
  id: number;
  name: string;
}
export interface Brand {
  id: number;
  name: string;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  brand_id: number;
  target_audience: number;
  discount:number
}

export interface ProductVariant {
  id: number;
  product_id: number;
  size: string;
  color: string;
  stock: number;
  created_at: string;
}

export interface Cart {
  id: number;
  user_id: string;
  status: string;
  updated_at: string;
  created_at: string;
}

export interface CartItem {
  id: number;
  variant_id: number;
  cart_id: number;
  quantity: number;
  updated_at: string;
}

export type ProductWithVariants = Product & {
  product_variants: ProductVariant[];
};
export interface ProductFilters {
  audiences: number[];
  brands: number[];
  minPrice?: number;
  maxPrice?: number;
  pageParam:number
  sort:string,
}


export interface Profile {
  id:string
  full_name:string
  phone_number:string
  address:string
  avatar:string
  email:string
  birthday:string
  username:string
  national_code:string
}