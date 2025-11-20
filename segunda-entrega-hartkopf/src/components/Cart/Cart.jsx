import "./Cart.css";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Cart() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`cart-wrapper ${dark ? "dark" : "light"}`}>
      <ShoppingCart />
    </div>
  );
}

export default Cart;
