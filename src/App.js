import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Bio from './components/Pages/Bio/Bio'
import Experience from './components/Pages/Expe-Cards/Experience/Experience'
import Work from './components/Pages/Work/Works'
import Education from './components/Pages/Expe-Cards/Education/Education'
import Courses from './components/Pages/Course/Courses'
import Achievements from './components/Pages/Expe-Cards/Achievement/Achievement'
import Skills from './components/Pages/Skill/Skills'
import React from 'react';

function App() {
  
  return (
    <div className="App">
      <Sidebar/>
      <div className="pages">
        <Bio />
        <Experience />
        <Work />
        <Education />
        <Courses />
        <Achievements />
        <Skills />
      </div>
    </div>
  );
}

export default App;
