import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Location.css';

const Location = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="location" className={`section location-section fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
            <div className="container location-container">
                <div className="location-info">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Visit Us</h2>
                    <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
                        Conveniently located in the heart of the city.
                    </p>

                    <div className="location-details">
                        <div className="location-item">
                            <span className="location-icon">📍</span>
                            <div>
                                <strong>MedCare Clinic</strong><br />
                                123 Medical Center Drive<br />
                                New York, NY 10001
                            </div>
                        </div>

                        <div className="location-item">
                            <span className="location-icon">🕒</span>
                            <div>
                                <strong>Hours</strong><br />
                                Mon - Fri: 8:00 AM - 8:00 PM<br />
                                Sat - Sun: 9:00 AM - 5:00 PM
                            </div>
                        </div>

                        <div className="location-item">
                            <span className="location-icon">📞</span>
                            <div>
                                <strong>Contact</strong><br />
                                (555) 123-4567<br />
                                info@medcare.com
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location-map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus"
                        className="location-map"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;
