import "../Products/Products.css";
import ItemList from "../../components/ItemList/ItemList";
import NavBar from "../../components/NavBar/NavBar";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Products() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark" : "light"}>
      <NavBar />
      <ItemList />
    </div>
  );
}

export default Products;
