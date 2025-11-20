import { useState } from "react";

export default function useCounter({ initial = 1, stock }) {
  const [counter, setCounter] = useState(initial);
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

  return [counter, less, add];
}
