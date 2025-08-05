import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg' //channge image

const Hero = () => {
  return (
    <div className = "hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Indumini De Alwis,</span></h1>
        <p> 3rd Year IT Undergraduate at University of Moratuwa.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero