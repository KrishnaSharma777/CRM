import React, { useState } from 'react';
import './MISReport.css';  // Custom CSS file

const MISReport = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [c4cRef, setC4cRef] = useState('');
  const [isReferenceChecked, setIsReferenceChecked] = useState(false);
  const [report, setReport] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsReferenceChecked(event.target.checked);
  };

  const handleC4cRefChange = (event) => {
    setC4cRef(event.target.value);
  };

  const generateReport = () => {
    if (!isReferenceChecked || !c4cRef.trim()) {
      setReport('Please check the box and enter the C4C Reference.');
      return;
    }

    setReport(`
      Selected Option: ${selectedOption}
      C4C Reference: ${c4cRef}
    `);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>MIS Report Generator</h1>
        
        <div className="form-group">
          <label>Select an Option:</label>
          <select 
            className="form-control" 
            value={selectedOption} 
            onChange={handleOptionChange}
          >
            <option value="" disabled>Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              id="referenceCheck" 
              checked={isReferenceChecked}
              onChange={handleCheckboxChange}
            />
            C4C Reference:
          </label>
          <input 
            type="text" 
            className="form-control" 
            value={c4cRef} 
            onChange={handleC4cRefChange} 
            placeholder="Enter C4C Reference"
          />
        </div>

        <button className="btn" onClick={generateReport}>
          Create Report
        </button>

        {report && (
          <div className="report">
            <h2>Generated Report</h2>
            <pre>{report}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default MISReport;
