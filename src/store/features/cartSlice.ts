import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddItemToCartPayload, ICartItem } from "../../types";

const initialItems: ICartItem[] = [
  { id: 1, name: "Baseball Cap", price: 35, quantity: 0 },
  { id: 2, name: "iPod", price: 300, quantity: 0 },
  { id: 3, name: "Sweater Vest", price: 45, quantity: 0 },
  { id: 4, name: "Lenovo Laptop", price: 2490, quantity: 0 },
];

interface CartState {
  items: ICartItem[];
  total: number;
}
const initialState: CartState = {
  items: initialItems,
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateItemQuantity: (
      state,
      action: PayloadAction<IAddItemToCartPayload>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { updateItemQuantity } = CartSlice.actions; // for the components
export default CartSlice.reducer; // for the store
