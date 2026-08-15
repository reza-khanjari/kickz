import { useMutation, useQueryClient } from "@tanstack/react-query";
import removeFavApi from "./removeFav";
import toast from "react-hot-toast";

function useRemoveFav() {
  const queryClient = useQueryClient();

  const { mutate: removeFav, isPending } = useMutation({
    mutationKey: ["removeFav"],
    mutationFn: (data: { user_id: string; product_id: number }) =>
      removeFavApi(data),
    onSuccess: () => {
      toast.success("Removed from favorites.")
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (error) => {
      toast.error(error.message);
      throw new Error(error.message);
      
    },
  });

  return { removeFav, isPending };
}

export default useRemoveFav;
