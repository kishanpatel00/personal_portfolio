import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      className="hero-section text-center py-6"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="display-4"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="lead"
            >
              I'm a passionate developer who loves building amazing web applications.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;