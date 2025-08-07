import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.png' //channge image
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className = "hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Indumini De Alwis,</span></h1>
        <p> 3rd Year IT Undergraduate at University of Moratuwa.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero