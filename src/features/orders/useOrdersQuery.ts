import { useQuery } from "@tanstack/react-query";
import { useUser } from "../auth/useAuth";
import { getOrders } from "./getOrders";
import toast from "react-hot-toast";

function useOrdersQuery() {
  const { user } = useUser();
  const userId = user?.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => {
      if (!userId) {
        throw new Error("User must be logged in to place an order.");
      }
    return  getOrders(userId);
    },
    enabled: !!userId,
  });
  if (error) {
    toast.error(error.message);
  }
  return { data, isLoading };
}

export default useOrdersQuery;
