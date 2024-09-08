import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPageCss.css';
import useStore from '../Store';
import Cookies from 'universal-cookie';

const LoginPage = () => {
  const setLogin = useStore((state) => state.setLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.115:4000/login', { userId: email, password });

      if (response.data.success) {
        // Set a cookie on successful login
        cookies.set('authToken', response.data.token, { path: '/' }); // Adjust the cookie name and options as needed
        
        setLogin(true);
        window.location.assign('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className='loginH2'>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder='Email'
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder='Password'
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
