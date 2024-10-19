import React, { useState } from "react";
import "./Panier.css";
import Receipt from "./Receipt";

function Panier({ cart, setCart }) { // Accept setCart as a prop
  const [showReceipt, setShowReceipt] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
  });

  const handleOrder = () => {
    setShowReceipt(true);
  };
  const handleReduceQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrement quantity
      setCart(updatedCart);
    } else {
      handleDelete(index); // If quantity is 1, remove the item
    }
  };

  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart); // Update the cart state
  };

  const handleAddMore = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1; // Increment quantity
    setCart(updatedCart);
  };

  if (showReceipt) {
    return <Receipt cart={cart} customerDetails={customerDetails} />;
  }

  return (
    <div className="panier">
      <h2>Votre Panier</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Couleur</th>
            <th>Prix</th>
            <th>Quantité</th> {/* New column for quantity */}
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>${item.price}</td>
              <td>{item.quantity || 1}</td> {/* Display quantity */}
              <td>
                <button onClick={() => handleAddMore(index)}>more</button>
                <button onClick={() => handleReduceQuantity(index)}>low</button>
                <button onClick={() => handleDelete(index)}>delet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default Panier;
