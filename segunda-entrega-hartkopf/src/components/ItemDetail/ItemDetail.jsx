import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetail({ product }) {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);
  const { addCartProduct } = useContext(CartContext);
  const [count, setCount] = useState(1);

  if (!product) return <div>Producto no seleccionado.</div>;

  const handleAddCartProduct = () => {
    const newCartProduct = {
      id: product.id,
      quantity: count,
    };

    addCartProduct(newCartProduct);

    toast.success("Producto agregado al carrito 🛒✨", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <div className={`itemDetail__container ${dark ? "dark" : "light"}`}>
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="itemDetail__image"
        />

        <h2 className={`itemDetail__title ${dark ? "dark" : "light"}`}>
          {product.title}
        </h2>

        <p className={`itemDetail__description ${dark ? "dark" : "light"}`}>
          {product.long_description}
        </p>

        <div className="itemDetail__counter">
          <ItemCounter stock={product.stock} onChange={setCount} />
        </div>

        <span className={`itemDetail__price ${dark ? "dark" : "light"}`}>
          ${(product.price / 100).toFixed(2)} ARG
        </span>

        <div className="itemDetail__actions">
          <ButtonPrimary onClick={handleAddCartProduct}>
            Agregar al Carrito <ShoppingBasket size={20} />
          </ButtonPrimary>
        </div>

        <button className="backButton" onClick={() => navigate("/")}>
          ← Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
