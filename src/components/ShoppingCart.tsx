import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const ShoppingCart = () => {
  const total = useSelector((state: RootState) => state.cart.total);

  return (
    <section
      style={{
        border: "3px solid yellow",
        backgroundColor: "gray",
        color: "lightskyblue",
      }}
    >
      <h1>My Shopping Cart:</h1>
      <h2>TOTAL: {total}</h2>
    </section>
  );
};
