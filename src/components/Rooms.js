import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Room.css';

const Rooms = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [roomType, setRoomType] = useState('');
    const [availability, setAvailability] = useState('');
    const [error, setError] = useState('');

    const checkAvailability = () => {
        setError('');
        if (!checkInDate || !checkOutDate || !roomType) {
            setError('Please select check-in date, check-out date, and room type.');
            return;
        }
        if (checkInDate >= checkOutDate) {
            setError('Check-out date must be after check-in date.');
            return;
        }

        // Simulate an API call for availability
        const isAvailable = Math.random() > 0.5; // Randomly simulate availability
        setAvailability(isAvailable ? 'Room is available!' : 'Room is not available.');
    };

    // Dynamic style for availability message
    const availabilityStyle = {
        color: availability === 'Room is available!' ? 'green' : 'red',
        fontWeight: 'bold',
    };

    return (
        <div className="availability-checker">
            <h2>Check Room Availability</h2>
            <div>
                <label>Check-in Date:</label>
                <DatePicker 
                    selected={checkInDate} 
                    onChange={date => setCheckInDate(date)} 
                    minDate={new Date()} 
                />
            </div>
            <div>
                <label>Check-out Date:</label>
                <DatePicker 
                    selected={checkOutDate} 
                    onChange={date => setCheckOutDate(date)} 
                    minDate={checkInDate || new Date()} 
                />
            </div>
            <div>
                <label>Room Type:</label>
                <select value={roomType} onChange={e => setRoomType(e.target.value)}>
                    <option value="">Select a room type</option>
                    <option value="standard">Standard Room</option>
                    <option value="premium">Premium Room</option>
                    <option value="suite">Suite</option>
                </select>
            </div>
            <button onClick={checkAvailability}>Check Availability</button>
            {error && <p className="error-message">{error}</p>}
            {availability && <p style={availabilityStyle}>{availability}</p>}
        </div>
    );
};

export default Rooms;