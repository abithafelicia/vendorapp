import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { full_name, email, username, password, confirm_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirm_password) {
      setErrors({ confirm_password: 'Passwords do not match' });
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      alert('Registration successful!');
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
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="full_name" value={full_name} onChange={onChange} required />
          {errors.full_name && <p>{errors.full_name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={onChange} required />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" value={confirm_password} onChange={onChange} required />
          {errors.confirm_password && <p>{errors.confirm_password}</p>}
        </div>
        {errors.general && <p>{errors.general}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
