

import { useState } from 'react';
import './App.css';
import Namaste from './components/Namaste.js';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="bg-black text-white ">
      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 py-4 fixed top-0 left-0 right-0 bg-black bg-opacity-70 z-10 ml-80 mr-80 border-2 rounded-full border-slate-700 ">
        <a href="#profile" className="text-lg hover:text-gray-400">Profile</a>
        <a href="#about-me" className="text-lg hover:text-gray-400">About Me</a>
        <a href="#skills" className="text-lg hover:text-gray-400">Skills</a>
        <a href="#projects" className="text-lg hover:text-gray-400">Projects</a>
      </div>

      {/* Display Namaste initially */}
      {!showProfile ? (
        <Namaste onComplete={() => setShowProfile(true)} />
      ) : (
        <>
          <div id="profile" className="min-h-screen pt-24">
            <Profile />
          </div>
          <div id="about-me" className="min-h-screen pt-24">
            <AboutMe />
          </div>
          <div id="skills" className="min-h-screen pt-24">
            <Skills />
          </div>
          <div id="projects" className="min-h-screen pt-24">
            <Projects />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

