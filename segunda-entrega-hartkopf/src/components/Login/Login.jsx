import React, { useContext } from "react";
import "./Login.css";
import { ThemeContext } from "../../context/ThemeContext";

function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`login-page ${theme}`}>
      <h2>Login</h2>
      <p>Página de inicio de sesión (placeholder)</p>
    </div>
  );
}

export default Login;
