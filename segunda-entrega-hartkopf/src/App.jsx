import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact.jsx";
import Login from "./components/Login/Login";
import ProductsDetail from "./Pages/ProductDetail/ProductsDetail.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext.jsx";
import CartProvider from "./context/CartContext/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonTheme from "./components/ButtonTheme/ButtonTheme";
import NavBar from "./components/NavBar/NavBar";
import { useContext } from "react";

function AppContent() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`app-root ${dark ? "dark" : "light"}`}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/products/:productId" element={<ProductsDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryId" element={<ItemList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
