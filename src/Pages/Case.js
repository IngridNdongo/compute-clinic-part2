import React, { useState } from 'react';
import VendorImg from '../Assets/Vendors.jpg';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import supabase from '../config/supabaseClient';

function Case() {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [nic, setNic] = useState('');
  const [type, setType] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [description, setDescription] = useState('');

  const handleAddVendor = async () => {
   

     if (vendorName && nic && type && contactNo && description) {
        // Validate NIC format
        const nicRegex = /^[0-9]{12}$/;
      if (!nicRegex.test(nic)) {
        setError('Invalid NIC format. Please enter a valid NIC with 12 digits.');
        setSuccess('');
        return;
      }

      const contactNoRegex = /^[0-9]{10}$/;
      if (!contactNoRegex.test(contactNo)) {
        setError('Invalid Contact Number format. Please enter a valid number with 10 digits.');
        setSuccess('');
        return;
      }
      
      try {
        const { error } = await supabase
          .from('Vendors')
          .insert([
            {
              VendorsName: vendorName,
              NIC: nic,
              Type: type,
              ContactNo: contactNo,
              Description: description,
            },
          ]);
  
        if (error) {
          setError('Failed to add vendor.');
          setSuccess('');
        } else {
          setVendorName('');
          setNic('');
          setType('');
          setContactNo('');
          setDescription('');
          setError('');
          setSuccess('Vendor added successfully!');
          setTimeout(() => {
            setSuccess('');
          }, 8000); // Clear success message after 8 seconds
        }
      } catch (error) {
        console.error('Catch Error:', error);
        setError('Failed to add vendor.');
        setSuccess('');
      }
    } else {
      setError('Please fill out all fields before adding a vendor.');
      setSuccess('');
    }
  };
  

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-other"
        heroImg={VendorImg}
        title="Generate A Clinical Case"
      />
      
      
      <Footer />
    </>
  );
}

export default Case;
