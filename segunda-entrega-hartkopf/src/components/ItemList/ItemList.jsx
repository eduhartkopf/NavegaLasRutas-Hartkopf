import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemData = async () => {
      try {
        const response = await fetch("/JSON/products.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error en fetch:", error);
      }
    };

    itemData();
  }, []);

  return (
    <div className="itemList">
      {products.map((product) => (
        <div key={product.id} className="itemCard">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: 120 }}
          />
          <h3>{product.title}</h3>
          <p>{product.short_description}</p>

          {/* El botón te lleva al detalle real */}
          <Link to={`/products/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
