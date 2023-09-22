
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
 
import HomePage from './HomePage';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    
    axios.post('http://localhost:8086/api/login', formData) 
      .then(response => {
        console.log(response.data);
        setSuccessMessage("Login successful"); 
        setIsLoggedIn(true); 
      })
      .catch(err => {
        if (err.response) {
         
          setError("Invalid credentials"); 
        } else {
          console.error(err);
        }
      });
  };
  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className="login-page">
      <h1>"LOGIN HERE FOR EXPLORE YOUR READING QUEST"</h1>
      
      <form onSubmit={handleLoginSubmit}>
      <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    {error && <p className="error-message">{error}</p>} 
    {successMessage && <p className="success-message">{successMessage}</p>} 
    <button type="submit">Login</button>
    
  </form>
  <p>Don't have an account?Hurry to signup</p>
  <a href Signuppage></a>
  </div>

  );
}
export default LoginPage;




