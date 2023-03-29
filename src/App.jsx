import { useState } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import './App.css'

function App() {


  return (
    <>
      <Nav />
      <div className="App" data-bs-spy="scroll" data-bs-target="#navbar">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App
