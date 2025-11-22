import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesContent from '../content/services.json';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const service = servicesContent.services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="container section">
                <h2>Service not found</h2>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="service-details-page">
            <div className="service-details-header">
                <div className="container">
                    <Link to="/" className="back-link">← Back to Home</Link>
                    <span className="service-details-icon">{service.icon}</span>
                    <h1 className="service-details-title">{service.title}</h1>
                </div>
            </div>

            <div className="container service-details-content">
                <p className="service-details-description">{service.fullDescription}</p>

                <h3>Common Treatments & Services</h3>
                <ul className="service-details-list">
                    {service.treatments.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <h3>Ready to schedule a consultation?</h3>
                    <p style={{ marginBottom: '20px', color: 'var(--color-text-light)' }}>
                        Book an appointment with our specialists today.
                    </p>
                    <Link to="/#booking" className="btn btn-primary">Book Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
