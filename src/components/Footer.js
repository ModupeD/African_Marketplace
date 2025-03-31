import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>African Marketplace brings you authentic African fashion and cultural pieces. We celebrate the rich heritage of African design while embracing modern style.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/women">Women's Collection</a></li>
            <li><a href="/men">Men's Collection</a></li>
            <li><a href="/accessories">Accessories</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/sizing">Size Guide</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-phone"></i> Call us: +1 (234) 567-8900
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email: support@africanmarketplace.com
            </p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com/africanmarketplace" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com/africanmarketplace" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/africanmarketplace" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://pinterest.com/africanmarketplace" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} African Marketplace. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/shipping">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 