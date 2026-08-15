import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useAuth";
import { getProfile } from "./getProfile";
import toast from "react-hot-toast";

function useProfileQuery() {
  const { user } = useUser();
  const userId = user?.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => {
      if (!userId) {
        throw new Error("User must be logged in to place an order.");
      }
      return getProfile(userId);
    },
  });
  if (error) {
    toast.error(error.message);
  }

  return { data, isLoading };
}

export default useProfileQuery;
