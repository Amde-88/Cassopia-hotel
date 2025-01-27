import React, { useState } from 'react';
import './HomeImage.css';
import cassopiaHotelImage from '../hotel-images/cassopia-hotel.jpeg'; // Hotel image
import attraction1 from '../hotel-images/cassopia-hotel.jpeg'; // Attraction images
import attraction2 from '../hotel-images/hote-latest.avif';
import attraction3 from '../hotel-images/hotel-1.avif';
import attraction4 from '../hotel-images/hotel-logo.png';
import attraction5 from '../hotel-images/hotel-view.avif';

// Import your images for sightseeing
import image1 from '../hotel-images/hotel-night.avif';
import image2 from '../hotel-images/pool-hotel.avif';
import image3 from '../hotel-images/ethiopia.png';
import image4 from '../hotel-images/hotel-view.avif';
import image5 from '../hotel-images/hotel-1.avif';
import image6 from '../hotel-images/hotel-logo.png';
import image7 from '../hotel-images/hote-latest.avif';
import image8 from '../hotel-images/hotelfont.jpg';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set default icon for markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const HomeImage = () => {
    const attractions = [
        { id: 1, name: 'Attraction 1', description: 'Description of Attraction 1.', imageUrl: attraction1 },
        { id: 2, name: 'Attraction 2', description: 'Description of Attraction 2.', imageUrl: attraction2 },
        { id: 3, name: 'Attraction 3', description: 'Description of Attraction 3.', imageUrl: attraction3 },
        { id: 4, name: 'Attraction 4', description: 'Description of Attraction 4.', imageUrl: attraction4 },
        { id: 5, name: 'Attraction 5', description: 'Description of Attraction 5.', imageUrl: attraction5 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const changeImage = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex < 0) return 0;
            if (newIndex >= attractions.length - 3) return attractions.length - 4;
            return newIndex;
        });
    };

    const handleSubscribe = (event) => {
        event.preventDefault();
        alert(`Subscribed with Name: ${name}, Email: ${email}, Phone: ${phone}`);
        setName('');
        setEmail('');
        setPhone('');
        window.scrollTo(0, 0);
    };

    return (
        <div className="hotel-details">
            <div className="hotel-detail-container">
                <div className="hotel-info">
                    <h2>Welcome to Cassopia Hotel</h2>
                    <p>
                        Cassopia Hotel is an exquisite getaway destination designed for travelers seeking luxury, comfort, and an unforgettable experience. 
                        Nestled in a serene environment, the hotel offers a perfect blend of modern amenities and natural beauty.
                    </p>
                    <a href="/rooms" className="view-details-button">View Details</a>
                </div>
            </div>

            <div className="additional-container">
                <div className="additional-image-info">
                  
                <h2>Rooms and Suites</h2>
    <p>
        Experience luxury and comfort in our beautifully designed rooms and suites that cater to every need. 
        Each room is thoughtfully furnished with modern amenities to ensure a pleasant stay. 
        Enjoy breathtaking views, plush bedding, and a tranquil atmosphere, perfect for relaxation.
    </p>
                    <a href="/rooms" className="view-details-button">View Details</a>
                  
                </div>
            </div>

            {/* Sightseeing Component */}
            <Sightseeing />
   <div classname= "map">
            <h2 className='mapp'>CASSOPIA-MAP</h2></div>
            <div className="map-container">
                <div className="map-section">
                    <MapComponent />
                </div>
                <div className="hotel-info-box">
                    <h3>CASSOPIA HOTEL MAP</h3>
                    <ul>
                        <li>Located in a tranquil setting</li>
                        <li>Features spacious rooms</li>
                        <li>Exquisite dining options</li>
                        <li>Friendly and attentive service</li>
                        <li>Beautiful surroundings with a range of activities</li>
                        <li>Perfect for relaxation and adventure</li>
                    </ul>
                </div>
            </div>

            <Subscribe 
                name={name} 
                setName={setName} 
                email={email} 
                setEmail={setEmail} 
                phone={phone} 
                setPhone={setPhone} 
                handleSubscribe={handleSubscribe} 
            />
        </div>
    );
};

// Sightseeing Component
const Sightseeing = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const images = [
        { src: cassopiaHotelImage, name: 'Cassopia Hotel', description: 'A luxurious hotel with stunning views.' },
        { src: image1, name: 'Hotel Night', description: 'Experience the beauty of the night at our hotel.' },
        { src: image2, name: 'Pool Area', description: 'Relax by the pool with our exclusive amenities.' },
        { src: image3, name: 'Ethiopia', description: 'Explore the rich culture and heritage of Ethiopia.' },
        { src: image4, name: 'Hotel View', description: 'Enjoy breathtaking views from your room.' },
        { src: image5, name: 'Hotel Interior', description: 'Experience the elegance of our hotel interiors.' },
        { src: image6, name: 'Hotel Logo', description: 'Our iconic hotel logo.' },
        { src: image7, name: 'Latest Updates', description: 'Stay tuned for our latest offers and updates.' },
        { src: image8, name: 'Hotel Font', description: 'A glimpse of our hotel ambiance.' },
    ];


    const toggleImages = () => {
        setShowAll(!showAll);
    };

    const handleReadMore = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="sightseeing-container">
            <h2 className='sight'>Sightseeing Features</h2>
            <div className="images-row">
                {images.slice(0, showAll ? images.length : 3).map((image, index) => (
                    <div key={index} className="image-card" style={{ backgroundImage: `url(${image.src})` }}>
                        <div className="image-overlay">
                            <h3>{image.name}</h3>
                            <button onClick={() => handleReadMore(index)} className="read-more-button">
                                {activeIndex === index ? 'Show Less' : 'Read More'}
                            </button>
                            {activeIndex === index && <p className="image-description">{image.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={toggleImages} className="toggle-button">
                {showAll ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

// Map Component
const MapComponent = () => {
    const position = [9.145, 40.489673]; // Coordinates for Ethiopia
    const markerPosition = [9.03, 38.74]; // Coordinates for the Cassopia Hotel

    return (
        <MapContainer center={position} zoom={6} style={{ height: '500px', width: '100%', maxWidth: '700px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={markerPosition}>
                <Popup>
                    Cassopia Hotel <br /> Welcome!
                </Popup>
            </Marker>
        </MapContainer>
    );
};

// Subscribe Component
const Subscribe = ({ name, setName, email, setEmail, phone, setPhone, handleSubscribe }) => {
    return (
        <div className="subscribe-section">
            <h2 className="subscribe-title">Subscribe to Cassopia Hotel</h2>
            <p className="subscribe-description">
                Stay informed about special offers, events, and news from Cassopia Hotel. 
                Enter your details below to subscribe to our newsletter!
            </p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="subscribe-input"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="subscribe-input"
                />
                <input
                    type="tel"
                    placeholder="Your Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="subscribe-input"
                />
                <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
        </div>
    );
};

export default HomeImage;