import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ViewCart } from "./components/ViewCart";
import { CartContext } from "./components/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<ViewCart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
