import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Terms, Privacy } from '../../assets/policies';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [termsModal, setTermsModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setMessage('Please enter a valid email.');

    const formData = {
      name: "Subscriber",
      email: email,
      message: "Subscribed to newsletter",
      access_key: "4fe7a01d-e606-4221-8d7c-984a17406a6d"
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setMessage('');
        setEmail('');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setMessage("❌ Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Submission failed.");
    }
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Logo" />
          <p>Software developer and UI/UX designer from Sri Lanka,<br />currently studying at the University Of Moratuwa.</p>
        </div>

        <div className="footer-top-right">
          <form className="footer-email-form" onSubmit={handleSubscribe}>
            <div className="footer-email-input">
              <img src={user_icon} alt="User Icon" />
              <input 
                type="email" 
                placeholder='Enter Your Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="footer-subscribe">Subscribe</button>
          </form>
          {message && <p className="subscribe-message">{message}</p>}
        </div>
      </div>

      {/* Subscription Popup */}
      {showPopup && (
        <div className="subscribe-popup">
          <p>✅ Subscription Successful!</p>
        </div>
      )}

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Indumini Theekshana. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p onClick={() => setTermsModal(true)} style={{cursor:'pointer'}}>Terms of Service</p>
          <p onClick={() => setPrivacyModal(true)} style={{cursor:'pointer'}}>Privacy Policy</p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
      </div>

      {/* Terms Modal */}
      {termsModal && (
        <div className="modal-overlay" onClick={() => setTermsModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setTermsModal(false)}>✖</button>
            <h2>Terms & Conditions</h2>
            <div className="modal-body">
              {Terms.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {privacyModal && (
        <div className="modal-overlay" onClick={() => setPrivacyModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPrivacyModal(false)}>✖</button>
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              {Privacy.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer;
