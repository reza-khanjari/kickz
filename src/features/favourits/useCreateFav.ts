import { useMutation, useQueryClient } from "@tanstack/react-query";
import createFavApi from "./createFavApi";
import toast from "react-hot-toast";

function useCreateFav() {
  const queryClient = useQueryClient();
  const { mutate: createFav, isPending } = useMutation({
    mutationKey: ["favourites"],
    mutationFn: (data: { user_id: string; product_id: number }) =>
      createFavApi(data),
    onSuccess: () => {
      toast.success("Product added to your favorites.");
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (error) => {
      toast.error("Failed to add to favorites.");
      throw new Error(error.message);
    },
  });

  return { createFav, isPending };
}
export default useCreateFav;
