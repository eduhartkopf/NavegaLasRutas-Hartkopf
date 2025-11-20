import "./CartWidget.css";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { dark } = useContext(ThemeContext);

  return (
    <Link to="/cart" className={`cart-wrapper ${dark ? "dark" : "light"}`}>
      <ShoppingCart />
    </Link>
  );
}

export default CartWidget;
