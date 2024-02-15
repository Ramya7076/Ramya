// pages/ProductDetailsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.mjs'; // Assuming you have a products data file

const ProductDetailsPage = () => {
  const { productId } = useParams();

  // Find the product with the matching productId
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
      {/* Add button to add the product to the cart or wishlist */}
    </div>
  );
};

export default ProductDetailsPage;
