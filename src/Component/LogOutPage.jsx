import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import useStore from '../Store'; // Assuming you're using Zustand for state management

const LogOutPage = () => {
  const setLogin = useStore((state) => state.setLogin); // Zustand state management for login status
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    // Clear the auth token cookie on logout
    cookies.remove('authToken', { path: '/' });

    // Update the login state to false
    setLogin(false);

    // Navigate to the login page after logging out
    navigate('/login');
  }, [cookies, setLogin, navigate]);

  return (
    <div className="logout-container">
      <h2>You have been logged out successfully.</h2>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default LogutPage;
