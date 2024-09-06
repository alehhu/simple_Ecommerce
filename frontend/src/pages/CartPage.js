// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <main>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default CartPage;
