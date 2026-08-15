import { ITEMS_PER_PAGE } from "@/ui/constants";
import { supabase } from "@/supabase/supabase";
import type { ProductFilters } from "@/types/common";
const sortBy:Record<string,string> = {
  'newest': "created_at",
  "price-asc": "price",
  "price-desc": "price",
  "discount": "discount",
};
export async function getAllProducts({
  audiences = [],
  minPrice,
  maxPrice,
  brands = [],
  pageParam = 0,
  sort
}: ProductFilters) {
  const from = pageParam * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;
  let query = supabase.from("products").select("*", { count: "exact" });
  if (audiences && audiences.length > 0)
    query = query.in("target_audience", audiences);
  if (brands && brands.length > 0) query = query.in("brand_id", brands);
  if (minPrice !== undefined) query = query.gte("price", minPrice);
  if (maxPrice !== undefined) query = query.lte("price", maxPrice);
  if (sort !== "")
    query = query.order(sortBy[sort], {
      ascending: sort === "price-asc" ? true : false,
    });
  const { data, error, count } = await query.range(from, to);
  if (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }

  return { data, count };
}