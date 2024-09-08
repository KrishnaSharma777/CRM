import React from 'react';
import Sidebar from '../Navbar/Sidebar';
import { Navbar } from 'react-bootstrap';

const Dashboard = ({isSidebarOpen}) => {

console.log({isSidebarOpen})
  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  );
};

export default Dashboard;
