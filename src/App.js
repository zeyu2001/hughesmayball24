import React from 'react';
import './App.css';
import Hero from './components/Hero';
import CountrySection from './components/CountrySection';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Hero />
        <CountrySection name="United States of America" backgroundImage="./worldsfair.jpeg" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;