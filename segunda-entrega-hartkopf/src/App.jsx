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
import Cart from "./Pages/Cart/Cart.jsx";
import CartProvider from "./context/CartContext/CartContext.jsx";
import CartWidget from "./components/CartWidget/CartWidget";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="inicio">
          <BrowserRouter>
            <NavBar />
            <ToastContainer position="top-right" autoClose={1500} />
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
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
