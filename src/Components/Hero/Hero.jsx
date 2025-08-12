import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.png' //change image
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const handleResumeDownload = () => {
    // Replace FILE_ID with your actual CV file ID from Google Drive
    const googleDriveLink = 'https://drive.google.com/file/d/1JsWB_W8EbIrX7muDocmtyfEJkBSEdK3i/view?usp=drive_link';
    window.open(googleDriveLink, '_blank');
  };

  return (
    <div id='home' className = "hero">
        <img src={profile_img} alt="" />
        <div className="hero-content">
            <h1><span>I'm Indumini De Alwis,</span></h1>
            <p>3rd Year IT Undergraduate at University of Moratuwa.</p>
            <div className="hero-action">
               <div className="hero-connect">
                 <AnchorLink className='anchor-link' offset={50} href='#contact'>
                   Connect With Me
                 </AnchorLink>
               </div>
                <div className="hero-resume" onClick={handleResumeDownload}>
                  My Resume
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero