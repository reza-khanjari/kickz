import { supabase } from "@/supabase/supabase";
import type { ProductWithVariants } from "@/types/common";


export async function getProduct(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select("*,product_variants(*)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }
  return data as ProductWithVariants;
}
