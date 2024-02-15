// pages/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.mjs'; // Assuming you have a products data file

const CategoryPage = () => {
  const { categoryId } = useParams();

  // Filter products based on the categoryId
  const filteredProducts = products.filter(
    (product) => product.categoryId === parseInt(categoryId)
  );

  // Implement sorting and pagination logic here

  return (
    <div>
      <h1>Category Page</h1>
      <h2>Category ID: {categoryId}</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      {/* Implement sorting and pagination UI here */}
    </div>
  );
};

export default CategoryPage;
