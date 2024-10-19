import React from "react";
import "./Receipt.css";

function Receipt({ cart, customerDetails }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const fees = totalPrice * 0.1; // Example fee calculation (10%)
  const grossPrice = totalPrice + fees;
  const date = new Date().toLocaleString();

  return (
    <div className="receipt">
      <h2>Reçu de Commande</h2>
      <p><strong>Nom:</strong> {customerDetails.name}</p>
      <p><strong>Adresse:</strong> {customerDetails.address}</p>
      <p><strong>Date de Commande:</strong> {date}</p>
      <h3>Détails de la Commande:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Couleur: {item.color} - Prix: ${item.price}
          </li>
        ))}
      </ul>
      <p><strong>Prix Total (TTC):</strong> ${grossPrice.toFixed(2)}</p>
      <p><strong>Prix Brut:</strong> ${totalPrice.toFixed(2)}</p>
      <p><strong>Frais:</strong> ${fees.toFixed(2)}</p>
    </div>
  );
}

export default Receipt;
