import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="page-content">
      <section className="contact-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span>Touch</span>
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p>Ready to electrify your property or have questions about our network? Reach out to us directly.</p>
            
            <div className="contact-item">
              <Mail color="#4CAF50" />
              <span>support@jakharspowerpoint.com</span>
            </div>
            <div className="contact-item">
              <Phone color="#4CAF50" />
              <span>+1 (800) 555-CHARGE</span>
            </div>
            <div className="contact-item">
              <MapPin color="#4CAF50" />
              <span>123 Green Energy Blvd, Silicon Valley, CA 94025</span>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help?"></textarea>
            </div>
            <button className="btn-primary" type="submit">Send Message</button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
