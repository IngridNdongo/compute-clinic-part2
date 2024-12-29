import React, { useEffect, useState } from 'react';
import payHistoryImg from '../Assets/payHistory.jpg';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import supabase from '../config/supabaseClient';

function Profile() {
  const [payHistoryData, setPayHistoryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
   
    const fetchPayHistory = async () => {
      try {
        const { data, error } = await supabase
          .from('PaymentHistory')
          .select('*')
          .order('PaymentDate', { ascending: false }) 
          .limit(10); 

        if (error) {
          throw error;
        }

        if (data) {
          setPayHistoryData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchPayHistory();
  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = payHistoryData.filter((payment) => {
    // Filter by the last 4 digits of BookingID
    const lastFourDigits = payment.BookingID.slice(-4);
    return lastFourDigits.includes(searchTerm);
  });

  return (
    <>
      <Navbar />
      <Hero cName="hero-other" heroImg={payHistoryImg} title="Manage Your User Profile" />
      
      <Footer />
    </>
  );
}

export default Profile;
