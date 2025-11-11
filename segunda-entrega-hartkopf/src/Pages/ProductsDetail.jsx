import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import NotFound from "../components/NotFound/NotFound";

function ProductsDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("404 JSON no encontrado");
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === Number(productId));
        setProduct(found || null);
      })
      .catch((err) => {
        console.error(err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <NotFound />;

  return <ItemDetail product={product} />;
}

export default ProductsDetail;
