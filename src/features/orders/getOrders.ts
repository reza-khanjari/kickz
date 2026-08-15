import { supabase } from "@/supabase/supabase";

export async function getOrders(id:string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
