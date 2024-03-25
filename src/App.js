import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Section from './components/Section';
import Committee from './components/Committee';
import Video from './components/Video';
import Footer from './components/Footer';
import Fixr from './components/Ticketing';
import Instagram from './components/Instagram';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Timeline from './pages/Timeline';
import Nav from './components/Nav';
import Map from './pages/Map';
import Sponsorship from './pages/Sponsorship';

const NotFound = () => {
  return (
    <div className='text-center bg-gray-900 h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl text-white'>404 Not Found</h1>
    </div>
  );
}

const Home = () => {
  return (
    <ParallaxProvider>
      <Hero />
      <Video />
      <Section name="GET TICKETS" backgroundImage="./ticketing_bg.jpg" />
      <Fixr />
      <Section name="MEET THE COMMITTEE" backgroundImage="./committee_bg.jpg" />
      <Committee />
      <Instagram />
      <Footer />
    </ParallaxProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => (
  
  <div className="App">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
      </header>
    <RouterProvider router={router} />
  </div>
);

export default App;