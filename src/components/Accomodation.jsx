import React from 'react';
import { Link } from 'react-router-dom';
import './Accommodation.css'; // Import CSS for styles
import standardRoomImage from '../hotel-images/feature-font.avif'; // Ensure the path is correct
import bathtubImage from '../hotel-images/bathtub.png'; // Import the bathtub image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';


const Accomodation = () => {
    return (
        <div className="accommodation-container">
            <div className="image-container">
                <img src={standardRoomImage} alt="Standard Room" className="standard-room-image" />
            </div>
            <div className="description-container">
                <h3>Rooms And Suites</h3>
                <h4>
                Cassopia Hotel is a premier destination for both business and leisure travelers, 
                offering a perfect blend of comfort, luxury, and exceptional service. 
                Located in the heart of the city, the hotel provides easy access to major attractions, 
                Guests can choose from standard rooms, deluxe rooms, and luxurious suites, all adorned with 
                tasteful decor and equipped with high-speed internet, flat-screen TVs, minibars, and plush bedding.
                </h4>
               
                <div className="show-detail">
                    <div className="show-detail-container">
                        <div className="show-information">
                            <h2>Standard Rooms</h2>
                            <p>
                                Our Standard Rooms offer a perfect blend of comfort and style. Each room is equipped with modern amenities, ensuring a relaxing stay. 
                                Enjoy breathtaking views and unwind in an elegant environment designed for travelers seeking both luxury and convenience.
                            </p>
                            <Link to="/Book" className="view-more-button">Book Now</Link>
                        </div>
                    </div>
                </div>
                
                <div className="icon-row">
                    {/* Icons for amenities using bathtub image */}
                    <div className="icon">
                        <img src={bathtubImage} alt="Fridge" className="icon-image" />
                        <span>Fridge</span>
                   </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Tea/Coffee" className="icon-image" />
                        <span>Tea/Coffee</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Safe" className="icon-image" />
                        <span>Safe</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Free Internet" className="icon-image" />
                        <span>Free Internet</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Dining Area" className="icon-image" />
                        <span>Dining Area</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="TV Channel" className="icon-image" />
                        <span>TV Channel</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Telephone" className="icon-image" />
                        <span>Telephone</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Hairdryer" className="icon-image" />
                        <span>Hairdryer</span>
                    </div>
                </div>
            </div>
      
            <div className="show-premium">
                <div className="show-premium-container">
                    <div className="premium-information">
                        <h5>Premium Rooms</h5>
                        <p>
                        Cassopia Hotel stands as a beacon of elegance and comfort, offering a unique blend of luxury and modern amenities.
                            Our Premium Rooms offer a perfect blend of comfort and elegance. Each room is equipped with upscale amenities, ensuring a lavish stay. 
                            Enjoy stunning views and unwind in a sophisticated environment designed for discerning travelers.

                        </p>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>
            
            <div className="icon-roww">
                    {/* Icons for amenities using bathtub image */}
                    <div className="icon">
                        <img src={bathtubImage} alt="Fridge" className="icon-image" />
                        <span>Fridge</span>
                   </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Tea/Coffee" className="icon-image" />
                        <span>Tea/Coffee</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Safe" className="icon-image" />
                        <span>Safe</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Free Internet" className="icon-image" />
                        <span>Free Internet</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Dining Area" className="icon-image" />
                        <span>Dining Area</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="TV Channel" className="icon-image" />
                        <span>TV Channel</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Telephone" className="icon-image" />
                        <span>Telephone</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Hairdryer" className="icon-image" />
                        <span>Hairdryer</span>
                    </div>
                    </div>
                    
            <div className="show-Deluxe">
                <div className="show-Deluxe-container">
                    <div className="Deluxe-information">
                        <h5>Deluxe Rooms</h5>
                        <p>
                        Experience unparalleled comfort and luxury in the Cassopia Deluxe Room. Designed with elegance in mind, 
                        this spacious room offers a perfect retreat for both leisure and business travelers.
                            The Deluxe Room offers a luxurious and spacious environment, designed for both comfort and style.                      
                  
                        </p>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="icon-rows">
               
                <div className="icon">
                    <img src={bathtubImage} alt="Bathrobe" className="icon-images" />
                    <span>Bathrobe</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Bathtub" className="icon-images" />
                    <span>Bathtub</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Air Conditioning" className="icon-images" />
                    <span>Air Conditioning</span>
                </div>
                <div className="icon">
                        <img src={bathtubImage} alt="Safe" className="icon-images" />
                        <span>Safe</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Free Internet" className="icon-images" />
                        <span>Free Internet</span>
                    </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Complimentary Snacks" className="icon-images" />
                    <span>Complimentary Snacks</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Luxury Toiletries" className="icon-images" />
                    <span>Luxury Toiletries</span>
                </div>
            </div>

            <div className="show-King">
                <div className="show-King-container">
                    <div className="King-information">
                        <h5>Execuitive Suite</h5>
                        <p>
                        The Accessible King Room at Cassopia Hotel is thoughtfully designed to provide comfort and convenience for all guests.
                         Featuring a spacious layout, this room is equipped with a plush king-sized bed, ensuring a restful night's sleep.
                        </p>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="icon-rows">
               
                <div className="icon">
                    <img src={bathtubImage} alt="Bathrobe" className="icon-images" />
                    <span>Bathrobe</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Bathtub" className="icon-images" />
                    <span>Bathtub</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Air Conditioning" className="icon-images" />
                    <span>Air Conditioning</span>
                </div>
                <div className="icon">
                        <img src={bathtubImage} alt="Safe" className="icon-images" />
                        <span>Safe</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Free Internet" className="icon-images" />
                        <span>Free Internet</span>
                    </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Complimentary Snacks" className="icon-images" />
                    <span>Complimentary Snacks</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Luxury Toiletries" className="icon-images" />
                    <span>Luxury Toiletries</span>
                </div>
            </div>

            <div className="show-Presidential">
                <div className="show-Presidential-container">
                    <div className="Presidential-information">
                        <h5>Presidential Suite</h5>
                        <p>
                        Experience unparalleled luxury in our Presidential Room,
                         designed for the discerning traveler seeking the ultimate in comfort and sophistication.
                         This spacious suite features elegant furnishings,
                         a king-sized bed with premium linens, and a separate living area that provides both relaxation and entertainment.
                        </p>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="icon-rows">
               
                <div className="icon">
                    <img src={bathtubImage} alt="Bathrobe" className="icon-images" />
                    <span>Bathrobe</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Bathtub" className="icon-images" />
                    <span>Bathtub</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Air Conditioning" className="icon-images" />
                    <span>Air Conditioning</span>
                </div>
                <div className="icon">
                        <img src={bathtubImage} alt="Safe" className="icon-images" />
                        <span>Safe</span>
                    </div>
                    <div className="icon">
                        <img src={bathtubImage} alt="Free Internet" className="icon-images" />
                        <span>Free Internet</span>
                    </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Complimentary Snacks" className="icon-images" />
                    <span>Complimentary Snacks</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Luxury Toiletries" className="icon-images" />
                    <span>Luxury Toiletries</span>
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

export default Accomodation;