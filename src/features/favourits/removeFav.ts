import { supabase } from "@/supabase/supabase";

async function removeFav(data:{user_id:string,product_id:number}) {
  const { error } = await supabase
    .from("favourites")
    .delete()
    .eq("user_id", data.user_id)
    .eq("product_id", data.product_id);
  if (error) {
    throw new Error(error.message);
  }
}

export default removeFav;
