import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemList.css";
import { ShoppingBasket } from "lucide-react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

function ItemList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemData = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error en fetch:", error);
      }
    };
    itemData();
  }, []);

  const filteredProducts = categoryId
    ? products.filter(
        (p) => p.category.toLowerCase() === categoryId.toLowerCase()
      )
    : products;

  return (
    <div className="itemList">
      {filteredProducts.map((product) => (
        <div key={product.id} className="itemCard">
          <img
            className="img-product"
            src={product.image}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <p>{product.short_description}</p>
          <div className="buttons">
            <Link to={`/products/${product.id}`}>
              <ButtonPrimary>Ver Producto</ButtonPrimary>
            </Link>

            <Link to="/cart">
              <ButtonPrimary>
                Agregar al Carrito <ShoppingBasket size={18} />
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
