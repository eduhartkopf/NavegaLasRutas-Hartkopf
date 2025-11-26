import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/theme.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import ThemeWrapper from "./context/ThemeWrapper.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ThemeProvider>
  </StrictMode>
);
