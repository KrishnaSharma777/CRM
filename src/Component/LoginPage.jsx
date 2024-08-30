import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPageCss.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (event) => {

    
    event.preventDefault();
    // Validate inputs
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // Handle login logic here (you might want to add authentication logic)
    console.log('Logging in with', { email, password });

    // Navigate to the dashboard page upon successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" >Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label >
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

