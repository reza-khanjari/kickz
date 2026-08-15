import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useAuth";
import getFavApi from "./getFavApi";
import toast from "react-hot-toast";

function useFavQuery() {
  const { user } = useUser();
  const userId = user?.id;
 
  const {
    data: favs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favourites", userId],
    queryFn: () => getFavApi(userId!),
    enabled: !!userId,
  });
  if (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
  return { favs, isLoading };
}

export default useFavQuery;
