import { useMutation } from "@tanstack/react-query";
import { type CartItem } from "../cart/cartSlice";
import createOrder from "./createOrder";
import toast from "react-hot-toast";
import { useUser } from "../auth/useAuth";
export interface CreateOrderInput {
  userId: string;
  orderItems: CartItem[];
  totalAmount: number;
}

function useCreateOrder({
  orderItems,
  totalAmount,
}: Omit<CreateOrderInput, "userId">) {
  const { user } = useUser();
  const userId = user?.id;

  const { mutate: onCreateOrder, isPending } = useMutation({
    mutationKey: ["create-order"],
    mutationFn: () => {
      if (!userId) {
        throw new Error("User must be logged in to place an order.");
      }
      const orderData: CreateOrderInput = {
        userId,
        totalAmount,
        orderItems,
      };
      return createOrder(orderData);
    },

    onSuccess: () => {
      toast.success("Order Confirmed");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { onCreateOrder,isPending  };
}

export default useCreateOrder;
