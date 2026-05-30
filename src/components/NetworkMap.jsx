import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';

function Globe() {
  const globeRef = useRef();
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial color="#1a1a1a" wireframe transparent opacity={0.2} />
      </Sphere>
      
      {/* Markers */}
      <Marker position={[2, 1, 1]} label="New York" />
      <Marker position={[-1.5, 1.5, 1.5]} label="London" />
      <Marker position={[1, -1, 2]} label="Tokyo" />
      <Marker position={[-2, -1, -1]} label="Sydney" />
    </group>
  );
}

function Marker({ position, label }) {
  return (
    <group position={position}>
      <Sphere args={[0.08, 16, 16]}>
        <meshBasicMaterial color="#4CAF50" />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[0.15, 16, 16]}>
        <meshBasicMaterial color="#4CAF50" transparent opacity={0.4} />
      </Sphere>
      <Html distanceFactor={15}>
        <div className="globe-marker-label">{label}</div>
      </Html>
    </group>
  );
}

export default function NetworkMap() {
  return (
    <section className="network-section" id="network">
      <div className="network-content">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'white' }}
        >
          A Growing <span>Global Network</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#aaa', textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}
        >
          Find JAKHARS Power Points across the globe. Our fast-charging infrastructure is rapidly expanding to support the electric revolution everywhere you travel.
        </motion.p>
      </div>

      <div className="globe-container">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={1} />
          <Globe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
