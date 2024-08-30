import React, { useState } from 'react';
import './Navbar.css'; // Ensure this CSS file is updated with the styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            
            <div className="navbar-container">
            
              
                
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {/* Add navigation links here if needed */}
                </ul>

                <div className="search-container">
                <i className="bi bi-search search-icon" style={{ marginRight: '8px' }}></i>

                    <input type="text" placeholder="Search..." className="search-box" />
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
