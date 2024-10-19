import React, { useState } from "react";
import "./Favorites.css"; // Add any specific styles for favorites if needed
import Receipt from "./Receipt"; // Import the Receipt component

function Favorites({ favorites, addToCart }) {
  const [showReceipt, setShowReceipt] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
  });

  const handleOrder = () => {
    // Here you would typically check if customer details are filled in
    if (customerDetails.name && customerDetails.address) {
      // Add all favorite items to the cart
      favorites.forEach(product => addToCart(product)); // Add each favorite to the cart
      setShowReceipt(true); // Show the receipt page
    } else {
      alert("Veuillez remplir les détails du client.");
    }
  };

  if (showReceipt) {
    return <Receipt cart={favorites} customerDetails={customerDetails} />;
  }

  return (
    <div className="favorites-section">
      <h2>Mes Produits Favoris</h2>
      {favorites.length === 0 ? (
        <p>Vous n'avez pas encore ajouté de produits aux favoris.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
      <input 
        type="text" 
        placeholder="Nom" 
        value={customerDetails.name}
        onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Adresse" 
        value={customerDetails.address}
        onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
      />
      <button onClick={handleOrder}>Commander</button>
    </div>
  );
}

export default Favorites;
