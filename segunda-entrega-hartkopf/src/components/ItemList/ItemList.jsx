import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemList.css";
import { ShoppingBasket } from "lucide-react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext/CartContext.jsx";
import { toast } from "react-toastify";
import ItemCounter from "../ItemCounter/ItemCounter.jsx";
import { app } from "../../firebase.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function ItemList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { theme } = useContext(ThemeContext);
  const { addCartProduct } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "Items");
        const snapshot = await getDocs(itemsCollection);

        const itemsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(itemsList);
      } catch (error) {
        console.error("Error al obtener items:", error);
      }
    };

    fetchItems();
  }, []);

  const filteredProducts = categoryId
    ? products.filter(
        (p) => p.category.toLowerCase() === categoryId.toLowerCase()
      )
    : products;

  const handleAddCart = (product) => {
    const selectedQuantity = quantities[product.id] || 1;

    addCartProduct({ ...product, quantity: selectedQuantity });

    toast.success(
      `Producto "${product.title}" agregado al carrito ×${selectedQuantity} 🛒✨`,
      {
        position: "top-right",
        autoClose: 1500,
      }
    );
  };

  return (
    <div className={`itemList ${theme}`}>
      {filteredProducts.map((product) => (
        <div key={product.id} className="itemCard">
          <img className="img-product" src={product.img} alt={product.title} />

          <h3>{product.title}</h3>
          <p>{product.short_description}</p>

          <p className="price">${product.price}</p>

          <ItemCounter
            stock={product.stock}
            className="counter-card"
            onChange={(value) => handleQuantityChange(product.id, value)}
          />

          <div className="buttons">
            <Link to={`/products/${product.id}`}>
              <ButtonPrimary>Ver Producto</ButtonPrimary>
            </Link>

            <ButtonPrimary onClick={() => handleAddCart(product)}>
              Agregar al Carrito <ShoppingBasket size={18} />
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
