import React from 'react';
import { motion } from 'framer-motion';
//import profileImage from "../assets/profile.png"; // ✅ Adjust path if needed


const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="py-5"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>I am a full-stack developer with expertise in React, Node.js, and modern web technologies.</p>
          </div>
          <div className="col-md-6">
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              src="/profile.jpg"
              alt="About Me"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;