import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ItemDetail({ product } = {}) {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);

  const goHome = () => {
    navigate("/");
  };

  if (!product) {
    return <div className="itemDetail__empty">Producto no seleccionado.</div>;
  }

  return (
    <div className={`itemDetail__container ${dark ? "dark" : "light"}`}>
      <div>
        <img
          src={product.image}
          alt={`Imagen de ${product.title}`}
          className="itemDetail__image"
        />

        <h2 className={`itemDetail__title ${dark ? "dark" : "light"}`}>
          {product.title}
        </h2>

        <p className={`itemDetail__description ${dark ? "dark" : "light"}`}>
          {product.long_description}
        </p>

        <div className="itemDetail__counter">
          <ItemCounter stock={product.stock} />
        </div>

        <span className={`itemDetail__price ${dark ? "dark" : "light"}`}>
          ${(product.price / 100).toFixed(2)} ARG
        </span>

        <div className="itemDetail__actions">
          <ButtonPrimary>
            Agregar al Carrito <ShoppingBasket size={20} />
          </ButtonPrimary>
        </div>

        <button className="backButton" onClick={goHome}>
          ← Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
