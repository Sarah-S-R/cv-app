// PracticalExperience.js
import React, { useState } from 'react';

import TextInput from './inputs/TextInput';


const PracticalExperience = ({
  state
}) => {
  const {
      company, setCompany, position, setPosition, responsibilities, setResponsibilities, fromDate, setFromDate, toDate, setToDate
  } = state;

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
            <TextInput 
              value={company}
              setValue={setCompany}
              placeholder={'Enter company name'}
              label={'Company Name'}
            />
            <TextInput 
              value={position}
              setValue={setPosition}
              placeholder={'Enter Job Title'}
              label={'Job Title'}
            />
            <TextInput 
              value={responsibilities}
              setValue={setResponsibilities}
              placeholder={'Enter job responsibilities'}
              label={'Responsibilities'}
            />
            <TextInput 
              value={fromDate}
              setValue={setFromDate}
              placeholder={'Enter start date'}
              label={'Start Date'}
            />
            <TextInput 
              value={toDate}
              setValue={setToDate}
              placeholder={'Enter end date'}
              label={'End Date'}
            />
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