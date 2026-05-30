import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Seamless Charging <span>Experience</span>
      </motion.h2>

      <div className="how-it-works-container">
        {/* Step 1 */}
        <div className="hiw-step">
          <motion.div 
            className="hiw-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/ev_app_mockup.png" alt="Find Station App" className="hiw-image" />
          </motion.div>
          <motion.div 
            className="hiw-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>1. Find & Reserve</h3>
            <p>Use our dedicated app to locate the nearest JAKHAR'S Power Point and instantly reserve a charging spot before you even arrive.</p>
          </motion.div>
        </div>

        {/* Step 2 */}
        <div className="hiw-step reverse">
          <motion.div 
            className="hiw-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/ev_charging_car.png" alt="EV Charging" className="hiw-image" />
          </motion.div>
          <motion.div 
            className="hiw-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>2. Plug & Power Up</h3>
            <p>Simply plug in our 180W fast-charging cable. Our smart stations automatically authenticate your vehicle and begin rapid charging instantly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
