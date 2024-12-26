import React, { useState } from 'react';
import Book from './Book';

const RoomList = ({ onBook }) => {
  const rooms = [
    { id: 1, name: 'Deluxe Room', price: 150 },
    { id: 2, name: 'Standard Room', price: 100 },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBook = (room) => {
    setSelectedRoom(room);
  };

  const handleConfirm = (details) => {
    onBook(details);
    setSelectedRoom(null); // Reset selected room after booking
  };

  return (
    <div>
      {rooms.map((room) => (
        <div key={room.id}>
          <h2>{room.name}</h2>
          <p>Price: ${room.price}</p>
          <button onClick={() => handleBook(room)}>Book Now</button>
        </div>
      ))}
      {selectedRoom && (
        <Booking room={selectedRoom} onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default RoomList;