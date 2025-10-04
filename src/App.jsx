import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Timeline from './Components/Timeline/Timeline';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground';
// ThemeToggle removed - site uses a single theme
import PointerGlow from './Components/PointerGlow/PointerGlow';

const App = () => {
  // Single theme (dark) — theme switching removed

  return (
    <div>
      <AnimatedBackground />
      <PointerGlow />
      <Navbar />
  <Hero />
      <About />
  <Timeline />
      <Services />
      <MyWork />
      <Contact />
  <Footer />
    </div>
  );
};

export default App;
