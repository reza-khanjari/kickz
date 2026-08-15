import { supabase } from "@/supabase/supabase"


async function getFavApi(userId:string) {
    const {data,error} = await supabase.from("favourites").select("*,products(*)").eq("user_id",userId)
    if (error) {
        throw new Error(error.message);
    }
    return data 
}

export default getFavApi