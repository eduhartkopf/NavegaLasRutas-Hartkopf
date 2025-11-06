import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/category/:categoryId" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
