// pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'url-to-electronics-thumbnail-image',
  },
  {
    id: 2,
    name: 'Clothing',
    image: 'url-to-clothing-thumbnail-image',
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'url-to-accessories-thumbnail-image',
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
