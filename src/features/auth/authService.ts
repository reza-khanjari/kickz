import { supabase } from "@/supabase/supabase";
import type { LoginInput, RegisterInput } from "./authSchema";

const uploadAvatar = async (file: File): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
  const filePath = `avatars/${fileName}`;
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);
  if (uploadError) {
    throw new Error(uploadError.message);
  }
  const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

  return data.publicUrl;
};

export const signupWithEmail = async ({
  username,
  email,
  password,
  avatar,
}: RegisterInput) => {
  let avatarURL: string | null = null;
  if (avatar && avatar.length > 0) {
    const file = avatar[0] as File;
    avatarURL = await uploadAvatar(file);
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: username,
        username: username.toLocaleLowerCase(),
        avatar_url: avatarURL,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  const { error:profileError } = await supabase
    .from("profiles")
    .insert({ id: data!.user!.id, username, avatar: avatarURL, email });
  if (profileError) {
    throw new Error(profileError.message);
  }
  return data;
};

export const signInWithEmail = async ({ email, password }: LoginInput) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const signOutWithEmail = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};
export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    return null;
  }

  return user;
};
