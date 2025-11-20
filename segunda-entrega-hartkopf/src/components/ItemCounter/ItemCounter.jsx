import "./ItemCounter.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useCounter from "../../hooks/itemCount.jsx";

function ItemCounter({ stock, onChange }) {
  const { dark } = useContext(ThemeContext);

  const [counter, less, add] = useCounter({ initial: 1, stock: stock });

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  return (
    <div className={`item-counter ${dark ? "dark" : "light"}`}>
      <button onClick={less}>-</button>
      <span>{counter}</span>
      <button onClick={add}>+</button>
    </div>
  );
}

export default ItemCounter;
