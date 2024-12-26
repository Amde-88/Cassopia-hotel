import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Form submitted');
    };

    return (
        <div className="contact-container">
            <header className="header">
                <h1>Contact Us</h1>
            </header>

            <main className="main-content">
                <h2 className="main-title">Get In Touch</h2>
                <div className="info-container">
                    <div className="info-box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>ADDRESS</h3>
                        <p>Cassopia Hotel, 123 Main St, Anytown, USA</p>
                    </div>
                    <div className="info-box">
                        <i className="fas fa-phone"></i>
                        <h3>PHONE & FAX</h3>
                        <p>24/7 Reservation via Phone</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Fax: (123) 456-7891</p>
                    </div>
                    <div className="info-box">
                        <i className="fas fa-envelope"></i>
                        <h3>E-MAIL</h3>
                        <p>24/7 Reservation via Email</p>
                        <p>Email: amdecassopia@gmail.com</p>
                    </div>
                </div>

                <h2 className="form-title">PLEASE FILL OUT THE FORM</h2>
                <p className="form-description">We are here to assist you!</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        First Name <span className="required">*</span>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Name <span className="required">*</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        E-MAIL Address <span className="required">*</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        E-MAIL Confirm <span className="required">*</span>
                        <input
                            type="email"
                            value={emailConfirm}
                            onChange={(e) => setEmailConfirm(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Phone Number <span className="required">*</span>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Subject
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </label>

                    <label>
                        Your Message <span className="required">*</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit" className="send-button">Send Inquiry</button>
                </form>
            </main>

            
        </div>
    );
};

export default Contact;