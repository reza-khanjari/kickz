import { supabase } from '@/supabase/supabase'

async function createFavApi(data:{ user_id: string; product_id: number }) {
   const {error} = await supabase.from("favourites").insert(data)
   if (error) {
    throw new Error(error.message);
    
   }
}

export default createFavApi