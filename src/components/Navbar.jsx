import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    closeMenu();
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">✚</span> MedCare
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a
            href="/#services"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>
          <a
            href="/#location"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'location')}
          >
            Location
          </a>
          <a
            href="/#about"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
          <a
            href="/#booking"
            className="btn btn-primary"
            onClick={(e) => scrollToSection(e, 'booking')}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
