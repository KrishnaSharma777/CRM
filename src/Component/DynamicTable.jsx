// DynamicTable.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './DynamicTable.css';



const DynamicTable = ( {isSidebarOpen,header={header},rows=[]})=>{
  // ,header = ["Lead Id","Action","Applied On","Source","Name","State","City","Brand","Mobile","Pan","UserType","Status" ], row = []}) => {
  // console.log(isSidebarOpen)
  const location = useLocation();
  // const { header, rows } = location.state || { headers: ["Lead Id","Action","Applied On","Source","Name","State","City","Brand","Mobile","Pan","UserType","Status" ], rows: [] };
  return (    <div className="table-container ">
     
      <table >
        <thead>
          <tr>
            {header?.map((header, index) => (
              <th key={index} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, rowIndex) => (
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
