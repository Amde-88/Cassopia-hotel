import React from 'react';
import './hotel-main.css'; // Ensure you create this CSS file
import hotelImage from './hotel-view.avif'; // Adjust the path as needed

const HotelMain = () => {
    const weekendDate = '2024-12-07';
    const fullDate = '2024-12-06';

    return (
        <div className="container">
            <div className="image-section">
                <img src={hotelImage} alt="Cassopia Hotel View" />
                <div className="date-label">
                    Weekend: {weekendDate}<br />
                    Full Date: {fullDate}
                </div>
            </div>
            <div className="details-section">
                <h1>Welcome to Cassopia Hotel</h1>
                <p>
                    Cassopia Hotel is your perfect getaway destination, offering luxurious accommodations and stunning views. Nestled in the heart of nature, our hotel provides a serene environment that is ideal for relaxation.
                </p>
                <p>
                    Enjoy top-notch amenities including a spa, gourmet dining, and adventurous activities. Whether you're here for a weekend escape or an extended stay, Cassopia Hotel guarantees an unforgettable experience.
                </p>
                <p>
                    Book your stay now and immerse yourself in the beauty of our surroundings!
                </p>
            </div>
        </div>
    );
};

export default HotelMain;