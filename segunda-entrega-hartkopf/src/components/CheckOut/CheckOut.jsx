import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase.js";
import { toast } from "react-toastify";
import "./CheckOut.css";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);
  const db = getFirestore(app);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      toast.error("Completá todos los campos antes de continuar");
      return;
    }

    if (cart.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      clearCart();

      toast.success("Compra realizada con éxito 🎉");
    } catch (error) {
      console.error("Error al crear la orden:", error);
      toast.error("Hubo un error al procesar tu compra");
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {orderId ? (
        <div className="success">
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu ID de orden es:</p>
          <strong>{orderId}</strong>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              placeholder=""
              value={buyer.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder=""
              value={buyer.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Teléfono
            <input
              type="number"
              name="phone"
              placeholder=""
              value={buyer.phone}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Finalizar Compra</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
