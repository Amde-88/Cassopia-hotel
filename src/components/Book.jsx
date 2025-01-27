import React, { useState } from 'react';
import './Book.css';
import cassopiaHotelImage from '../hotel-images/delux.avif';
import standardRoomImage from '../hotel-images/standard.avif';
import premiumRoomImage from '../hotel-images/premium.jpg';
import deluxeRoomImage from '../hotel-images/delux.avif';
import presidentialRoomImage from '../hotel-images/hotelfont.jpg';
import accessibleKingRoomImage from '../hotel-images/standardback.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faQuestionCircle, faUsers as faUsersSolid, faNewspaper, faHotel, faTree, faWrench, faHome, faCar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const rooms = [
  {
    type: 'Standard Room',
    description: 'A cozy room with basic amenities, perfect for budget travelers.',
    price: 450,
    image: standardRoomImage,
    openingTime: '2:00 PM',
    closingTime: '12:00 PM',
  },
  {
    type: 'Premium Room',
    description: 'A spacious room with premium facilities, ideal for a comfortable stay.',
    price: 700,
    image: premiumRoomImage,
    openingTime: '2:00 PM',
    closingTime: '12:00 PM',
  },
  {
    type: 'Deluxe Room',
    description: 'A luxurious room with stunning views and top-notch amenities.',
    price: 999,
    image: deluxeRoomImage,
    openingTime: '2:00 PM',
    closingTime: '12:00 PM',
  },
  {
    type: 'Presidential Room',
    description: 'The ultimate luxury experience with exclusive services.',
    price: 2050,
    image: presidentialRoomImage,
    openingTime: '2:00 PM',
    closingTime: '12:00 PM',
  },
  {
    type: 'Executive Suite',
    description: 'A spacious room featuring a king-size bed, designed for accessibility.',
    price: 3999,
    image: accessibleKingRoomImage,
    openingTime: '2:00 PM',
    closingTime: '12:00 PM',
  },
];

const Book = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState([]);
  const [address] = useState('Cassopia Hotel, Bole, Addis Ababa, Ethiopia.');
  const [phone] = useState('+2519071218142');
  const [website] = useState('http://www.cassopia.com');

  const handleBooking = (room) => {
    setSelectedRoom(room);
    setError('');
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!name || !email || !checkIn || !checkOut || !cardNumber || !expirationDate || !cvv || !cardName) {
      setError('Please fill in all fields.');
      return;
    }

    const newBooking = {
      name,
      email,
      roomType: selectedRoom.type,
      guests,
      checkIn,
      checkOut,
      address,
      phone,
      website,
    };
    setBookings([...bookings, newBooking]);
    alert(`Booking confirmed for ${name} in ${selectedRoom.type} from ${checkIn} to ${checkOut} for ${guests} guests.`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setGuests(1);
    setCheckIn('');
    setCheckOut('');
    setSpecialRequests('');
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
    setCardName('');
    setSelectedRoom(null);
  };

  return (
    <div className="book-container">
      <h1>Book Your Stay at Cassopia Hotel</h1>
      <img src={cassopiaHotelImage} alt="Cassopia Hotel" className="hotel-image" />

      <div className="hotel-info">
        <h2>Contact Details</h2>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Address:</strong> <span>{address}</span>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> <span>{phone}</span>
          </div>
          <div className="contact-item">
            <strong>Website:</strong> <span><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h2>Booking Information</h2>
        <div className="filter-row">
          <div>
            <label>Number of Guests:</label>
            <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
          </div>
          <div>
            <label>Check-in Date:</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
          </div>
          <div>
            <label>Check-out Date:</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
          </div>
        </div>
      </div>

      <div className="room-selection">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <div className="room-image-container">
              <img src={room.image} alt={room.type} className="room-image" />
            </div>
            <div className="room-details">
              <h2>{room.type}</h2>
              <p>{room.description}</p>
              <p><strong>Opening Time:</strong> {room.openingTime}</p>
              <p><strong>Closing Time:</strong> {room.closingTime}</p>
              <p className="price">${room.price}/night</p>
              <button className="book-button" onClick={() => handleBooking(room)}>Select Room</button>
            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="booking-form">
          <h2>Booking Details for {selectedRoom.type}</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmitBooking}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="number" placeholder="Number of Guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
            <textarea placeholder="Special Requests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
            <h3>Payment Information</h3>
            <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            <input type="text" placeholder="Expiration Date (MM/YY)" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
            <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            <input type="text" placeholder="Name on Card" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
            <button type="submit" className="submit-button">Confirm Booking</button>
          </form>
        </div>
      )}

      <div className="book-details">
        <h1 className="booking-title">Booking List</h1>
        <div className="book-list">
          {bookings.length > 0 ? (
            <ul>
              {bookings.map((booking, index) => (
                <li key={index} className="booking-item">
                  <h2 className="room-title">Room-Book-{index + 1}</h2>
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
                      <strong>Room:</strong> {booking.roomType}
                    </div>
                    <div className="booking-info">
                      <strong>Guests:</strong> {booking.guests}
                    </div>
                  </div>
                  <div className="booking-row">
                    <div className="booking-info">
                      <strong>Check-in:</strong> {booking.checkIn}
                    </div>
                    <div className="booking-info">
                      <strong>Check-out:</strong> {booking.checkOut}
                    </div>
                  </div>
                  <div className="booking-row">
                    <div className="booking-info">
                      <strong>Address:</strong> {booking.address}
                    </div>
                    <div className="booking-info">
                      <strong>Phone:</strong> {booking.phone}
                    </div>
                  </div>
                  <div className="booking-row">
                    <div className="booking-info">
                      <strong>Website:</strong> <a href={booking.website} target="_blank" rel="noopener noreferrer">{booking.website}</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No bookings made yet.</p>
          )}
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

export default Book;