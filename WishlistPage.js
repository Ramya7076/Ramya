// pages/WishlistPage.js

import React, { useState } from 'react';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (index) => {
    const newWishlistItems = [...wishlistItems];
    newWishlistItems.splice(index, 1);
    setWishlistItems(newWishlistItems);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => removeFromWishlist(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearWishlist}>Clear Wishlist</button>
    </div>
  );
};

export default WishlistPage;
