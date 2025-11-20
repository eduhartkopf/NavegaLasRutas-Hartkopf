import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemList.css";
import { ShoppingBasket } from "lucide-react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext/CartContext.jsx";

function ItemList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { dark } = useContext(ThemeContext);
  const { addCartProduct } = useContext(CartContext);

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
    <div className={`itemList ${dark ? "dark" : "light"}`}>
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

            <ButtonPrimary
              onClick={() =>
                addCartProduct({
                  ...product,
                  quantity: 1,
                })
              }
            >
              Agregar al Carrito <ShoppingBasket size={18} />
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
