// src/api/products.js
const API_URL = 'http://localhost:8000/store/api/categories/'; // Replace with your Django API URL

export const getCategories = async () => {
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
