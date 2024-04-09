// Education.js
import React, { useState } from 'react';

import TextInput from './inputs/TextInput';


const Education = ({
  state
}) => {
  
  const {
    school, setSchool, title, setTitle, date, setDate
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
      <h2 className="section-heading">Education</h2>
      <div className="section-content">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <TextInput 
              value={school}
              setValue={setSchool}
              placeholder={'Enter your school'}
              label={'School'}
            />
            <TextInput 
              value={title}
              setValue={setTitle}
              placeholder={'Title of Study'}
              label={'Title of Study'}
            />
            <TextInput 
              value={date}
              setValue={setDate}
              placeholder={'Enter the date of study'}
              label={'Date of study'}
            />
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