import "./ItemDetail.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ShoppingBasket } from "lucide-react";

function ItemDetail({ product }) {
  return (
    <div className="itemDetail">
      <img src={product.image} alt={product.title} style={{ maxWidth: 180 }} />
      <h3>{product.title}</h3>
      <p>{product.short_description}</p>
      <div className="price">${(product.price / 100).toFixed(2)}</div>
      <ButtonPrimary>
        Ir al Carrito <ShoppingBasket />
      </ButtonPrimary>
    </div>
  );
}

export default ItemDetail;
