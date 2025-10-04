import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.png' //change image
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  // Two separate CV links: SE CV and UI/UX CV
  const seCvLink = 'https://drive.google.com/file/d/1B3Nzny4qd_WFso_EwTM65FNd1wkbbQWt/view?usp=sharing';
  const uiuxCvLink = 'https://drive.google.com/file/d/1wq-QO7_xvTXl3rsZr-7V1YlWncTk0VrK/view?usp=sharing';

  const openLink = (url) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  // Rotating roles (small interactive line)
  const roles = ["Full-Stack Developer", "UI/UX Designer", "Computer Vision Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  useEffect(()=>{
    const t = setInterval(()=> setRoleIndex(i => (i+1) % roles.length), 3000);
    return () => clearInterval(t);
  },[]);

  // Toggle role visibility briefly when index changes to create a fade effect
  useEffect(()=>{
    setRoleVisible(false);
    const id = setTimeout(()=> setRoleVisible(true), 120);
    return ()=> clearTimeout(id);
  },[roleIndex]);

  // Image tilt / parallax
  const [imgStyle, setImgStyle] = useState({transform: 'none'});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx; // -1 .. 1
    const dy = (y - cy) / cy; // -1 .. 1
    const rotateY = dx * 6; // deg
    const rotateX = -dy * 6;
    setImgStyle({transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`});
  };
  const handleMouseLeave = () => setImgStyle({transform: 'none'});

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rotateY = dx * 6;
    const rotateX = -dy * 6;
    setImgStyle({transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`});
  };
  const handleTouchEnd = () => setImgStyle({transform: 'none'});


  return (
  <div id='home' className = "hero">
        <div
          className={`hero-image ${imgStyle.transform !== 'none' ? 'tilt-active' : ''}`}
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={imgStyle}
          aria-hidden={false}
        >
          <img src={profile_img} alt="Indumini De Alwis profile" />
        </div>
        <div className="hero-content">
            <h1><span>I'm Indumini De Alwis,</span></h1>
            <div className="hero-role-wrap" aria-live="polite">
              <div className={`hero-role ${roleVisible ? 'visible' : 'hidden'}`}>{roles[roleIndex]}</div>
            </div>
            <p>3rd Year IT Undergraduate at University of Moratuwa.</p>
            <div className="hero-action">
               <div className="hero-connect">
                 <AnchorLink className='anchor-link' offset={50} href='#contact'>
                   Connect With Me
                 </AnchorLink>
               </div>
               <div className="hero-resumes">
                 <button className="hero-resume" onClick={() => openLink(seCvLink)} type="button">SE CV</button>
                 <button className="hero-resume secondary" onClick={() => openLink(uiuxCvLink)} type="button">UI/UX CV</button>
               </div>
            </div>
        </div>
        <div className="hero-bg-shapes" aria-hidden="true">
          <span className="hero-shape s1" />
          <span className="hero-shape s2" />
        </div>
    </div>
  )
}

export default Hero