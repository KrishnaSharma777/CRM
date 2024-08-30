// DynamicTable.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './DynamicTable.css';
import Navbar from '../Navbar/NavBar';
import Sidebar from '../Navbar/Sidebar';


const DynamicTable = ( {header = ["Lead Id","Action","Applied On","Source","Name","State","City","Brand","Mobile","Pan","UserType","Status" ], row = [] }) => {
  const location = useLocation();
  const { headers, rows } = location.state || { headers: ["Lead Id","Action","Applied On","Source","Name","State","City","Brand","Mobile","Pan","UserType","Status" ], rows: [] };

  return (
    <div className="table-container">
      <Navbar/>

      
      <Sidebar/>
      <table className="dynamic-table">
        <thead>
          <tr>
            {header.map((header, index) => (
              <th key={index} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
