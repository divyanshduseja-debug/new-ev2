import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Row 1: Text Left, Image Right (Day) */}
        <div className="about-row">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Built for the <span>Modern Driver</span></h2>
            <p>Our stations are designed with elegance and functionality in mind. Equipped with ultra-fast 180W technology and dual LED status indicators, they blend seamlessly into both urban centers and highway rest stops.</p>
            <ul>
              <li>Sleek, weather-resistant architecture</li>
              <li>High-visibility digital interfaces</li>
              <li>Integrated cable management systems</li>
            </ul>
          </motion.div>
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/day.png" alt="EV Station during day" className="about-image" />
          </motion.div>
        </div>

        {/* Row 2: Image Left (Night), Text Right */}
        <div className="about-row reverse">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>Always <span>Illuminated</span>, Always Ready</h2>
            <p>Whether you're charging at high noon or midnight, our vibrant green LED indicator rings let you know exactly when your car is ready to go. Safety, visibility, and aesthetics combined into one powerhouse unit.</p>
            <button className="btn-secondary" style={{ marginTop: '20px' }}>Learn More</button>
          </motion.div>
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/night.png" alt="EV Station at night" className="about-image" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
