import React, { useState } from "react";
import "./Products.css";

const productsData = [
  { id: 1, name: "Product 1", price: 30, category: "enfant", img: require("./image/bebe2.jpeg") },
  { id: 2, name: "Product 2", price: 40, category: "femme", img: require ("./image/femme1.jpg" ) },
  { id: 3, name: "Product 3", price: 25, category: "bebe", img: require ("./image/bebe3.jpeg") },
  { id: 4, name: "Product 4", price: 50, category: "enfant", img: require ("./image/bebe4.jpeg") },
  { id: 5, name: "Product 5", price: 35, category: "femme", img: require ("./image/femme2.jpg") },
  { id: 6, name: "Product 6", price: 45, category: "homme", img: require ("./image/homme1.jpeg" )},
  { id: 7, name: "Product 7", price: 55, category: "homme", img: require ("./image/homme2.jpeg") },
  { id: 8, name: "Product 8", price: 60, category: "femme", img: require ("./image/femme4.jpg") },
  { id: 9, name: "Product 9", price: 20, category: "homme", img: require ("./image/homme3.jpeg") },
  { id: 10, name: "Product 10", price: 70, category: "femme", img: require ("./image/5f0e505d-2465-41b5-918f-761befff97bc.jpg") },
];


function Products({ addToCart, addToFavorites, limit = 10 }) {
  const [selectedColor, setSelectedColor] = useState({});
  const [category, setCategory] = useState('all');
  const [sortPrice, setSortPrice] = useState(false);

  const handleColorChange = (productId, color) => {
    setSelectedColor({ ...selectedColor, [productId]: color });
  };

  const handleAddToCart = (product) => {
    addToCart(product, selectedColor[product.id]);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
  };

  const filteredProducts = productsData
    .filter(product => category === 'all' || product.category === category)
    .sort((a, b) => sortPrice ? a.price - b.price : b.price - a.price);

  return (
    <div className="product-section">
      <div className="filter-bar">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="enfant">Enfant</option>
          <option value="femme">Femme</option>
          <option value="bebe">Bébé</option>
        </select>
        <button onClick={() => setSortPrice(!sortPrice)}>
          {sortPrice ? 'Price: Low to High' : 'Price: High to Low'}
        </button>
      </div>
      <div className="product-grid">
        {filteredProducts.slice(0, limit).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="color-circles">
              {["red", "blue", "green"].map((color) => (
                <span
                  key={color}
                  className={`circle ${color}`}
                  onClick={() => handleColorChange(product.id, color)}
                ></span>
              ))}
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Ajouter au panier
            </button>
            <span 
              className="favorite-icon" 
              onClick={() => handleAddToFavorites(product)}
              style={{ cursor: 'pointer' }}
            >
              ❤️
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
