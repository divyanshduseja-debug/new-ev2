import React from 'react';
import { Zap } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Jakhar's Power Point" className="footer-logo-img" />
        </div>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Support</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} JAKHARS Power Point. All rights reserved.
      </div>
    </footer>
  );
}
