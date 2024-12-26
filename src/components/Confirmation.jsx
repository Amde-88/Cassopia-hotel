import React from 'react';

const Confirmation = ({ details }) => {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Name: {details.name}</p>
      <p>Room: {details.room.name}</p>
      <p>Price: ${details.room.price}</p>
      <p>Date: {details.date}</p>
    </div>
  );
};

export default Confirmation;