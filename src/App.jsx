// App.js
import React from 'react';
import './styles/App.css';
import Title from './components/Title';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience';

function App() {
  return (
    <div className="App">

      <Title />
      <GeneralInfo />
      <Education />
      <PracticalExperience />
    </div>
  );
}

export default App;