import "../Products/Products.css";
import ItemList from "../../components/ItemList/ItemList";
import NavBar from "../../components/NavBar/NavBar";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Products() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`products-page ${dark ? "dark" : "light"}`}>
      <NavBar />

      <main className="products-container">
        <ItemList />
      </main>
    </div>
  );
}

export default Products;
