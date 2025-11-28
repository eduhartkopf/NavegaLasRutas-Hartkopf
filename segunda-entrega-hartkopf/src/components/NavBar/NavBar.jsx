import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import React, { useState } from "react";
import { Key } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../../context/UserContext.jsx";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const categories = ["Skate", "Longboard", "Rollers"];
  const auth = getAuth();
  const navigate = useNavigate();

  // 👇 agregás user acá
  const { user, deleteUser } = useContext(UserContext);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
    setIsOpen(false);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        deleteUser();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <nav className={`inicio ${theme}`}>
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
                  className="dropdown-item back-home"
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                >
                  ← Volver al inicio
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact">Contactos</NavLink>
          </li>

          <ButtonTheme changeTheme={changeTheme} dark={theme} />

          {user?.email ? (
            <button onClick={handleLogOut} className="logout-button">
              Salir
            </button>
          ) : (
            <ButtonPrimary onClick={handleLogIn} className="login-button">
              Login <Key />
            </ButtonPrimary>
          )}
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
