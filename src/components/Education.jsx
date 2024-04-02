// Education.js
import React, { useState } from 'react';

const Education = () => {
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
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
      <h2 className="section-heading">Education</h2>
      <div className="section-content">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>School: </label>
            <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Enter your school" /><br />
            <label>Title of Study: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your title of study" /><br />
            <label>Date of Study: </label>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date of study" /><br />
            <div className="button-container">
              <button type="submit" className="section-button">Submit</button>
            </div>
          </form>
        ) : (
          <div>
            <p>School: {school}</p>
            <p>Title of Study: {title}</p>
            <p>Date of Study: {date}</p>
            <div className="button-container">
              <button onClick={handleEdit} className="section-button">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;