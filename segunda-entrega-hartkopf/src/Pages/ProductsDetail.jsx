import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ProductsDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch("/JSON/products.json");
        if (!response.ok) {
          console.error("No se pudo cargar products.json");
          return;
        }

        const data = await response.json();

        const found = data.find((p) => p.id == Number(productId));
        setProduct(found);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      }
    };

    loadProduct();
  }, [productId]);

  if (!product) return <p>Cargando producto...</p>;

  return <ItemDetail product={product} />;
}

export default ProductsDetail;
