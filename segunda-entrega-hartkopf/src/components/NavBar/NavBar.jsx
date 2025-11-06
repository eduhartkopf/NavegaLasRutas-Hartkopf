import "./NavBar.css";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <nav>
      <h1>Ramp & Roll</h1>
      <ul>
        <li>Categorias</li>
        <li>Contacto</li>
      </ul>
      <Cart />
    </nav>
  );
};

export default NavBar;
