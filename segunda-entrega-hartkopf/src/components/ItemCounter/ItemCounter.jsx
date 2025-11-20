import { useState } from "react";
import "./ItemCounter.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ItemCounter({ stock }) {
  const { dark, changeTheme } = useContext(ThemeContext);

  const [counter, setCounter] = useState(1);

  const less = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className={`item-counter ${dark ? "dark" : "light"}`}>
      <button onClick={less}>-</button>
      <span>{counter}</span>
      <button onClick={add}>+</button>
    </div>
  );
}

export default ItemCounter;
