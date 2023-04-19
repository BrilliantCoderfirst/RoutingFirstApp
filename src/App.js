import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import AddToCard from "./pages/AddToCard";
import { createContext } from "react";

const ContextData = createContext();

function App() {
  const [addCard, setAddCard] = useState([]);

  const handleFunction = (product) => {
    const productExist = addCard.find((item) => item.id === product.id);
    if (productExist) {
      setAddCard(
        addCard.map((items) =>
          items.id === product.id
            ? { ...productExist, qnt: productExist.qnt + 1 }
            : items
        )
      );
    } else {
      setAddCard([...addCard, { ...product, qnt: 1 }]);
    }

    alert("Product Add To Card Successfully---!");
  };

  const handleDelete = (product) => {
    const productExit = addCard.find((items) => items.id === product.id);
    if (productExit.qnt === 1) {
      setAddCard(addCard.filter((item) => item.id !== product.id));
    } else {
      setAddCard(
        addCard.map((items) =>
          items.id == product.id
            ? { ...productExit, qnt: productExit.qnt - 1 }
            : items
        )
      );
    }
  };

  return (
    <>
      <ContextData.Provider
        value={{ addCard, setAddCard, handleFunction, handleDelete }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/addToCard" exact element={<AddToCard />} />
        </Routes>
      </ContextData.Provider>
    </>
  );
}

export { App, ContextData };
