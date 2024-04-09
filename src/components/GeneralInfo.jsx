// GeneralInfo.js
import React, { useState } from 'react';

import TextInput from './inputs/TextInput';
import TableData from './inputs/UncontrolledTextInput';

const GeneralInfo = ({
  state
}) => {
  
  const {
    name, setName, email, setEmail, phone, setPhone
  } = state
  
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
      <h2 className="section-heading">General Information</h2>
      <div className="section-content">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            {/* <TextInput 
              value={name}
              setValue={setName}
              placeholder={'Enter your name'}
              label={'Name'}
            />
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /><br />
            <label>Phone: </label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" /><br /> */}
            <TableData />
            <TableData />
            <TableData />
            <div className="button-container">
              <button type="submit" className="section-button">Submit</button>
            </div>
          </form>
        ) : (
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <div className="button-container">
              <button onClick={handleEdit} className="section-button">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;