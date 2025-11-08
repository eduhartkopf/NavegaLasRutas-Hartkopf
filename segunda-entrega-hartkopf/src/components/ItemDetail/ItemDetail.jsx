import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ShoppingBasket, List } from "lucide-react";
import { Link } from "react-router-dom";

function ItemDetail({ product } = {}) {
  if (!product) {
    return <div className="itemDetail">Producto no seleccionado.</div>;
  }

  console.log("ItemDetail product:", product); // ✅ Fuera del JSX

  return (
    <div className="productDetail">

      <img src={product.image} alt={product.title} style={{ maxWidth: 180 }} />
      <h3>{product.title}</h3>
      <p>{product.short_description}</p>
      <ItemCounter stock={product.stock} /> {/* ✅ Ahora sí se renderiza */}
      <span className="price">${(product.price / 100).toFixed(2)} ARG</span>
      <div>
        <ButtonPrimary>
          Ir al Carrito
          <ShoppingBasket />
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ItemDetail;
