import React from 'react';
import aboutContent from '../content/about.json';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img
                        src={aboutContent.image}
                        alt="Dr. Sarah Mitchell"
                        className="about-image"
                    />
                </div>
                <div className="about-content">
                    <h2 className="section-title about-title">{aboutContent.title}</h2>
                    <p className="about-text">
                        {aboutContent.description1}
                    </p>
                    <p className="about-text">
                        {aboutContent.description2}
                    </p>

                    <div className="about-stats">
                        {aboutContent.stats.map((stat, index) => (
                            <div className="stat-item" key={index}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
