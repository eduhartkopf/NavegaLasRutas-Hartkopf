import React from "react";
import "./Login.css";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function Login() {
  const { dark, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`login-page ${dark ? "dark" : "light"}`}>
      <h2>Login</h2>
      <p>Página de inicio de sesión (placeholder)</p>
    </div>
  );
}

export default Login;
