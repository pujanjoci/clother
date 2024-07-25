import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';  // Adjust the path as per your project structure
import dealsData from '../components/Deals.json';  // Assuming Deals.json is correctly located

const Home = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Simulate fetch operation using the imported JSON data
    setDeals(dealsData);  // Set deals with data from Deals.json
  }, []);

  return (
    <div className="container mx-auto mt-2">
      <Carousel deals={deals} />
    </div>
  );
};

export default Home;
