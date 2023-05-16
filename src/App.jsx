import { useState } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
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
        <Footer />
      </div>
    </>
  );
}

export default App
