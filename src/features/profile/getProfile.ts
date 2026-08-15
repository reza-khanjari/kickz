import { supabase } from "@/supabase/supabase";
import type { Profile } from "@/types/common";

export async function getProfile(userId: string) {

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId).single();
  if (error) {
    throw new Error(error.message);
  }

  return data as Profile;
}
