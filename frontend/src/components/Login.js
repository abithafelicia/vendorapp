import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { identifier, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data.errors) {
        const errorObj = {};
        err.response.data.errors.forEach(error => {
          errorObj[error.param] = error.msg;
        });
        setErrors(errorObj);
      } else if (err.response && err.response.data.msg) {
        alert('Error: ' + err.response.data.msg);
      } else {
        alert('Server error');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username or Email</label>
          <input type="text" name="identifier" value={identifier} onChange={onChange} required />
          {errors.identifier && <p>{errors.identifier}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {errors.general && <p>{errors.general}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;
