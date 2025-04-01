import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';   
import Projects from './components/Projects';   

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Projects />
    </Router>
  );
}

export default App;