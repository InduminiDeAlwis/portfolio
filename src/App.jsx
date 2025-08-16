import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState('dark'); // default theme is dark

  // Apply theme to body using data-theme attribute
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
