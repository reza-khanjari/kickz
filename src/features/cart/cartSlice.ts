import type { RootState } from "@/app/store";
import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface CartItem {
  variantId: number;
  productId: number;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  color:string
  size:string
}

interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
   
      const existingItem = state.items.find(
        (item) => item.variantId === action.payload.variantId,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const variantId = action.payload;
      const existingItem = state.items.find(
        (item) => item.variantId === variantId,
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.variantId !== variantId,
          );
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const variantId = action.payload;
      state.items = state.items.filter((item) => item.variantId !== variantId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
const selectCartState = (state: RootState) => state.cart;
export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart.items,
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items: CartItem[]) =>
    items.reduce((count, item) => count + item.quantity, 0),
);
export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (items: CartItem[]) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0),
);

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
