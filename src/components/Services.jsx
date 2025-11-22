import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import servicesContent from '../content/services.json';
import './Services.css';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { services } = servicesContent;

  return (
    <section id="services" className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref} style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <h2 className="section-title">{servicesContent.title}</h2>
        <p className="section-subtitle">{servicesContent.subtitle}</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              to={`/service/${service.id}`}
              key={index}
              className="service-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
