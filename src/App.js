import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Section from './components/Section';
import Committee from './components/Committee';
import Video from './components/Video';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Hero />
        <Video />
        <Section name="MEET THE COMMITTEE" backgroundImage="./committee_bg.jpg" />
        <Committee />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;