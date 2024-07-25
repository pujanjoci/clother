import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import dealsData from '../components/Deals.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [redeemCodes, setRedeemCodes] = useState([
    { id: 1, code: 'REDEEM10', description: '10% off on your next purchase' },
    { id: 2, code: 'DISCOUNT20', description: '20% off on orders over $50' },
    { id: 3, code: 'SAVE30', description: 'Save $30 on orders above $100' }
  ]);

  useEffect(() => {
    // Simulate fetch operation using the imported JSON data
    setDeals(dealsData);  // Set deals with data from Deals.json
  }, []);

  const handleClaimClick = (code) => {
    // Display a toast message with custom styling
    toast.success(
      `Redeem code ${code} claimed! It will be used on your next purchase.`,
      {
        className: 'custom-toast', // Apply custom styles
        iconClassName: 'custom-toast-icon' // Apply custom icon styles if needed
      }
    );
  };

  return (
    <div className="container mx-auto mt-2">
      <Carousel deals={deals} />
      
      {/* Grid for redeem codes */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {redeemCodes.map((redeemCode) => (
          <div
            key={redeemCode.id}
            className="p-4 border rounded shadow-md flex flex-col items-center justify-center"
          >
            <span className="text-lg font-semibold">{redeemCode.code}</span>
            <p className="mt-2 text-sm text-gray-600">{redeemCode.description}</p>
            <button
              onClick={() => handleClaimClick(redeemCode.code)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Claim
            </button>
          </div>
        ))}
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
  );
};

export default Home;
