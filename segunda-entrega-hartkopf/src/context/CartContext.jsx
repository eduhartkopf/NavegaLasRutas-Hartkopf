import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(
      cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    );
  }, [cart]);

  const addCartProduct = (newProduct) => {
    const productSearched = cart.some(
      (product) => product.id === newProduct.id
    );

    if (productSearched) {
      const updatedCart = cart.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + newProduct.quantity }
          : product
      );

      setCart(updatedCart);
      return;
    }

    setCart([...cart, newProduct]);
  };

  const deleteCartProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, addCartProduct, deleteCartProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
