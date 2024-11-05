import { useState } from "react";
import { ICartItem } from "../types";

interface ItemProps {
  item: ICartItem;
}
export const Item = ({ item }: ItemProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div
      style={{
        backgroundColor: "darkblue",
        color: "white",
        padding: "5px",
        margin: "5px",
      }}
    >
      <h2>{item.name}</h2>
      <button>+</button>
      <button>-</button>
      <span>Quantity: {quantity}</span>
      <p>{item.price} NIS</p>
      <button>Add to cart</button>
    </div>
  );
};
