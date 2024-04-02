// GeneralInfo.js
import React, { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" /><br />
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /><br />
            <label>Phone: </label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" /><br />
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