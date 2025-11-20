import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function CartDetail() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : "light"}>
      <p>Carrito</p>
    </div>
  );
}

export default CartDetail;
