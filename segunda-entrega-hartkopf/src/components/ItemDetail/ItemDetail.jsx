import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ShoppingBasket } from "lucide-react";

function ItemDetail({ product } = {}) {
  if (!product) {
    return <div className="itemDetail__empty">Producto no seleccionado.</div>;
  }

  return (
    <div className="itemDetail__container">
      <div className="itemDetail__card">
        <img
          src={product.image}
          alt={`Imagen de ${product.title}`}
          className="itemDetail__image"
        />

        <h2 className="itemDetail__title">{product.title}</h2>

        <p className="itemDetail__description">{product.long_description}</p>

        <div className="itemDetail__counter">
          <ItemCounter stock={product.stock} />
        </div>

        <span className="itemDetail__price">
          ${(product.price / 100).toFixed(2)} ARG
        </span>

        <div className="itemDetail__actions">
          <ButtonPrimary>
            Agregar al Carrito <ShoppingBasket size={20} />
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
