import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently open to internship opportunities!
            <br />If you're looking for a motivated and passionate individual <br /> to contribute to your team, feel free to reach out. I'm eager <br />to learn,grom and take on meaningful challenges.You can <br />contact me anytime!
          </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /><a href="induminialwis27@gmail.com"><p>induminialwis27@gmail.com</p></a>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /><p>+94 77 069 1099</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /><p> Galle, Sri Lanka</p>
              </div>
            </div>
        </div>
        <form className="contact-right">
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write Your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact