import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Cylinder, Box, Ring } from '@react-three/drei';
import { motion } from 'framer-motion';
import { BatteryCharging, ArrowRight } from 'lucide-react';

function AdvancedBatteryStation() {
  const groupRef = useRef();
  const innerRingRef = useRef();
  const outerRingRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      innerRingRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = state.clock.getElapsedTime() * -0.2;
      outerRingRef.current.rotation.y = state.clock.getElapsedTime() * -0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Battery Core */}
      <Cylinder args={[0.8, 0.8, 3, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Glowing Inner Energy */}
      <Cylinder args={[0.82, 0.82, 2.5, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4CAF50" emissive="#4CAF50" emissiveIntensity={2} transparent opacity={0.6} wireframe />
      </Cylinder>
      
      {/* Top Cap */}
      <Box args={[1, 0.2, 1]} position={[0, 1.6, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Box args={[0.4, 0.4, 0.4]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color="#4CAF50" emissive="#4CAF50" emissiveIntensity={1} />
      </Box>

      {/* Bottom Cap */}
      <Box args={[1, 0.2, 1]} position={[0, -1.6, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>

      {/* Dynamic Rotating Rings */}
      <group ref={innerRingRef}>
        <Ring args={[1.5, 1.6, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#4CAF50" side={2} emissive="#4CAF50" emissiveIntensity={1} />
        </Ring>
      </group>

      <group ref={outerRingRef}>
        <Ring args={[2.2, 2.4, 64]} position={[0, 0, 0]} rotation={[Math.PI / 3, Math.PI/4, 0]}>
          <meshStandardMaterial color="#ffffff" side={2} transparent opacity={0.5} />
        </Ring>
        {/* Floating Modules on Outer Ring */}
        <Box args={[0.4, 0.4, 0.4]} position={[2.3, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.4, 0.4, 0.4]} position={[-2.3, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      </group>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BatteryCharging size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          180 WATT FAST CHARGER
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Powering the Future with <span>JAKHARS</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Experience lightning-fast EV charging. Our state-of-the-art 180W stations with 4 simultaneous charging guns are ready to get you back on the road in minutes.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <button className="btn-primary">
            Start Charging
            <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
          </button>
          <button className="btn-secondary">View Stations</button>
        </motion.div>
      </div>

      <div className="canvas-container">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4CAF50" />
          <Environment preset="city" />
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <AdvancedBatteryStation />
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
