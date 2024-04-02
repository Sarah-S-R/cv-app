// PracticalExperience.js
import React, { useState } from 'react';

const PracticalExperience = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    // Handle form submission
    setIsEditing(false);
  };



  return (
    <div className="section">
      <h2 className="section-heading">Practical Experience</h2>
      <div className="section-content">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>Company: </label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company name" /><br />
            <label>Position: </label>
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Enter position title" /><br />
            <label>Main Responsibilities: </label>
            <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder="Enter main responsibilities" /><br />
            <label>From Date: </label>
            <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} placeholder="Enter start date" /><br />
            <label>To Date: </label>
            <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="Enter end date" /><br />
            <div className="button-container">
              <button type="submit" className="section-button">Submit</button>
            </div>
          </form>
        ) : (
          <div>
            <p>Company: {company}</p>
            <p>Position: {position}</p>
            <p>Main Responsibilities: {responsibilities}</p>
            <p>From Date: {fromDate}</p>
            <p>To Date: {toDate}</p>
            <div className="button-container">
              <button onClick={handleEdit} className="section-button">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticalExperience;