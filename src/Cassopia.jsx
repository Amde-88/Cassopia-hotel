// src/Cassopia.jsx

import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Accomodation from './components/Accomodation';
import Rooms from './components/Rooms';
import Features from './components/Features'
import Book from './components/Book';
import Clock from './Clock'; // Import the Clock component
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import { FaSearch, FaCalendarAlt, FaUsers } from 'react-icons/fa'; // Ensure these are imported
import './Cassopia.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

// Import images from the src directory
import hotelImage1 from './hotel-images/cassopia-hotel.jpeg';
import hotelImage2 from './hotel-images/hotel-night.avif';
import hotelImage3 from './hotel-images/pool-hotel.avif';
import ethiopiaLogo from './hotel-images/ethiopia.png';
import HomeImage from './components/HomeImage'; // Import the new component


const Cassopia = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        const availableRooms = ["Gonna To Accommdation Center Well-Come"];
        const amenities = [];
        const allItems = [...availableRooms, ...amenities];
    
        const results = allItems.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        if (results.length > 0) {
            // Navigate to Accommodation if a room is found
            if (availableRooms.includes(results[0])) {
                navigate('/accomodation'); // Change navigation based on the search
            }
            setSearchResults(results);
        } else {
             // Redirect to Google search if term does not match any route
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
        }
        setSearchTerm('');
    };

    return (
        <div>
            <header className="header">
                <img src={ethiopiaLogo} alt="Ethiopian Logo" className="logo" />
                <div className="header-title">
                    <h1>CASSOPIA HOTEL</h1>
                    <h2>WELCOME TO CASSOPIA</h2>
                </div>

                   {/* Clocks Section */}
            <div className="clocks-container">
            
                <Clock timeZone="Europe/London" city="London" />
                <Clock timeZone="Africa/Addis_Ababa" city="Addis Ababa" />
             
            </div>
                <div className="contact-info">
                    <h2>
                        Mailto: <a href="mailto:amdecassopia@gmail.com">amdecassopia@gmail.com</a>
                    </h2>
                    <h2>
                        Tele: <a href="tel:+251907121842">+251907121842</a>
                    </h2>
                </div>
            </header>


         

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/accomodation">Accomodation</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/book">Book</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
    <form onSubmit={handleSearch} className="search-form">
        <div className="row">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    </form>
</li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home navigate={navigate} />} />
                <Route path="/accomodation" element={<Accomodation />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/features" element={<Features />} />
                <Route path="/book" element={<Book />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>

            <div className="search-results">
                {searchResults && (
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Show HomeImage only on the home route */}
            <Routes>
                <Route path="/" element={<HomeImage />} />
            </Routes>

            {/* Footer component should be rendered only on the home route */}
            <Routes>
                <Route path="/" element={<Footer />} />
            </Routes>
        </div>
    
    );
};

const Home = ({ navigate }) => {
    const images = [hotelImage1, hotelImage2, hotelImage3];
    const [currentImage, setCurrentImage] = useState(0);
    const [arrivingDate, setArrivingDate] = useState('');
    const [departingDate, setDepartingDate] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [additionalGuests, setAdditionalGuests] = useState(0);
    const [showGuestDetails, setShowGuestDetails] = useState(false);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        alert(`Booking Details:\nArriving: ${arrivingDate}\nDeparting: ${departingDate}\nAdults: ${adults}\nChildren: ${children}\nAdditional Guests: ${additionalGuests}`);
    };

    const checkAvailability = () => {
        navigate('/rooms');
    };

    return (
        <div className="home">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            >
                <button className="prev" onClick={prevImage}>❮</button>
                <button className="next" onClick={nextImage}>❯</button>
            </div>
            <div className="content">
                <h1>WELCOME TO CASSOPIA HOTEL</h1>
                <p>Your comfort is our priority.</p>
                <form onSubmit={handleBookingSubmit} className="booking-form">
                   
                <div className='guesting'>
                                    <h2>
                                        CLICK TO ADD CASSOPIA-HOTEL ROOM GUESTS...
                                    </h2>
                                 </div>
                        <div className="input-container guests">
                         <label>ADD-GUESTS: <FaUsers /></label> 
                         <button className='guests-button'>
                            <label onClick={() => setShowGuestDetails((prev) => !prev)} style={{ cursor: 'pointer' }}>
                                Guests: {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}
                            </label> </button>
                            {showGuestDetails && (
                                <div className="guest-details">
                                    <div className="input-group">
                                        <label>Adults:</label>
                                        <input
                                            type="number"
                                            value={adults}
                                            onChange={(e) => setAdults(e.target.value)}
                                            min="1"
                                            required
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Children:</label>
                                        <input
                                            type="number"
                                            value={children}
                                            onChange={(e) => setChildren(e.target.value)}
                                            min="0"
                                        />
                                        
                                
                                    <div className="input-group booking-inputs">
                                    <div className="input-container">
                            <label>ARRIVING: <FaCalendarAlt /></label>
                            <input
                                type="date"
                                value={arrivingDate}
                                onChange={(e) => setArrivingDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>DEPARTING: <FaCalendarAlt /></label>
                            <input
                                type="date"
                                value={departingDate}
                                onChange={(e) => setDepartingDate(e.target.value)}
                                required
                            />
                             </div>
                        </div>
                        </div>
                                </div>
                            )}
                        </div>
                   
                    <div className="button-container">
                        <button type="button" className="check-availability-button" onClick={checkAvailability}>
                            Check Availability
                        </button>
                        <button type="submit" className="booking-button">Book Now</button>
                    </div>
                </form>
                <div className="booking-summary">
                    <h2>Booking Summary</h2>
                    <p><strong>Guests:</strong> {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {additionalGuests} Additional Guest{additionalGuests > 1 ? 's' : ''}</p>            
                    <p><strong>Arriving:</strong> {arrivingDate}</p>
                    <p><strong>Departing:</strong> {departingDate}</p>
                     </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
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
                <p>Contact with us on social media:</p>
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

            {/* Last part of the footer */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Cassopia Hotel. All rights reserved.</p>
                <div className="social-links">
                    <h2>Follow US on Social media Pages:</h2>
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
    );
};



export default Cassopia;