import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  type CartItem,
} from "./cartSlice";
import { useAppDispath } from "@/app/hooks";
import { colors } from "@/ui/constants";

function CartCardItem({ item }: { item: CartItem }) {
  const totalPriceItem = item.price * item.quantity;
  const dispatch = useAppDispath();
  const handleIncrease = (item: CartItem) => {
    dispatch(addToCart(item));
  };
  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex w-full items-center border-t border-b px-8 py-6 md:max-w-8/10">
      <div className="shadow-bottom flex aspect-square w-full max-w-36 items-center overflow-hidden rounded-md">
        <img
          className="aspect-square w-full"
          src={item.imageUrl}
          alt={String(item.productId)}
        />
      </div>

      <div className="flex w-full flex-col justify-between px-4 py-2 md:flex-row md:px-8">
        <div className="">
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="text-black/70 font-medium">Size {item?.size}</p>
          <p className="text-lg font-bold">Price {item.price}$</p>
          <p className="text-black/70 font-medium">Total {totalPriceItem}$</p>
          <div
            style={{ backgroundColor: colors[item.color?.toLowerCase()] }}
            className={`shadow-bottom my-4 size-6 cursor-pointer rounded-full border`}
          ></div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex-center shadow-bottom h-10 items-center gap-x-6 rounded-xl bg-white px-4">
            <button
              onClick={() => handleDecrease(item.variantId)}
              className="flex-center h-full cursor-pointer bg-white leading-0"
            >
              <FaMinus />
            </button>
            <div className="flex-center h-full cursor-pointer bg-white leading-0 font-semibold">
              {item.quantity}
            </div>

            <button
              onClick={() => handleIncrease(item)}
              className="flex-center h-full cursor-pointer bg-white leading-0"
            >
              <FaPlus />
            </button>
          </div>

          <button
            className="flex-center shadow-bottom size-10 cursor-pointer rounded-xl bg-white leading-0 font-semibold"
            onClick={() => handleRemove(item.variantId)}
          >
            <FaTrash className="text-black-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCardItem;
