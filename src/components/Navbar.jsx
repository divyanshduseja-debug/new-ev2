import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <Zap color="#4CAF50" size={32} />
        <div>JAKHARS <span>POWER</span></div>
      </Link>
      
      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>

      <div className="nav-actions">
        <Link to="/contact" className="nav-cta">Find Station</Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
            <Link to="/features" className={location.pathname === '/features' ? 'active' : ''} onClick={closeMenu}>Features</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
