import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewProducts = () => {
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem('products') || '[]');

  return (
    <div className="dashboard">
      <h2>View Products</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price} ({product.category})
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default ViewProducts;
