import React from 'react';

// Sample categories data
const categories = [
  { id: 1, name: 'Men', image: 'https://via.placeholder.com/150?text=Men' },
  { id: 2, name: 'Women', image: 'https://via.placeholder.com/150?text=Women' },
  { id: 3, name: 'Kids', image: 'https://via.placeholder.com/150?text=Kids' },
  { id: 4, name: 'Accessories', image: 'https://via.placeholder.com/150?text=Accessories' },
  { id: 5, name: 'Footwear', image: 'https://via.placeholder.com/150?text=Footwear' }
];

// Home Page with product categories
const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Trendify</h1>
      <p>Explore the latest trends in fashion. Shop now!</p>

      <h2>Shop by Category</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <div key={category.id} style={{ textAlign: 'center' }}>
            <img 
              src={category.image} 
              alt={category.name} 
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }} 
            />
            <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
