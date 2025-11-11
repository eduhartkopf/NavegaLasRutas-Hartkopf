import "./NavBar.css";
import Cart from "../Cart/Cart";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import React, { useState } from "react";
import { Key } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Skate", "Longboard", "Rollers"];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
    setIsOpen(false);
  };

  return (
    <nav className="inicio">
      <div className="left-block">
        <img
          className="logo"
          alt="logo"
          src="../../../images/Items/logoSkateProyectoreact.png"
        />
        <h1 className="h1">Ramp & Roll</h1>
        <ul className="NavBar">
          <li
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Categorías
            {isOpen && (
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="dropdown-item"
                  >
                    {cat}
                  </li>
                ))}
                
                <li
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                >
                  Home
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact">Contactos</NavLink>
          </li>

          <ButtonPrimary className="login-button">
            Login <Key />
          </ButtonPrimary>
        </ul>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
