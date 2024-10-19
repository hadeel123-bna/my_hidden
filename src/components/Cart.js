import React, { useState } from 'react';
import './Products.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const products = [
  { id: 1, name: 'T-shirt Homme', price: 20, colorOptions: ['Red', 'Blue', 'Green'], category: 'Homme', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Robe Femme', price: 50, colorOptions: ['Pink', 'Black', 'White'], category: 'Femme', image: '/path/to/image2.jpg' },
  // Add more products
];

function Product({ addToCart, addToFavorites }) {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };

  return (
    <div className="product-page">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Prix: {product.price}€</p>

            <div className="color-options">
              {product.colorOptions.map((color) => (
                <span
                  key={color}
                  className={`color-circle ${selectedColors[product.id] === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(product.id, color)}
                ></span>
              ))}
            </div>

            <button onClick={() => addToCart(product)}>Ajouter au panier <FaShoppingCart /></button>
            <FaHeart className="heart-icon" onClick={() => addToFavorites(product)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
