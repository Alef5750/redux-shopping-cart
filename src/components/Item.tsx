import { useState } from "react";
import { IAddItemToCartPayload, ICartItem } from "../types";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../store/features/cartSlice";

interface ItemProps {
  item: ICartItem;
}
const styleObj = {
  backgroundColor: "darkblue",
  color: "white",
  padding: "5px",
  margin: "5px",
};

export const Item = ({ item }: ItemProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const change = e.currentTarget.textContent === "+" ? 1 : -1;
    setQuantity((prev) => Math.max(prev + change, 0));
  };
  const dispatch = useDispatch();

  const handleAddToCart = (itemToAdd: IAddItemToCartPayload) => {
    dispatch(updateItemQuantity(itemToAdd));
  };

  return (
    <div style={styleObj}>
      <h2>{item.name}</h2>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>-</button>
      <div>
        How many would you like to add to your cart?:{" "}
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>{quantity}</span>
      </div>
      <p>{item.price} NIS</p>
      <button onClick={() => handleAddToCart({ id: item.id, quantity })}>
        Add to cart
      </button>
    </div>
  );
};
