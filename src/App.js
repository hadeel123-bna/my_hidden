import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Panier from "./components/Panier";
import About from "./components/About";
import Contact from "./components/Contact";
import Favorites from "./components/Favorites"; // Importer le composant Favorites
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product, selectedColor) => {
    setCart((prevCart) => [...prevCart, { ...product, color: selectedColor }]);
  };

  const addToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
      console.log('Added to favorites:', product);
    } else {
      console.log('Already in favorites:', product);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} addToFavorites={addToFavorites} />}
        />
        <Route path="/panier" element={<Panier cart={cart} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} addToCart={addToCart} />} // Pass addToCart here
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
