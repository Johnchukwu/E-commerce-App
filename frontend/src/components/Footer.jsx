// Footer.js

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We are a leading fashion brand, dedicated to bringing you the latest trends
            and timeless styles. Our mission is to provide high-quality, fashionable
            clothing and accessories to help you express your unique style.
          </p>
        </div>
        <div className="footer-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div>
              <FiPhone className="icon" />
              <p>123-456-7890</p>
            </div>
            <div>
              <FiMail className="icon" />
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FaFacebookF /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
            <a href="https://www.linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
