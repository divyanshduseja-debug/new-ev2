import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link to="/" className="nav-brand">
        <Zap color="#4CAF50" size={32} />
        <div>JAKHARS <span>POWER POINT</span></div>
      </Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
      <Link to="/contact" className="nav-cta" style={{ display: 'inline-block' }}>Find Station</Link>
    </motion.nav>
  );
}
