// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../api/products';
import { getCategories } from '../api/categories';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Welcome to Our Store</h1>
      <ProductList products={products} />
    </main>
  );
}

export default HomePage;
