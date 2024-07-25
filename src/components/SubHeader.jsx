import React from 'react';

const SubHeader = ({ title, items, isOpen }) => {
  return (
    <div
      className={`py-2 mt-4 bg-gray-100 absolute left-0 right-0 transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ top: '100%', zIndex: 50 }}
    >
      <div className="container mx-auto px-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="flex flex-wrap mt-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-gray-700 bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 mr-2 mb-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
