// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";

function Navbar({categories}) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {categories.map(category => (
        <li key={category.id}>{category.name}</li>
        ))}
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
