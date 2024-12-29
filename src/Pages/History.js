import React from 'react';
import BookingImg from '../Assets/Bookings.jpg';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';

function History() {
  
  
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-other"
        heroImg={BookingImg}
        title="View Your History or Export Data"
      />
     
      <Footer />
    </>
  );
}

export default History;
