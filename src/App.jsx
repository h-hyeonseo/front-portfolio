import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio1 from './components/Portfolio1';
import Portfolio2 from './components/Portfolio2';
import Portfolio3 from './components/Portfolio3';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
    </div>
  );
}

export default App;
