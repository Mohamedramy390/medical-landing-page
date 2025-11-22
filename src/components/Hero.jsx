import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import heroContent from '../content/hero.json';
import './Hero.css';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`hero fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">{heroContent.badge}</span>
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-subtitle">
            {heroContent.subtitle}
          </p>
          <a href="#booking" className="btn btn-primary">{heroContent.ctaText}</a>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroContent.image}
            alt="Doctor"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
