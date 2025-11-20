import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import NotFound from "./components/NotFound/NotFound";
import "./components/NotFound/NotFound.css";
import Contact from "./Pages/Contact/Contact.jsx";
import Login from "./components/Login/Login";
import ProductsDetail from "./Pages/ProductsDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext.jsx";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  return (
    <div className="inicio">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/products/:productId" element={<ProductsDetail />} />
          <Route path="/category/:categoryId" element={<ItemList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
