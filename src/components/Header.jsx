import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import SubHeader from './SubHeader';
import items from './Items.json';

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubHeaderOpen, setIsSubHeaderOpen] = useState(false);
  const subHeaderRef = useRef(null);

  const { maleItems, femaleItems, childrenItems } = items;

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      // If the clicked category is already selected, close the subheader
      setIsSubHeaderOpen(false);
      setSelectedCategory(null);
    } else {
      // Open subheader for a new category
      setSelectedCategory(category);
      setIsSubHeaderOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (subHeaderRef.current && !subHeaderRef.current.contains(event.target)) {
      setIsSubHeaderOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let subHeaderItems = [];
  let subHeaderTitle = "";

  if (selectedCategory === "Male") {
    subHeaderItems = maleItems;
    subHeaderTitle = "Male";
  } else if (selectedCategory === "Female") {
    subHeaderItems = femaleItems;
    subHeaderTitle = "Female";
  } else if (selectedCategory === "Children") {
    subHeaderItems = childrenItems;
    subHeaderTitle = "Children";
  }

  return (
    <header className="bg-white shadow relative">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-800 hover:text-pink-600 hover:bg-white border-2 border-transparent p-1 rounded-2xl hover:border-neutral-200 transition duration-500">
            <a href="/">Clother</a>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-400">Home</a>
            <div className="relative">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-400 flex items-center"
                onClick={() => handleCategoryClick("Male")}
              >
                Male
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-500 ${
                    isSubHeaderOpen && selectedCategory === "Male"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-400 flex items-center"
                onClick={() => handleCategoryClick("Female")}
              >
                Female
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-500 ${
                    isSubHeaderOpen && selectedCategory === "Female"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-400 flex items-center"
                onClick={() => handleCategoryClick("Children")}
              >
                Children
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-500 ${
                    isSubHeaderOpen && selectedCategory === "Children"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-800 hover:text-gray-400">Search</a>
          </nav>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-400">
              <FaUser style={{ display: 'inline-block', marginRight: '4px' }} /> Login
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              <FaShoppingCart style={{ display: 'inline-block', marginRight: '4px' }} /> Cart
            </a>
          </div>
        </div>
        <div ref={subHeaderRef} className="relative">
          <SubHeader title={subHeaderTitle} items={subHeaderItems} isOpen={isSubHeaderOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
