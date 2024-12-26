import React from 'react';
import hotelImage from '../hotel-images/hotel-1.avif'; // Update with your image path
import '../Cassopia.css'; // Ensure you import styles

const Home = () => {
  return (
    <section id="home" className="home">
      <h2>Ethiopian CASSOPIA</h2>
      <h3>Cassopia Starview Hotel</h3>
      <p>Your luxurious getaway awaits!</p>
      <img src={hotelImage} alt="Cassopia Starview Hotel" className="hero-image" />
    </section>
  );
};

export default Home;