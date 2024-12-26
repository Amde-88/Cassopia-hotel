import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faCalendarCheck, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import hotelImage from '../hotel-images/cassopia-hotel.jpeg'; // Adjust the path to your hotel image
import './Book.css'; // Import the CSS file

const HotelDetails = () => {
  return (
    <div className="book-container">
      <div className="hotel-details">
        <div className="detail-row">
          <img src={hotelImage} alt="Cassopia Hotel" className="hotel-icon" />
          <span className="hotel-name">Address: Addis Ababa, Bole, Hotel-Plaza</span>
        </div>
        <div className="detail-row">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span className="contact-number">+251907121842</span>
        </div>
        <div className="detail-row">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <a href="https://www.cassopiahotel.com" className="website">www.cassopiahotelwebsite.com</a>
        </div>
      </div>
    </div>
  );
};

const GuestSelector = ({ onApply, onCancel }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  const handleApply = () => {
    onApply(adults, children, checkInDate, checkOutDate);
    setShowGuestSelector(false);
  };

  return (
    <div>
      <button onClick={() => setShowGuestSelector(!showGuestSelector)} className="guest-button">
        <FontAwesomeIcon icon={faUser} /> Guests
      </button>
      {showGuestSelector && (
        <div className="guest-details">
          <h2>Guests</h2>
          <div className="guest-inputs">
            <div className="guest-input">
              <span>Adults:</span>
              <button onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}>-</button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
            <div className="guest-input">
              <span>Children:</span>
              <button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
          </div>
          <div className="date-input">
            <h3>Check-In</h3>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="date-input">
            <h3>Check-Out</h3>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button onClick={handleApply} className="apply-button">Apply</button>
            <button onClick={() => { setShowGuestSelector(false); onCancel(); }} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const RoomBooking = () => {
  const rooms = [
    { id: 1, name: 'Standard Room', price: 150 },
    { id: 2, name: 'Deluxe Room', price: 200 },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    room: null,
    guestCount: 1,
  });

  const handleBook = (room) => {
    setSelectedRoom(room);
    setBookingDetails({ ...bookingDetails, room });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingDetails.guestCount} guest(s) in ${bookingDetails.room.name} from ${bookingDetails.checkInDate} to ${bookingDetails.checkOutDate}`);
    setBookingDetails({ name: '', checkInDate: '', checkOutDate: '', room: null, guestCount: 1 });
    setSelectedRoom(null);
  };

  const handleGuestSelection = (adults, children, checkIn, checkOut) => {
    setBookingDetails({ 
      ...bookingDetails, 
      guestCount: adults + children, 
      checkInDate: checkIn, 
      checkOutDate: checkOut 
    });
  };

  return (
    <div>
      <h1>Cassopia Hotel - Available Rooms</h1>
      <GuestSelector onApply={handleGuestSelection} onCancel={() => setSelectedRoom(null)} />
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-item">
            <h2>{room.name}</h2>
            <p>Price: ${room.price}</p>
            <button onClick={() => handleBook(room)}>Book Now</button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="booking-container">
          <h3 className="booking-title">Booking for {selectedRoom.name}</h3>
          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              placeholder="Your Name"
              value={bookingDetails.name}
              onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
              required
              className="booking-input"
            />
            <div className="date-row">
              <input
                type="number"
                min="1"
                value={bookingDetails.guestCount}
                onChange={(e) => setBookingDetails({ ...bookingDetails, guestCount: e.target.value })}
                required
                placeholder="Guests"
                className="guest-input"
              />
              <div className="date-input">
                <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
                <input
                  type="date"
                  value={bookingDetails.checkInDate}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, checkInDate: e.target.value })}
                  required
                />
              </div>
              <div className="date-input">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                <input
                  type="date"
                  value={bookingDetails.checkOutDate}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="booking-button">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

const Book = () => {
  return (
    <>
      <HotelDetails />
      <RoomBooking />
    </>
  );
};

export default Book;