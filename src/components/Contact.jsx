import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [bookings, setBookings] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic (store booking)
        const newBooking = {
            name: `${firstName} ${lastName}`,
            email,
            phone,
            subject,
            message,
        };

        setBookings([...bookings, newBooking]);
        alert('Form submitted');
        
        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setEmailConfirm('');
        setPhone('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <header className="head">
                <h1>Contact Us</h1>
            </header>

            <main className="main-content">
                <div className='main'>
                    <h2 className="main-title">Get In Touch</h2>
                    {/* Info Container */}
                    <div className="info-container">
                        <div className="info-box">
                            <FontAwesomeIcon icon="map-marker-alt" />
                            <h3>ADDRESS</h3>
                            <p>Cassopia Hotel, 123 Main St, Addis-Ababa, Ethiopia</p>
                        </div>
                        <div className="info-box">
                            <FontAwesomeIcon icon="phone" />
                            <h3>PHONE & FAX</h3>
                            <p>24/7 Reservation via Phone</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Fax: (123) 456-7891</p>
                        </div>
                        <div className="info-box">
                            <FontAwesomeIcon icon="envelope" />
                            <h3>E-MAIL</h3>
                            <p>24/7 Reservation via Email</p>
                            <p>Email: amdecassopia@gmail.com</p>
                        </div>
                    </div>
                </div>

                <h2 className="form-title">PLEASE FILL OUT THE FORM</h2>
                <p className="form-description">
                    Welcome to Cassopia Hotel! We are dedicated to providing you with the best service possible. 
                    If you have any questions, feedback, or inquiries, please fill out the form below, and
                    we will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">                    <div className="form-row">
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
                            Last Name <span className="required">*</span>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-row">
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
                    </div>

                    <div className="form-row">
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
                    </div>

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

                <div className="book-details">
                    <h1 className="booking-title">Contact-Form-List</h1>
                    <div className="book-list">
                        {bookings.length > 0 ? (
                            <ul>
                                {bookings.map((booking, index) => (
                                    <li key={index} className="booking-item">
                                        <h2 className="room-title">Contact-Form-{index + 1}</h2>
                                        <div className="booking-row">
                                            <div className="booking-info">
                                                <strong>Name:</strong> {booking.name}
                                            </div>
                                            <div className="booking-info">
                                                <strong>Email:</strong> {booking.email}
                                            </div>
                                        </div>
                                        <div className="booking-row">
                                            <div className="booking-info">
                                                <strong>Phone:</strong> {booking.phone}
                                            </div>
                                            <div className="booking-info">
                                                <strong>Subject:</strong> {booking.subject}
                                            </div>
                                        </div>
                                        <div className="booking-row">
                                            <div className="booking-info">
                                                <strong>Message:</strong> {booking.message}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="empty-message">No contact form made yet.</p>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="foot">
                <div className="footer-column">
                    <h3>BOOK ONLINE</h3>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:amdecassopia@gmail.com">amdecassopia@gmail.com</a></p>
                    <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+251907121842">Contact: +251907121842</a></p>
                    <p><FontAwesomeIcon icon={faQuestionCircle} /> <a href="/faq">FAQ</a></p>
                </div>
                <div className="footer-column">
                    <h3>ABOUT US</h3>
                    <p><FontAwesomeIcon icon={faUsersSolid} /> <a href="/careers">Careers</a></p>
                    <p><FontAwesomeIcon icon={faNewspaper} /> <a href="/about">About Us</a></p>
                    <p><FontAwesomeIcon icon={faNewspaper} /> <a href="/media">Media</a></p>
                </div>
                <div className="footer-column">
                    <h3>CASSOPIA GROUP</h3>
                    <p><FontAwesomeIcon icon={faHotel} /> <a href="/cassopia-hotel">Cassopia Hotel</a></p>
                    <p><FontAwesomeIcon icon={faTree} /> <a href="/cassopia-holiday">Cassopia Holiday</a></p>
                    <p><FontAwesomeIcon icon={faWrench} /> <a href="/group-services">Group Services</a></p>
                    <p><FontAwesomeIcon icon={faHome} /> <a href="/recreation-home">Recreation Home</a></p>
                    <p><FontAwesomeIcon icon={faCar} /> <a href="/ride-class">Ride Class</a></p>
                </div>
                <div className="footer-column">
                    <h3>SOCIAL MEDIA</h3>
                    <p>Contact us on social media:</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </div>
                </div>
                {/* Footer Bottom Section */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Cassopia Hotel. All rights reserved.</p>
                    <div className="social-links">
                        <h2>Follow Us on Social Media:</h2>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} size="lg" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;