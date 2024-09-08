import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css'; // Ensure this CSS file is updated with the styles
import Cookies from 'universal-cookie';
import useStore from '../Store'; // Import Zustand store

const Navbar = () => {
    const [clientRole, setClientRole] = useState('Client'); // Default role
    const setLogin = useStore((state) => state.setLogin); // Zustand state management for login status
    const cookies = new Cookies();

    const handleLogout = () => {
        // Clear the auth token cookie on logout
        cookies.remove('authToken', { path: '/' });

        // Update the login state to false
        setLogin(false);

        // Navigate to the login page after logging out
        window.location.assign('/login');
    };

    const handleRoleChange = (event) => {
        setClientRole(event.target.value);
        console.log('Selected Role:', event.target.value);
    };

    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <a className="text navbar-brand">QuickMoney4U</a>

                {/* User Profile Link */}
                <Link to="/user-profile" className="user-profile-link">
                <i className="bi bi-person-circle" style={{ marginRight: '8px', color: 'white' }}></i>User Profile    
                </Link>

                {/* Client Role Dropdown */}
                <select
                    className="client-role-dropdown"
                    value={clientRole}
                    onChange={handleRoleChange}
                    style={{ marginLeft: '20px', borderRadius: '50px', textAlign: 'center', height: '30px' }} // Adjusted style
                >
                    <option value="Guest">AUDIT</option>
                    <option value="Client">CLIENT ADMIN</option>
                    <option value="Admin">SCREENER</option>
                    <option value="Manager">CREDIT MANAGER</option>
                    <option value="Guest">CREDIT HEAD</option>
                    <option value="Guest">DISBURSAL MANAGER</option>
                    <option value="Guest">COLLECTION EXECUTIVE</option>
                    <option value="Guest">COLLECTION HEAD</option>
                    <option value="Guest">ACCOUNT MANAGER</option>
                    <option value="Guest">ACCOUNT HEAD</option>
                    <option value="Guest">CUSTOMER CARE</option>
                    <option value="Guest">OTHER</option>
                </select>

                {/* Logout Button */}
                <button style={{ backgroundColor: 'brown' }} onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right" style={{ marginLeft: '8px', color: 'white' }}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
