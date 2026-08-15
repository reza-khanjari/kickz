import { supabase } from "@/supabase/supabase";
import type { UpdateInfo } from "./ProfileUpdateForm";

async function updateProfile(data:Partial<UpdateInfo>,userId:string) {
  const { error } = await supabase.from("profiles").update(data).eq("id",userId);

  if (error) {
    throw new Error(error.message);
  }
}

export default updateProfile;
