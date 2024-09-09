import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cookies from 'universal-cookie';
import useStore from '../Store';

const Navbar = () => {
    const [clientRole, setClientRole] = useState('Client');
    const setLogin = useStore((state) => state.setLogin);
    const cookies = new Cookies();

    const handleLogout = () => {
        cookies.remove('authToken', { path: '/' });
        setLogin(false);
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
                    <i className="bi bi-person-circle" style={{ marginRight: '20px', color: 'black' }}></i>
                    User Profile
                </Link>
                

                {/* Settings Dropdown */}
                
                <div className="dropdown">
                    <Link
                        to="#"
                        className="dropdown-toggle settings-link"
                        id="settingsDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="bi bi-gear" style={{ marginRight: '8px', color: 'black' }}></i>Setting
                    </Link>
                    
                    <ul className="dropdown-menu" aria-labelledby="settingsDropdown">
                        <li>
                            <Link className="dropdown-item" to="/add-users">
                               Add Users
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/view-user">
                               View Users
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/import-csv">
                                Import CSV
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/help">
                                Add Bank Details
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/help">
                                Add Holiday Details
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Client Role Dropdown */}
                <select
                    className="client-role-dropdown"
                    value={clientRole}
                    onChange={handleRoleChange}
                    style={{ marginLeft: '20px', borderRadius: '50px', textAlign: 'center', height: '30px' }}
                >
                    <option value="Guest">AUDIT</option>
                    <option value="Client">CLIENT ADMIN</option>
                    <option value="Admin">SCREENER</option>
                </select>

                {/* Logout Button */}
                <button style={{ backgroundColor: 'brown', marginLeft: '20px' }} onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right" style={{ marginLeft: '8px', color: 'white' }}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
