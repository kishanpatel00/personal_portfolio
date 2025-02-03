import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { motion } from 'framer-motion'; // For animations

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div className="container">
        {/* Brand/Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-brand"
          style={{ cursor: 'pointer' }}
        >
          My Portfolio
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;