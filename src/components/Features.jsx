// src/components/Features.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Features.css'; // Import the CSS file
import feature from '../hotel-images/hote-feature.avif';
import conferenceImage from '../hotel-images/conference.jpg'; // New conference image
import hubImage from '../hotel-images/hubhotel.webp'; // Hub hotel image
import cultureImage from '../hotel-images/dining.avif';
import loungeImage from '../hotel-images/lounge.webp';
import spaImage from '../hotel-images/spa.avif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Features = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Update handleBookTable to navigate to Book.jsx
  const handleBookTable = () => {
    navigate('/book'); // Navigate to the Book page
  };

  const handleSeeMenu = () => {
    navigate('/rooms'); 
  };

  return (
    <div className="features-container">
      <div className="feature-section">
        <img 
          src={feature} 
          alt="Feature" 
          className="feature-image" 
        />
      </div>
      <div className="feature-description">
        <h2>Restaurants And Bars</h2>
        <p>
          17 food and beverage outlets for a choice of dining experiences ranging from all-day dining,
          places to have tea and coffee while catching up with friends, spots for sips or hand-crafted cocktails 
          before or after dinner with a panoramic view of the airport, and the city, also bars for music lovers.
        </p>
      </div>

      {/* Conference Room Section */}
      <div className="conference-section">
        <img 
          src={conferenceImage} 
          alt="Conference Room" 
          className="conference-image" 
        />
        <div className="conference-details">
          <h2>Conference Room</h2>
          <p>
            Our conference room is equipped with state-of-the-art facilities 
            to ensure your events run smoothly. Whether you are hosting a meeting, 
            seminar, or any corporate event, we have you covered.
          </p>
          <h3>Opening Time</h3>
          <p>Monday to Friday: 9 AM - 5 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
          <div className="buttons">
            <button className="book-table-button" onClick={handleBookTable}>Book A Table</button>
            <button className="see-menu-button" onClick={handleSeeMenu}>See Menu</button>
          </div>
        </div>
      </div>

      {/* Hub Hotel Section */}
      <div className="hub-hotel-section">
        <div className="hub-hotel-container">
          <h2>The African Hub</h2>
          <p>
            Welcome to Hub Hotel, where comfort meets elegance. Our hotel 
            offers a unique blend of luxury and convenience, providing the 
            perfect getaway for both business and leisure travelers. Enjoy 
            our world-class amenities and exceptional service to make your 
            stay memorable.
          </p>
          <h3>Opening Times</h3>
          <p>Breakfast: 7 AM - 10 AM</p>
          <p>Lunch: 12 PM - 3 PM</p>
          <p>Dinner: 6 PM - 10 PM</p>
          <button className="book-table-button" onClick={handleBookTable}>Book A Table</button>
        </div>
        <img 
          src={hubImage} 
          alt="Hub Hotel" 
          className="hub-hotel-image" 
        />
      </div>

      {/* Ethiopian Cultural Restaurant Section */}
      <div className="cultural-restaurant-section">
        <img 
          src={cultureImage} 
          alt="Ethiopian Cultural Restaurant" 
          className="cultural-restaurant-image" 
        />
        <div className="cultural-restaurant-container">
          <h2>Ethiopian Cultural Restaurant</h2>
          <p>
            Experience the rich flavors and traditions of Ethiopian culture 
            at our Ethiopian Cultural Restaurant. Enjoy authentic dishes 
            and immerse yourself in a unique dining experience that celebrates 
            the heritage of Ethiopia.
          </p>
          <h3>Opening Times</h3>
          <p>11 AM - 11 PM</p>
          <button className="book-table-button" onClick={handleBookTable}>Book A Table</button>
          <button className="see-menu-button" onClick={handleSeeMenu}>See Menu</button>
        </div>
      </div>

      {/* Cassopia Lounge Section */}
      <div className="cassopia-lounge-section">
        <div className="cassopia-lounge-container">
          <h2>Cassopia Lounge</h2>
          <p>
            Relax and unwind in the Cassopia Lounge, a perfect spot for casual gatherings or quiet moments. 
            Enjoy a selection of premium beverages and light snacks in a cozy atmosphere that complements your stay. 
            Whether you're meeting friends or enjoying some alone time, the Cassopia Lounge offers a welcoming environment.
          </p>
          <h3>Opening Times</h3>
          <p>02 AM - 04 PM</p>
          <button className="book-table-button" onClick={handleBookTable}>Book A Table</button>
          <button className="see-menu-button" onClick={handleSeeMenu}>See Menu</button>
        </div>
        <img 
          src={loungeImage} 
          alt="Cassopia Lounge" 
          className="cassopia-lounge-image" 
        />
      </div>

      {/* Cassop SPA Section */}
      <div className="cassop-spa-section">
        <img 
          src={spaImage} 
          alt="Cassop SPA" 
          className="cassop-spa-image" 
        />
        <div className="cassop-spa-container">
          <h2>Cassop SPA</h2>
          <p>
            Indulge in a luxurious experience at Cassop SPA, where tranquility meets rejuvenation. 
            Our skilled therapists offer a range of treatments designed to relax your mind and body, 
            leaving you refreshed and revitalized. Enjoy a serene atmosphere that enhances your wellness journey.
          </p>
          <h3>Opening Times</h3>
          <p>Morning: 05 PM - 10 AM</p>
          <p>Afternoon: 04 AM - 08 PM</p>
          <button className="book-table-button" onClick={handleBookTable}>Book A Treatment</button>
        </div>
      </div>

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

export default Features;