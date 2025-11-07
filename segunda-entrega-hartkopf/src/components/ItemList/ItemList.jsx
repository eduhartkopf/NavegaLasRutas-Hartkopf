import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
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
        <ItemDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
