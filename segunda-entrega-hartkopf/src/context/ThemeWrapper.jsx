import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return children;
}

export default ThemeWrapper;
