import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate columns
  const columns = [];
  const columnSize = 10;
  for (let i = 0; i < items.length; i += columnSize) {
    columns.push(items.slice(i, i + columnSize));
  }

  // Helper function to calculate text width
  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '14px Arial'; // Set your desired font size and style
    const width = context.measureText(text).width;
    return width;
  };

  // Calculate required width dynamically
  let dropdownWidth = 72; // Initial width
  if (dropdownRef.current) {
    const maxWidth = columns.reduce((max, column) => {
      const columnWidth = column.reduce((colMax, item) => {
        const labelWidth = getTextWidth(item);
        return Math.max(colMax, labelWidth);
      }, 0);
      return Math.max(max, columnWidth);
    }, 0);
    dropdownWidth = Math.max(72, maxWidth + 40); // Ensure a minimum width and add padding
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`text-gray-800 hover:text-gray-400 focus:outline-none ${isOpen ? 'text-gray-500' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <svg
            className={`inline ml-1 h-5 w-5 transition-transform duration-500 ${isOpen ? 'transform rotate-180' : ''}`}
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
        </button>
      </div>

      {isOpen && (
        <div className={`origin-top-right absolute right-[-100%] mt-6 w-${dropdownWidth} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{zIndex:50}}>
          <div className="py-1 flex divide-x">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="px-4">
                {column.map((item, index) => (
                  <label key={index} className="py-2 text-sm text-gray-700 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {item}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
