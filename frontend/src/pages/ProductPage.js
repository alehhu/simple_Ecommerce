// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <main>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}

export default ProductPage;
