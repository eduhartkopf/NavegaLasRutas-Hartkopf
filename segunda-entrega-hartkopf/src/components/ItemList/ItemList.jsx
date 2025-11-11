import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemList.css";

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
          <Link to={`/products/${product.id}`}>Ver Producto</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
