import React from 'react';
import { Link } from 'react-router-dom';
import './Accommodation.css'; // Import CSS for styles
import standardRoomImage from '../hotel-images/hotelfont.jpg'; // Ensure the path is correct
import bathtubImage from '../hotel-images/bathtub.png'; // Import the bathtub image

const Accomodation = () => {
    return (
        <div className="accommodation-container">
            <div className="image-container">
                <img src={standardRoomImage} alt="Standard Room" className="standard-room-image" />
            </div>
            <div className="description-container">
                <h3>Rooms And Suites</h3>
                <h4>
                    Our Standard Room offers a cozy and comfortable experience for all guests. 
                    With a queen-sized bed, modern amenities, and a beautiful view, it's the perfect 
                    retreat after a long day of exploring. Enjoy complimentary Wi-Fi, a flat-screen 
                    TV, and a mini-fridge for your convenience.
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
]                    </div>
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
                        <h6>
                            Our Premium Rooms offer a perfect blend of comfort and elegance. Each room is equipped with upscale amenities, ensuring a lavish stay. 
                            Enjoy stunning views and unwind in a sophisticated environment designed for discerning travelers.
                        </h6>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>
            <div className="show-Deluxe">
                <div className="show-Deluxe-container">
                    <div className="Deluxe-information">
                        <h5>Deluxe Rooms</h5>
                        <h6>
                            The Deluxe Room offers a luxurious and spacious environment, designed for both comfort and style.                      
                            Perfect for travelers seeking an elevated experience, this room combines modern amenities with elegant decor.
                        </h6>
                        <Link to="/Book" className="view-more-button">Book Now</Link>
                    </div>
                </div>
            </div>

            <div className="icon-rows">
                <div className="icon">
                    <img src="../hotel-images/icons-image/mini-bar.png" alt="Mini Bar" className="icon-images" />
                    <span>Mini Bar</span>
                </div>
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
                    <img src={bathtubImage} alt="Complimentary Snacks" className="icon-images" />
                    <span>Complimentary Snacks</span>
                </div>
                <div className="icon">
                    <img src={bathtubImage} alt="Luxury Toiletries" className="icon-images" />
                    <span>Luxury Toiletries</span>
                </div>
            </div>
        </div>
    );
};

export default Accomodation;