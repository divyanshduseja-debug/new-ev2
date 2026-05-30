import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Zap color="#4CAF50" size={32} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }} />
          JAKHARS <span>POWER POINT</span>
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
