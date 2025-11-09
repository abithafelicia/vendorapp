import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  const navigate = useNavigate();

  const { name, price, category } = form;

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push({ id: Date.now(), ...form });
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product added!');
    navigate('/dashboard');
  };

  return (
    <div className="dashboard">
      <h2>Add Product</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={price} onChange={onChange} required />
        </div>
        <div>
          <label>Category</label>
          <input type="text" name="category" value={category} onChange={onChange} required />
        </div>
        <button type="submit">Add Product</button>
        <button type="button" onClick={() => navigate('/dashboard')}>Back</button>
      </form>
    </div>
  );
};

export default AddProduct;
