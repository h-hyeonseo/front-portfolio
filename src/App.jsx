import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio1 from './Components/Portfolio1';
import Portfolio2 from './Components/Portfolio2';
import Portfolio3 from './Components/Portfolio3';
import Portfolio4 from './Components/Portfolio4';
import Portfolio5 from './Components/Portfolio5';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-10% 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
      section.classList.add('visible');
    });

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const delta = e.deltaY;
      const container = document.querySelector('.App');
      const currentScroll = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      let targetScroll;
      if (delta > 0) {
        targetScroll = Math.ceil(currentScroll / windowHeight) * windowHeight;
        if (targetScroll <= currentScroll) {
          targetScroll += windowHeight;
        }
      } else {
        targetScroll = Math.floor(currentScroll / windowHeight) * windowHeight;
        if (targetScroll >= currentScroll) {
          targetScroll -= windowHeight;
        }
      }

      setIsScrolling(true);
      
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    const appContainer = document.querySelector('.App');
    appContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.querySelectorAll('.section').forEach(section => {
        observer.unobserve(section);
      });
      appContainer.removeEventListener('wheel', handleWheel);
    };
  }, [isScrolling]);

  console.log('App component rendering');

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <div className="section" id="home">
        <Home />
      </div>
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="portfolio1">
        <Portfolio1 />
      </div>
      <div className="section" id="portfolio2">
        <Portfolio2 />
      </div>
      <div className="section" id="portfolio3">
        <Portfolio3 />
      </div>
      <div className="section" id="portfolio4">
        <Portfolio4 />
      </div>
      <div className="section" id="portfolio5">
        <Portfolio5 />
      </div>
    </div>
  );
}

export default App;
