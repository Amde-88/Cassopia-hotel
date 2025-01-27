import React from 'react';
import './Rooms.css';
import standardRoomImage from '../hotel-images/delux.avif';
import deluxeRoomImage from '../hotel-images/spa.avif';
import premiumRoomImage from '../hotel-images/prime.avif';
import presidentialRoomImage from '../hotel-images/hotelfont.jpg';
import accessibleKingRoomImage from '../hotel-images/standardback.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';


const roomsData = [
    {

        title: 'Standard Room',
        description: 'A cozy room with essential amenities for a comfortable stay.',
        functional: 'Wi-Fi, TV, AC',
        rate: '$300/night',
        openingTime: 'Check-in: 2 PM',
        endingTime: 'Check-out: 11 AM',
        image: standardRoomImage,
    },
    {
        title: 'Deluxe Room',
        description: 'A spacious room with upgraded amenities and a beautiful view.',
        functional: 'Wi-Fi, TV, AC, Mini-bar',
        rate: '$450/night',
        openingTime: 'Check-in: 2 PM',
        endingTime: 'Check-out: 11 AM',
        image: deluxeRoomImage,
    },
    {
        title: 'Premium Room',
        description: 'A luxurious room with premium facilities and a king-size bed.',
        functional: 'Wi-Fi, TV, AC, Mini-bar, Room Service',
        rate: '$600/night',
        openingTime: 'Check-in: 2 PM',
        endingTime: 'Check-out: 11 AM',
        image: premiumRoomImage,
    },
    {
        title: 'Presidential Suite',
        description: 'An extravagant suite with exclusive amenities and a stunning view.',
        functional: 'Wi-Fi, TV, AC, Mini-bar, Room Service, Private Pool',
        rate: '$1050/night',
        openingTime: 'Check-in: 2 PM',
        endingTime: 'Check-out: 11 AM',
        image: presidentialRoomImage,
    },
    {
        title: 'Execuitive Suite',
        description: 'A spacious room featuring a king-size bed, designed for accessibility with enhanced amenities.',
        functional: 'Wi-Fi, TV, AC, Mini-bar, Accessible Features',
        rate: '$2250/night',
        openingTime: 'Check-in: 2 PM',
        endingTime: 'Check-out: 11 AM',
        image: accessibleKingRoomImage,
    },
];

const Rooms = () => {
    return (
        <div className="rooms-container">
            <h1 className="rooms-title">Rooms at Cassopia Hotel</h1>
            <div className="rooms-list">
                {roomsData.map((room, index) => (
                    <div className="room-card" key={index}>
                        <div className="room-image-container">
                            <img
                                className="room-image"
                                src={room.image}
                                alt={room.title}
                                style={{ width: '1100px', height: '900px' }}
                            />
                      
                        <div className="room-details">
                            <div className="room-details-container">
                                <h2 className="room-title">{room.title}</h2>
                                <p className="room-description">{room.description}</p>
                                <p className="room-functional"><strong>Amenities:</strong> {room.functional}</p>
                                <p className="room-opening-time"><strong>Opening Time:</strong> {room.openingTime}</p>
                                <p className="room-ending-time"><strong>Ending Time:</strong> {room.endingTime}</p>
                                <p className="room-rate"><strong>Rate:</strong> {room.rate}</p>
                                <button className="book-button" onClick={() => window.location.href = '/book'}>
                                    Book Room
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
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

export default Rooms;