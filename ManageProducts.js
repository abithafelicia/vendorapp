import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem('products') || '[]');

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(updated));
    window.location.reload(); // Simple reload
  };

  return (
    <div className="dashboard">
      <h2>Manage Products</h2>
      {products.length === 0 ? (
        <p>No products to manage.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price} ({product.category})
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default ManageProducts;
