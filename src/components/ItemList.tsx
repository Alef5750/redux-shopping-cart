import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Item } from "./Item";

export const ItemList = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div>
      <h1>Items:</h1>
      {items.map((i, idx) => (
        <Item key={idx} item={i} />
      ))}
    </div>
  );
};
