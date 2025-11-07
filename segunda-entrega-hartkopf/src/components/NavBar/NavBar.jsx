import "./NavBar.css";
import Cart from "../Cart/Cart";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import React from "react";
import { Key } from "lucide-react";
const NavBar = () => {
  return (
    <nav>
      <h1>Ramp & Roll</h1>
      <ul>
        <li>Categorias</li>
        <li>Contacto</li>
        <ButtonPrimary>
          Login <Key />
        </ButtonPrimary>
      </ul>
      <Cart />
    </nav>
  );
};

export default NavBar;
