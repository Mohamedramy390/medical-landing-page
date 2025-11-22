import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Booking.css";

const Booking = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "General Checkup",
        date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbxUItYp0cXaU38ZxPqEX0yNxYR_hFhh5SlKPkwBPTpAiyuWFIj8aV36LlFHOtpezxv0/exec", {
                method: "POST",
                body: new URLSearchParams(formData) // send as form-encoded
            });

            if (response.ok) {
                alert("Your appointment has been submitted!");
                setFormData({ name: "", email: "", service: "General Checkup", date: "" });
            } else {
                alert("Submission failed. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Try again.");
        }
    };

    return (
        <section
            id="booking"
            className={`section booking-section fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={ref}
        >
            <div className="container">
                <h2 className="section-title">Book an Appointment</h2>
                <p className="section-subtitle">
                    Schedule your visit online. We will confirm your appointment via email.
                </p>

                <div className="booking-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="John Doe"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="john@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Service</label>
                            <select
                                className="form-select"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option>General Checkup</option>
                                <option>Cardiology Consultation</option>
                                <option>Pediatrics</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Preferred Date</label>
                            <input
                                type="date"
                                className="form-input"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
