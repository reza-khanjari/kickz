import { useAppSelector } from "@/app/hooks";
import CartCardItem from "@/features/cart/CartCardItem";
import { selectCartItems, type CartItem } from "@/features/cart/cartSlice";
import OrderSummary from "@/features/cart/OrderSummary";
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import { useNavigate } from "react-router";

function Cart() {
  const cartItems: CartItem[] = useAppSelector(selectCartItems);
  const navigate = useNavigate();
  return (
    <div className="px-4 md:px-6 lg:px-16">
      <Heading
        level="h1"
        className="font-montserrat mt-12 mb-16 text-center font-bold"
      >
        Shopping Cart
      </Heading>
      {cartItems.length === 0 && (
        <div className="relative mx-auto w-full max-w-90 overflow-hidden rounded-lg">
          <img
            src="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/empty-basket.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9lbXB0eS1iYXNrZXQucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjQ2MDY5OSwiZXhwIjoxODE3OTk2Njk5fQ.IalJ-8d9gWy84L2UUrSwsSFniDT936OEACjxMsuuRQU"
            alt="empty-basket"
          />
          <div className="absolute bottom-12 left-1/2 w-full -translate-x-1/2 space-y-4 px-8 text-center font-bold">
            <p className="text-2xl">Your cart is empty</p>
            <p className="text-sm text-black/60">
              Looks like you haven't added anything yet
            </p>
            <Button onClick={() => navigate("/products")} className="max-w-52 py-3">
              Start Shopping
            </Button>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="flex w-full flex-col gap-x-12 gap-y-12 lg:flex-row">
          <div className="mx-auto min-h-dvh w-full py-4 lg:basis-7/10">
            <div className="flex flex-col items-center w-full">
              {cartItems.map((item) => (
                <CartCardItem item={item} />
              ))}
            </div>
          </div>
          <OrderSummary orderItems={cartItems} />
        </div>
      )}
    </div>
  );
}

export default Cart;
