import { useAppDispath, useAppSelector } from "@/app/hooks";
import Heading from "@/ui/Heading";
import { clearCart, selectCartTotalAmount, type CartItem } from "../cart/cartSlice";
import Button from "@/ui/Button";
import useCreateOrder from "../orders/useCreateOrder";

function OrderSummary({ orderItems }:{orderItems:CartItem[]}) {
  const subTotal = useAppSelector(selectCartTotalAmount);
  const dispatch = useAppDispath();
  let shipping = subTotal / 100;
  shipping = shipping > 15 ? 15 : shipping;
  const totalAmount = subTotal + shipping;
  const { onCreateOrder, isPending } = useCreateOrder({
    orderItems,
    totalAmount,
  });
  const onCheckout = () => {
    onCreateOrder();
    dispatch(clearCart());
  };
  if (subTotal === 0) {
    return;
  }
  return (
    <div className="max-h-max rounded-lg border border-gray-600/15 bg-[#fdfdfd] shadow-[0px_0px_5px_rgba(0,0,0,0.075)] lg:basis-3/10">
      <div className="flex flex-col px-12 py-12">
        <Heading className="mb-12 text-center font-bold" level="h2">
          Order Summary
        </Heading>
        <div>
          <div className="mb-4 flex items-center justify-between text-lg font-semibold capitalize">
            <span>subtotal</span>
            <span>{subTotal}$</span>
          </div>
          <div className="mb-6 flex items-center justify-between text-lg font-semibold capitalize">
            <span>shipping</span>
            <span>{shipping}$</span>
          </div>
          <div className="flex items-center justify-between border-t-2 border-t-black/80 pt-6 text-2xl font-bold">
            <span>Total</span>
            <span>{totalAmount}$</span>
          </div>
        </div>
        <div className="flex-center mt-16 w-full">
          <Button className="py-4" onClick={onCheckout} disabled={isPending}>
            { isPending ? "Pending" : "checkout"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
