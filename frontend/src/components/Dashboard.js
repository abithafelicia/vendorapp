import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/me`, {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
        alert('Dashboard loaded for ' + res.data.username);
      } catch (err) {
        console.error(err);
        alert('Failed to load user data: ' + (err.response?.data?.msg || 'Server error'));
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h2>Welcome to the Multi-Vendor Marketplace Dashboard, {user.full_name}!</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.created_at).toLocaleDateString()}</p>
      
      <h3>My Products</h3>
      <ul>
        <li>Product 1: Laptop - $999</li>
        <li>Product 2: Smartphone - $599</li>
        <li>Product 3: Headphones - $199</li>
      </ul>
      
      <h3>Recent Orders</h3>
      <ul>
        <li>Order #123: Laptop - Delivered</li>
        <li>Order #124: Smartphone - Pending</li>
      </ul>
      
      <h3>Vendor Management</h3>
      <p>As a vendor, you can manage your products and orders here.</p>
      <button onClick={() => navigate('/add-product')}>Add Product</button>
      <button onClick={() => navigate('/manage-products')}>Manage Products</button>
      <button onClick={() => navigate('/view-products')}>View Products</button>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
