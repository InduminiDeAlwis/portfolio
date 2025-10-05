import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Terms, Privacy } from '../../assets/policies';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' | 'success'
  const [termsModal, setTermsModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

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
        setMessage('Subscription successful!');
        setMessageType('success');
        setEmail('');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setMessage("❌ Something went wrong.");
        setMessageType('error');
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Submission failed.");
      setMessageType('error');
    }
  };

  useEffect(()=>{
    // show back-to-top when user scrolls down
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // reveal footer when visible
    const root = footerRef.current;
    if (root) {
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(en => { if (en.isIntersecting) setVisible(true) })
      }, { threshold: 0.1 });
      io.observe(root);
      return ()=>{ window.removeEventListener('scroll', onScroll); io.disconnect() };
    }
    return ()=> window.removeEventListener('scroll', onScroll);
  },[])

  const handleBackToTop = ()=> window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
  <div className={`footer ${visible ? 'footer--visible' : ''}`} ref={footerRef}>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Logo" />
          <p>Software developer and UI/UX designer from Sri Lanka,<br />currently studying at the University Of Moratuwa.</p>
        </div>

        <div className="footer-top-right">
          <form className="footer-email-form" onSubmit={handleSubscribe} aria-label="Subscribe to newsletter">
            <div className="footer-email-input">
              <img src={user_icon} alt="User Icon" />
              <input 
                type="email" 
                placeholder='Enter Your Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <button type="submit" className="footer-subscribe">Subscribe</button>
          </form>
          {message && <p className={`subscribe-message ${messageType || ''}`} role="status">{message}</p>}
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
          <p className='footer-link' onClick={() => setTermsModal(true)} tabIndex={0} onKeyDown={(e)=> e.key === 'Enter' && setTermsModal(true)}>Terms of Service</p>
          <p className='footer-link' onClick={() => setPrivacyModal(true)} tabIndex={0} onKeyDown={(e)=> e.key === 'Enter' && setPrivacyModal(true)}>Privacy Policy</p>
          <AnchorLink className='anchor-link footer-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
      </div>

      {/* back to top */}
      {showBackToTop && <button className="back-to-top" onClick={handleBackToTop} aria-label="Back to top">↑</button>}

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
