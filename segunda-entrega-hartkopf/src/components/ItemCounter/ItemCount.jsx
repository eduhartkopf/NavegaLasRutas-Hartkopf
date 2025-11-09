import { useState } from "react";
import "./ItemCounter.css";

function ItemCounter({ stock }) {
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
    <div>
      <button onClick={less}>-</button>
      <span>{counter}</span>
      <button onClick={add}>+</button>
    </div>
  );
}

export default ItemCounter;