import "./ItemDetail.css";
import { ShoppingBasket } from "lucide-react";

function ItemDetail() {
  return (
    <div className="itemDetail">
      <h3>titulo producto</h3>
      <p>descripcion del producto</p>
      <button>
        Carrito
        <ShoppingBasket />
      </button>
    </div>
  );
}

export default ItemDetail;
