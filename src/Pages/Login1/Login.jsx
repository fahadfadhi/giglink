import React, { useState } from 'react';
import './Login.css'; // Styles specific to Login
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="User name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
