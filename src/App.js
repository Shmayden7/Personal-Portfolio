import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import SoftwareDev from './components/Collections/SoftwareDev';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CAD from './components/Collections/CAD';
import Education from './components/Collections/Education';
import WorkExperience from './components/Collections/WorkExperience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
      <Header />
      </div>
      <div className='About'>
        <About />
      </div>
      <div className='SD'>
        <SoftwareDev />
      </div>
      <div className='CAD'>
        <CAD />
      </div>
      <div className='WorkExperience'>
        <WorkExperience />
      </div>
      <div className='Education'>
        <Education />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
