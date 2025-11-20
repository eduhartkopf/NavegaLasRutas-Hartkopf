import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { CartContext } from "../../context/CartContext/CartContext.jsx";
import "./Cart.css";

function Cart() {
  const { dark } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error cargando products.json:", error);
      }
    };

    fetchProducts();
  }, []);

  const detailedCart = cart.map((item) => {
    const productInfo = productsData.find((p) => p.id === item.id);
    return productInfo ? { ...productInfo, quantity: item.quantity } : null;
  });

  return (
    <div className={`cart-page ${dark ? "dark" : "light"}`}>
      <h2 className="cart-title">Tu carrito</h2>

      {detailedCart.length === 0 ? (
        <p className="cart-empty">El carrito está vacío.</p>
      ) : (
        <div className="cart-grid">
          {detailedCart.map((item) =>
            item ? (
              <div key={item.id} className="cart-card">
                <img src={item.image} width={80} className="cart-card-img" />
                <p className="cart-card-price">Precio: ${item.price}</p>
                <p className="cart-card-qty">Cantidad: {item.quantity}</p>
                <p className="cart-card-total">
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
