import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateInfoUpdate from "./updateProfile";
import toast from "react-hot-toast";
import type { UpdateInfo } from "./ProfileUpdateForm";
import { useUser } from "../auth/useAuth";

function useUpdateProfile() {
  const { user } = useUser();
  const userId = user?.id;
  if (!userId) {
    throw new Error("User Id not found");
  }
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending } = useMutation({
    mutationKey: ["updateProfileInfo", userId],
    mutationFn: (data: Partial<UpdateInfo>) => updateInfoUpdate(data, userId),
    onSuccess: () => {
      toast.success("Informaton Updated");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },

    onError: (error) => {
      toast.error(error.message);
      throw new Error(error.message);
    },
  });

  return { updateInfo, isPending };
}

export default useUpdateProfile;
