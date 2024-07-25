import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DealsCarousel = ({ deals }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        customLeftArrow={<button className="p-2 bg-gray-700 text-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 z-10"><FaArrowLeft /></button>}
        customRightArrow={<button className="p-2 bg-gray-700 text-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10"><FaArrowRight /></button>}
      >
        {deals.map((deal, index) => (
          <div
            key={index}
            className="md:w-full md:min-w-[calc(100vw-10%)] md:h-[370px] bg-white shadow-md rounded-md p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col justify-center items-center md:h-[46%]">
              <h2 className="text-6xl mt-2 md:mt-16 pb-4 italic font-semibold">{deal.title}</h2>
              <h2 className="text-4xl pb-8 italic font-semibold">{deal.subtitle}</h2>
              <p className='text-sm italic underline'>{deal.description}</p>
            </div>
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-[53%] object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DealsCarousel;
