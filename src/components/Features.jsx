import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BatteryFull, Timer, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Zap size={36} />,
    title: "180 Watt Power",
    desc: "Industry-leading 180W power output delivers maximum charge in minimum time for your EV."
  },
  {
    icon: <BatteryFull size={36} />,
    title: "4 Charging Guns",
    desc: "Simultaneous fast charging for up to 4 vehicles at once. Less waiting, more driving."
  },
  {
    icon: <Timer size={36} />,
    title: "Ultra Fast Charging",
    desc: "Get an 80% charge in just 20 minutes with our advanced DC fast-charging technology."
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Safe & Secure",
    desc: "Built-in thermal management and surge protection ensures your vehicle battery is always safe."
  }
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Choose <span>JAKHARS</span>
      </motion.h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
