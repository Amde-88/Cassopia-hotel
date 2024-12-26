// src/Clock.jsx
import React, { useEffect, useState } from 'react';

const Clock = ({ timeZone, city }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleString('en-US', { timeZone });
      setTime(currentTime);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timeZone]);

  return (
    <div className="clock">
      <h2>{city}</h2>
      <p>{time}</p>
    </div>
  );
};

export default Clock;