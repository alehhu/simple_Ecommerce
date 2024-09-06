// src/api/products.js
const API_URL = 'http://127.0.0.1:8000/store/api/products/'; // Replace with your Django API URL

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product", error);
    throw error;
  }
};
