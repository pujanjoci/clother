import React from 'react';

const SubHeader = ({ title, items, isOpen }) => {
  return (
    <div
      className={`py-4 mt-4 bg-neutral-300 absolute left-0 right-0 transition-opacity duration-500 rounded-md ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ top: '100%', zIndex: 50 }}
    >
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-thin text-gray-800 text-center">{title}</h3>
        <div className="flex flex-wrap mt-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-gray-700 bg-gray-50 hover:bg-neutral-200 hover:cursor-pointer rounded px-2 py-1 mr-2 mb-2"
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
