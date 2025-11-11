import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Página no encontrada</h2>
      <p>La ruta solicitada no existe.</p>
       <Link to="/" className="btn-home">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
